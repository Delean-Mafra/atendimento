# 🛠️ Ahgora Tools - Suite de Ferramentas

**Copyright © 2025 Delean Mafra - Todos os direitos reservados**

[![Licença CC BY-NC 4.0](https://img.shields.io/badge/Licen%C3%A7a-CC%20BY--NC%204.0-lightgrey.svg)](http://delean-mafra.github.io/Ahtools/CC_BY_NC_4.0)

Uma extensão do Chrome que unifica três ferramentas úteis para gerenciamento de atendimento e administração de sistemas Ahgora/Zendesk.

---

## 📋 Funcionalidades

### 🤖 1. Auto Puxa Chat Zendesk
Puxa automaticamente conversas da fila do Zendesk com intervalo configurável.

**Recursos:**
- ✅ Clique automático no botão "Na fila"
- ✅ Intervalo configurável (1-60 minutos)
- ✅ Limite de chats simultâneos configurável
- ✅ Detecção de status online/offline
- ✅ Cronômetro de tempo online
- ✅ Toggle para ativar/desativar notificações
- ✅ Botão para puxar chat manualmente

### 🔐 2. Clonar Perfil PontoWeb
Replica permissões entre perfis de usuário de forma dinâmica.

**Recursos:**
- ✅ Detecção automática de perfis na página
- ✅ Seleção de perfil de origem e destino
- ✅ Replicação completa de permissões
- ✅ Relatório detalhado das alterações
- ✅ **Proteção por código de segurança diário**

### 🔗 3. Trocar Base Ahgora
Acesso rápido a diferentes bases de empresas no sistema Ahgora.

**Recursos:**
- ✅ Campo para digitar código da empresa
- ✅ Abertura automática da página de gerenciamento
- ✅ Suporte a tecla Enter para confirmação rápida

---

## 🔐 Sistema de Segurança

As funções **Auto Chat** (configurações avançadas) e **Clonar Perfil** são protegidas por um código de segurança diário que utiliza validação CRC-16.

### Como funciona o código:
- O código muda **diariamente** às 00:00
- Formato: `XXXX-YYYY` (número de 4 dígitos + CRC-16 em hexadecimal)
- Exemplo: `5678-A1B2`

### Como obter o código:
O código é gerado através da fórmula baseada na data atual. Para gerar o código do dia, você pode usar o script `gerador_codigo.py` incluído no projeto.

---

## 🚀 Instalação

### Passo 1: Preparar os Arquivos
Certifique-se de que todos os arquivos estão na pasta:
- `manifest.json`
- `popup.html`
- `popup.js`
- `popup.css`
- `content-zendesk.js`
- `content-perfil.js`
- `icons/` (pasta com ícones PNG)

### Passo 2: Instalar no Chrome
1. Abra o Google Chrome
2. Digite na barra de endereços: `chrome://extensions/`
3. Ative o **"Modo do desenvolvedor"** (canto superior direito)
4. Clique em **"Carregar sem compactação"**
5. Selecione a pasta do projeto
6. A extensão será instalada e aparecerá na barra de ferramentas

### Passo 3: Usar a Extensão
1. Clique no ícone da extensão na barra do Chrome
2. Use as abas para navegar entre as funcionalidades
3. Para funções protegidas, insira o código de segurança diário

---

## 📖 Como Usar

### Auto Puxa Chat Zendesk
1. Acesse a página do Zendesk
2. A extensão detecta automaticamente se você está online
3. Chats serão puxados automaticamente no intervalo configurado
4. Para alterar configurações, desbloqueie com o código diário

### Clonar Perfil PontoWeb
1. Acesse a página de permissões do PontoWeb
2. Insira o código de segurança diário
3. Clique em "Detectar Perfis"
4. Selecione perfil de origem e destino
5. Clique em "Replicar Permissões"
6. **Importante:** Clique em "Salvar" na página!

### Trocar Base Ahgora
1. Digite o código da empresa (ex: a393346)
2. Clique em "Confirmar" ou pressione Enter
3. A página será aberta em uma nova aba

---

## 🔧 Estrutura do Projeto

```
ahgora-tools/
├── manifest.json           # Configuração da extensão
├── popup.html              # Interface do popup (3 abas)
├── popup.js                # Lógica unificada do popup
├── popup.css               # Estilos unificados
├── content-zendesk.js      # Script para páginas Zendesk
├── content-perfil.js       # Script para páginas de perfil
├── gerador_codigo.py       # Gerador de código de segurança
├── icons/                  # Ícones da extensão
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png
├── LICENSE.md              # Licença CC BY-NC 4.0
└── README.md               # Este arquivo
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

© 2025 - Todos os direitos reservados

---

## 📝 Changelog

### v1.0.0 (2025)
- Versão inicial unificando 3 extensões
- Interface com sistema de abas
- Sistema de segurança CRC-16 para funções sensíveis
- Suporte a Zendesk e Ahgora
