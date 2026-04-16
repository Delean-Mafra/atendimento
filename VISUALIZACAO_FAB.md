# 🎨 Visualização - Novo Toggle de Visibilidade do FAB

## Localização na Interface

### Aba: Auto Chat (🤖 Auto Chat)

```
┌─────────────────────────────────────────────────────────────┐
│                    🛠️ Ahgora Tools                           │
│                   Suite de Ferramentas                       │
├─────────────────────────────────────────────────────────────┤
│  [Auto Chat] [Clonar Perfil] [Agentes] [Trocar Base]       │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ 🔔 Notificações              [  Toggle  ]              │ │
│  ├─────────────────────────────────────────────────────────┤ │
│  │ ✓ Notificações: Ativas                                 │ │
│  │ ✓ Status Zendesk: Verificando...                       │ │
│  │ ✓ ⏱️ Tempo Online: 00:00:00                             │ │
│  │ ✓ Chats Ativos: 0/3                                    │ │
│  │ ✓ Último click: Nenhum                                 │ │
│  │ ✓ Intervalo: 10 minutos                                │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                               │
│  🔐 Código de Segurança: [input field]                      │
│  [🔓 Desbloquear Configurações]                             │
│                                                               │
│  ... (outras configurações de intervalo, limite, etc)        │
│                                                               │
│  📋 Copiar ticket ao clicar      [  Toggle  ]               │
│  ℹ️ Quando ativo, ao clicar no número do ticket...          │
│                                                               │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ 🛠️ Mostrar balão Ahtools           [✓ Toggle]          │ │ ← NOVO!
│  ├─────────────────────────────────────────────────────────┤ │
│  │ ℹ️ Quando ativo, exibe o botão flutuante (balão)       │ │
│  │    para abrir o Ahtools em qualquer página.            │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                               │
│  [Puxar Agora]                                               │
│                                                               │
│  ℹ️ A extensão SEMPRE puxa chats quando você está ONLINE     │
│     e não atingiu o limite.                                  │
│                                                               │
└─────────────────────────────────────────────────────────────┘

© 2025 Delean Mafra - Todos os direitos reservados
Licença CC BY-NC 4.0
```

---

## Estados do Toggle

### ✅ ATIVADO (Padrão)

```
┌────────────────────────┐
│ 🛠️ Mostrar balão Ahtools│
│                        │
│        [✓ ATIVO]       │  ← O FAB está visível nas páginas
└────────────────────────┘
ℹ️ Quando ativo, exibe o botão flutuante (balão)
   para abrir o Ahtools em qualquer página.
```

**Resultado na página**: 
- O botão 🛠️ aparece no **canto inferior direito**
- O usuário pode clicar para abrir o sidebar Ahtools
- Não atrapalha se a página estiver bem estruturada

---

### ❌ DESATIVADO

```
┌────────────────────────┐
│ 🛠️ Mostrar balão Ahtools│
│                        │
│      [❌ INATIVO]      │  ← O FAB está OCULTO nas páginas
└────────────────────────┘
ℹ️ Quando ativo, exibe o botão flutuante (balão)
   para abrir o Ahtools em qualquer página.
```

**Resultado na página**:
- O botão 🛠️ **não aparece**
- O sidebar ainda pode ser acessado via botão no popup
- Perfeito quando o FAB atrapalha campos importantes

---

## Fluxo de Interação

### Cenário 1: Ativar o FAB

```
1. Usuário abre a extensão
2. Aba "Auto Chat" está ativa
3. Vê o toggle "🛠️ Mostrar balão Ahtools" [❌ INATIVO]
4. Clica no toggle para ativar
5. ✅ FAB aparece imediatamente em TODAS as abas abertas
6. Nenhuma página precisa recarregar
```

### Cenário 2: Desativar o FAB (para não atrapalhar)

