# 🛠️ Controle de Visibilidade do Balão Ahtools

## O que foi adicionado?

Uma nova opção na aba **Auto Chat** da extensão para controlar a visibilidade do balão (FAB - Floating Action Button) que aparece nas páginas.

## Como funciona?

### Na Extensão
1. Abra a extensão **Ahgora Tools**
2. Acesse a aba **🤖 Auto Chat**
3. Procure pela opção **🛠️ Mostrar balão Ahtools**
4. Use o toggle para ativar ou desativar

### Comportamento
- **✅ ATIVADO (padrão)**: O balão 🛠️ aparece no canto inferior direito das páginas
- **❌ DESATIVADO**: O balão desaparece de todas as páginas abertas em tempo real

## Armazenamento

A preferência é salva automaticamente em:
- **Local**: `chrome.storage.local` com a chave `mostrarFAB`
- **Persistência**: A configuração é mantida mesmo após fechar e reabrir a extensão

## Comportamento em Tempo Real

Quando você alterna o toggle na extensão:
1. A mudança é aplicada **imediatamente** em todas as abas abertas
2. Não é necessário recarregar as páginas
3. A próxima vez que você abrir a extensão, o estado será restaurado

## Estrutura Técnica

### Arquivos Modificados

#### `popup.html`
- Adicionado novo toggle na seção de configurações
- Incluído box informativo explicando a função

#### `popup.js`
- Recuperação da preferência `mostrarFAB` do storage
- Event listener para detectar mudanças no toggle
- Envio de mensagem para TODAS as abas abertas

#### `content-ahtools-sidebar.js`
- Função `atualizarVisibilidadeFAB()` para controlar visibilidade
- Verificação inicial da preferência ao carregar
- Message listener para atualizar em tempo real via `chrome.runtime.onMessage`

### Fluxo de Dados

```
popup.js (toggle mudou)
    ↓
chrome.storage.local.set({ mostrarFAB: true/false })
    ↓
Envia mensagem para todas as abas
    ↓
content-ahtools-sidebar.js (recebe mensagem)
    ↓
atualizarVisibilidadeFAB(valor)
    ↓
fab.style.display = 'flex' ou 'none'
```

## Padrão

O comportamento padrão é:
- **FAB VISÍVEL** por padrão (ativo)
- Permanece visível até o usuário desativar

## Desenvolvimento Futuro

Possíveis melhorias:
- [ ] Diferentes estilos para o balão
- [ ] Posição customizável do balão
- [ ] Animação ao aparecer/desaparecer
- [ ] Diferentes comportamentos por página
