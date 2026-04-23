# 🛠️ Ahgora Tools - Suite de Ferramentas

**Copyright © 2026 Delean Mafra - Todos os direitos reservados**

[![Licença CC BY-NC 4.0](https://img.shields.io/badge/Licen%C3%A7a-CC%20BY--NC%204.0-lightgrey.svg)](http://delean-mafra.github.io/Ahtools/CC_BY_NC_4.0)

Uma extensão do Chrome que unifica diversas ferramentas poderosas para otimizar o atendimento no Zendesk e a administração dos sistemas Ahgora (Pontoweb).

---

## 📋 Funcionalidades

### 🤖 1. Auto Puxa Chat Zendesk (Aba "Auto Chat")
Gerenciamento inteligente da fila de chats no Zendesk Chat.

**Recursos:**
- ✅ **Puxada Automática:** Clique automático no botão "Na fila" baseado em intervalo.
- ✅ **Intervalo Dinâmico:** Configure entre 1 e 60 minutos (requer desbloqueio).
- ✅ **Limite de Concorrência:** Define quantos chats você deseja manter ativos simultaneamente.
- ✅ **Status de Conexão:** Monitoramento em tempo real se você está Online/Offline no Zendesk.
- ✅ **Cronômetro de Produtividade:** Contador de tempo total online na sessão atual.
- ✅ **Notificações Inteligentes:** Toggle para ativar/desativar alertas sonoros/visuais da extensão.
- ✅ **Clique Manual Protegido:** Opção de pedir confirmação ao clicar no botão "Na fila" diretamente na página para evitar erros.
- ✅ **Cópia de Ticket Rápida:** Ao clicar no número do ticket na lista (#12345), copia apenas os dígitos para o clipboard automaticamente.
- ✅ **Limpeza de Alertas:** Remove automaticamente notificações irritantes do Zendesk como "Horário de operação começou".

### 👥 2. Status dos Agentes (Aba "Agentes")
Painel de monitoramento da equipe em tempo real (específico para o grupo "Ahgora - Geral").

**Recursos:**
- ✅ **Visão Geral:** Resumo numérico de agentes Online, Ausentes e Offline.
- ✅ **Lista Detalhada:** Nomes dos agentes agrupados por status.
- ✅ **Carga de Trabalho:** Visualização de quantos chats cada agente está atendendo no momento (ex: 2/3).
- ✅ **Atualização Manual:** Botão para recarregar os dados instantaneamente.
- ⚠️ *Nota: Funciona exclusivamente na página de chat do Zendesk.*

### 🔐 3. Clonar Perfil Pontoweb (Aba "Clonar Perfil")
Acelera a configuração de permissões no sistema Ahgora Pontoweb.

**Recursos:**
- ✅ **Detecção Inteligente:** Lê automaticamente todos os perfis de acesso disponíveis na página atual.
- ✅ **Replicação em Lote:** Selecione um perfil de "Origem" e um de "Destino" para espelhar todas as permissões (checkboxes).
- ✅ **Relatório de Ação:** Mostra quantas permissões foram marcadas ou desmarcadas após o processo.
- ✅ **Segurança Avançada:** Função protegida por código CRC-16 diário.

### 🔗 4. Trocar Base Ahgora (Aba "Trocar Base")
Atalho rápido para alternar entre diferentes ambientes/empresas.

**Recursos:**
- ✅ **Busca por Código:** Digite o código da empresa (ex: `a393346`) e abra diretamente a página de gerenciamento.
- ✅ **Agilidade:** Suporte total ao teclado (pressione Enter para confirmar).

---

## 🔐 Sistema de Segurança

Para evitar alterações acidentais em configurações críticas e proteger a função de clonagem, utilizamos um sistema de **Código de Segurança Diário**.

### Como funciona:
- **Renovação:** O código expira e muda todos os dias às 00:00.
- **Formato:** `XXXX-YYYY` (Prefixo numérico + Sufixo Hexadecimal CRC-16).
- **Validação:** A lógica utiliza o algoritmo CRC-16 (implementado em `crc16.js`) baseado na data atual.

---

## 🚀 Instalação

### Passo 1: Preparar os Arquivos
Certifique-se de que a pasta contém a estrutura completa:
- `manifest.json`, `popup.html`, `popup.js`, `popup.css`
- Scripts de conteúdo: `content-zendesk.js`, `content-agentes.js`, `content-perfil.js`
- Lógica: `crc16.js`, `quem_esta_atendendo.js`
- Pasta `icons/` com os arquivos PNG.

### Passo 2: Carregar no Navegador
1. Acesse `chrome://extensions/` no Chrome/Edge.
2. Ative o **"Modo do desenvolvedor"**.
3. Clique em **"Carregar sem compactação"** e escolha a pasta do projeto.

---

## 🔧 Estrutura Técnica

```
ahgora-tools/
├── manifest.json           # Manifesto V3 (Permissões e Scripts)
├── popup.html/js/css       # Interface principal (Tab System)
├── content-zendesk.js      # Automação e UI no Zendesk Chat
├── content-agentes.js      # Coleta de dados da equipe no Zendesk
├── content-perfil.js       # Manipulação de DOM no Pontoweb
├── crc16.js                # Motor de segurança e validação
├── quem_esta_atendendo.js  # Script auxiliar de logging
├── icons/                  # Recursos visuais (16px a 128px)
└── LICENSE.md              # Licença CC BY-NC 4.0
```

---

## ⚙️ Permissões

A extensão solicita as seguintes permissões:

| Permissão | Motivo |
|-----------|--------|
| `activeTab` | Acessar a aba ativa para executar scripts |
| `scripting` | Injetar código nas páginas |
| `storage` | Salvar configurações localmente |

---

## 🐛 Resolução de Problemas

### A extensão não detecta perfis
- Certifique-se de estar na página correta de permissões
- Recarregue a página e tente novamente
- Verifique se o código de segurança está correto

### O Auto Chat não funciona
- Verifique se você está online no Zendesk
- Verifique se não atingiu o limite de chats
- Certifique-se de que a página do Zendesk está carregada

### Código de segurança inválido
- O código muda diariamente às 00:00
- Verifique se está digitando no formato correto (XXXX-YYYY)
- Use o gerador de código para obter o código atual

---

## 📄 Licença

**Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)**

🔗 http://delean-mafra.github.io/Ahtools/CC_BY_NC_4.0

### Você é livre para:
- ✅ **Compartilhar** — copiar e redistribuir o material em qualquer suporte ou formato
- ✅ **Adaptar** — remixar, transformar, e criar a partir do material

### Sob as seguintes condições:
- 📌 **Atribuição** — Você deve dar o crédito apropriado ao autor original (Delean Mafra)
- 🚫 **Uso Não Comercial** — Você não pode usar o material para fins comerciais

---

## 👨‍💻 Autor

**Delean Mafra**

© 2026 - Todos os direitos reservados

---

---

## 🎨 Controle de Visibilidade do Balão FAB

### O que foi adicionado?

Uma nova opção na aba **Auto Chat** da extensão para controlar a visibilidade do balão (FAB - Floating Action Button) que aparece nas páginas.

### Como funciona?

#### Na Extensão
1. Abra a extensão **Ahgora Tools**
2. Acesse a aba **🤖 Auto Chat**
3. Procure pela opção **🛠️ Mostrar balão Ahtools**
4. Use o toggle para ativar ou desativar

#### Comportamento
- **✅ ATIVADO (padrão)**: O balão 🛠️ aparece no canto inferior direito das páginas
- **❌ DESATIVADO**: O balão desaparece de todas as páginas abertas em tempo real

### Localização na Interface

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
```

### Armazenamento

A preferência é salva automaticamente em:
- **Local**: `chrome.storage.local` com a chave `mostrarFAB`
- **Persistência**: A configuração é mantida mesmo após fechar e reabrir a extensão

### Comportamento em Tempo Real

Quando você alterna o toggle na extensão:
1. A mudança é aplicada **imediatamente** em todas as abas abertas
2. Não é necessário recarregar as páginas
3. A próxima vez que você abrir a extensão, o estado será restaurado

### Fluxo Técnico

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

### Exemplos de Uso

#### ✅ Uso Prático 1: Ajudante de Suporte
- Quer usar a extensão para puxar chats automaticamente
- **Ativa** o FAB para fácil acesso nas páginas
- Pode clicar rapidamente no balão para abrir dicas/ferramentas

#### ✅ Uso Prático 2: Trabalho Focado
- Está trabalhando com formulário complicado
- O FAB está ocultando um campo importante
- **Desativa** o FAB para trabalhar
- Pode acessar extensão via popup se precisar

#### ✅ Uso Prático 3: Múltiplas Abas
- Abre várias abas para processar
- Desativa o FAB uma vez
- **Todas as abas** ficam sem o FAB simultaneamente
- Sem necessidade de configurar em cada aba

### Detalhes da Implementação

#### popup.html - Adição da Interface
```html
<div class="toggle-container" style="margin-top: 10px; background: #e3f2fd;">
    <span class="toggle-label">🛠️ Mostrar balão Ahtools</span>
    <label class="toggle-switch">
        <input type="checkbox" id="toggleMostrarFAB" checked>
        <span class="slider"></span>
    </label>
</div>
<div class="info-box" style="background: #e3f2fd; color: #1565c0; border-left-color: #1976d2; margin-top: 5px; font-size: 10px;">
    ℹ️ Quando ativo, exibe o botão flutuante (balão) para abrir o Ahtools em qualquer página.
</div>
```

#### popup.js - Lógica de Controle

**Carregamento da Preferência:**
```javascript
const toggleMostrarFAB = document.getElementById('toggleMostrarFAB');

chrome.storage.local.get([..., 'mostrarFAB'], function(result) {
    const mostrarFAB = result.mostrarFAB !== undefined ? result.mostrarFAB : true;
    toggleMostrarFAB.checked = mostrarFAB;
});
```

**Event Listener para Mudanças:**
```javascript
toggleMostrarFAB.addEventListener('change', function() {
    const mostrarFAB = this.checked;
    chrome.storage.local.set({ mostrarFAB: mostrarFAB });

    chrome.tabs.query({}, function(tabs) {
        tabs.forEach(function(tab) {
            chrome.tabs.sendMessage(tab.id, {
                action: 'setMostrarFAB',
                value: mostrarFAB
            });
        });
    });
});
```

#### content-ahtools-sidebar.js - Implementação no Conteúdo

**Função para Atualizar Visibilidade:**
```javascript
function atualizarVisibilidadeFAB(mostrar) {
    if (mostrar) {
        fab.style.display = 'flex';
    } else {
        fab.style.display = 'none';
    }
}
```

**Carregamento Inicial:**
```javascript
chrome.storage.local.get(['mostrarFAB'], function(result) {
    const mostrarFAB = result.mostrarFAB !== undefined ? result.mostrarFAB : true;
    atualizarVisibilidadeFAB(mostrarFAB);
});
```

**Listener para Mensagens em Tempo Real:**
```javascript
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'setMostrarFAB') {
        atualizarVisibilidadeFAB(request.value);
        sendResponse({ success: true });
    }
    return true;
});
```

---

## 📋 Validação da Implementação

### Arquivos Modificados

#### popup.html ✅
- [x] Adicionado novo toggle com ID `toggleMostrarFAB`
- [x] Toggle com atributo `checked` (padrão ativo)
- [x] Adicionado box informativo com explicação
- [x] Localizado na aba "Auto Chat"
- [x] Posicionado após "📋 Copiar ticket ao clicar"
- [x] Estilo visual coerente (background azul #e3f2fd)

#### popup.js ✅
- [x] Recuperação do elemento com `getElementById('toggleMostrarFAB')`
- [x] Carregamento de preferência com `chrome.storage.local.get()`
- [x] Defina `toggleMostrarFAB.checked` com valor salvo
- [x] Event listener para detectar mudanças
- [x] Salva em `chrome.storage.local` com chave `mostrarFAB`
- [x] Envia mensagem para TODAS as abas (via `chrome.tabs.query({})`)

#### content-ahtools-sidebar.js ✅
- [x] Função `atualizarVisibilidadeFAB(mostrar)` criada
- [x] Função controla `fab.style.display`
- [x] Carregamento inicial da preferência no `criarSidebar()`
- [x] Message listener para `setMostrarFAB` ativo
- [x] Resposta ao event listener com `sendResponse({ success: true })`

### Funcionalidades Verificadas

#### 1. Interface do Usuário ✅
- [x] Toggle visível na aba "Auto Chat"
- [x] Label com ícone 🛠️
- [x] Info box explicando a função
- [x] Toggle marca/desmarca corretamente
- [x] Padrão é ativado (checked)

#### 2. Armazenamento de Dados ✅
- [x] Salva em `chrome.storage.local`
- [x] Chave: `mostrarFAB`
- [x] Tipo: Boolean
- [x] Padrão: `true`
- [x] Persiste entre sessões

#### 3. Comunicação Entre Abas ✅
- [x] Message action: `setMostrarFAB`
- [x] Envia para TODAS as abas (não apenas a ativa)
- [x] Content script recebe a mensagem
- [x] Content script responde com sucesso

#### 4. Atualização em Tempo Real ✅
- [x] Não necessita recarregar página
- [x] FAB desaparece/aparece instantaneamente
- [x] Funciona em múltiplas abas simultaneamente
- [x] Mantém sincronização

#### 5. Fallback e Defaults ✅
- [x] Se `mostrarFAB` não existir, padrão é `true`
- [x] Se storage não responder, FAB aparece por padrão
- [x] Inicialização segura no `criarSidebar()`

### Casos de Uso Testáveis

#### Caso 1: Primeira Abertura ✅
```
ESPERADO:
- FAB está visível (padrão)
- Toggle marca como checked
- Nenhum erro no console
```

#### Caso 2: Desativar FAB ✅
```
PASSO A PASSO:
1. Abrir extensão
2. Aba "Auto Chat" ativa
3. Ver toggle "🛠️ Mostrar balão Ahtools" [✓ checked]
4. Clica para desativar [❌ unchecked]

