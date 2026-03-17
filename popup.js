/**
 * Ahgora Tools - Suite de Ferramentas
 * Popup Script Unificado
 * 
 * Copyright © 2025 Delean Mafra
 * Todos os direitos reservados
 * 
 * Licença: Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)
 * http://delean-mafra.github.io/Ahtools/CC_BY_NC_4.0
 */

document.addEventListener('DOMContentLoaded', function() {
    // ============================================
    // SISTEMA DE ABAS
    // ============================================
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;
            
            // Remove active de todos
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Adiciona active no selecionado
            button.classList.add('active');
            document.getElementById(`tab-${tabId}`).classList.add('active');
        });
    });

    // ============================================
    // SISTEMA DE SEGURANÇA CRC-16 (COMPARTILHADO)
    // ============================================
    
    // Tabela CRC-16 Kermit
    const CRC16_TABLE = [
        0x0000, 0x1189, 0x2312, 0x329B, 0x4624, 0x57AD, 0x6536, 0x74BF,
        0x8C48, 0x9DC1, 0xAF5A, 0xBED3, 0xCA6C, 0xDBE5, 0xE97E, 0xF8F7,
        0x1081, 0x0108, 0x3393, 0x221A, 0x56A5, 0x472C, 0x75B7, 0x643E,
        0x9CC9, 0x8D40, 0xBFDB, 0xAE52, 0xDAED, 0xCB64, 0xF9FF, 0xE876,
        0x2102, 0x308B, 0x0210, 0x1399, 0x6726, 0x76AF, 0x4434, 0x55BD,
        0xAD4A, 0xBCC3, 0x8E58, 0x9FD1, 0xEB6E, 0xFAE7, 0xC87C, 0xD9F5,
        0x3183, 0x200A, 0x1291, 0x0318, 0x77A7, 0x662E, 0x54B5, 0x453C,
        0xBDCB, 0xAC42, 0x9ED9, 0x8F50, 0xFBEF, 0xEA66, 0xD8FD, 0xC974,
        0x4204, 0x538D, 0x6116, 0x709F, 0x0420, 0x15A9, 0x2732, 0x36BB,
        0xCE4C, 0xDFC5, 0xED5E, 0xFCD7, 0x8868, 0x99E1, 0xAB7A, 0xBAF3,
        0x5285, 0x430C, 0x7197, 0x601E, 0x14A1, 0x0528, 0x37B3, 0x263A,
        0xDECD, 0xCF44, 0xFDDF, 0xEC56, 0x98E9, 0x8960, 0xBBFB, 0xAA72,
        0x6306, 0x728F, 0x4014, 0x519D, 0x2522, 0x34AB, 0x0630, 0x17B9,
        0xEF4E, 0xFEC7, 0xCC5C, 0xDDD5, 0xA96A, 0xB8E3, 0x8A78, 0x9BF1,
        0x7387, 0x620E, 0x5095, 0x411C, 0x35A3, 0x242A, 0x16B1, 0x0738,
        0xFFCF, 0xEE46, 0xDCDD, 0xCD54, 0xB9EB, 0xA862, 0x9AF9, 0x8B70,
        0x8408, 0x9581, 0xA71A, 0xB693, 0xC22C, 0xD3A5, 0xE13E, 0xF0B7,
        0x0840, 0x19C9, 0x2B52, 0x3ADB, 0x4E64, 0x5FED, 0x6D76, 0x7CFF,
        0x9489, 0x8500, 0xB79B, 0xA612, 0xD2AD, 0xC324, 0xF1BF, 0xE036,
        0x18C1, 0x0948, 0x3BD3, 0x2A5A, 0x5EE5, 0x4F6C, 0x7DF7, 0x6C7E,
        0xA50A, 0xB483, 0x8618, 0x9791, 0xE32E, 0xF2A7, 0xC03C, 0xD1B5,
        0x2942, 0x38CB, 0x0A50, 0x1BD9, 0x6F66, 0x7EEF, 0x4C74, 0x5DFD,
        0xB58B, 0xA402, 0x9699, 0x8710, 0xF3AF, 0xE226, 0xD0BD, 0xC134,
        0x39C3, 0x284A, 0x1AD1, 0x0B58, 0x7FE7, 0x6E6E, 0x5CF5, 0x4D7C,
        0xC60C, 0xD785, 0xE51E, 0xF497, 0x8028, 0x91A1, 0xA33A, 0xB2B3,
        0x4A44, 0x5BCD, 0x6956, 0x78DF, 0x0C60, 0x1DE9, 0x2F72, 0x3EFB,
        0xD68D, 0xC704, 0xF59F, 0xE416, 0x90A9, 0x8120, 0xB3BB, 0xA232,
        0x5AC5, 0x4B4C, 0x79D7, 0x685E, 0x1CE1, 0x0D68, 0x3FF3, 0x2E7A,
        0xE70E, 0xF687, 0xC41C, 0xD595, 0xA12A, 0xB0A3, 0x8238, 0x93B1,
        0x6B46, 0x7ACF, 0x4854, 0x59DD, 0x2D62, 0x3CEB, 0x0E70, 0x1FF9,
        0xF78F, 0xE606, 0xD49D, 0xC514, 0xB1AB, 0xA022, 0x92B9, 0x8330,
        0x7BC7, 0x6A4E, 0x58D5, 0x495C, 0x3DE3, 0x2C6A, 0x1EF1, 0x0F78
    ];
    
    // Função CRC-16 Kermit
    function crc16Kermit(data) {
        let crc = 0x0000;
        for (let i = 0; i < data.length; i++) {
            const byte = data.charCodeAt(i) & 0xFF;
            crc = CRC16_TABLE[(crc ^ byte) & 0xFF] ^ (crc >> 8);
        }
        return crc & 0xFFFF;
    }
    
    // Função para gerar o número base da data
    function gerarNumeroBase() {
        const hoje = new Date();
        const dia = hoje.getDate();
        const mes = hoje.getMonth() + 1;
        const ano = hoje.getFullYear();
        
        const numero = ((dia * 17) + (mes * 31) + ano) % 9000 + 1000;
        return numero.toString();
    }
    
    // Função para gerar o código diário completo (NÚMERO-CRC16)
    function gerarCodigoDiario() {
        const numero = gerarNumeroBase();
        const crc = crc16Kermit(numero);
        const crcHex = crc.toString(16).toUpperCase().padStart(4, '0');
        return `${numero}-${crcHex}`;
    }
    
    // Função para validar código digitado
    function validarCodigo(codigo) {
        if (!codigo.includes('-')) {
            return false;
        }
        
        const partes = codigo.toUpperCase().split('-');
        if (partes.length !== 2) {
            return false;
        }
        
        const [numero, crcFornecido] = partes;
        
        if (!/^\d{4}$/.test(numero)) {
            return false;
        }
        
        if (!/^[0-9A-F]{4}$/.test(crcFornecido)) {
            return false;
        }
        
        const crcCalculado = crc16Kermit(numero).toString(16).toUpperCase().padStart(4, '0');
        
        return crcFornecido === crcCalculado;
    }

    // ============================================
    // TAB 1: AUTO PUXA CHAT ZENDESK
    // ============================================
    const statusElement = document.getElementById('status');
    const statusOnlineElement = document.getElementById('statusOnline');
    const chatsAtivosElement = document.getElementById('chatsAtivos');
    const ultimoClickElement = document.getElementById('ultimoClick');
    const intervaloAtualElement = document.getElementById('intervaloAtual');
    const tempoOnlineElement = document.getElementById('tempoOnline');
    const clickNowButton = document.getElementById('clickNow');
    const toggleExtension = document.getElementById('toggleExtension');
    const intervaloInput = document.getElementById('intervaloInput');
    const salvarIntervaloButton = document.getElementById('salvarIntervalo');
    const limiteChatsInput = document.getElementById('limiteChatsInput');
    const salvarLimiteChatsButton = document.getElementById('salvarLimiteChats');
    
    // Elementos de segurança Zendesk
    const securityCodeZendesk = document.getElementById('securityCodeZendesk');
    const btnUnlockZendesk = document.getElementById('btnUnlockZendesk');
    const securityStatusZendesk = document.getElementById('securityStatusZendesk');
    const intervaloConfig = document.getElementById('intervaloConfig');
    const limiteConfig = document.getElementById('limiteChatsConfig');

    let limiteChatsAtual = 3;
    let configZendeskDesbloqueada = false;
    
    // Elemento toggle de confirmação manual
    const toggleConfirmacaoManual = document.getElementById('toggleConfirmacaoManual');
    
    // Carrega o estado salvo
    chrome.storage.local.get(['notificacoesAtivas', 'intervaloMinutos', 'limiteChats', 'confirmarCliqueManual'], function(result) {
        const notifAtivas = result.notificacoesAtivas !== undefined ? result.notificacoesAtivas : true;
        toggleExtension.checked = notifAtivas;
        
        const intervalo = result.intervaloMinutos !== undefined ? result.intervaloMinutos : 5;
        intervaloInput.value = intervalo;
        
        limiteChatsAtual = result.limiteChats !== undefined ? result.limiteChats : 3;
        limiteChatsInput.value = limiteChatsAtual;
        
        // Confirmação de clique manual (ativo por padrão)
        const confirmarManual = result.confirmarCliqueManual !== undefined ? result.confirmarCliqueManual : true;
        toggleConfirmacaoManual.checked = confirmarManual;
    });

    // Toggle de notificações
    toggleExtension.addEventListener('change', function() {
        const notifAtivas = this.checked;
        chrome.storage.local.set({ notificacoesAtivas: notifAtivas });
        
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            if (tabs[0]) {
                chrome.tabs.sendMessage(tabs[0].id, { 
                    action: 'toggle',
                    value: notifAtivas 
                }, function(response) {
                    if (response) {
                        atualizarStatusZendesk();
                    }
                });
            }
        });
    });

    // Toggle de confirmação para clique manual
    toggleConfirmacaoManual.addEventListener('change', function() {
        const confirmarManual = this.checked;
        chrome.storage.local.set({ confirmarCliqueManual: confirmarManual });
        
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            if (tabs[0]) {
                chrome.tabs.sendMessage(tabs[0].id, { 
                    action: 'setConfirmacaoManual',
                    value: confirmarManual 
                }, function(response) {
                    // Estado atualizado no content script
                });
            }
        });
    });

    // Função para desbloquear configurações Zendesk
    function desbloquearConfiguracoesZendesk() {
        const codigoDigitado = securityCodeZendesk.value.trim().toUpperCase();
        const codigoCorreto = gerarCodigoDiario();
        
        if (validarCodigo(codigoDigitado) && codigoDigitado === codigoCorreto) {
            configZendeskDesbloqueada = true;
            
            intervaloConfig.classList.remove('config-locked');
            limiteConfig.classList.remove('config-locked');
            intervaloInput.disabled = false;
            limiteChatsInput.disabled = false;
            salvarIntervaloButton.disabled = false;
            salvarLimiteChatsButton.disabled = false;
            
            securityStatusZendesk.textContent = '🔓 Configurações desbloqueadas';
            securityStatusZendesk.style.color = '#28a745';
            
            btnUnlockZendesk.textContent = '✓ Desbloqueado';
            btnUnlockZendesk.style.backgroundColor = '#28a745';
            
            setTimeout(() => {
                btnUnlockZendesk.textContent = '🔓 Desbloquear Configurações';
                btnUnlockZendesk.style.backgroundColor = '';
            }, 2000);
            
            securityCodeZendesk.value = '';
        } else {
            securityStatusZendesk.textContent = '❌ Código inválido';
            securityStatusZendesk.style.color = '#dc3545';
            
            btnUnlockZendesk.textContent = '✗ Inválido';
            btnUnlockZendesk.style.backgroundColor = '#dc3545';
            
            setTimeout(() => {
                btnUnlockZendesk.textContent = '🔓 Desbloquear Configurações';
                btnUnlockZendesk.style.backgroundColor = '';
                securityStatusZendesk.textContent = '🔒 Configurações bloqueadas';
                securityStatusZendesk.style.color = '#dc3545';
            }, 2000);
        }
    }
    
    btnUnlockZendesk.addEventListener('click', desbloquearConfiguracoesZendesk);
    securityCodeZendesk.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') desbloquearConfiguracoesZendesk();
    });

    // Atualiza o status Zendesk
    function atualizarStatusZendesk() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            if (tabs[0]) {
                chrome.tabs.sendMessage(tabs[0].id, { action: 'status' }, function(response) {
                    if (response) {
                        statusElement.textContent = response.notificacoesAtivas ? 'Ativas' : 'Desativadas';
                        statusElement.className = response.notificacoesAtivas ? 'status-value status-active' : 'status-value status-inactive';
                        
                        if (response.online !== undefined) {
                            statusOnlineElement.textContent = response.online ? '🟢 Online' : '🔴 Offline';
                            statusOnlineElement.className = response.online ? 'status-value status-active' : 'status-value status-inactive';
                        }
                        
                        if (response.tempoOnline !== undefined) {
                            tempoOnlineElement.textContent = response.tempoOnline;
                        }
                        
                        if (response.chatsAtivos !== undefined) {
                            const limite = response.limiteChats || limiteChatsAtual;
                            chatsAtivosElement.textContent = `${response.chatsAtivos}/${limite}`;
                            chatsAtivosElement.className = response.chatsAtivos >= limite ? 'status-value status-inactive' : 'status-value status-active';
                        }
                        
                        if (response.limiteChats !== undefined) {
                            limiteChatsAtual = response.limiteChats;
                            limiteChatsInput.value = response.limiteChats;
                        }
                        
                        if (response.intervalo !== undefined) {
                            intervaloAtualElement.textContent = `${response.intervalo} minutos`;
                            intervaloInput.value = response.intervalo;
                        }
                        
                        ultimoClickElement.textContent = response.ultimoClick;
                    }
                });
            }
        });
    }

    // Botão puxar agora
    clickNowButton.addEventListener('click', function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            if (tabs[0]) {
                chrome.tabs.sendMessage(tabs[0].id, { action: 'clickNow' }, function(response) {
                    if (response && response.sucesso) {
                        setTimeout(atualizarStatusZendesk, 500);
                        clickNowButton.textContent = '✓ Clicado!';
                        clickNowButton.style.backgroundColor = '#28a745';
                        setTimeout(() => {
                            clickNowButton.textContent = 'Puxar Agora';
                            clickNowButton.style.backgroundColor = '';
                        }, 2000);
                    } else {
                        clickNowButton.textContent = '✗ Erro';
                        clickNowButton.style.backgroundColor = '#dc3545';
                        setTimeout(() => {
                            clickNowButton.textContent = 'Puxar Agora';
                            clickNowButton.style.backgroundColor = '';
                        }, 2000);
                    }
                });
            }
        });
    });

    // Atualiza status ao abrir e a cada 2 segundos
    atualizarStatusZendesk();
    setInterval(atualizarStatusZendesk, 2000);

    // Salvar intervalo
    salvarIntervaloButton.addEventListener('click', function() {
        const minutos = parseInt(intervaloInput.value);
        
        if (isNaN(minutos) || minutos < 1 || minutos > 60) {
            salvarIntervaloButton.textContent = '✗ Inválido';
            salvarIntervaloButton.style.backgroundColor = '#dc3545';
            setTimeout(() => {
                salvarIntervaloButton.textContent = 'Salvar';
                salvarIntervaloButton.style.backgroundColor = '';
            }, 2000);
            return;
        }
        
        chrome.storage.local.set({ intervaloMinutos: minutos });
        
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            if (tabs[0]) {
                chrome.tabs.sendMessage(tabs[0].id, { 
                    action: 'setIntervalo',
                    value: minutos 
                }, function(response) {
                    if (response && response.sucesso) {
                        salvarIntervaloButton.textContent = '✓ Salvo!';
                        salvarIntervaloButton.style.backgroundColor = '#28a745';
                        intervaloAtualElement.textContent = `${minutos} minutos`;
                        setTimeout(() => {
                            salvarIntervaloButton.textContent = 'Salvar';
                            salvarIntervaloButton.style.backgroundColor = '';
                        }, 2000);
                    }
                });
            }
        });
    });

    intervaloInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') salvarIntervaloButton.click();
    });

    // Salvar limite de chats
    salvarLimiteChatsButton.addEventListener('click', function() {
        const limite = parseInt(limiteChatsInput.value);
        
        if (isNaN(limite) || limite < 1 || limite > 10) {
            salvarLimiteChatsButton.textContent = '✗ Inválido';
            salvarLimiteChatsButton.style.backgroundColor = '#dc3545';
            setTimeout(() => {
                salvarLimiteChatsButton.textContent = 'Salvar';
                salvarLimiteChatsButton.style.backgroundColor = '';
            }, 2000);
            return;
        }
        
        chrome.storage.local.set({ limiteChats: limite });
        limiteChatsAtual = limite;
        
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            if (tabs[0]) {
                chrome.tabs.sendMessage(tabs[0].id, { 
                    action: 'setLimiteChats',
                    value: limite 
                }, function(response) {
                    if (response && response.sucesso) {
                        salvarLimiteChatsButton.textContent = '✓ Salvo!';
                        salvarLimiteChatsButton.style.backgroundColor = '#28a745';
                        atualizarStatusZendesk();
                        setTimeout(() => {
                            salvarLimiteChatsButton.textContent = 'Salvar';
                            salvarLimiteChatsButton.style.backgroundColor = '';
                        }, 2000);
                    }
                });
            }
        });
    });

    limiteChatsInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') salvarLimiteChatsButton.click();
    });

    // ============================================
    // TAB 2: CLONAR PERFIL PONTOWEB
    // ============================================
    const btnDetectar = document.getElementById('btnDetectar');
    const btnReplicar = document.getElementById('btnReplicar');
    const perfilOrigemSelect = document.getElementById('perfilOrigem');
    const perfilDestinoSelect = document.getElementById('perfilDestino');
    const perfisSection = document.getElementById('perfisSection');
    const mensagemPerfilDiv = document.getElementById('mensagemPerfil');
    const perfilFunctionContent = document.getElementById('perfilFunctionContent');
    
    // Elementos de segurança Perfil
    const securityCodePerfil = document.getElementById('securityCodePerfil');
    const btnUnlockPerfil = document.getElementById('btnUnlockPerfil');
    const securityStatusPerfil = document.getElementById('securityStatusPerfil');
    
    let perfilDesbloqueado = false;

    // Função para mostrar mensagem
    function mostrarMensagemPerfil(texto, tipo = 'info') {
        mensagemPerfilDiv.textContent = texto;
        mensagemPerfilDiv.className = `mensagem ${tipo}`;
        mensagemPerfilDiv.style.display = 'block';
        
        if (tipo === 'sucesso') {
            setTimeout(() => {
                mensagemPerfilDiv.style.display = 'none';
            }, 5000);
        }
    }

    function limparMensagemPerfil() {
        mensagemPerfilDiv.style.display = 'none';
    }

    // Função para popular os selects com os perfis
    function popularSelects(perfis) {
        perfilOrigemSelect.innerHTML = '<option value="">Selecione o perfil de origem...</option>';
        perfilDestinoSelect.innerHTML = '<option value="">Selecione o perfil de destino...</option>';
        
        perfis.forEach(perfil => {
            const optionOrigem = document.createElement('option');
            optionOrigem.value = perfil;
            optionOrigem.textContent = perfil;
            perfilOrigemSelect.appendChild(optionOrigem);
            
            const optionDestino = document.createElement('option');
            optionDestino.value = perfil;
            optionDestino.textContent = perfil;
            perfilDestinoSelect.appendChild(optionDestino);
        });
    }

    // Verificar se pode habilitar botão de replicar
    function verificarHabilitarBotao() {
        const origemSelecionado = perfilOrigemSelect.value !== '';
        const destinoSelecionado = perfilDestinoSelect.value !== '';
        const saoDiferentes = perfilOrigemSelect.value !== perfilDestinoSelect.value;
        
        btnReplicar.disabled = !(origemSelecionado && destinoSelecionado && saoDiferentes && perfilDesbloqueado);
        
        if (origemSelecionado && destinoSelecionado && !saoDiferentes) {
            mostrarMensagemPerfil('⚠️ Os perfis de origem e destino devem ser diferentes!', 'aviso');
        } else {
            limparMensagemPerfil();
        }
    }

    // Função para desbloquear função de clonar perfil
    function desbloquearPerfil() {
        const codigoDigitado = securityCodePerfil.value.trim().toUpperCase();
        const codigoCorreto = gerarCodigoDiario();
        
        if (validarCodigo(codigoDigitado) && codigoDigitado === codigoCorreto) {
            perfilDesbloqueado = true;
            
            perfilFunctionContent.classList.remove('function-locked');
            btnDetectar.disabled = false;
            perfilOrigemSelect.disabled = false;
            perfilDestinoSelect.disabled = false;
            
            securityStatusPerfil.textContent = '🔓 Função desbloqueada';
            securityStatusPerfil.style.color = '#28a745';
            
            btnUnlockPerfil.textContent = '✓ Desbloqueado';
            btnUnlockPerfil.style.backgroundColor = '#28a745';
            
            setTimeout(() => {
                btnUnlockPerfil.textContent = '🔓 Desbloquear Função';
                btnUnlockPerfil.style.backgroundColor = '';
            }, 2000);
            
            securityCodePerfil.value = '';
        } else {
            securityStatusPerfil.textContent = '❌ Código inválido';
            securityStatusPerfil.style.color = '#dc3545';
            
            btnUnlockPerfil.textContent = '✗ Inválido';
            btnUnlockPerfil.style.backgroundColor = '#dc3545';
            
            setTimeout(() => {
                btnUnlockPerfil.textContent = '🔓 Desbloquear Função';
                btnUnlockPerfil.style.backgroundColor = '';
                securityStatusPerfil.textContent = '🔒 Função bloqueada - Insira o código diário';
                securityStatusPerfil.style.color = '#dc3545';
            }, 2000);
        }
    }

    btnUnlockPerfil.addEventListener('click', desbloquearPerfil);
    securityCodePerfil.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') desbloquearPerfil();
    });

    // Detectar perfis
    btnDetectar.addEventListener('click', async () => {
        if (!perfilDesbloqueado) {
            mostrarMensagemPerfil('⚠️ Desbloqueie a função primeiro!', 'aviso');
            return;
        }
        
        limparMensagemPerfil();
        btnDetectar.disabled = true;
        btnDetectar.textContent = '🔄 Detectando...';
        
        try {
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            
            chrome.tabs.sendMessage(tab.id, { action: 'detectarPerfis' }, (response) => {
                if (chrome.runtime.lastError) {
                    mostrarMensagemPerfil('❌ Erro: Não foi possível acessar a página. Recarregue a página e tente novamente.', 'erro');
                    btnDetectar.disabled = false;
                    btnDetectar.textContent = '🔍 Detectar Perfis na Página';
                    return;
                }
                
                if (response && response.perfis && response.perfis.length > 0) {
                    popularSelects(response.perfis);
                    perfisSection.style.display = 'block';
                    mostrarMensagemPerfil(`✅ ${response.perfis.length} perfil(is) detectado(s): ${response.perfis.join(', ')}`, 'sucesso');
                } else {
                    mostrarMensagemPerfil('⚠️ Nenhum perfil foi detectado na página.', 'aviso');
                }
                
                btnDetectar.disabled = false;
                btnDetectar.textContent = '🔍 Detectar Perfis na Página';
            });
        } catch (error) {
            mostrarMensagemPerfil(`❌ Erro: ${error.message}`, 'erro');
            btnDetectar.disabled = false;
            btnDetectar.textContent = '🔍 Detectar Perfis na Página';
        }
    });

    // Replicar permissões
    btnReplicar.addEventListener('click', async () => {
        if (!perfilDesbloqueado) {
            mostrarMensagemPerfil('⚠️ Desbloqueie a função primeiro!', 'aviso');
            return;
        }
        
        const perfilOrigem = perfilOrigemSelect.value;
        const perfilDestino = perfilDestinoSelect.value;
        
        if (!perfilOrigem || !perfilDestino) {
            mostrarMensagemPerfil('⚠️ Selecione os perfis de origem e destino!', 'aviso');
            return;
        }
        
        if (perfilOrigem === perfilDestino) {
            mostrarMensagemPerfil('⚠️ Os perfis de origem e destino devem ser diferentes!', 'aviso');
            return;
        }
        
        limparMensagemPerfil();
        btnReplicar.disabled = true;
        btnReplicar.textContent = '🔄 Replicando...';
        
        try {
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            
            chrome.tabs.sendMessage(tab.id, {
                action: 'replicarPermissoes',
                perfilOrigem,
                perfilDestino
            }, (response) => {
                if (chrome.runtime.lastError) {
                    mostrarMensagemPerfil('❌ Erro: Não foi possível acessar a página.', 'erro');
                    btnReplicar.disabled = false;
                    btnReplicar.textContent = '✅ Replicar Permissões';
                    return;
                }
                
                if (response.sucesso) {
                    mostrarMensagemPerfil(
                        `✅ ${response.mensagem}\n\n` +
                        `📊 Detalhes:\n` +
                        `   • Total processado: ${response.totalProcessados}\n` +
                        `   • Marcados: ${response.totalMarcados}\n` +
                        `   • Desmarcados: ${response.totalDesmarcados}\n` +
                        `   • Erros: ${response.erros}\n\n` +
                        `⚠️ Não esqueça de clicar em "Salvar" na página!`,
                        'sucesso'
                    );
                } else {
                    mostrarMensagemPerfil(`❌ ${response.mensagem}`, 'erro');
                }
                
                btnReplicar.disabled = false;
                btnReplicar.textContent = '✅ Replicar Permissões';
                verificarHabilitarBotao();
            });
        } catch (error) {
            mostrarMensagemPerfil(`❌ Erro: ${error.message}`, 'erro');
            btnReplicar.disabled = false;
            btnReplicar.textContent = '✅ Replicar Permissões';
        }
    });

    perfilOrigemSelect.addEventListener('change', verificarHabilitarBotao);
    perfilDestinoSelect.addEventListener('change', verificarHabilitarBotao);

    // ============================================
    // TAB 3: TROCAR BASE AHGORA
    // ============================================
    const codigoInput = document.getElementById('codigoInput');
    const confirmarBtn = document.getElementById('confirmarBtn');

    function abrirLinkAhgora() {
        const codigo = codigoInput.value.trim();
        
        if (codigo === '') {
            alert('Por favor, digite um código válido');
            return;
        }
        
        const url = `https://app.ahgora.com.br/lista_empresas?empresa=${codigo}`;
        chrome.tabs.create({ url: url });
        window.close();
    }

    confirmarBtn.addEventListener('click', abrirLinkAhgora);
    codigoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') abrirLinkAhgora();
    });
    
    // Foca no input quando a aba Ahgora é selecionada
    document.querySelector('[data-tab="ahgora"]').addEventListener('click', () => {
        setTimeout(() => codigoInput.focus(), 100);
    });

    // ============================================
    // TAB 4: STATUS AGENTES
    // ============================================
    const btnAtualizarAgentes = document.getElementById('btnAtualizarAgentes');
    const agentesLoading = document.getElementById('agentesLoading');
    const agentesErro = document.getElementById('agentesErro');
    const agentesResumo = document.getElementById('agentesResumo');
    const agentesLista = document.getElementById('agentesLista');
    const agentesTimestamp = document.getElementById('agentesTimestamp');
    
    const totalAgentes = document.getElementById('totalAgentes');
    const totalOnline = document.getElementById('totalOnline');
    const totalAusente = document.getElementById('totalAusente');
    const totalOffline = document.getElementById('totalOffline');
    
    const countOnline = document.getElementById('countOnline');
    const countAusente = document.getElementById('countAusente');
    const countOffline = document.getElementById('countOffline');
    
    const listaOnline = document.getElementById('listaOnline');
    const listaAusente = document.getElementById('listaAusente');
    const listaOffline = document.getElementById('listaOffline');
    
    const timestampValor = document.getElementById('timestampValor');

    // Função para criar um item de agente
    function criarItemAgente(agente) {
        const div = document.createElement('div');
        div.className = 'agente-item';
        
        const nomeSpan = document.createElement('span');
        nomeSpan.className = 'agente-nome';
        nomeSpan.textContent = agente.nome;
        
        const chatsSpan = document.createElement('span');
        chatsSpan.className = 'agente-chats';
        chatsSpan.textContent = `💬 ${agente.chats}`;
        
        div.appendChild(nomeSpan);
        div.appendChild(chatsSpan);
        
        return div;
    }

    // Função para atualizar a lista de agentes
    function atualizarListaAgentes() {
        // Mostra loading
        agentesLoading.style.display = 'block';
        agentesErro.style.display = 'none';
        agentesResumo.style.display = 'none';
        agentesLista.style.display = 'none';
        agentesTimestamp.style.display = 'none';
        
        btnAtualizarAgentes.disabled = true;
        btnAtualizarAgentes.textContent = '🔄 Atualizando...';

        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            if (!tabs[0]) {
                agentesLoading.style.display = 'none';
                agentesErro.style.display = 'block';
                agentesErro.textContent = '❌ Erro: Nenhuma aba ativa encontrada';
                btnAtualizarAgentes.disabled = false;
                btnAtualizarAgentes.textContent = '🔄 Atualizar';
                return;
            }

            // Verifica se está na página correta
            if (!tabs[0].url || !tabs[0].url.includes('zendesk.com/chat')) {
                agentesLoading.style.display = 'none';
                agentesErro.style.display = 'block';
                agentesErro.textContent = '⚠️ Esta funcionalidade só está disponível na página do Zendesk Chat (https://totvssuporte.zendesk.com/chat/)';
                btnAtualizarAgentes.disabled = false;
                btnAtualizarAgentes.textContent = '🔄 Atualizar';
                return;
            }

            chrome.tabs.sendMessage(tabs[0].id, { action: 'getAgentes' }, function(response) {
                agentesLoading.style.display = 'none';
                btnAtualizarAgentes.disabled = false;
                btnAtualizarAgentes.textContent = '🔄 Atualizar';

                if (chrome.runtime.lastError) {
                    agentesErro.style.display = 'block';
                    agentesErro.textContent = `❌ Erro de comunicação: ${chrome.runtime.lastError.message}`;
                    return;
                }

                if (!response || !response.sucesso) {
                    agentesErro.style.display = 'block';
                    agentesErro.textContent = `❌ ${response?.erro || 'Erro desconhecido ao buscar agentes'}`;
                    return;
                }

                // Sucesso! Exibe os dados
                const dados = response.dados;
                
                // Atualiza resumo
                totalAgentes.textContent = response.total;
                totalOnline.textContent = dados.online.length;
                totalAusente.textContent = dados.ausente.length;
                totalOffline.textContent = dados.offline.length;
                
                // Atualiza contadores dos grupos
                countOnline.textContent = `(${dados.online.length})`;
                countAusente.textContent = `(${dados.ausente.length})`;
                countOffline.textContent = `(${dados.offline.length})`;
                
                // Limpa listas
                listaOnline.innerHTML = '';
                listaAusente.innerHTML = '';
                listaOffline.innerHTML = '';
                
                // Preenche lista de online
                if (dados.online.length > 0) {
                    listaOnline.classList.remove('empty');
                    dados.online.forEach(agente => {
                        listaOnline.appendChild(criarItemAgente(agente));
                    });
                } else {
                    listaOnline.classList.add('empty');
                }
                
                // Preenche lista de ausentes
                if (dados.ausente.length > 0) {
                    listaAusente.classList.remove('empty');
                    dados.ausente.forEach(agente => {
                        listaAusente.appendChild(criarItemAgente(agente));
                    });
                } else {
                    listaAusente.classList.add('empty');
                }
                
                // Preenche lista de offline
                if (dados.offline.length > 0) {
                    listaOffline.classList.remove('empty');
                    dados.offline.forEach(agente => {
                        listaOffline.appendChild(criarItemAgente(agente));
                    });
                } else {
                    listaOffline.classList.add('empty');
                }
                
                // Atualiza timestamp
                timestampValor.textContent = response.timestamp;
                
                // Mostra tudo
                agentesResumo.style.display = 'grid';
                agentesLista.style.display = 'block';
                agentesTimestamp.style.display = 'block';
            });
        });
    }

    // Event listener do botão atualizar
    btnAtualizarAgentes.addEventListener('click', atualizarListaAgentes);

    // Atualiza automaticamente quando a aba de agentes é aberta
    document.querySelector('[data-tab="agentes"]').addEventListener('click', () => {
        setTimeout(() => {
            // Só atualiza se ainda não houver dados
            if (agentesResumo.style.display === 'none' && agentesErro.style.display === 'none') {
                atualizarListaAgentes();
            }
        }, 100);
    });
});
