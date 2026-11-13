// ==UserScript==
// @name         Ahgora Tools - Zendesk Simplificado
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Adiciona pesquisa de empresa e cópia rápida de ticket no Zendesk.
// @author       Delean Mafra
// @match        https://totvssuporte.zendesk.com/agent/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/Delean-Mafra/atendimento/refs/heads/main/Ahgora_Tools_Zendesk_Simplificado.user.js
// @downloadURL  https://raw.githubusercontent.com/Delean-Mafra/atendimento/refs/heads/main/Ahgora_Tools_Zendesk_Simplificado.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zendesk.com
// ==/UserScript==

(function () {
    'use strict';

    // Evita rodar no /admin/ do Zendesk
    if (window.location.href.includes('/admin/')) {
        return;
    }

    // ============================================
    // 1. CAIXA DE PESQUISA DE EMPRESA
    // ============================================
    function validarCodigoEmpresa(codigo) {
        const codigoLower = codigo.toLowerCase().trim();
        const regex = /^a\d{6}$/;
        return regex.test(codigoLower);
    }

    function abrirEmpresaAhgora(codigo) {
        const codigoLower = codigo.toLowerCase().trim();
        
        if (!validarCodigoEmpresa(codigoLower)) {
            mostrarNotificacao('❌ Formato inválido! Use: a123456', 'error');
            return false;
        }
        
        const url = `https://app.ahgora.com.br/lista_empresas?empresa=${codigoLower}`;
        window.open(url, '_blank');
        mostrarNotificacao(`✅ Abrindo: ${codigoLower}`, 'success');
        return true;
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
            bottom: 20px;
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
            animation: slideInSearch 0.3s ease-out;
        `;

        if (!document.getElementById('ahgora-tools-styles-search')) {
            const style = document.createElement('style');
            style.id = 'ahgora-tools-styles-search';
            style.textContent = `
                @keyframes slideInSearch {
                    from { transform: translateX(400px); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOutSearch {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(400px); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(notificacao);

        setTimeout(() => {
            notificacao.style.animation = 'slideOutSearch 0.3s ease-in';
            setTimeout(() => {
                if (notificacao.parentNode) {
                    notificacao.parentNode.removeChild(notificacao);
                }
            }, 300);
        }, 3000);
    }

    function criarCaixaPesquisa() {
        // Encontra TODOS os menus de navegação de tickets (abas visíveis e ocultas)
        const navs = document.querySelectorAll('.pane.left.allow-overflow nav');
        if (navs.length === 0) return;

        // Itera sobre cada ticket aberto no Zendesk
        navs.forEach(nav => {
            // Se já injetamos o widget NESTE ticket específico, não faz nada
            if (nav.querySelector('.ahgora-empresa-widget')) {
                return;
            }
            
            // Cria um widget novo exclusivo para esta aba
            const widgetContainer = document.createElement('span');
            widgetContainer.className = 'ember-view btn ahgora-empresa-widget';
            widgetContainer.style.cssText = `
                display: flex;
                align-items: center;
                gap: 6px;
                padding: 8px 12px;
                margin-left: auto;
                cursor: default;
            `;
            
            const label = document.createElement('label');
            label.textContent = '🏢';
            label.style.cssText = `
                color: #60747D;
                font-weight: bold;
                font-size: 14px;
                white-space: nowrap;
                font-family: Arial, sans-serif;
                margin: 0;
                cursor: default;
            `;
            
            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = 'a123456';
            input.maxLength = '7';
            input.className = 'ahgora-empresa-input';
            input.style.cssText = `
                padding: 4px 8px;
                border: 1px solid #ddd;
                border-radius: 3px;
                font-size: 11px;
                font-family: Arial, sans-serif;
                width: 70px;
                outline: none;
                transition: all 0.2s;
            `;
            
            input.addEventListener('focus', function() {
                this.style.borderColor = '#667eea';
                this.style.boxShadow = '0 0 0 2px rgba(102, 126, 234, 0.15)';
            });
            
            input.addEventListener('blur', function() {
                this.style.borderColor = '#ddd';
                this.style.boxShadow = 'none';
            });
            
            const botao = document.createElement('button');
            botao.textContent = '🔍';
            botao.type = 'button';
            botao.className = 'ahgora-empresa-btn';
            botao.style.cssText = `
                padding: 4px 8px;
                background: white;
                color: #60747D;
                border: 1px solid #ddd;
                border-radius: 3px;
                font-weight: bold;
                font-size: 11px;
                font-family: Arial, sans-serif;
                cursor: pointer;
                transition: all 0.2s;
                white-space: nowrap;
                display: flex;
                align-items: center;
                justify-content: center;
                min-width: 24px;
                height: 24px;
            `;
            
            botao.addEventListener('mouseenter', function() {
                this.style.background = '#f0f0f0';
                this.style.borderColor = '#667eea';
            });
            
            botao.addEventListener('mouseleave', function() {
                this.style.background = 'white';
                this.style.borderColor = '#ddd';
            });
            
            botao.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const codigo = input.value;
                if (codigo) {
                    if (abrirEmpresaAhgora(codigo)) {
                        input.value = '';
                        input.focus();
                    }
                } else {
                    mostrarNotificacao('⚠️ Digite o código da empresa!', 'warning');
                }
            });
            
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') botao.click();
            });
            
            widgetContainer.appendChild(label);
            widgetContainer.appendChild(input);
            widgetContainer.appendChild(botao);
            
            nav.appendChild(widgetContainer);
        });
    }

    function iniciarSearchEmpresa() {
        criarCaixaPesquisa();

        let debounce = null;
        const observer = new MutationObserver(() => {
            clearTimeout(debounce);
            
            // Garante que nossa função sempre varra os tickets criados na interface
            debounce = setTimeout(() => {
                criarCaixaPesquisa();
            }, 300);
        });
        
        observer.observe(document.body, { childList: true, subtree: true });
    }

    // ============================================
    // 2. COPIAR TICKET NA LISTA (CLIQUE DIRETO)
    // ============================================
    function extrairNumeroTicket(texto) {
        if (!texto) return null;
        const textoLimpo = texto.trim();
        if (!textoLimpo.includes('#')) return null;
        const match = textoLimpo.match(/#\s*(\d{4,})/);
        return match ? match[1] : null;
    }

    async function copiarTextoParaClipboard(texto) {
        if (!texto) return false;
        if (navigator.clipboard && window.isSecureContext) {
            try {
                await navigator.clipboard.writeText(texto);
                return true;
            } catch (erro) {}
        }
        try {
            const textarea = document.createElement('textarea');
            textarea.value = texto;
            textarea.setAttribute('readonly', '');
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            textarea.style.left = '-9999px';
            document.body.appendChild(textarea);
            textarea.select();
            textarea.setSelectionRange(0, texto.length);
            const copiado = document.execCommand('copy');
            textarea.remove();
            return copiado;
        } catch (erro) {
            return false;
        }
    }

    function interceptarCliqueTicketLista() {
        document.addEventListener('click', function(event) {
            if (!event.isTrusted) return;
            if (event.button !== 0) return; // Apenas botão esquerdo
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            
            const target = event.target;
            if (!(target instanceof Element)) return;
            
            const celulaTicket = target.closest('td[data-test-id="generic-table-cells-id"], [data-test-id="generic-table-cells-id"]');
            if (!celulaTicket) return;
            
            const numeroTicket = extrairNumeroTicket(celulaTicket.textContent);
            if (!numeroTicket) return;

            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();

            copiarTextoParaClipboard(numeroTicket).then((sucesso) => {
                if (sucesso) {
                    mostrarNotificacao(`📋 Ticket ${numeroTicket} copiado!`, 'success');
                } else {
                    mostrarNotificacao('❌ Não foi possível copiar o ticket.', 'error');
                }
            });
        }, true);
    }

    // Inicialização
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            iniciarSearchEmpresa();
            interceptarCliqueTicketLista();
        });
    } else {
        iniciarSearchEmpresa();
        interceptarCliqueTicketLista();
    }
})();
