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

## 📝 Changelog

### v2.0.0 (2026)
- Versão inicial unificando 3 extensões
- Interface com sistema de abas
- Sistema de segurança CRC-16 para funções sensíveis
- Suporte a Zendesk e Ahgora
