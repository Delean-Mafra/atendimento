/**
 * Ahgora Tools - Content Script Agentes
 * Script para capturar status dos agentes do Zendesk
 * 
 * Copyright © 2025 Delean Mafra
 * Todos os direitos reservados
 * 
 * Licença: Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)
 * http://delean-mafra.github.io/Ahtools/CC_BY_NC_4.0
 */

// Função para detectar agentes do grupo "Ahgora - Geral"
function detectarAgentesAhgora() {
    try {
        // Encontra o departamento "Ahgora - Geral"
        const departamentos = document.querySelectorAll('.meshim_dashboard_components_agentList_Department');
        let departamentoAhgora = null;
        
        for (let dept of departamentos) {
            const nomeDept = dept.querySelector('.jx_ui_Widget.cell_item')?.textContent || 
                            dept.querySelector('[__jx__id*="__dept_name"]')?.textContent;
            if (nomeDept && nomeDept.includes('Ahgora - Geral')) {
                departamentoAhgora = dept;
                break;
            }
        }
        
        if (!departamentoAhgora) {
            return {
                sucesso: false,
                erro: 'Departamento "Ahgora - Geral" não encontrado'
            };
        }
        
        // Pega todos os agentes do departamento
        const agentes = departamentoAhgora.querySelectorAll('.meshim_dashboard_components_agentList_widgets_Row');
        
        const resultado = {
            online: [],
            ausente: [],
            offline: []
        };
        
        agentes.forEach(agente => {
            // Pega o nome do agente
            const nomeElement = agente.querySelector('[__jx__id*="__display_name"]');
            const nome = nomeElement ? nomeElement.textContent.trim() : 'Desconhecido';
            
            // Pega o status do agente
            const statusElement = agente.querySelector('span[class*="conv_status"]');
            let status = 'desconhecido';
            
            if (statusElement) {
                if (statusElement.classList.contains('conv_status_online')) {
                    status = 'online';
                } else if (statusElement.classList.contains('conv_status_away')) {
                    status = 'ausente';
                } else if (statusElement.classList.contains('conv_status_invisible')) {
                    status = 'offline';
                }
            }
            
            // Pega a quantidade de chats
            const chatsElement = agente.querySelector('[__jx__id*="__chats"]');
            const chats = chatsElement ? chatsElement.textContent.trim() : '― / 0';
            
            // Adiciona ao resultado
            const info = {
                nome: nome,
                chats: chats,
                status: status
            };
            
            if (status === 'online') {
                resultado.online.push(info);
            } else if (status === 'ausente') {
                resultado.ausente.push(info);
            } else if (status === 'offline') {
                resultado.offline.push(info);
            }
        });
        
        return {
            sucesso: true,
            dados: resultado,
            total: agentes.length,
            timestamp: new Date().toLocaleTimeString('pt-BR')
        };
        
    } catch (error) {
        return {
            sucesso: false,
            erro: error.message
        };
    }
}

// Listener para mensagens do popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getAgentes') {
        const resultado = detectarAgentesAhgora();
        sendResponse(resultado);
    }
    return true;
});
