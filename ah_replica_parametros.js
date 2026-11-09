// ==UserScript==
// @name         Gerenciador Avançado Ahgora (Perfis & Parâmetros)
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Copia, replica, exporta e importa parâmetros de perfis e empresas.
// @author       Delean Mafra
// @match        *://*.ahgora.com.br/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/Delean-Mafra/atendimento/refs/heads/main/ah_replica_parametros.js
// @downloadURL  https://raw.githubusercontent.com/Delean-Mafra/atendimento/refs/heads/main/ah_replica_parametros.js
// ==UserScript==

(function() {
    'use strict';

    // Loop para detectar em qual página estamos e injetar a interface correta quando o HTML carregar
    const init = setInterval(() => {
        const url = window.location.href;

        // 1. Contexto: Página de Regras de Perfis
        if (url.includes('aplica_regras')) {
            const navTabs = document.querySelector('.nav-tabs');
            const perfisUl = document.getElementById('sort-perfis');
            if (navTabs && perfisUl && !document.getElementById('tm-profile-manager')) {
                buildProfileUI(navTabs);
            }
        } 
        
        // 2. Contexto: Página de Acesso Empresa (Parâmetros)
        else if (url.includes('acesso_empresa')) {
            const boxAdminItem = document.getElementById('box_admin_item');
            // Só injeta se a div da empresa atual não estiver oculta e o painel ainda não existir
            if (boxAdminItem && !boxAdminItem.classList.contains('hide') && !document.getElementById('tm-params-manager')) {
                const pageHeader = boxAdminItem.querySelector('.page-header');
                if (pageHeader) {
                    buildParamsUI(pageHeader);
                }
            }
            // Remove a interface caso o usuário volte para a lista geral de empresas sem atualizar a página
            if (boxAdminItem && boxAdminItem.classList.contains('hide')) {
                const painel = document.getElementById('tm-params-manager');
                if (painel) painel.remove();
            }
        }
    }, 1000);

    /* ========================================================================
       MÓDULO 1: GERENCIADOR DE PERFIS (Mantém Import/Export e Seletores)
       ======================================================================== */
    function buildProfileUI(insertTarget) {
        const inputs = document.querySelectorAll('#sort-perfis li.perfil input[type="text"]');
        const perfis = [];
        inputs.forEach(inp => { if (inp.value.trim() !== '') perfis.push(inp.value.trim()); });
        
        const optionsHtml = perfis.map(p => `<option value="${p}">${p}</option>`).join('');

        const painelEl = document.createElement('div');
        painelEl.id = 'tm-profile-manager';
        painelEl.style.cssText = "background: #f4f7f6; padding: 15px; border: 1px solid #dce1e5; margin-bottom: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); display: flex; flex-wrap: wrap; gap: 20px; align-items: flex-end; font-family: sans-serif;";
        
        painelEl.innerHTML = `
            <div style="flex: 1 1 auto; display: flex; gap: 15px; align-items: flex-end;">
                <div>
                    <label style="font-weight: bold; font-size: 12px; color: #555; display: block; margin-bottom: 5px;">Copiar as regras do perfil:</label>
                    <select id="tm-copy-source" class="form-control" style="width: 200px; display: inline-block;">${optionsHtml}</select>
                </div>
                <button id="tm-btn-copy" class="btn btn-primary" style="height: 34px; outline: none;"><span class="glyphicon glyphicon-copy"></span> Copiar</button>
            </div>

            <div style="flex: 1 1 auto; text-align: center; border-left: 1px solid #ccc; border-right: 1px solid #ccc; padding: 0 20px;">
                <div id="tm-status" style="font-size: 13px; margin-bottom: 8px;">Verificando cache...</div>
                <button id="tm-btn-clear" class="btn btn-default btn-xs" style="outline: none;">Limpar Memória</button>
            </div>

            <div style="flex: 1 1 auto; display: flex; gap: 15px; align-items: flex-end;">
                <div>
                    <label style="font-weight: bold; font-size: 12px; color: #555; display: block; margin-bottom: 5px;">Replicar na página atual para:</label>
                    <select id="tm-target-profile" class="form-control" style="width: 200px; display: inline-block;">${optionsHtml}</select>
                </div>
                <button id="tm-btn-replicate" class="btn btn-success" style="height: 34px; outline: none;"><span class="glyphicon glyphicon-paste"></span> Replicar Regras</button>
            </div>

            <div style="flex: 1 1 100%; border-top: 1px solid #e5e5e5; padding-top: 15px; display: flex; justify-content: flex-end; gap: 10px;">
                <span style="margin-right: auto; color: #777; font-size: 12px; align-self: center;"><span class="glyphicon glyphicon-info-sign"></span> Salve a cópia em TXT para usar em computadores ou domínios diferentes.</span>
                <input type="file" id="tm-file-import" accept=".txt" style="display: none;">
                <button id="tm-btn-import" class="btn btn-info btn-sm" style="outline: none;"><span class="glyphicon glyphicon-upload"></span> Fazer Upload de Regras (TXT)</button>
                <button id="tm-btn-export" class="btn btn-info btn-sm" style="outline: none;"><span class="glyphicon glyphicon-download"></span> Baixar Cópia Atual (TXT)</button>
            </div>
        `;

        insertTarget.parentNode.insertBefore(painelEl, insertTarget);

        document.getElementById('tm-btn-copy').addEventListener('click', () => {
            const profile = document.getElementById('tm-copy-source').value;
            const checkboxes = document.querySelectorAll(`input[type="checkbox"][value="${profile}"]`);
            if (checkboxes.length === 0) return alert(`Aviso: Nenhuma permissão encontrada para "${profile}". Verifique se você abriu a aba "Permissões".`);

            const rules = {};
            checkboxes.forEach(cb => { rules[cb.name] = cb.checked; });
            localStorage.setItem('ahgora_profile_cache', JSON.stringify({ profileName: profile, rules: rules }));
            updateProfileStatusUI();
            alert(`Sucesso! Regras do perfil "${profile}" copiadas para a memória.`);
        });

        document.getElementById('tm-btn-replicate').addEventListener('click', () => {
            const cache = localStorage.getItem('ahgora_profile_cache');
            if (!cache) return;
            const parsed = JSON.parse(cache);
            const target = document.getElementById('tm-target-profile').value;
            const checkboxes = document.querySelectorAll(`input[type="checkbox"][value="${target}"]`);
            
            if (checkboxes.length === 0) return alert(`Aviso: O perfil "${target}" não foi encontrado nos checkboxes.`);

            let changes = 0;
            checkboxes.forEach(cb => {
                const origemCheck = parsed.rules[cb.name];
                if (origemCheck !== undefined && cb.checked !== origemCheck) {
                    cb.checked = origemCheck;
                    cb.dispatchEvent(new Event('change', { bubbles: true }));
                    changes++;
                }
            });
            alert(`Replicação concluída!\n${changes} itens alterados no perfil "${target}".\n\n⚠️ NÃO ESQUEÇA DE SALVAR NA PÁGINA.`);
        });

        document.getElementById('tm-btn-clear').addEventListener('click', () => {
            localStorage.removeItem('ahgora_profile_cache');
            updateProfileStatusUI();
        });

        document.getElementById('tm-btn-export').addEventListener('click', () => {
            const cache = localStorage.getItem('ahgora_profile_cache');
            if (!cache) return;
            const parsed = JSON.parse(cache);
            const blob = new Blob([cache], { type: 'text/plain' });
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = `Regras_Perfil_${parsed.profileName.replace(/\s+/g, '_')}.txt`;
            a.click();
            URL.revokeObjectURL(a.href);
        });

        document.getElementById('tm-btn-import').addEventListener('click', () => document.getElementById('tm-file-import').click());
        document.getElementById('tm-file-import').addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const parsed = JSON.parse(e.target.result);
                    if (parsed.profileName && parsed.rules) {
                        localStorage.setItem('ahgora_profile_cache', e.target.result);
                        updateProfileStatusUI();
                        alert(`As regras do perfil "${parsed.profileName}" foram carregadas na memória.`);
                    } else throw new Error();
                } catch (err) { alert('Erro: Arquivo TXT inválido.'); }
            };
            reader.readAsText(file);
            event.target.value = '';
        });

        updateProfileStatusUI();
    }

    function updateProfileStatusUI() {
        const cache = localStorage.getItem('ahgora_profile_cache');
        const statusEl = document.getElementById('tm-status');
        const btnReplicate = document.getElementById('tm-btn-replicate');
        const btnExport = document.getElementById('tm-btn-export');

        if (cache) {
            try {
                const parsed = JSON.parse(cache);
                statusEl.innerHTML = `<span style="color: #3c763d; font-weight: bold;"><span class="glyphicon glyphicon-ok"></span> Em memória: <b>${parsed.profileName}</b></span>`;
                btnReplicate.disabled = false;
                btnExport.disabled = false;
            } catch (e) { localStorage.removeItem('ahgora_profile_cache'); }
        } else {
            statusEl.innerHTML = `<span style="color: #a94442;"><span class="glyphicon glyphicon-warning-sign"></span> Nenhum perfil copiado</span>`;
            btnReplicate.disabled = true;
            btnExport.disabled = true;
        }
    }

    /* ========================================================================
       MÓDULO 2: GERENCIADOR DE PARÂMETROS DA EMPRESA (Apenas Copy/Paste)
       ======================================================================== */
    function buildParamsUI(insertTarget) {
        const painelEl = document.createElement('div');
        painelEl.id = 'tm-params-manager';
        painelEl.style.cssText = "background: #eef2f5; padding: 15px; border: 1px solid #cbd4db; margin: 15px 0; border-radius: 6px; display: flex; align-items: center; justify-content: space-between; font-family: sans-serif;";
        
        painelEl.innerHTML = `
            <div style="display: flex; align-items: center; gap: 15px;">
                <button id="tm-btn-copy-params" class="btn btn-primary" style="outline: none;"><span class="glyphicon glyphicon-copy"></span> Copiar Parâmetros da Empresa</button>
                <div id="tm-status-params" style="font-size: 13px; margin: 0 15px;">Verificando cache...</div>
                <button id="tm-btn-replicate-params" class="btn btn-success" style="outline: none;"><span class="glyphicon glyphicon-paste"></span> Replicar Parâmetros Aqui</button>
            </div>
            <div>
                <button id="tm-btn-clear-params" class="btn btn-default btn-sm" style="outline: none;">Limpar Memória</button>
            </div>
        `;

        // Insere o painel logo abaixo do cabeçalho do nome da empresa
        insertTarget.insertAdjacentElement('afterend', painelEl);

        document.getElementById('tm-btn-copy-params').addEventListener('click', () => {
            const checkboxes = document.querySelectorAll('#box_admin_item input[type="checkbox"]');
            if (checkboxes.length === 0) return alert("Nenhum parâmetro encontrado na tela.");

            const rules = {};
            checkboxes.forEach(cb => { 
                if (cb.id) rules[cb.id] = cb.checked; 
            });

            const nomeEmpresa = document.getElementById('nomeempresa') ? document.getElementById('nomeempresa').innerText : 'Empresa Copiada';
            
            localStorage.setItem('ahgora_params_cache', JSON.stringify({ company: nomeEmpresa, rules: rules }));
            updateParamsStatusUI();
            alert(`Sucesso! ${Object.keys(rules).length} parâmetros copiados da empresa "${nomeEmpresa}".`);
        });

        document.getElementById('tm-btn-replicate-params').addEventListener('click', () => {
            const cache = localStorage.getItem('ahgora_params_cache');
            if (!cache) return;
            
            const parsed = JSON.parse(cache);
            const checkboxes = document.querySelectorAll('#box_admin_item input[type="checkbox"]');
            let changes = 0;

            checkboxes.forEach(cb => {
                const origemCheck = parsed.rules[cb.id];
                if (origemCheck !== undefined && cb.checked !== origemCheck) {
                    cb.checked = origemCheck;
                    cb.dispatchEvent(new Event('change', { bubbles: true }));
                    changes++;
                }
            });

            alert(`Replicação concluída!\n${changes} parâmetros foram alterados com base na "${parsed.company}".\n\n⚠️ NÃO ESQUEÇA DE SALVAR NO FINAL DA PÁGINA.`);
        });

        document.getElementById('tm-btn-clear-params').addEventListener('click', () => {
            localStorage.removeItem('ahgora_params_cache');
            updateParamsStatusUI();
        });

        updateParamsStatusUI();
    }

    function updateParamsStatusUI() {
        const cache = localStorage.getItem('ahgora_params_cache');
        const statusEl = document.getElementById('tm-status-params');
        const btnReplicate = document.getElementById('tm-btn-replicate-params');

        if (cache) {
            try {
                const parsed = JSON.parse(cache);
                statusEl.innerHTML = `<span style="color: #3c763d; font-weight: bold;"><span class="glyphicon glyphicon-ok"></span> Em memória: <b>${parsed.company}</b></span>`;
                btnReplicate.disabled = false;
            } catch (e) { localStorage.removeItem('ahgora_params_cache'); }
        } else {
            statusEl.innerHTML = `<span style="color: #777;"><span class="glyphicon glyphicon-warning-sign"></span> Nenhuma cópia na memória</span>`;
            btnReplicate.disabled = true;
        }
    }

})();