```
1. Usuário abre a extensão
2. Aba "Auto Chat" está ativa
3. Vê o toggle "🛠️ Mostrar balão Ahtools" [✓ ATIVO]
4. Clica no toggle para desativar
5. ❌ FAB desaparece imediatamente em TODAS as abas
6. Campo importante deixa de ser ocultado
7. Nenhuma página precisa recarregar
```

---

## Comportamento Técnico

```
┌──────────────────────────────────────────────────────────┐
│                      POPUP.JS                             │
│                                                            │
│  Usuario clica toggle "Mostrar balão Ahtools"            │
│  ↓                                                        │
│  toggleMostrarFAB.addEventListener('change', ...)        │
│  ↓                                                        │
│  chrome.storage.local.set({ mostrarFAB: true/false })   │
│  ↓                                                        │
│  chrome.tabs.query({}, function(tabs) {                 │
│      tabs.forEach(tab => {                              │
│          chrome.tabs.sendMessage(tab.id, {              │
│              action: 'setMostrarFAB',                    │
│              value: mostrarFAB                           │
│          })                                              │
│      })                                                  │
│  })                                                      │
└──────────────────────────────────────────────────────────┘
   ↓              ↓              ↓              ↓
┌──────┐     ┌──────┐     ┌──────┐     ┌──────┐
│ Aba 1│     │ Aba 2│     │ Aba 3│     │ Aba 4│
│      │     │      │     │      │     │      │
│ FAB  │     │ FAB  │     │ FAB  │     │ FAB  │
│Show/ │     │Show/ │     │Show/ │     │Show/ │
│Hide  │     │Hide  │     │Hide  │     │Hide  │
└──────┘     └──────┘     └──────┘     └──────┘

    ↓              ↓              ↓              ↓
    
content-ahtools-sidebar.js em cada aba recebe:
    ↓
if (request.action === 'setMostrarFAB') {
    atualizarVisibilidadeFAB(request.value);
}
    ↓
fab.style.display = 'flex' / 'none'
```

---

## Integração Visual

A nova opção segue o padrão visual da extensão:

- **Localização**: Logo após "📋 Copiar ticket ao clicar"
- **Container**: Background azul claro (#e3f2fd) para indicar função cosmética
- **Toggle**: Mesmo estilo dos outros toggles da extensão
- **Ícone**: 🛠️ (representa ferramentas/configurações)
- **Info Box**: Explicação clara do que faz

---

## Exemplos de Uso

### ✅ Uso Prático 1: Ajudante de Suporte
- Quer usar a extensão para puxar chats automaticamente
- **Ativa** o FAB para fácil acesso nas páginas
- Pode clicar rapidamente no balão para abrir dicas/ferramentas

### ✅ Uso Prático 2: Trabalho Focado
- Está trabalhando com formulário complicado
- O FAB está ocultando um campo importante
- **Desativa** o FAB para trabalhar
- Pode acessar extensão via popup se precisar

### ✅ Uso Prático 3: Múltiplas Abas
- Abre várias abas para processar
- Desativa o FAB uma vez
- **Todas as abas** ficam sem o FAB simultaneamente
- Sem necessidade de configurar em cada aba

---

## Persistência de Dados

```
┌─────────────────────────────────────┐
│  chrome.storage.local               │
│  {                                  │
│    "notificacoesAtivas": true,      │
│    "intervaloMinutos": 5,           │
│    "limiteChats": 3,                │
│    "confirmarCliqueManual": true,   │
│    "copiarTicketListaAoClicar": false,
│    "mostrarFAB": true ← NOVO!       │
│  }                                  │
└─────────────────────────────────────┘
    ↓
    Salvo automaticamente
    ↓
    Recuperado na próxima abertura da extensão
```

---

## Responsividade

O comportamento funciona perfeitamente em:
- ✅ Desktop (Chrome em PC)
- ✅ Múltiplos monitores
- ✅ Diferentes tamanhos de página
- ✅ Páginas com scroll
- ✅ Iframes (quando aplicável)

---

**Versão**: 1.0  
**Data**: 15/04/2026  
**Status**: ✅ Pronto para Uso
