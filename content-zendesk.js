/*
 * Ahgora Tools - Content Script para Zendesk
 * 
 * Copyright © 2025 Delean Mafra
 * Todos os direitos reservados
 * 
 * Licença: Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)
 * http://delean-mafra.github.io/Ahtools/CC_BY_NC_4.0
 */

// Script para clicar automaticamente no botão de puxar chat do Zendesk

const INTERVALO_VERIFICACAO = 2000;

let intervaloClick = 5 * 60 * 1000;
let limiteChats = 3;
let notificacoesAtivas = true;
let ultimoClick = null;
let intervaloId = null;

let tempoOnlineSegundos = 0;
let statusAnterior = false;
let intervaloTempoOnline = null;
let confirmarCliqueManual = true; // Flag para confirmar clique manual no botão "Na fila"

// ============================================
// FUNÇÃO PARA REMOVER NOTIFICAÇÕES DO ZENDESK
// ============================================
function removerNotificacoesZendesk() {
    // Seletores das notificações que queremos remover
    const seletoresNotificacao = [
        'div[role="alert"][data-test-id="notification"]',
        'div[data-garden-id="notifications.notification"]'
    ];
    
    seletoresNotificacao.forEach(seletor => {
        const notificacoes = document.querySelectorAll(seletor);
        notificacoes.forEach(notif => {
            // Verifica se é a notificação de "Horário de operação começou"
            const titulo = notif.querySelector('[data-test-id="notification-title"]');
            if (titulo && (
                titulo.textContent.includes('horário de operação') ||
                titulo.textContent.includes('Fique online') ||
                titulo.textContent.includes('operação começou')
            )) {
                notif.remove();
                console.log('[Ahgora Tools - Zendesk] 🗑️ Notificação removida: "Horário de operação começou"');
            }
        });
    });
}

