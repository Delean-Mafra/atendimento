# Sistema de Licença - Ahgora Tools

## 📋 Descrição

Este documento explica como funciona o sistema de licença implementado na extensão **Ahgora Tools**.

## 🔒 Como Funciona

A extensão agora possui um sistema de licença com data limite de expiração. Após a data de expiração configurada, todas as funcionalidades serão bloqueadas automaticamente e uma mensagem será exibida ao usuário informando que é necessário atualizar a extensão.

### Data Padrão de Expiração
- **31/12/2030** - Configurado por padrão no arquivo

## 📝 Como Alterar a Data de Expiração

### Passo 1: Localizar o arquivo de configuração
Abra o arquivo `license-config.js` na raiz do projeto da extensão.

### Passo 2: Editar a data
Procure pela seguinte linha:

```javascript
EXPIRATION_DATE: "31/12/2030",
```

Altere a data para uma data futura desejada:

```javascript
EXPIRATION_DATE: "31/12/2031",  // Exemplo: estendo até 2031
```

### Passo 3: Formato da data
A data **DEVE** estar no formato **DD/MM/YYYY**:
- ✅ `"31/12/2030"` - Correto
- ✅ `"15/06/2025"` - Correto
- ❌ `"2030-12-31"` - Incorreto (formato errado)
- ❌ `"12/31/2030"` - Incorreto (ordem errada)

### Passo 4: Recarregar a extensão
Após editar o arquivo, você pode precisar recarregar a extensão no Chrome:
1. Vá para `chrome://extensions/`
2. Localize **Ahgora Tools**
3. Clique no ícone de recarregar (se houver)
4. Ou desinstale e reinstale a extensão

## ⏰ O Que Acontece Após Expiração

### No Popup (Menu da extensão)
- Um modal vermelho aparecerá informando a expiração
- Todos os botões e campos de entrada serão desabilitados
- O usuário verá: **"Extensão Desatualizada"**

### Nas Páginas (Content Scripts)
- Nenhuma funcionalidade será executada
- Um aviso será registrado no console: `⚠️ Licença expirada! Funcionalidades desabilitadas.`
- Os usuários receberão uma instrução para atualizar a extensão

## 📊 Verificações de Licença

### 1. Popup (popup.js)
```javascript
checkLicense()  // Verifica ao abrir o popup
disableAllFeatures()  // Desabilita tudo se expirado
```

### 2. Content Scripts
Todos os content scripts verificam a licença no início:
- `content-zendesk.js`
- `content-perfil.js`
- `content-agentes.js`
- `content-ahtools-sidebar.js`

## 🔧 Funções Disponíveis (em license-config.js)

```javascript
// Verifica se a licença é válida
isLicenseValid()

// Obtém a mensagem de expiração
getExpirationMessage()

// Retorna quantos dias restam até expiração
getDaysRemaining()
```

## 📌 Exemplo Prático

### Cenário 1: Data válida (antes de expiração)
- Data de expiração: `"31/12/2030"`
- Hoje: `15/04/2026`
- **Resultado**: ✅ Extensão funciona normalmente

### Cenário 2: Data expirada (após expiração)
- Data de expiração: `"31/12/2024"`
- Hoje: `15/04/2026`
- **Resultado**: ❌ Extensão bloqueada

## 🐛 Modo Debug

Se precisar verificar o status da licença no console do navegador, você pode ativar o modo debug:

1. Abra `license-config.js`
2. Altere `DEBUG: false` para `DEBUG: true`
3. Recarregue a extensão
4. Abra o console (`F12`) e verá logs como:

```
[LICENSE] Validade: 31/12/2030
[LICENSE] Data hoje: 15/04/2026
[LICENSE] Licença válida: true
```

## 🔐 Segurança

- Qualquer pessoa com acesso ao código pode alterar a data
- Isso é intencional - é um sistema para "leigas" que não sabem programação
- Para leigos, a data é uma barreira visual simples
- Não é criptografia - é apenas um mecanismo de controle de acesso básico

## 📞 Suporte

Se precisar estender a data de validade:

1. Abra o arquivo `license-config.js`
2. Altere a variável `EXPIRATION_DATE`
3. Recarregue a extensão

---

**Última atualização**: 15 de Abril de 2026  
**Versão do Sistema**: 1.0  
**Copyright © 2025 Delean Mafra**
