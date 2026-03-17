/**
 * Ahgora Tools - Content Script para Replicar Perfis
 * 
 * Copyright © 2025 Delean Mafra
 * Todos os direitos reservados
 * 
 * Licença: Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)
 * http://delean-mafra.github.io/Ahtools/CC_BY_NC_4.0
 */

// Script para detectar perfis e replicar permissões

function detectarPerfis() {
    const perfis = new Set();
    
    const checkboxes = document.querySelectorAll('input[type="checkbox"][value]');
    
    checkboxes.forEach(checkbox => {
        const perfilNome = checkbox.value;
        if (perfilNome && perfilNome.trim() !== '') {
            perfis.add(perfilNome);
        }
    });
    
    return Array.from(perfis).sort();
}

function obterIdPerfil(perfilNome) {
    const checkbox = document.querySelector(`input[type="checkbox"][value="${perfilNome}"]`);
    if (checkbox && checkbox.id) {
        const match = checkbox.id.match(/-(\d+)$/);
        if (match) {
            return match[1];
        }
    }
    return null;
}

function replicarPermissoes(perfilOrigem, perfilDestino) {
    console.log(`=== Replicando permissões: ${perfilOrigem} -> ${perfilDestino} ===`);
    
    const idOrigem = obterIdPerfil(perfilOrigem);
    const idDestino = obterIdPerfil(perfilDestino);
    
    if (!idOrigem) {
        return {
            sucesso: false,
            mensagem: `Perfil de origem "${perfilOrigem}" não encontrado!`
        };
    }
    
    if (!idDestino) {
        return {
            sucesso: false,
            mensagem: `Perfil de destino "${perfilDestino}" não encontrado!`
        };
    }
    
    console.log(`ID origem: ${idOrigem}, ID destino: ${idDestino}`);
    
    const checkboxesOrigem = document.querySelectorAll(`input[type="checkbox"][value="${perfilOrigem}"]`);
    
    if (checkboxesOrigem.length === 0) {
        return {
            sucesso: false,
            mensagem: `Nenhum checkbox do perfil "${perfilOrigem}" encontrado!`
        };
    }
    
    console.log(`Total de checkboxes: ${checkboxesOrigem.length}`);
    
    let totalProcessados = 0;
    let totalMarcados = 0;
    let totalDesmarcados = 0;
    let erros = 0;
    
    checkboxesOrigem.forEach(checkboxOrigem => {
        const id = checkboxOrigem.id;
        const idBase = id.replace(`-${idOrigem}`, '');
        const idCheckboxDestino = `${idBase}-${idDestino}`;
        
        const checkboxDestino = document.getElementById(idCheckboxDestino);
        
        if (!checkboxDestino) {
            console.warn(`Checkbox destino não encontrado: ${idCheckboxDestino}`);
            erros++;
            return;
        }
        
        const origemMarcado = checkboxOrigem.checked;
        
        if (origemMarcado && !checkboxDestino.checked) {
            checkboxDestino.checked = true;
            totalMarcados++;
            console.log(`✓ Marcado: ${idCheckboxDestino}`);
        } else if (!origemMarcado && checkboxDestino.checked) {
            checkboxDestino.checked = false;
            totalDesmarcados++;
            console.log(`✗ Desmarcado: ${idCheckboxDestino}`);
        }
        
        totalProcessados++;
    });
    
    console.log('\n=== Resumo ===');
    console.log(`Processados: ${totalProcessados}, Marcados: ${totalMarcados}, Desmarcados: ${totalDesmarcados}, Erros: ${erros}`);
    
    return {
        sucesso: true,
        totalProcessados,
        totalMarcados,
        totalDesmarcados,
        erros,
        mensagem: `Replicação concluída! ${totalMarcados} marcadas, ${totalDesmarcados} desmarcadas.`
    };
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'detectarPerfis') {
        const perfis = detectarPerfis();
        sendResponse({ perfis });
    } else if (request.action === 'replicarPermissoes') {
        const resultado = replicarPermissoes(request.perfilOrigem, request.perfilDestino);
        sendResponse(resultado);
    }
    return true;
});

console.log('🔌 Ahgora Tools - Replicador de Permissões carregado!');