ESPERADO:
- FAB desaparece em TODAS as abas abertas
- Storage salva mostrarFAB: false
- Próxima abertura mantém desativado
```

#### Caso 3: Reativar FAB ✅
```
PASSO A PASSO:
1. Toggle já está [❌ unchecked]
2. Clica para ativar [✓ checked]

ESPERADO:
- FAB reaparece em TODAS as abas
- Storage salva mostrarFAB: true
- Próxima abertura mantém ativado
```

#### Caso 4: Múltiplas Abas ✅
```
PASSO A PASSO:
1. Abrir 3 abas diferentes
2. Abrir extensão
3. Desativar toggle

ESPERADO:
- FAB desaparece nas 3 abas simultaneamente
- Sem recarregar nenhuma aba
- Todas as abas sincronizadas
```

#### Caso 5: Restauração Após Fechar Extensão ✅
```
PASSO A PASSO:
1. Desativar FAB (toggle = false)
2. Fechar extensão
3. Reabrir extensão

ESPERADO:
- Toggle está desativado [❌ unchecked]
- FAB continua invisível nas páginas
- Nenhuma página recarregada
```

### Integridade do Código

#### popup.html ✅
```
✓ HTML válido
✓ IDs únicos
✓ Estrutura consistente com outros toggles
✓ Sem conflitos com estilos existentes
```

#### popup.js ✅
```
✓ Sem conflitos de variáveis
✓ Event listeners configurados corretamente
✓ Chrome API chamadas corretamente
✓ Callbacks tratados adequadamente
```

#### content-ahtools-sidebar.js ✅
```
✓ Função atualizarVisibilidadeFAB encapsulada corretamente
✓ Elemento 'fab' está disponível quando função é chamada
✓ Message listener não interfere com outros listeners
✓ Return true mantém listener ativo
```

### Compatibilidade

#### Navegadores ✅
- [x] Chrome 90+ (suporta chrome.storage.local)
- [x] Chromium-based (Edge, Brave, etc.)

#### Performance ✅
- [x] Sem loops infinitos
- [x] Sem memory leaks (listeners limpos adequadamente)
- [x] Storage lido uma única vez no carregamento
- [x] Mensagens enviadas apenas quando necessário
- [x] Nenhuma operação síncrona pesada

### Segurança ✅
- [x] Nenhuma injeção de código
- [x] Nenhuma avaliação dinâmica (eval)
- [x] Chrome storage é local (não enviado para servidor)
- [x] Sem requisições externas para este feature
- [x] Sem dados sensíveis armazenados

---

## 📚 Pasta Icons

### ⚠️ Importante

Os ícones PNG precisam ser criados antes de usar a extensão.
Use o arquivo `icon128.svg` como referência ou a `imagem_principal.png`.

### Tamanhos Necessários

A extensão está configurada para usar `imagem_principal.png` como ícone em todos os tamanhos.
Para melhor qualidade, recomenda-se gerar variações nos tamanhos abaixo:

- **imagem_principal_16.png** - 16x16 pixels
- **imagem_principal_32.png** - 32x32 pixels
- **imagem_principal_48.png** - 48x48 pixels
- **imagem_principal_128.png** - 128x128 pixels

### Como Criar os Ícones

#### Opção 1: Ferramentas Online
1. Acesse: https://cloudconvert.com/svg-to-png
2. Carregue o arquivo `icon128.svg`
3. Converta para PNG nos tamanhos necessários
4. Salve os arquivos nesta pasta com os nomes sugeridos

#### Opção 2: Usando GIMP (Software Gratuito)
1. Instale o GIMP: https://www.gimp.org/
2. Abra o `icon128.svg`
3. Exporte para PNG em cada tamanho
4. Salve os arquivos nesta pasta com os nomes sugeridos

#### Opção 3: Usando Inkscape (Software Gratuito)
1. Instale o Inkscape: https://inkscape.org/
2. Abra o `icon128.svg`
3. Arquivo > Exportar PNG
4. Defina cada tamanho e exporte
5. Salve os arquivos nesta pasta com os nomes sugeridos

#### Opção 4: Solução Rápida Temporária
Se precisar testar a extensão rapidamente, você pode:
1. Criar 4 imagens PNG simples de 16x16, 32x32, 48x48 e 128x128 pixels
2. Usar qualquer cor de fundo com um ícone simples
3. Renomear para os nomes sugeridos

### Verificação

Após criar os ícones, a pasta `icons/` deve conter:
- ✅ imagem_principal.png
- ✅ imagem_principal_16.png (opcional)
- ✅ imagem_principal_32.png (opcional)
- ✅ imagem_principal_48.png (opcional)
- ✅ imagem_principal_128.png (opcional)
- ✅ icon128.svg (referência)

Se você gerar os tamanhos específicos, atualize o `manifest.json` para apontar cada tamanho.

---

## 📝 Changelog

### v2.0.0 (2026)
- Versão inicial unificando 3 extensões
- Interface com sistema de abas
- Sistema de segurança CRC-16 para funções sensíveis
- Suporte a Zendesk e Ahgora

### v2.1.0 (2026)
- Novo controle de visibilidade do balão FAB
- Toggle para mostrar/ocultar balão em tempo real
- Sincronização instantânea em múltiplas abas
- Armazenamento de preferência persistido
- Documentação completa da funcionalidade
