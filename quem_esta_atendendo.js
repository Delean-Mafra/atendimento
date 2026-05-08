// Script para verificar status dos agentes do grupo "Ahgora - Geral"
(function() {
    // Encontra o departamento "Ahgora - Geral"
    const departamentos = document.querySelectorAll('.meshim_dashboard_components_agentList_Department');
    let departamentoAhgora = null;
    
    for (let dept of departamentos) {
        const nomeDept = dept.querySelector('.jx_ui_Widget.cell_item')?.[0]?.textContent || 
                        dept.querySelector('[__jx__id*="__dept_name"]')?.textContent;
        if (nomeDept && nomeDept.includes('Ahgora - Geral')) {
            departamentoAhgora = dept;
            break;
        }
    }
    
    if (!departamentoAhgora) {
        console.error('Departamento "Ahgora - Geral" não encontrado!');
        return;
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
            chats: chats
        };
        
        if (status === 'online') {
            resultado.online.push(info);
        } else if (status === 'ausente') {
            resultado.ausente.push(info);
        } else if (status === 'offline') {
            resultado.offline.push(info);
        }
    });
    
    // Exibe o resultado formatado
    console.log('\n═══════════════════════════════════════════════════════');
    console.log('           STATUS AGENTES - AHGORA GERAL');
    console.log('═══════════════════════════════════════════════════════\n');
    
    // Online
    console.log('🟢 ONLINE (' + resultado.online.length + '):');
    if (resultado.online.length > 0) {
        resultado.online.forEach(agente => {
            console.log(`   • ${agente.nome} - Chats: ${agente.chats}`);
        });
    } else {
        console.log('   (nenhum agente online)');
    }
    console.log('');
    
    // Ausente
    console.log('🟡 AUSENTE (' + resultado.ausente.length + '):');
    if (resultado.ausente.length > 0) {
        resultado.ausente.forEach(agente => {
            console.log(`   • ${agente.nome} - Chats: ${agente.chats}`);
        });
    } else {
        console.log('   (nenhum agente ausente)');
    }
    console.log('');
    
    // Offline/Invisível
    console.log('⚫ OFFLINE/INVISÍVEL (' + resultado.offline.length + '):');
    if (resultado.offline.length > 0) {
        resultado.offline.forEach(agente => {
            console.log(`   • ${agente.nome} - Chats: ${agente.chats}`);
        });
    } else {
        console.log('   (nenhum agente offline)');
    }
    console.log('');
    
    // Resumo
    console.log('═══════════════════════════════════════════════════════');
    console.log(`TOTAL: ${agentes.length} agentes | Online: ${resultado.online.length} | Ausente: ${resultado.ausente.length} | Offline: ${resultado.offline.length}`);
    console.log('═══════════════════════════════════════════════════════\n');
    
    // Retorna o objeto para uso programático se necessário
    return resultado;
})();
