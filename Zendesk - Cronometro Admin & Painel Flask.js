// ==UserScript==
// @name         Zendesk - Cronometro Admin & Painel Flask
// @namespace    http://tampermonkey.net/
// @version      1.6.3
// @author       Delean Mafra
// @description  Sistema de Alerta de Fila + Integração com Painel Python Local
// @match        https://*.zendesk.com/chat/agent*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zendesk.com
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @connect      127.0.0.1
// ==/UserScript==

(function () {
    "use strict";

    const SCRIPT_VERSION = "1.6.3"; // Variável para exibição no painel

    /* ============================================================
     * CONFIGURAÇÃO
     * ============================================================ */
    const CONFIG = {
        departmentIds: ["31645321573143", "31645291734935"],

        monitoredAgentIds: [
            // EQUIPE GERAL
            "26997300003223", // Fabio
            "26156471757975", // Fernando
            "27765824928023", // Carine
            "19025709924375", // Jhonata
            "27740736059671", // Douglas
            "27484755927575", // Nathan

            // EQUIPE VIP
            "32790054131223", // Alan Henrique
            "26928283841559", // Hiago
            "1730466820",     // Yuri
            "28442529599255", // Felipe
            "32587092311703"  // Julia
        ],

        maxConcurrentChats: 3,
        renderIntervalMs: 1000,

        waitingWarningMinutes: 5,
        waitingCriticalMinutes: 15,
        showQueueWaitPill: true,

        highOccupancyThresholdPercent: 80,

        chatWarningMinutes: 10,
        chatCriticalMinutes: 15,
        alertThresholdsMinutes: [20, 25, 35, 45],
        timerGraceMs: 15000,

        underCapacityAlerts: {
            enabled: true,
            limit1ChatMins: 5,
            limit2ChatsMins: 10
        },

        // --- SISTEMA DE ALERTA DE FILA ---
        queueAlertMaxWaitMins: 40,          // Começa a avisar aos 40 minutos
        queueAlertStepMins: 20,             // Depois avisa a cada 20 min extras (60, 80, 100...)
        queueAlertMaxAvgChats: 2.0,         // Só avisa se a equipe não estiver totalmente lotada

        notificationsEnabled: true,
        notificationRequireInteraction: true,
        alertNameMode: "first"
    };

    const visitorStore = new Map();
    const agentStore = new Map();
    const chatTimers = new Map();
    const alertTracker = new Map();
    const agentCapacityTimers = new Map();

    // Memórias do sistema
    const capturedWaitTimes = new Map();
    const capturedTicketIds = new Map();
    const loggedMissingIds = new Set();
    const notifiedQueueMilestones = new Set(); // Rastreador dos degraus de fila (40, 60, etc)

    const alertHistory = [];
    let renderCycleCount = 0;

    let websocketStatus = "AGUARDANDO";
    let topBarInjected = false;
    let drawerInjected = false;
    let telemetryModalInjected = false;

    /* ============================================================
     * TELEMETRIA E HISTÓRICO DE ALERTAS (LocalStorage)
     * ============================================================ */
    const TELEMETRY_KEY = "ahgora_daily_telemetry";
    const ALERT_STORAGE_KEY = "ahgora_alert_history";

    let telemetryData = carregarTelemetria();
    let localAlertHistory = carregarHistoricoAlertas();

    function carregarTelemetria() {
        const todayStr = new Date().toLocaleDateString('pt-BR');
        let data = JSON.parse(localStorage.getItem(TELEMETRY_KEY));

        if (!data || data.date !== todayStr) {
            data = {
                date: todayStr,
                snapshots: [],
                agents: {},
                maxQueue: 0,
                maxQueueTime: "--:--",
                maxWaitMs: 0,
                maxWaitTime: "--:--"
            };
            localStorage.setItem(TELEMETRY_KEY, JSON.stringify(data));
        }
        return data;
    }

    function salvarTelemetria() {
        localStorage.setItem(TELEMETRY_KEY, JSON.stringify(telemetryData));
    }

    function carregarHistoricoAlertas() {
        const todayStr = new Date().toLocaleDateString('pt-BR');
        let data = JSON.parse(localStorage.getItem(ALERT_STORAGE_KEY));

        if (!data || data.date !== todayStr) {
            data = { date: todayStr, alerts: [] };
            localStorage.setItem(ALERT_STORAGE_KEY, JSON.stringify(data));
        }

        alertHistory.length = 0;
        data.alerts.forEach(a => alertHistory.push(a));

        return data.alerts;
    }

    function salvarHistoricoAlertas() {
        const todayStr = new Date().toLocaleDateString('pt-BR');
        localStorage.setItem(ALERT_STORAGE_KEY, JSON.stringify({ date: todayStr, alerts: alertHistory }));
    }

    function msToHhMmSs(ms) {
        if (!ms || ms < 0) return "00:00:00";
        const totalSec = Math.floor(ms / 1000);
        const h = Math.floor(totalSec / 3600);
        const m = Math.floor((totalSec % 3600) / 60);
        const s = totalSec % 60;
        return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }

    function exportarFilaCSV() {
        let csv = `RELATORIO DE EVOLUCAO DA FILA AHGORA - ${telemetryData.date}\n`;
        csv += "Aviso: Captura de dados a cada 15 minutos no horario de 07:00 as 19:00.\n\n";
        csv += "Hora;Tamanho da Fila;Media Chats por Agente\n";

        if (telemetryData.snapshots.length === 0) {
            csv += "Nenhum registro de tempo salvo ainda.;;\n";
        } else {
            telemetryData.snapshots.forEach(s => {
                csv += `${s.time};${s.queue};${s.avgChats}\n`;
            });
        }

        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `telemetria_fila_${Date.now()}.csv`;
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function exportarAgentesCSV() {
        let csv = `RELATORIO DE OCUPACAO DOS AGENTES AHGORA - ${telemetryData.date}\n`;
        csv += "Aviso: Captura de dados de operacao no horario de 07:00 as 19:00.\n\n";
        csv += "Agente;Tempo c/ 1 Chat;Tempo c/ 2 Chats;Tempo c/ 3 Chats\n";

        const agents = Object.keys(telemetryData.agents).sort();
        if (agents.length === 0) {
            csv += "Nenhum dado de agente registrado ainda.;;;\n";
        } else {
            agents.forEach(agentName => {
                const times = telemetryData.agents[agentName];
                const t1 = msToHhMmSs(times["1"] || 0);
                const t2 = msToHhMmSs(times["2"] || 0);
                const t3 = msToHhMmSs(times["3"] || 0);
                csv += `${agentName};${t1};${t2};${t3}\n`;
            });
        }

        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `telemetria_agentes_${Date.now()}.csv`;
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function resetarTelemetriaManual() {
        const confirmacao = window.confirm("Tem certeza que deseja resetar TODOS os dados de telemetria de hoje?\n\nAviso: Por segurança e para evitar acúmulo, esses dados já são limpos automaticamente à meia-noite.");
        if (confirmacao) {
            localStorage.removeItem(TELEMETRY_KEY);
            telemetryData = carregarTelemetria();
            renderTelemetryModalData();
            alert("Dados resetados com sucesso.");
        }
    }

    function removerAlertaEspecifico(id) {
        const index = alertHistory.findIndex(a => a.id === id);
        if (index > -1) {
            alertHistory.splice(index, 1);
            salvarHistoricoAlertas();
            updateFloatingButtonBadge();
            renderAlertHistoryList();
        }
    }

    function isMonitoredAgent(agentId) {
        if (!agentId) return false;
        return CONFIG.monitoredAgentIds.includes(String(agentId).trim());
    }

    /* ============================================================
     * INTERCEPÇÃO DO WEBSOCKET
     * ============================================================ */
    const OriginalWebSocket = window.WebSocket;
    if (OriginalWebSocket) {
        function MonitoredWebSocket(url, protocols) {
            const socket = protocols === undefined ? new OriginalWebSocket(url) : new OriginalWebSocket(url, protocols);
            const currentUrl = String(url || "");

            if (!currentUrl.includes("zopim.com") && !currentUrl.includes("zendesk.com")) return socket;

            websocketStatus = "ATIVO";
            socket.addEventListener("message", event => processFrame(event.data));
            return socket;
        }
        MonitoredWebSocket.prototype = OriginalWebSocket.prototype;
        Object.setPrototypeOf(MonitoredWebSocket, OriginalWebSocket);
        window.WebSocket = MonitoredWebSocket;
    }

    function isPlainObject(val) { return val !== null && typeof val === "object" && !Array.isArray(val); }

    function deepMerge(target, source) {
        if (!isPlainObject(source)) return source;
        const result = isPlainObject(target) ? Object.assign({}, target) : {};
        for (const entry of Object.entries(source)) {
            const key = entry[0];
            const value = entry[1];
            if (isPlainObject(value) && isPlainObject(result[key])) {
                result[key] = deepMerge(result[key], value);
            } else {
                result[key] = value;
            }
        }
        return result;
    }

    function processFrame(data) {
        if (typeof data === "string") { extractJsonObjects(data).forEach(processProtocolMessage); return; }
        if (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) {
            try { extractJsonObjects(new TextDecoder().decode(data)).forEach(processProtocolMessage); } catch (e) {}
        }
    }

    function extractJsonObjects(text) {
        const results = [];
        let start = -1, depth = 0, insideString = false, escaped = false;
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            if (start === -1) { if (char === "{") { start = i; depth = 1; insideString = false; escaped = false; } continue; }
            if (insideString) {
                if (escaped) { escaped = false; continue; }
                if (char === "\\") { escaped = true; continue; }
                if (char === '"') insideString = false;
                continue;
            }
            if (char === '"') { insideString = true; continue; }
            if (char === "{") { depth += 1; continue; }
            if (char === "}") {
                depth -= 1;
                if (depth === 0) {
                    try { results.push(JSON.parse(text.slice(start, i + 1))); } catch (e) {}
                    start = -1;
                }
            }
        }
        return results;
    }

    function processProtocolMessage(msg) {
        if (!isPlainObject(msg)) return;

        if (msg.path === "livechat.visitors" || msg.path === "livechat.queue") {
            for (const entry of Object.entries(msg.update)) {
                const visitorId = entry[0];
                const data = entry[1];
                if (data === null || data === false) {
                    visitorStore.delete(visitorId);
                } else {
                    const previous = visitorStore.get(visitorId) || {};
                    const merged = deepMerge(previous, data);

                    if (msg.path === "livechat.queue" && data["waiting_since$time"]) {
                        merged.request_info = merged.request_info || {};
                        merged.request_info["waiting_since$time"] = data["waiting_since$time"];
                        merged["state$string"] = merged["state$string"] || "incoming";
                    }

                    visitorStore.set(visitorId, merged);
                }
            }
        }

        if (msg.path === "livechat.agents") {
            for (const entry of Object.entries(msg.update)) {
                const agentId = entry[0];
                const agentPatch = entry[1];
                if (agentPatch === null || agentPatch === false) agentStore.delete(agentId);
                else agentStore.set(agentId, deepMerge(agentStore.get(agentId) || {}, agentPatch));
            }
        }
    }

    /* ============================================================
     * UTILITÁRIOS DOM / TEMPO E EXTRAÇÃO DE DADOS
     * ============================================================ */
    function cleanText(text) { return (text || "").replace(/\s+/g, " ").trim(); }

    function makeElement(tag, className, textContent) {
        const el = document.createElement(tag);
        if (className) el.className = className;
        if (textContent) el.textContent = textContent;
        return el;
    }

    function parseDomTime(timeStr) {
        if (!timeStr) return 0;
        const match = timeStr.match(/(\d+)\s*(s|m|h|min|hora)/i);
        if (!match) return 0;
        const val = parseInt(match[1], 10);
        const unit = match[2].toLowerCase();
        if (unit.startsWith('s')) return val * 1000;
        if (unit.startsWith('m')) return val * 60000;
        if (unit.startsWith('h')) return val * 3600000;
        return 0;
    }

    function formatDuration(ms) {
        if (ms === null || ms < 0 || !Number.isFinite(ms)) return "-";
        const totalSecs = Math.floor(ms / 1000);
        if (totalSecs < 60) return `${totalSecs}s`;
        const mins = Math.floor(totalSecs / 60);
        const hours = Math.floor(mins / 60);
        if (hours > 0) return `${hours}h ${mins % 60}m`;
        return `${mins} min`;
    }

    function formatClock(ms) {
        if (!ms || isNaN(ms) || ms < 0) ms = 0;
        const totalSec = Math.floor(ms / 1000);
        const h = Math.floor(totalSec / 3600);
        const m = Math.floor((totalSec % 3600) / 60);
        const s = totalSec % 60;
        return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }

    function formatHour(ts) {
        return new Date(ts).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }

    function extractVisitorIdFromDom(row) {
        const rowId = row.closest('.visitorlist_row')?.getAttribute('jx:list:rowid');
        if (!rowId) return null;
        return rowId.split('-')[1] || null;
    }

    function extractTicketIdFromDom(row) {
        if (!row) return null;
        const links = row.querySelectorAll('a[href*="/agent/tickets/"], a[href*="tickets"]');
        for (const link of links) {
            const match = String(link.href).match(/\/tickets\/(\d+)/);
            if (match) return match[1];
        }
        return null;
    }

    function isAhgoraGeral(visitor) {
        const id = visitor?.request_info?.["department_id$int"] ?? visitor?.["channel_department_id$int"] ?? visitor?.["department_id$int"];
        if (id === null || id === undefined) return false;
        return CONFIG.departmentIds.includes(String(id).trim());
    }

    function isAgentAhgoraGeral(agentData) {
        if (!agentData) return false;
        return CONFIG.departmentIds.some(deptId => {
            const deptKey = `${deptId}$bool`;
            return agentData.departments?.[deptKey] === 1 || agentData.departments?.[deptKey] === true ||
                   agentData.enabled_departments?.[deptKey] === 1 || agentData.enabled_departments?.[deptKey] === true;
        });
    }

    function getUnreadCount(visitor) {
        const value = visitor?.request_info?.["unread$int"] ?? visitor?.["unread$int"] ?? 0;
        const parsed = Number(value);
        return Number.isFinite(parsed) ? parsed : 0;
    }

    function getTicketIdFromVisitor(visitor) {
        if (!visitor) return null;
        const possibleKeys = [
            visitor?.["ongoing_ticket_id$int"],
            visitor?.request_info?.["ticket_id$int"],
            visitor?.["ticket_id$int"],
            visitor?.ticket?.["id$int"],
            visitor?.ticket?.id
        ];

        for (let val of possibleKeys) {
            if (val) {
                const normalized = String(val).trim();
                if (/^\d+$/.test(normalized)) return normalized;
            }
        }
        return null;
    }

    function getAgentDisplayName(agentData) {
        if (!agentData) return "Agente";
        if (agentData.display_name$string) return cleanText(agentData.display_name$string);
        if (agentData.full_name$string) return cleanText(agentData.full_name$string);
        if (agentData.first_name$string) return cleanText(agentData.first_name$string);
        return "Agente";
    }

    function safe(label, fn) {
        try { fn(); } catch (e) { console.warn(`[Ahgora Dashboard] erro em ${label}:`, e); }
    }

    /* ============================================================
     * ÍNDICES AUXILIARES (OTIMIZAÇÃO DE PERFORMANCE)
     * ============================================================ */
    function buildAgentNameIndex() {
        const idx = new Map();
        for (const [id, agent] of agentStore.entries()) {
            const name = getAgentDisplayName(agent).toLowerCase();
            if (!idx.has(name)) idx.set(name, id);
        }
        return idx;
    }

    function buildVisitorNameIndex() {
        const idx = new Map();
        for (const v of visitorStore.values()) {
            if (!isAhgoraGeral(v)) continue;
            const name = cleanText(v["display_name$string"]);
            if (name && !idx.has(name)) idx.set(name, v);
        }
        return idx;
    }

    /* ============================================================
     * NOTIFICAÇÕES
     * ============================================================ */
    function notificationsSupported() { return "Notification" in window; }

    function registerAlertHistory(agentName, visitorName, ticketId, limitMins) {
        const alertItem = {
            id: Date.now() + Math.random(),
            timestamp: Date.now(),
            agentName,
            visitorName,
            ticketId,
            limitMins
        };
        alertHistory.unshift(alertItem);
        salvarHistoricoAlertas();
        updateFloatingButtonBadge();
        renderAlertHistoryList();
    }

    function sendChromeNotification(title, body, tag, ticketId) {
        if (!CONFIG.notificationsEnabled || !notificationsSupported()) return false;
        if (Notification.permission !== "granted") {
            Notification.requestPermission();
            return false;
        }
        try {
            const n = new Notification(title, { body: body, tag: tag, renotify: true, requireInteraction: CONFIG.notificationRequireInteraction });
            n.onclick = () => {
                window.focus();
                if (ticketId) window.open(`https://totvssuporte.zendesk.com/agent/tickets/${ticketId}`, '_blank');
                n.close();
            };
            return true;
        } catch (e) {
            return false;
        }
    }

    async function toggleNotifications() {
        if (!notificationsSupported()) {
            return window.alert("Seu navegador não suporta notificações nativas.");
        }

        if (Notification.permission === "default") {
            await Notification.requestPermission();
        }

        if (Notification.permission === "granted") {
            CONFIG.notificationsEnabled = !CONFIG.notificationsEnabled;
            if (CONFIG.notificationsEnabled) {
                sendChromeNotification("Alertas Ativados!", "O monitoramento de fila e chat está ligado.", "ahgora-test", null);
            }
        } else {
            CONFIG.notificationsEnabled = false;
            window.alert("As notificações estão bloqueadas no navegador. Altere as permissões do site para continuar.");
        }

        refreshNotifyTile();
    }

    function refreshNotifyTile() {
        const tile = document.getElementById("ah-notify-tile");
        const val = document.getElementById("ah-notify-val");
        if (!tile || !val) return;

        let text = "ATIVAS";
        let cls = "ok";

        if (!CONFIG.notificationsEnabled) {
            text = "DESATIVADAS";
            cls = "danger";
        }

        if (Notification.permission === "denied") {
            text = "BLOQUEADAS";
            cls = "danger";
        }

        if (val.textContent !== text) val.textContent = text;

        tile.classList.toggle("danger", cls === "danger");
    }

    /* ============================================================
     * INJEÇÃO VISUAL (TOP BAR + DRAWER + MODAL TELEMETRIA)
     * ============================================================ */
    function injectTopBarAndFloatingUI() {
        const targetContainer = document.querySelector('.meshim_dashboard_components_Visitors .container');
        if (!targetContainer) return;

        if (!document.getElementById('ahgora-custom-styles')) {
            const style = document.createElement("style");
            style.id = 'ahgora-custom-styles';
            style.textContent = `
                /* TOP BAR */
                #ahgora-top-bar {
                    display: flex; gap: 14px; padding: 12px 20px; background: #ffffff;
                    border-bottom: 2px solid #e5e5e5; align-items: center; justify-content: flex-start;
                    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.03); margin-bottom: 10px; flex-wrap: wrap;
                }
                .ah-stat { display: flex; align-items: center; gap: 8px; border-right: 1px solid #e9ebed; padding-right: 14px; }
                .ah-stat:last-child { border-right: none; }
                .ah-stat-icon { font-size: 16px; background: #f8f9f9; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; border-radius: 8px; border: 1px solid #e9ebed; transition: all .2s; }
                .ah-stat.warning .ah-stat-icon { background: #fff8ce; border-color: #fce4b8; }
                .ah-stat.danger .ah-stat-icon { background: #fff0f1; border-color: #f5b5ba; color: #cc3340; }
                .ah-stat-data { display: flex; flex-direction: column; }
                .ah-stat-val { font-size: 15px; font-weight: 700; color: #2f3941; line-height: 1.1; }
                .ah-stat-lbl { font-size: 9px; color: #68737d; text-transform: uppercase; font-weight: 700; margin-top: 3px; letter-spacing: 0.3px; }
                .ah-stat-btn { cursor: pointer; user-select: none; }
                .ah-stat-btn:hover .ah-stat-icon { border-color: #1f73b7; transform: scale(1.05); }

                #ah-telemetry-btn .ah-stat-icon { background: #eef9f2; border-color: #a3d9c9; }
                #ah-telemetry-btn:hover .ah-stat-icon { border-color: #038153; background: #d7f2e3; }

                .general_agent_group .group_count.text { display: none !important; }

                /* PÍLULAS DE CAPACIDADE E TEMPO */
                .ah-left-capacity {
                    display: inline-flex !important; align-items: center; justify-content: center; gap: 4px;
                    padding: 3px 10px !important; border-radius: 12px !important;
                    font-size: 12px !important; font-weight: 800 !important;
                    margin-left: 10px !important; vertical-align: middle;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.08); letter-spacing: 0.5px;
                    transition: all 0.2s ease;
                }
                .ah-left-capacity.cap-free { background-color: #f4fdf8 !important; color: #038153 !important; border: 1px solid #a3d9c9 !important; }
                .ah-left-capacity.cap-full { background-color: #fff0f1 !important; color: #d93f4c !important; border: 1px solid #f5b5ba !important; }
                .ah-left-capacity.cap-idle-warn { background-color: #fff8ce !important; color: #c9761a !important; border: 1px solid #fce4b8 !important; }

                .ah-time-pill {
                    display: inline-flex !important; align-items: center; justify-content: center;
                    padding: 2px 6px !important; border-radius: 10px !important;
                    font-size: 11px !important; font-weight: 700 !important;
                    box-shadow: 0 1px 2px rgba(0,0,0,0.06); text-align: center;
                    line-height: 1.2 !important; white-space: nowrap; margin-top: 1px;
                }
                .ah-time-pill.ok   { color: #038153 !important; border: 1px solid #a3d9c9 !important; background-color: #f4fdf8 !important; }
                .ah-time-pill.warn { color: #c9761a !important; border: 1px solid #fce4b8 !important; background-color: #fff8ce !important; }
                .ah-time-pill.crit { color: #d93f4c !important; border: 1px solid #f5b5ba !important; background-color: #fff0f1 !important; }
                .ah-time-pill.neutral { color: #87929d !important; border: 1px solid #d8dcde !important; background-color: #f8f9f9 !important; }

                /* CRONÔMETRO LISTA (Para Atendimentos) */
                .visitorlist_tags.ah-has-left-timer { display: block !important; margin-top: 4px !important; }

                .ah-chat-timer-left {
                    display: inline-flex; align-items: center; gap: 4px;
                    margin-right: 8px; margin-bottom: 2px; padding: 2px 8px; border-radius: 12px;
                    font-size: 11px; font-weight: 700; line-height: 1.2;
                    font-variant-numeric: tabular-nums; letter-spacing: 0.3px;
                    box-shadow: 0 1px 2px rgba(0,0,0,0.06); vertical-align: middle;
                }
                .ah-chat-timer-left.ok   { color: #038153; border: 1px solid #a3d9c9; background: #f4fdf8; }
                .ah-chat-timer-left.warn { color: #c9761a; border: 1px solid #fce4b8; background: #fff8ce; }
                .ah-chat-timer-left.crit { color: #d93f4c; border: 1px solid #f5b5ba; background: #fff0f1; }

                .ah-msg-badge {
                    display: inline-flex; align-items: center; justify-content: center;
                    background-color: #d93f4c; color: #ffffff; border-radius: 10px;
                    padding: 1px 6px; font-size: 10px; font-weight: 800; margin-right: 6px;
                    line-height: 1.2; vertical-align: middle; box-shadow: 0 1px 2px rgba(217,63,76,0.25);
                }

                /* DRAWER E BOTÃO FLUTUANTE (NOTIFICAÇÕES) */
                #ahgora-floating-btn {
                    position: fixed; right: 25px; bottom: 25px; z-index: 2147483643;
                    display: flex; align-items: center; justify-content: center; gap: 8px;
                    height: 44px; padding: 0 16px; border: 1px solid #d8dcde; border-radius: 22px;
                    background: #ffffff; color: #2f3941;
                    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
                    font: 700 13px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; cursor: pointer;
                    transition: all .15s ease; user-select: none;
                }
                #ahgora-floating-btn:hover { background: #f8f9f9; border-color: #1f73b7; color: #1f73b7; transform: translateY(-2px); }
                #ahgora-floating-btn .btn-icon-symbol { font-size: 16px; display: inline-flex; align-items: center; justify-content: center; line-height: 1; transition: transform .2s ease; }
                #ahgora-floating-btn .count-badge { display: inline-flex; align-items: center; justify-content: center; min-width: 22px; height: 22px; padding: 0 6px; border-radius: 11px; background: #f8f9f9; color: #2f3941; border: 1px solid #d8dcde; font-size: 12px; font-weight: 800; box-sizing: border-box; }
                #ahgora-floating-btn:hover .count-badge { background: #e9f2fa; border-color: #1f73b7; color: #1f73b7; }
                #ahgora-floating-btn.has-unread .count-badge { background: #cc3340; color: #ffffff; border-color: #cc3340; }
                #ahgora-floating-btn.has-unread { animation: ahPulseButton 2s infinite; border-color: #f5b5ba; }

                #ahgora-drawer-panel {
                    position: fixed; top: 70px; right: -420px; width: 380px; height: calc(100vh - 150px);
                    background: #ffffff; border-left: 1px solid #d8dcde; border-radius: 12px 0 0 12px;
                    box-shadow: -10px 0 30px rgba(0,0,0,0.08); z-index: 2147483642;
                    display: flex; flex-direction: column; overflow: hidden;
                    transition: right 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                }
                #ahgora-drawer-panel.open { right: 0; }
                .ah-drawer-header { display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; background: #f8f9f9; border-bottom: 1px solid #d8dcde; }
                .ah-drawer-header h3 { margin: 0; font-size: 14px; color: #2f3941; font-weight: 700; display: flex; align-items: center; gap: 6px; }
                .ah-btn-clear-top { background: #fff0f1; color: #cc3340; border: 1px solid #f5b5ba; padding: 5px 12px; border-radius: 6px; font-size: 11px; font-weight: 700; cursor: pointer; transition: all .15s ease; }
                .ah-btn-clear-top:hover { background: #fbebe2; }
                .ah-drawer-body { padding: 12px; overflow-y: auto; flex: 1 1 auto; display: flex; flex-direction: column; gap: 8px; }

                .ah-history-item {
                    display: flex; flex-direction: column; gap: 6px; padding: 12px;
                    background: #f8f9f9; border: 1px solid #e9ebed; border-radius: 8px;
                    border-left: 4px solid #d93f4c; transition: all .15s ease; cursor: pointer;
                }
                .ah-history-item:hover { background: #ffffff; border-color: #1f73b7; border-left-color: #d93f4c; box-shadow: 0 2px 6px rgba(0,0,0,0.05); }
                .ah-history-head { display: flex; justify-content: space-between; align-items: flex-start; }
                .ah-history-title { font-size: 12px; font-weight: 700; color: #2f3941; padding-top: 2px;}
                .ah-history-right-side { display: flex; align-items: center; gap: 8px; }
                .ah-history-time { font-size: 10px; color: #87929d; font-family: monospace; }
                .ah-btn-delete-alert {
                    background: transparent; border: none; color: #a2aab0; font-size: 14px;
                    cursor: pointer; padding: 2px 6px; border-radius: 4px; transition: 0.2s; line-height: 1;
                }
                .ah-btn-delete-alert:hover { background: #fff0f1; color: #cc3340; }

                .ah-history-sub { font-size: 11px; color: #68737d; word-break: break-word; }
                .ah-history-footer { display: flex; justify-content: space-between; align-items: center; margin-top: 4px; padding-top: 4px; border-top: 1px dashed #e9ebed; }
                .ah-history-ticket-tag { font-size: 10px; font-weight: 700; color: #1f73b7; }
                .ah-history-ticket-tag.error { color: #d93f4c; background: #fff0f1; padding: 2px 6px; border-radius: 4px; font-style: italic; }
                .ah-drawer-empty { text-align: center; padding: 40px 20px; color: #87929d; font-size: 12px; font-style: italic; }

                /* MODAL TELEMETRIA */
                #ah-telemetry-overlay {
                    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
                    background: rgba(0,0,0,0.6); z-index: 2147483645; display: none;
                    justify-content: center; align-items: center; font-family: system-ui, sans-serif;
                }
                #ah-telemetry-overlay.open { display: flex; }
                #ah-telemetry-modal {
                    background: #ffffff; width: 850px; max-width: 95vw; height: 80vh; max-height: 800px;
                    border-radius: 12px; box-shadow: 0 15px 40px rgba(0,0,0,0.2);
                    display: flex; flex-direction: column; overflow: hidden;
                }
                .ah-tel-header {
                    background: #1f73b7; color: #ffffff; padding: 16px 20px;
                    display: flex; justify-content: space-between; align-items: center;
                }
                .ah-tel-header h2 { margin: 0; font-size: 18px; font-weight: 700; }
                .ah-tel-close { background: transparent; border: none; color: #fff; font-size: 24px; cursor: pointer; }
                .ah-tel-close:hover { opacity: 0.8; }

                .ah-tel-body { padding: 20px; flex: 1; overflow-y: auto; background: #f8f9f9; display:flex; flex-direction: column; gap: 20px; }

                .ah-tel-peaks { display: flex; gap: 15px; }
                .ah-tel-peak-card { flex: 1; background: #fff; border: 1px solid #e9ebed; border-radius: 8px; padding: 15px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.02); }
                .ah-tel-peak-card h4 { margin: 0 0 5px 0; color: #68737d; font-size: 12px; text-transform: uppercase; }
                .ah-tel-peak-card .val { font-size: 24px; font-weight: 800; color: #1f73b7; margin: 5px 0; }
                .ah-tel-peak-card .time { font-size: 12px; color: #87929d; }

                .ah-tel-section { background: #fff; border: 1px solid #e9ebed; border-radius: 8px; padding: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.02); }
                .ah-tel-section h3 { margin: 0 0 15px 0; font-size: 14px; color: #2f3941; border-bottom: 1px solid #e9ebed; padding-bottom: 8px; }

                .ah-tel-table { width: 100%; border-collapse: collapse; font-size: 12px; text-align: left; }
                .ah-tel-table th { background: #f8f9f9; padding: 8px; border-bottom: 1px solid #d8dcde; color: #2f3941; }
                .ah-tel-table td { padding: 8px; border-bottom: 1px solid #e9ebed; color: #68737d; }

                .ah-tel-footer {
                    background: #ffffff; padding: 16px 20px; border-top: 1px solid #d8dcde;
                    display: flex; justify-content: space-between; align-items: center;
                }
                .ah-tel-actions { display: flex; gap: 10px; }
                .ah-btn-dl { background: #038153; color: #fff; border: none; padding: 8px 16px; border-radius: 6px; font-weight: bold; cursor: pointer; transition: 0.2s; }
                .ah-btn-dl:hover { background: #026b44; }
                .ah-btn-reset { background: #fff0f1; color: #cc3340; border: 1px solid #f5b5ba; padding: 8px 16px; border-radius: 6px; font-weight: bold; cursor: pointer; transition: 0.2s; }
                .ah-btn-reset:hover { background: #fbebe2; }
            `;
            document.head.appendChild(style);
        }

        if (!document.getElementById('ahgora-top-bar')) {
            topBarInjected = true;
            const topBar = document.createElement('div');
            topBar.id = 'ahgora-top-bar';
            topBar.innerHTML = `
                <div class="ah-stat"><div class="ah-stat-icon">⏳</div><div class="ah-stat-data"><span class="ah-stat-val" id="ah-val-queue">0</span><span class="ah-stat-lbl">Na Fila</span></div></div>
                <div class="ah-stat"><div class="ah-stat-icon">💬</div><div class="ah-stat-data"><span class="ah-stat-val" id="ah-val-served">0</span><span class="ah-stat-lbl">Chats Em Atend.</span></div></div>
                <div class="ah-stat" id="ah-stat-occ"><div class="ah-stat-icon">📊</div><div class="ah-stat-data"><span class="ah-stat-val" id="ah-val-occ">0%</span><span class="ah-stat-lbl">Taxa Ocupação</span></div></div>
                <div class="ah-stat" id="ah-stat-headcount"><div class="ah-stat-icon">👥</div><div class="ah-stat-data"><span class="ah-stat-val" id="ah-val-headcount">0/0</span><span class="ah-stat-lbl">Atendendo/Online</span></div></div>
                <div class="ah-stat" id="ah-stat-team"><div class="ah-stat-icon">🛡️</div><div class="ah-stat-data"><span class="ah-stat-val" id="ah-val-team">0/0</span><span class="ah-stat-lbl">Equipe</span></div></div>

                <div class="ah-stat" id="ah-stat-absent"><div class="ah-stat-icon">🕵️</div><div class="ah-stat-data"><span class="ah-stat-val" id="ah-val-absent">0</span><span class="ah-stat-lbl">Ausentes c/ Chat</span></div></div>

                <div class="ah-stat" id="ah-stat-avgchats"><div class="ah-stat-icon">📈</div><div class="ah-stat-data"><span class="ah-stat-val" id="ah-val-avgchats">0.0</span><span class="ah-stat-lbl">Média/Agente</span></div></div>
                <div class="ah-stat"><div class="ah-stat-icon">⏱️</div><div class="ah-stat-data"><span class="ah-stat-val" id="ah-val-avgwait">-</span><span class="ah-stat-lbl">Média Espera</span></div></div>
                <div class="ah-stat" id="ah-stat-maxwait"><div class="ah-stat-icon">⚠️</div><div class="ah-stat-data"><span class="ah-stat-val" id="ah-val-maxwait">-</span><span class="ah-stat-lbl">Maior Espera</span></div></div>

                <div class="ah-stat ah-stat-btn" id="ah-telemetry-btn" style="margin-left:auto;">
                    <div class="ah-stat-icon">📊</div>
                    <div class="ah-stat-data"><span class="ah-stat-val" style="font-size:12px; color:#038153;">TELEMETRIA</span><span class="ah-stat-lbl">Painel Diário</span></div>
                </div>

                <div class="ah-stat ah-stat-btn" id="ah-notify-tile" role="button" tabindex="0" style="padding-right:0;">
                    <div class="ah-stat-icon">🔔</div>
                    <div class="ah-stat-data"><span class="ah-stat-val" style="font-size:12px;" id="ah-notify-val">ATIVAS</span><span class="ah-stat-lbl">Notificações</span></div>
                </div>
            `;

            const pageHeader = targetContainer.querySelector('.meshim_dashboard_components_widgets_PageHeaderThreeRow');
            const tipSection = targetContainer.querySelector('.visitor_list_tip');

            if (tipSection) targetContainer.insertBefore(topBar, tipSection.nextSibling);
            else if (pageHeader) targetContainer.insertBefore(topBar, pageHeader.nextSibling);
            else targetContainer.prepend(topBar);

            document.getElementById('ah-telemetry-btn').addEventListener('click', abrirModalTelemetria);
        }

        if (!document.getElementById('ah-telemetry-overlay')) {
            telemetryModalInjected = true;
            const overlay = document.createElement('div');
            overlay.id = 'ah-telemetry-overlay';
            overlay.innerHTML = `
                <div id="ah-telemetry-modal">
                    <div class="ah-tel-header">
                        <h2>📊 Telemetria Diária (${telemetryData.date}) <span style="font-size: 12px; background: rgba(255,255,255,0.2); padding: 2px 6px; border-radius: 4px; margin-left: 10px; vertical-align: middle;">v${SCRIPT_VERSION}</span></h2>
                        <button class="ah-tel-close" id="ah-tel-close-btn">&times;</button>
                    </div>
                    <div class="ah-tel-body" id="ah-tel-body-content"></div>
                    <div class="ah-tel-footer">
                        <button class="ah-btn-reset" id="btn-reset-tel">🗑️ Limpar Todos os Dados</button>
                        <div class="ah-tel-actions">
                            <button class="ah-btn-dl" id="btn-dl-fila">📥 CSV: Evolução Fila</button>
                            <button class="ah-btn-dl" id="btn-dl-agents">📥 CSV: Ocupação Agentes</button>
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(overlay);

            document.getElementById('ah-tel-close-btn').addEventListener('click', () => { overlay.classList.remove('open'); });
            document.getElementById('btn-dl-fila').addEventListener('click', exportarFilaCSV);
            document.getElementById('btn-dl-agents').addEventListener('click', exportarAgentesCSV);
            document.getElementById('btn-reset-tel').addEventListener('click', resetarTelemetriaManual);
        }

        if (!document.getElementById('ahgora-floating-btn')) {
            drawerInjected = true;

            const floatBtn = document.createElement('button');
            floatBtn.id = 'ahgora-floating-btn';
            floatBtn.type = 'button';
            floatBtn.title = 'Alternar histórico de notificações';
            floatBtn.innerHTML = `<span class="btn-icon-symbol" id="ah-float-icon">🔔</span><span class="count-badge" id="ah-float-count">0</span>`;

            const drawerPanel = document.createElement('div');
            drawerPanel.id = 'ahgora-drawer-panel';
            drawerPanel.innerHTML = `
                <div class="ah-drawer-header">
                    <h3>🔔 Histórico de Notificações</h3>
                    <button type="button" class="ah-btn-clear-top" id="ah-btn-clear-history">Limpar Histórico</button>
                </div>
                <div class="ah-drawer-body" id="ah-drawer-history-list"></div>
            `;

            document.body.append(floatBtn, drawerPanel);

            updateFloatingButtonBadge();
            renderAlertHistoryList();

            floatBtn.addEventListener('click', () => {
                const isOpen = drawerPanel.classList.toggle('open');
                floatBtn.classList.toggle('active-drawer', isOpen);

                const iconEl = document.getElementById('ah-float-icon');
                if (iconEl) iconEl.textContent = isOpen ? "✕" : "🔔";
                if (isOpen) floatBtn.classList.remove('has-unread');
            });

            document.getElementById('ah-btn-clear-history').addEventListener('click', () => {
                alertHistory.length = 0;
                salvarHistoricoAlertas();
                updateFloatingButtonBadge();
                renderAlertHistoryList();
            });
        }
    }

    function abrirModalTelemetria() {
        renderTelemetryModalData();
        document.getElementById('ah-telemetry-overlay').classList.add('open');
    }

    function renderTelemetryModalData() {
        const content = document.getElementById('ah-tel-body-content');
        if (!content) return;

        const nowMsTime = new Date().getTime();
        const limitMs = nowMsTime - (3 * 60 * 60 * 1000);

        const recentSnapshots = telemetryData.snapshots.filter(s => {
            const parts = s.time.split(':');
            const sDate = new Date();
            sDate.setHours(parseInt(parts[0], 10), parseInt(parts[1], 10), 0, 0);
            return sDate.getTime() >= limitMs;
        });

        let html = `
            <div class="ah-tel-peaks">
                <div class="ah-tel-peak-card">
                    <h4>Maior Fila do Dia</h4>
                    <div class="val">${telemetryData.maxQueue}</div>
                    <div class="time">Alcançado às ${telemetryData.maxQueueTime}</div>
                </div>
                <div class="ah-tel-peak-card">
                    <h4>Maior Espera do Dia</h4>
                    <div class="val">${formatDuration(telemetryData.maxWaitMs)}</div>
                    <div class="time">Alcançado às ${telemetryData.maxWaitTime}</div>
                </div>
            </div>

            <div class="ah-tel-section">
                <h3>Evolução da Fila (Visão das Últimas 3 Horas - a cada 15min)</h3>
                <table class="ah-tel-table">
                    <thead><tr><th>Hora</th><th>Tamanho da Fila</th><th>Média Chats/Agente</th></tr></thead>
                    <tbody>
        `;

        if (recentSnapshots.length === 0) {
            html += `<tr><td colspan="3" style="text-align:center;">Nenhum registro capturado nas últimas 3h.</td></tr>`;
        } else {
            recentSnapshots.forEach(s => {
                html += `<tr><td>${s.time}</td><td>${s.queue}</td><td>${s.avgChats}</td></tr>`;
            });
        }
        html += `</tbody></table></div>`;

        html += `
            <div class="ah-tel-section">
                <h3>Tempo de Ocupação por Agente</h3>
                <table class="ah-tel-table">
                    <thead><tr><th>Agente</th><th>Com 1 Chat</th><th>Com 2 Chats</th><th>Com 3 Chats</th></tr></thead>
                    <tbody>
        `;

        const agents = Object.keys(telemetryData.agents).sort();
        if (agents.length === 0) {
            html += `<tr><td colspan="4" style="text-align:center;">Nenhum dado capturado ainda.</td></tr>`;
        } else {
            agents.forEach(agentName => {
                const times = telemetryData.agents[agentName];
                html += `<tr>
                    <td><strong>${agentName}</strong></td>
                    <td>${msToHhMmSs(times["1"] || 0)}</td>
                    <td>${msToHhMmSs(times["2"] || 0)}</td>
                    <td>${msToHhMmSs(times["3"] || 0)}</td>
                </tr>`;
            });
        }
        html += `</tbody></table></div>`;

        content.innerHTML = html;
    }

    function updateFloatingButtonBadge() {
        const countBadge = document.getElementById('ah-float-count');
        const floatBtn = document.getElementById('ahgora-floating-btn');
        if (!countBadge || !floatBtn) return;

        countBadge.textContent = String(alertHistory.length);
        const isOpen = document.getElementById('ahgora-drawer-panel')?.classList.contains('open');

        if (alertHistory.length > 0 && !isOpen) {
            floatBtn.classList.add('has-unread');
        } else {
            floatBtn.classList.remove('has-unread');
        }
    }

    function renderAlertHistoryList() {
        const listContainer = document.getElementById('ah-drawer-history-list');
        if (!listContainer) return;

        listContainer.replaceChildren();

        if (alertHistory.length === 0) {
            const emptyEl = document.createElement('div');
            emptyEl.className = 'ah-drawer-empty';
            emptyEl.textContent = 'Nenhum alerta registrado nesta sessão.';
            listContainer.appendChild(emptyEl);
            return;
        }

        alertHistory.forEach(item => {
            const card = makeElement('div', 'ah-history-item');

            const head = makeElement('div', 'ah-history-head');
            const title = makeElement('div', 'ah-history-title', `Analista ${item.agentName} (${item.limitMins} min)`);

            const rightSide = makeElement('div', 'ah-history-right-side');
            const time = makeElement('div', 'ah-history-time', formatHour(item.timestamp));

            const delBtn = makeElement('button', 'ah-btn-delete-alert', '✕');
            delBtn.title = "Excluir este alerta";
            delBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                removerAlertaEspecifico(item.id);
            });

            rightSide.append(time, delBtn);
            head.append(title, rightSide);

            const sub = makeElement('div', 'ah-history-sub', `Visitante: ${item.visitorName}`);

            card.append(head, sub);

            const footer = makeElement('div', 'ah-history-footer');

            if (item.ticketId) {
                const tag = makeElement('span', 'ah-history-ticket-tag', `Abrir Ticket #${item.ticketId} ↗`);
                footer.append(tag);
                card.appendChild(footer);

                card.addEventListener('click', () => {
                    window.open(`https://totvssuporte.zendesk.com/agent/tickets/${item.ticketId}`, '_blank');
                });
            } else {
                const tag = makeElement('span', 'ah-history-ticket-tag error', `ID: (ID Pendente)`);
                footer.append(tag);
                card.appendChild(footer);
            }

            listContainer.appendChild(card);
        });
    }

    /* ============================================================
     * FUSÃO DE DADOS NO DOM E MONITORAÇÃO DA FILA
     * ============================================================ */
    function fuseDataIntoDOM(groupsMap, queueLength, rowsArray, agentNameIndex, visitorNameIndex) {
        const now = Date.now();
        const hasQueue = queueLength > 0;

        const groupHeaders = document.querySelectorAll('[data-test-id="groupTitle"]');
        groupHeaders.forEach(header => {
            const agentName = cleanText(header.textContent).replace(/\s*\d+\/\d+$/, '');
            const matchedAgentId = agentNameIndex.get(agentName.toLowerCase()) || null;

            if (matchedAgentId && isMonitoredAgent(matchedAgentId)) {
                const group = header.closest('.visitor_list_container');
                if (group) {
                    group.classList.add('general_agent_group');

                    const countEl = group.querySelector('[data-test-id="groupCount"]');
                    const currentCount = parseInt(countEl?.textContent.trim() || "0", 10) || 0;

                    let leftBadge = header.parentNode.querySelector('.ah-left-capacity');
                    if (!leftBadge) {
                        leftBadge = document.createElement('span');
                        leftBadge.className = 'ah-left-capacity';
                        header.parentNode.insertBefore(leftBadge, header.nextSibling);
                    }

                    let timerState = agentCapacityTimers.get(matchedAgentId);
                    if (!timerState || timerState.count !== currentCount) {
                        timerState = { count: currentCount, startedAt: now };
                        agentCapacityTimers.set(matchedAgentId, timerState);
                    }

                    const elapsedMs = now - timerState.startedAt;
                    const elapsedMins = Math.floor(elapsedMs / 60000);

                    let badgeClass = "cap-free";
                    let displayText = `${currentCount}/${CONFIG.maxConcurrentChats}`;

                    if (currentCount >= CONFIG.maxConcurrentChats) {
                        badgeClass = "cap-full";
                    } else if (hasQueue && CONFIG.underCapacityAlerts.enabled) {
                        let limitMins = 0;
                        if (currentCount === 1) limitMins = CONFIG.underCapacityAlerts.limit1ChatMins;
                        if (currentCount === 2) limitMins = CONFIG.underCapacityAlerts.limit2ChatsMins;

                        if (limitMins > 0 && elapsedMins >= limitMins) {
                            badgeClass = "cap-idle-warn";
                        }
                    }

                    leftBadge.textContent = displayText;
                    leftBadge.className = `ah-left-capacity ${badgeClass}`;
                }
            }
        });

        let maiorEsperaTelaMs = 0;
        let somaEsperaTelaMs = 0;
        let contagemEsperaTela = 0;

        rowsArray.forEach(row => {
            if (!row.querySelector('[data-test-id="incomingVisitor"]')) return;

            const timeCell = row.querySelector('[data-test-id="timeCell"]');
            const domTimeStr = cleanText(timeCell?.textContent);
            const domWaitMs = parseDomTime(domTimeStr);

            if (domWaitMs > 0) {
                if (domWaitMs > maiorEsperaTelaMs) maiorEsperaTelaMs = domWaitMs;
                somaEsperaTelaMs += domWaitMs;
                contagemEsperaTela++;
            }

            const vId = extractVisitorIdFromDom(row);
            const name = cleanText(row.querySelector('[data-test-id="nameCell"]')?.textContent);

            let visitor = vId ? visitorStore.get(vId) : null;
            if (!visitor) {
                visitor = visitorNameIndex.get(name) || null;
            }

            const msgCell = row.querySelector('[data-test-id="lastMsgCell"]');

            if (msgCell) {
                const unreadCount = visitor ? getUnreadCount(visitor) : 0;
                let badge = msgCell.querySelector('.ah-msg-badge');

                if (unreadCount > 0) {
                    if (!badge) {
                        badge = document.createElement('span');
                        badge.className = 'ah-msg-badge';
                        msgCell.insertBefore(badge, msgCell.firstChild);
                    }
                    badge.textContent = `${unreadCount} nova(s)`;
                } else if (badge) {
                    badge.remove();
                }
            }

            if (timeCell) {
                const waitMins = Math.floor(domWaitMs / 60000);

                let stateClass = 'ok';
                if (waitMins >= CONFIG.waitingCriticalMinutes) stateClass = 'crit';
                else if (waitMins >= CONFIG.waitingWarningMinutes) stateClass = 'warn';

                timeCell.classList.add('ah-time-pill');
                timeCell.classList.remove('ok', 'warn', 'crit', 'neutral');
                timeCell.classList.add(stateClass);
            }
        });

        const valAvgWait = document.getElementById('ah-val-avgwait');
        const valMaxWait = document.getElementById('ah-val-maxwait');

        if (valAvgWait) {
            const mediaMs = contagemEsperaTela > 0 ? (somaEsperaTelaMs / contagemEsperaTela) : null;
            valAvgWait.textContent = formatDuration(mediaMs);
        }
        if (valMaxWait) {
            valMaxWait.textContent = maiorEsperaTelaMs > 0 ? formatDuration(maiorEsperaTelaMs) : "-";
        }

        return {
            maiorEsperaTelaMs: maiorEsperaTelaMs > 0 ? maiorEsperaTelaMs : null
        };
    }

    /* ============================================================
     * CRONÔMETRO POR CHAT EM ATENDIMENTO E RECUPERAÇÃO DE IDs
     * ============================================================ */
    function scanServedRows(rowsArray, agentNameIndex, visitorNameIndex) {
        const found = [];
        const occurrences = new Map();

        rowsArray.forEach(row => {
            if (!row.querySelector('.visitor_legend_served, [alt="served"]')) return;

            const listContainer = row.closest('[data-test-id="generalVisitorList"]');
            if (listContainer && listContainer.style.display === 'none') return;
            const view = row.closest('.visitor_list_view');
            if (view && view.style.display === 'none') return;

            const visitorName = cleanText(row.querySelector('[data-test-id="nameCell"]')?.textContent);
            if (!visitorName) return;

            let agentName = cleanText(row.querySelector('[data-test-id="servedByCell"]')?.textContent);
            if (!agentName && listContainer) {
                agentName = cleanText(listContainer.querySelector('[data-test-id="groupTitle"]')?.textContent);
            }
            if (!agentName) return;

            const matchedAgentId = agentNameIndex.get(agentName.toLowerCase()) || null;

            if (!matchedAgentId || !isMonitoredAgent(matchedAgentId)) return;

            const vId = extractVisitorIdFromDom(row);
            let wsVisitor = vId ? visitorStore.get(vId) : null;

            if (!wsVisitor) {
                wsVisitor = visitorNameIndex.get(visitorName) || null;
            }

            let ticketId = wsVisitor ? getTicketIdFromVisitor(wsVisitor) : null;

            if (!ticketId) {
                ticketId = extractTicketIdFromDom(row);
            }

            if (!ticketId) {
                ticketId = capturedTicketIds.get(vId) || capturedTicketIds.get(visitorName) || null;
            }

            if (!ticketId && !loggedMissingIds.has(visitorName)) {
                loggedMissingIds.add(visitorName);
            }

            const base = `${agentName}|${visitorName}`;
            const n = (occurrences.get(base) || 0) + 1;
            occurrences.set(base, n);

            const timeCell = row.querySelector('[data-test-id="timeCell"]');

            found.push({ key: `${base}#${n}`, row: row, agentName: agentName, visitorName: visitorName, ticketId: ticketId, timeCell: timeCell });
        });

        return found;
    }

    function updateChatTimers(now, rowsArray, agentNameIndex, visitorNameIndex) {
        const rows = scanServedRows(rowsArray, agentNameIndex, visitorNameIndex);

        rows.forEach(r => {
            let timer = chatTimers.get(r.key);
            if (!timer) {
                timer = { key: r.key, agentName: r.agentName, visitorName: r.visitorName, ticketId: r.ticketId, startedAt: now, lastSeen: now };
                chatTimers.set(r.key, timer);
                alertTracker.set(r.key, new Set());
            } else {
                if (r.ticketId && !timer.ticketId) timer.ticketId = r.ticketId;
                timer.lastSeen = now;
            }
        });

        chatTimers.forEach((timer, key) => {
            if (now - timer.lastSeen > CONFIG.timerGraceMs) {
                chatTimers.delete(key);
                alertTracker.delete(key);
            }
        });

        return rows;
    }

    function renderChatTimers(rows, now) {
        rows.forEach(r => {

            if (r.timeCell) {
                const vId = extractVisitorIdFromDom(r.row);
                const waitKeyId = vId;
                const waitKeyName = r.visitorName;

                let waitMs = capturedWaitTimes.get(waitKeyId) || capturedWaitTimes.get(waitKeyName);

                let targetText = "Atendido";
                if (waitMs !== undefined) {
                    const waitMins = Math.floor(waitMs / 60000);
                    targetText = `Fila: ${waitMins} min`;
                }

                if (r.timeCell.textContent !== targetText) {
                    r.timeCell.textContent = targetText;
                }

                r.timeCell.classList.add('ah-time-pill', 'neutral');
                r.timeCell.classList.remove('ok', 'warn', 'crit');
                r.timeCell.title = waitMs !== undefined ? "Tempo que o cliente aguardou na fila antes de ser atendido" : "Tempo de fila não capturado na sessão atual (F5 ou não mapeado)";
            }

            const timer = chatTimers.get(r.key);
            if (!timer) return;

            const ms = now - timer.startedAt;
            const mins = ms / 60000;
            const stateClass = mins >= CONFIG.chatCriticalMinutes ? 'crit' : (mins >= CONFIG.chatWarningMinutes ? 'warn' : 'ok');

            const host = r.row.querySelector('.visitorlist_tags');
            if (!host) return;

            let badge = host.querySelector('.ah-chat-timer-left.served-timer');
            if (!badge) {
                badge = document.createElement('span');
                host.insertBefore(badge, host.firstChild);
                host.classList.add('ah-has-left-timer');
            }

            const text = `⏱ ${formatClock(ms)}`;
            if (badge.textContent !== text) badge.textContent = text;
            const cls = `ah-chat-timer-left served-timer ${stateClass}`;
            if (badge.className !== cls) badge.className = cls;
            badge.title = `Em atendimento com ${timer.agentName} desde ${formatHour(timer.startedAt)}`;
        });
    }

    /* ============================================================
     * ALERTAS INDIVIDUAIS POR CHAT E ALERTA DE FILA REPRESADA
     * ============================================================ */
    function agentLabel(agentName) {
        if (CONFIG.alertNameMode !== "first") return agentName;
        return agentName.split(" ")[0];
    }

    function checkAlerts(now) {
        if (!CONFIG.notificationsEnabled) return;

        const thresholds = CONFIG.alertThresholdsMinutes.slice().sort((a, b) => a - b);

        chatTimers.forEach((timer, key) => {
            const elapsedMins = Math.floor((now - timer.startedAt) / 60000);
            const notifiedSet = alertTracker.get(key) || new Set();

            thresholds.forEach(limit => {
                if (elapsedMins >= limit && !notifiedSet.has(limit)) {
                    notifiedSet.add(limit);
                    alertTracker.set(key, notifiedSet);

                    const firstAgentName = agentLabel(timer.agentName);
                    const displayTicketId = timer.ticketId ? `#${timer.ticketId}` : "(ID Pendente)";
                    const alertBody = `Analista ${firstAgentName} está com o Ticket ${displayTicketId} (${timer.visitorName}) há ${limit} min.`;

                    sendChromeNotification(`Alerta de Atendimento (${limit} min)`, alertBody, `ahgora-${key}-${limit}`, timer.ticketId);
                    registerAlertHistory(firstAgentName, timer.visitorName, timer.ticketId, limit);
                }
            });
        });
    }

    function checkQueueAlert(longestWaitMs, avgChatsPerAgent, onlineHeadcount, now) {
        if (!CONFIG.notificationsEnabled) return;
        if (!longestWaitMs || onlineHeadcount === 0) return;

        const maxWaitMins = Math.floor(longestWaitMs / 60000);

        if (maxWaitMins < CONFIG.queueAlertMaxWaitMins) {
            notifiedQueueMilestones.clear();
            return;
        }

        const milestone = Math.floor((maxWaitMins - CONFIG.queueAlertMaxWaitMins) / CONFIG.queueAlertStepMins) * CONFIG.queueAlertStepMins + CONFIG.queueAlertMaxWaitMins;

        if (!notifiedQueueMilestones.has(milestone) && avgChatsPerAgent < CONFIG.queueAlertMaxAvgChats) {
            notifiedQueueMilestones.add(milestone);

            const alertTitle = `⚠️ Alerta de Fila Acumulada (${milestone} min+)`;
            const alertBody = `A fila atingiu ${maxWaitMins} min de espera e a média dos analistas está em ${avgChatsPerAgent.toFixed(1)} chats/agente. Verifique a distribuição!`;

            sendChromeNotification(alertTitle, alertBody, `ahgora-queue-alert-${milestone}`, null);
            registerAlertHistory("Sistema", "Aviso de Fila", null, maxWaitMins);
        }
    }

    /* ============================================================
     * LOOP PRINCIPAL DE RENDERIZAÇÃO E REGISTRO DE TELEMETRIA
     * ============================================================ */
    function fusionRender() {
        safe("topbar", injectTopBarAndFloatingUI);

        const nowMs = Date.now();
        const queueVisitors = [];

        for (const entry of visitorStore.entries()) {
            const vId = entry[0];
            const v = entry[1];

            const tId = getTicketIdFromVisitor(v);
            const vName = cleanText(v["display_name$string"]);
            if (tId) {
                capturedTicketIds.set(vId, tId);
                if (vName) capturedTicketIds.set(vName, tId);
            }

            if (isAhgoraGeral(v) && v["state$string"] === "incoming") {
                queueVisitors.push(v);

                const wsTime = v?.request_info?.["waiting_since$time"];
                if (wsTime) {
                    const waitMs = Math.max(0, nowMs - Number(wsTime));
                    capturedWaitTimes.set(vId, waitMs);
                    if (vName) capturedWaitTimes.set(vName, waitMs);
                }
            }
        }

        const groupsMap = new Map();
        let onlineHeadcount = 0;

        for (const entry of agentStore.entries()) {
            const agentId = entry[0];
            const agentData = entry[1];

            if (isAgentAhgoraGeral(agentData)) {
                const name = getAgentDisplayName(agentData);
                if (isMonitoredAgent(agentId)) {
                    groupsMap.set(agentId, { id: agentId, name: name, status: agentData.status$string, activeChats: 0 });
                }
            }
        }

        let totalActiveChats = 0;
        let servingAgentsCount = 0;
        let absentWithChatsCount = 0;

        groupsMap.forEach((ag, agentId) => {
            const agentData = agentStore.get(agentId);
            if (agentData) {
                ag.activeChats = agentData["ongoing_chat_count$int"] || 0;

                totalActiveChats += ag.activeChats;

                if (ag.activeChats > 0) servingAgentsCount++;
                if (ag.status !== "online" && ag.activeChats > 0) absentWithChatsCount++;
            }
        });

        let effectiveOnlineHeadcount = 0;
        groupsMap.forEach(ag => {
            if (ag.status === "online" || ag.activeChats > 0) {
                effectiveOnlineHeadcount++;
            }
        });

        const totalMonitoredTeam = CONFIG.monitoredAgentIds.length;
        const totalMaxConcurrentChats = effectiveOnlineHeadcount * CONFIG.maxConcurrentChats;
        const occupancyPercent = totalMaxConcurrentChats > 0 ? Math.round((totalActiveChats / totalMaxConcurrentChats) * 100) : 0;
        const avgChatsPerAgent = effectiveOnlineHeadcount > 0 ? (totalActiveChats / effectiveOnlineHeadcount) : 0;

        const valQueue = document.getElementById('ah-val-queue');
        const valServed = document.getElementById('ah-val-served');
        const valOccupancy = document.getElementById('ah-val-occ');
        const valHeadcount = document.getElementById('ah-val-headcount');
        const valTeam = document.getElementById('ah-val-team');
        const valAbsent = document.getElementById('ah-val-absent');
        const statAbsent = document.getElementById('ah-stat-absent');
        const valAvgChats = document.getElementById('ah-val-avgchats');

        if (valQueue) valQueue.textContent = queueVisitors.length;
        if (valServed) valServed.textContent = totalActiveChats;
        if (valOccupancy) valOccupancy.textContent = `${occupancyPercent}%`;
        if (valHeadcount) valHeadcount.textContent = `${servingAgentsCount}/${effectiveOnlineHeadcount}`;
        if (valTeam) valTeam.textContent = `${effectiveOnlineHeadcount}/${totalMonitoredTeam}`;
        if (valAvgChats) valAvgChats.textContent = avgChatsPerAgent.toFixed(1);

        if (valAbsent) {
            valAbsent.textContent = absentWithChatsCount;
            if (absentWithChatsCount > 0) {
                statAbsent.classList.add('danger');
            } else {
                statAbsent.classList.remove('danger');
            }
        }

        const agentNameIndex = buildAgentNameIndex();
        const visitorNameIndex = buildVisitorNameIndex();
        const rowsArray = Array.from(document.querySelectorAll('.visitor_list_container:not([style*="display: none"]) .visitorlist_row'));

        let domMetrics = { maiorEsperaTelaMs: null };
        safe("fuse", () => { domMetrics = fuseDataIntoDOM(groupsMap, queueVisitors.length, rowsArray, agentNameIndex, visitorNameIndex); });

        const nowObj = new Date();
        const currentHour = nowObj.getHours();
        const currentMinute = nowObj.getMinutes();
        const currentHourMin = `${String(currentHour).padStart(2, '0')}:${String(currentMinute).padStart(2, '0')}`;

        const isOperatingHours = (currentHour >= 7 && currentHour < 19) || (currentHour === 19 && currentMinute === 0);

        if (isOperatingHours) {
            if (queueVisitors.length > telemetryData.maxQueue) {
                telemetryData.maxQueue = queueVisitors.length;
                telemetryData.maxQueueTime = new Date().toLocaleTimeString('pt-BR');
                salvarTelemetria();
            }

            if (domMetrics && domMetrics.maiorEsperaTelaMs !== null && domMetrics.maiorEsperaTelaMs > telemetryData.maxWaitMs) {
                telemetryData.maxWaitMs = domMetrics.maiorEsperaTelaMs;
                telemetryData.maxWaitTime = new Date().toLocaleTimeString('pt-BR');
                salvarTelemetria();
            }

            if ((currentMinute === 0 || currentMinute === 15 || currentMinute === 30 || currentMinute === 45) && !telemetryData.snapshots.some(s => s.time === currentHourMin)) {
                telemetryData.snapshots.push({
                    time: currentHourMin,
                    queue: queueVisitors.length,
                    avgChats: avgChatsPerAgent.toFixed(2)
                });
                salvarTelemetria();
            }

            groupsMap.forEach(ag => {
                if ((ag.status === "online" || ag.activeChats > 0) && ag.activeChats >= 1 && ag.activeChats <= 3) {
                    if (!telemetryData.agents[ag.name]) telemetryData.agents[ag.name] = { "1": 0, "2": 0, "3": 0 };
                    telemetryData.agents[ag.name][String(ag.activeChats)] += CONFIG.renderIntervalMs;
                }
            });

            renderCycleCount++;
            if (renderCycleCount >= 10) {
                salvarTelemetria();
                renderCycleCount = 0;
            }
        }

        let servedRows = [];
        safe("timers", () => { servedRows = updateChatTimers(nowMs, rowsArray, agentNameIndex, visitorNameIndex); });
        safe("badges", () => renderChatTimers(servedRows, nowMs));
        safe("alerts", () => checkAlerts(nowMs));
        safe("queue-alert", () => checkQueueAlert(domMetrics ? domMetrics.maiorEsperaTelaMs : null, avgChatsPerAgent, effectiveOnlineHeadcount, nowMs));

        safe("notify-tile", refreshNotifyTile);
    }

    document.addEventListener("click", event => {
        if (event.target.closest && event.target.closest("#ah-notify-tile")) toggleNotifications();
    });

    setInterval(fusionRender, CONFIG.renderIntervalMs);

    /* ============================================================
     * INTEGRAÇÃO COM O PAINEL FLASK (PYTHON) - COM FALLBACK DE DOM
     * ============================================================ */
    function enviarDadosParaPainel() {
        const agentesAlvo = [
            "Jhonata Souza", "Fernando Cursino", "Hiago Silva",
            "Fabio Bolade", "Nathan Nunes", "Yuri Peretti",
            "Douglas Brezolin", "Carine Santos", "Julia Francischetti",
            "Felipe Ribeiro Munari", "Alan Henrique"
        ];

        let payload = {};
        agentesAlvo.forEach(a => {
            payload[a] = { status: 'Offline', chats_ativos: [] };
        });

        // TENTATIVA 1: LER DO WEBSOCKET MEMÓRIA (AgentStore)
        agentStore.forEach((agentData) => {
            let nomeRaw = "";
            if (agentData.display_name$string) nomeRaw = agentData.display_name$string.toLowerCase();
            else if (agentData.full_name$string) nomeRaw = agentData.full_name$string.toLowerCase();
            else if (agentData.first_name$string) nomeRaw = agentData.first_name$string.toLowerCase();

            let agenteEncontrado = agentesAlvo.find(a => a.toLowerCase().includes(nomeRaw) || nomeRaw.includes(a.toLowerCase()));

            if (agenteEncontrado) {
                let statusRaw = agentData.status$string; // "online", "away", "invisible", "offline"
                if (statusRaw === 'online') payload[agenteEncontrado].status = 'Online';
                else if (statusRaw === 'away') payload[agenteEncontrado].status = 'Ausente';
                else if (statusRaw === 'invisible') payload[agenteEncontrado].status = 'Invisível';
            }
        });

        // TENTATIVA 2: LER DA BARRA LATERAL ESQUERDA (Caso WebSocket tenha falhado no carregamento)
        document.querySelectorAll('span').forEach(span => {
            let nomeRaw = span.innerText.trim().toLowerCase();
            let agenteEncontrado = agentesAlvo.find(a => a.toLowerCase().includes(nomeRaw) || nomeRaw.includes(a.toLowerCase()));

            if(agenteEncontrado) {
                let divCor = span.previousElementSibling;
                if(divCor && divCor.style.background) {
                    let bg = String(divCor.style.background).toLowerCase();
                    if(bg.includes('184, 72') || bg.includes('green') || bg.includes('rgb(30, 184, 72)')) payload[agenteEncontrado].status = 'Online';
                    else if(bg.includes('241, 196, 15') || bg.includes('orange') || bg.includes('rgb(255, 178, 77)')) payload[agenteEncontrado].status = 'Ausente';
                }
            }
        });

        // TENTATIVA 3: LER DO MODAL "VER TUDO" (Se ele estiver no DOM da página)
        // Isso resolve o problema de quem só aparece online na popup
        document.querySelectorAll('.row_renderer, .meshim_dashboard_components_agentList_widgets_Row').forEach(row => {
            let nameEl = row.querySelector('.name_cell');
            let statusEl = row.querySelector('.status_cell span');

            if (nameEl && statusEl) {
                let nomeRaw = nameEl.innerText.trim().toLowerCase();
                let agenteEncontrado = agentesAlvo.find(a => a.toLowerCase().includes(nomeRaw) || nomeRaw.includes(a.toLowerCase()));

                if (agenteEncontrado) {
                    let cls = statusEl.className || "";
                    let bg = statusEl.style.background || "";

                    if (cls.includes('conv_status_online') || bg.includes('green') || bg.includes('184, 72')) {
                        if (payload[agenteEncontrado].status === 'Offline') payload[agenteEncontrado].status = 'Online';
                    }
                    else if (cls.includes('conv_status_away') || bg.includes('orange') || bg.includes('241, 196, 15')) {
                        if (payload[agenteEncontrado].status === 'Offline') payload[agenteEncontrado].status = 'Ausente';
                    }
                    else if (cls.includes('conv_status_invisible')) {
                        if (payload[agenteEncontrado].status === 'Offline') payload[agenteEncontrado].status = 'Invisível';
                    }
                }
            }
        });

        // 4. LÊ OS CHATS ATIVOS NA TELA PRINCIPAL (Para definir TMA e Ticket)
        document.querySelectorAll('.meshim_dashboard_components_visitors_visitorList_renderers_PageList').forEach(lista => {
            let titleEl = lista.querySelector('[data-test-id="groupTitle"]');
            if(!titleEl) return;
            let fila = titleEl.innerText.trim();

            if (fila === 'Ahgora - Geral' || fila === 'Ahgora - VIP') {
                let rows = lista.querySelectorAll('.visitorlist_row');

                rows.forEach(row => {
                    let agentEl = row.querySelector('[data-test-id="servedByCell"]');
                    let visitorEl = row.querySelector('[data-test-id="nameCell"]');

                    if (agentEl && visitorEl) {
                        let agentNameRaw = agentEl.innerText.trim().toLowerCase();
                        let agenteEncontrado = agentesAlvo.find(a => a.toLowerCase().includes(agentNameRaw) || agentNameRaw.includes(a.toLowerCase()));

                        if (agenteEncontrado) {
                            let visitorName = visitorEl.innerText.trim();
                            let tempo = "Calculando...";

                            let timeEl = row.querySelector('.ah-chat-timer-left');
                            if (timeEl && timeEl.innerText) {
                                tempo = timeEl.innerText.trim();
                            } else {
                                let fallback = row.querySelector('[data-test-id="timeCell"]');
                                if (fallback) tempo = fallback.innerText.trim();
                            }

                            let ticketId = "Pendente";
                            const vId = extractVisitorIdFromDom(row);
                            if (vId && capturedTicketIds.has(vId)) {
                                ticketId = capturedTicketIds.get(vId);
                            } else if (capturedTicketIds.has(visitorName)) {
                                ticketId = capturedTicketIds.get(visitorName);
                            } else {
                                let ticketLink = row.querySelector('a[href*="/agent/tickets/"]');
                                if (ticketLink) {
                                    let match = ticketLink.href.match(/\/tickets\/(\d+)/);
                                    if (match) ticketId = match[1];
                                }
                            }

                            payload[agenteEncontrado].chats_ativos.push({
                                fila: fila,
                                visitante: visitorName,
                                tempo: tempo,
                                ticket: ticketId
                            });

                            // Força o status "Atendendo" apenas se encontrou um chat
                            if (payload[agenteEncontrado].status === 'Offline') {
                                payload[agenteEncontrado].status = 'Online (Atendendo)';
                            } else if (payload[agenteEncontrado].status === 'Online') {
                                payload[agenteEncontrado].status = 'Online (Atendendo)';
                            }
                        }
                    }
                });
            }
        });

        // 5. ENVIA PARA O PAINEL PYTHON
        GM_xmlhttpRequest({
            method: "POST",
            url: "http://127.0.0.1:5000/api/atualizar",
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(payload),
            onload: function(response) {
                // Sucesso silencioso
            },
            onerror: function(error) {
                console.warn("[Painel Flask] Falha ao comunicar com http://127.0.0.1:5000/api/atualizar", error);
            }
        });
    }

    // Inicia o envio a cada 3 segundos para o painel local
    setInterval(enviarDadosParaPainel, 3000);

})();