// Observer para remover notificações dinamicamente
function iniciarObserverNotificacoes() {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach(() => {
            removerNotificacoesZendesk();
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    // Remove notificações existentes ao carregar
    removerNotificacoesZendesk();
    
    console.log('[Ahgora Tools - Zendesk] 👁️ Observer de notificações iniciado');
}

// ============================================
// INTERCEPTADOR DO BOTÃO "NA FILA"
// ============================================
function interceptarBotaoNaFila() {
    // Adiciona listener de captura para interceptar cliques no botão
    document.addEventListener('click', function(event) {
        if (!confirmarCliqueManual) return;
        
        const target = event.target;
        const botao = target.closest('button[data-polaris-onboarding-id="serveButton"], button[data-test-id="toolbar-serve-chat-button"]');
        
        if (botao) {
            // Verifica se o clique foi iniciado pelo usuário (não pela extensão)
            if (!botao.dataset.ahgoraAutoClick) {
                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();
                
                mostrarDialogoConfirmacao(botao);
            }
        }
    }, true); // true = fase de captura
    
    console.log('[Ahgora Tools - Zendesk] 🛡️ Interceptador de clique manual ativado');
}

function mostrarDialogoConfirmacao(botao) {
    // Remove diálogo anterior se existir
    const dialogoAnterior = document.getElementById('ahgora-dialogo-confirmacao');
    if (dialogoAnterior) dialogoAnterior.remove();
    
    // Cria o overlay
    const overlay = document.createElement('div');
    overlay.id = 'ahgora-dialogo-confirmacao';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        z-index: 9999999;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Arial, sans-serif;
    `;
    
    // Cria o diálogo
    const dialogo = document.createElement('div');
    dialogo.style.cssText = `
        background: white;
        padding: 25px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        max-width: 400px;
        text-align: center;
    `;
    
    dialogo.innerHTML = `
        <div style="font-size: 40px; margin-bottom: 15px;">⚠️</div>
        <h3 style="margin: 0 0 15px 0; color: #333; font-size: 18px;">Confirmar Puxar Chat?</h3>
        <p style="color: #666; margin-bottom: 20px; font-size: 14px;">
            Você está prestes a puxar um chat manualmente.<br>
            Deseja realmente continuar?
        </p>
        <div style="display: flex; gap: 10px; justify-content: center;">
            <button id="ahgora-btn-cancelar" style="
                padding: 10px 25px;
                border: 2px solid #dc3545;
                background: white;
                color: #dc3545;
                border-radius: 6px;
                font-weight: bold;
                cursor: pointer;
                font-size: 14px;
            ">Cancelar</button>
            <button id="ahgora-btn-confirmar" style="
                padding: 10px 25px;
                border: none;
                background: linear-gradient(135deg, #28a745, #20c997);
                color: white;
                border-radius: 6px;
                font-weight: bold;
                cursor: pointer;
                font-size: 14px;
            ">Sim, Puxar Chat</button>
        </div>
    `;
    
    overlay.appendChild(dialogo);
    document.body.appendChild(overlay);
    
    // Botão cancelar
    document.getElementById('ahgora-btn-cancelar').addEventListener('click', () => {
        overlay.remove();
        mostrarNotificacao('❌ Clique cancelado', 'info');
    });
    
    // Botão confirmar
    document.getElementById('ahgora-btn-confirmar').addEventListener('click', () => {
        overlay.remove();
        
        // Marca o botão para não interceptar o clique programático
        botao.dataset.ahgoraAutoClick = 'true';
        botao.click();
        delete botao.dataset.ahgoraAutoClick;
        
        mostrarNotificacao('✅ Chat puxado manualmente!', 'success');
    });
    
    // Clique fora fecha
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.remove();
        }
    });
}

function formatarTempo(segundos) {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segs = segundos % 60;
    
    return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segs).padStart(2, '0')}`;
}

function iniciarCronometro() {
    if (!intervaloTempoOnline) {
        intervaloTempoOnline = setInterval(() => {
            const isOnline = verificarStatusOnline();
            
            if (isOnline) {
                tempoOnlineSegundos++;
                if (tempoOnlineSegundos % 60 === 0) {
                    chrome.storage.local.set({ tempoOnlineSegundos: tempoOnlineSegundos });
                }
            } else if (statusAnterior && !isOnline) {
                tempoOnlineSegundos = 0;
                chrome.storage.local.set({ tempoOnlineSegundos: 0 });
            }
            
            statusAnterior = isOnline;
        }, 1000);
        
        console.log('[Ahgora Tools - Zendesk] ⏱️ Cronômetro de tempo online iniciado');
    }
}

function verificarStatusOnline() {
    const botaoStatus = document.querySelector('button[data-test-id="omnichannel-agent-status-menu-button"]');
    
    if (botaoStatus) {
        const dataState = botaoStatus.getAttribute('data-state');
        const isOnline = dataState === 'online';
        console.log(`[Ahgora Tools - Zendesk] 📡 Status: ${dataState} (${isOnline ? 'ONLINE' : 'OFFLINE'})`);
        return isOnline;
    }
    
    console.log('[Ahgora Tools - Zendesk] ⚠️ Não foi possível verificar o status');
    return false;
}

function contarChatsAtivos() {
    const chatsAbertos = document.querySelectorAll('[data-test-id="header-tab-subtitle"]');
    const quantidade = chatsAbertos.length;
    console.log(`[Ahgora Tools - Zendesk] 💬 Chats ativos: ${quantidade}/${limiteChats}`);
    return quantidade;
}

function clicarBotaoPuxarChat() {
    if (!verificarStatusOnline()) {
        console.log('[Ahgora Tools - Zendesk] 🚫 Usuário não está online.');
        if (notificacoesAtivas) {
            mostrarNotificacao('⚠️ Você precisa estar ONLINE para puxar chats!', 'warning');
        }
        return false;
    }
    
    const chatsAtivos = contarChatsAtivos();
    if (chatsAtivos >= limiteChats) {
        if (notificacoesAtivas) {
            mostrarNotificacao(`⏸️ Limite de ${limiteChats} chats atingido. Aguardando...`, 'info');
        }
        return false;
    }
    
    const seletores = [
        'button[data-test-id="toolbar-serve-chat-button"]',
        'button[data-polaris-onboarding-id="serveButton"]',
        'button[data-agent-workspace-onboarding-id="serveButton"]',
        'button[data-state="in-queue"]'
    ];

    let botao = null;

    for (const seletor of seletores) {
        botao = document.querySelector(seletor);
        if (botao) break;
    }

    if (!botao) {
        const botoes = document.querySelectorAll('button');
        for (const btn of botoes) {
            if (btn.textContent.includes('Na fila') || btn.textContent.includes('fila')) {
                botao = btn;
                break;
            }
        }
    }

    if (botao) {
        const isVisible = botao.offsetWidth > 0 && botao.offsetHeight > 0;
        const isDisabled = botao.disabled || botao.getAttribute('aria-disabled') === 'true';

        if (isVisible && !isDisabled) {
            botao.click();
            ultimoClick = new Date();
            console.log(`[Ahgora Tools - Zendesk] ✅ Botão clicado às ${ultimoClick.toLocaleTimeString()}`);
            mostrarNotificacao('✅ Chat puxado automaticamente!', 'success');
            return true;
        }
    }

    return false;
}

function mostrarNotificacao(mensagem, tipo = 'success') {
    const notificacao = document.createElement('div');
    notificacao.textContent = mensagem;
    
    let backgroundColor;
    switch(tipo) {
        case 'success': backgroundColor = '#28a745'; break;
        case 'warning': backgroundColor = '#ffc107'; break;
        case 'info': backgroundColor = '#17a2b8'; break;
        case 'error': backgroundColor = '#dc3545'; break;
        default: backgroundColor = '#28a745';
    }
    
    notificacao.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: ${backgroundColor};
        color: ${tipo === 'warning' ? '#000' : '#fff'};
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 999999;
        font-family: Arial, sans-serif;
        font-size: 14px;
        font-weight: bold;
        animation: slideIn 0.3s ease-out;
    `;

    if (!document.getElementById('ahgora-tools-styles')) {
        const style = document.createElement('style');
        style.id = 'ahgora-tools-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(400px); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(400px); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notificacao);

    setTimeout(() => {
        notificacao.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            if (notificacao.parentNode) {
                notificacao.parentNode.removeChild(notificacao);
            }
        }, 300);
    }, 3000);
}

function configurarIntervalo() {
    if (intervaloId) {
        clearInterval(intervaloId);
    }
    
    intervaloId = setInterval(() => {
        clicarBotaoPuxarChat();
    }, intervaloClick);
    
    const minutos = Math.round(intervaloClick / 60000);
    console.log(`[Ahgora Tools - Zendesk] ⏱️ Intervalo: ${minutos} minutos`);
}

function iniciarAutoPuxar() {
    const minutos = Math.round(intervaloClick / 60000);
    console.log(`[Ahgora Tools - Zendesk] 🚀 Extensão iniciada - Clicando a cada ${minutos} minutos`);
    
    // Inicia o observer para remover notificações do Zendesk
    iniciarObserverNotificacoes();
    
    // Inicia o interceptador do botão "Na fila"
    interceptarBotaoNaFila();
    
    iniciarCronometro();
    
    setTimeout(() => {
        clicarBotaoPuxarChat();
    }, 5000);

    configurarIntervalo();

    setInterval(() => {
        if (ultimoClick) {
            const tempoDecorrido = new Date() - ultimoClick;
            if (tempoDecorrido >= intervaloClick) {
                clicarBotaoPuxarChat();
            }
        }
    }, INTERVALO_VERIFICACAO);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'toggle') {
        notificacoesAtivas = request.value !== undefined ? request.value : !notificacoesAtivas;
        chrome.storage.local.set({ notificacoesAtivas: notificacoesAtivas });
        mostrarNotificacao(notificacoesAtivas ? '🔔 Notificações ATIVADAS' : '🔕 Notificações DESATIVADAS', 'info');
        sendResponse({ notificacoesAtivas: notificacoesAtivas });
    } else if (request.action === 'status') {
        const isOnline = verificarStatusOnline();
        const chatsAtivos = contarChatsAtivos();
        const minutos = Math.round(intervaloClick / 60000);
        
        sendResponse({ 
            notificacoesAtivas: notificacoesAtivas,
            ultimoClick: ultimoClick ? ultimoClick.toLocaleTimeString() : 'Nenhum',
            online: isOnline,
            chatsAtivos: chatsAtivos,
            intervalo: minutos,
            limiteChats: limiteChats,
            tempoOnline: formatarTempo(tempoOnlineSegundos)
        });
    } else if (request.action === 'clickNow') {
        const sucesso = clicarBotaoPuxarChat();
        sendResponse({ sucesso });
    } else if (request.action === 'setIntervalo') {
        const minutos = request.value;
        if (minutos && minutos >= 1 && minutos <= 60) {
            intervaloClick = minutos * 60 * 1000;
            chrome.storage.local.set({ intervaloMinutos: minutos });
            configurarIntervalo();
            mostrarNotificacao(`⏱️ Intervalo alterado para ${minutos} minutos`, 'info');
            sendResponse({ sucesso: true, intervalo: minutos });
        } else {
            sendResponse({ sucesso: false, erro: 'Intervalo deve ser entre 1 e 60 minutos' });
        }
    } else if (request.action === 'setLimiteChats') {
        const limite = request.value;
        if (limite && limite >= 1 && limite <= 10) {
            limiteChats = limite;
            chrome.storage.local.set({ limiteChats: limite });
            mostrarNotificacao(`💬 Limite alterado para ${limite} chats`, 'info');
            sendResponse({ sucesso: true, limiteChats: limite });
        } else {
            sendResponse({ sucesso: false, erro: 'Limite deve ser entre 1 e 10 chats' });
        }
    } else if (request.action === 'setConfirmacaoManual') {
        confirmarCliqueManual = request.value;
        chrome.storage.local.set({ confirmarCliqueManual: confirmarCliqueManual });
        mostrarNotificacao(confirmarCliqueManual ? '🛡️ Confirmação de clique ATIVADA' : '🛡️ Confirmação de clique DESATIVADA', 'info');
        sendResponse({ sucesso: true, confirmarCliqueManual: confirmarCliqueManual });
    } else if (request.action === 'getConfirmacaoManual') {
        sendResponse({ confirmarCliqueManual: confirmarCliqueManual });
    }
    return true;
});

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciarAutoPuxar);
} else {
    iniciarAutoPuxar();
}

chrome.storage.local.get(['notificacoesAtivas', 'intervaloMinutos', 'limiteChats', 'tempoOnlineSegundos', 'confirmarCliqueManual'], function(result) {
    if (result.notificacoesAtivas !== undefined) {
        notificacoesAtivas = result.notificacoesAtivas;
    }
    if (result.intervaloMinutos !== undefined) {
        intervaloClick = result.intervaloMinutos * 60 * 1000;
        console.log(`[Ahgora Tools - Zendesk] ⏱️ Intervalo carregado: ${result.intervaloMinutos} minutos`);
    }
    if (result.limiteChats !== undefined) {
        limiteChats = result.limiteChats;
        console.log(`[Ahgora Tools - Zendesk] 💬 Limite de chats carregado: ${result.limiteChats}`);
    }
    if (result.tempoOnlineSegundos !== undefined) {
        tempoOnlineSegundos = result.tempoOnlineSegundos;
        console.log(`[Ahgora Tools - Zendesk] ⏱️ Tempo online carregado: ${formatarTempo(tempoOnlineSegundos)}`);
    }
    if (result.confirmarCliqueManual !== undefined) {
        confirmarCliqueManual = result.confirmarCliqueManual;
        console.log(`[Ahgora Tools - Zendesk] 🛡️ Confirmação manual: ${confirmarCliqueManual ? 'ATIVA' : 'DESATIVA'}`);
    }
});
