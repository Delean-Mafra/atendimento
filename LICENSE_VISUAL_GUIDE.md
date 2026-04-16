# Guia Visual - Sistema de Licença

## 📺 Como Fica a Interface

### ✅ Quando a Licença é Válida
A extensão funciona normalmente sem mostrar nada de especial.

```
┌─────────────────────────────────────────┐
│  🛠️ Ahgora Tools                         │
│  Suite de Ferramentas                   │
├─────────────────────────────────────────┤
│ [🤖 Auto Chat] [🔐 Clonar] [👥 Agentes] │
├─────────────────────────────────────────┤
│  🔔 Notificações                        │
│  [ON/OFF toggle]                        │
│                                         │
│  [Puxar Agora] [Configurações]          │
└─────────────────────────────────────────┘
```

### ❌ Quando a Licença Expira
Um modal é exibido bloqueando todas as funcionalidades:

```
┌──────────────────────────────────────────────┐
│                                              │
│                     ⚠️                       │
│                                              │
│     Extensão Desatualizada                   │
│                                              │
│   A licença de uso desta extensão expirou   │
│   em 31/12/2030.                            │
│                                              │
│   Favor atualizar para a versão mais        │
│   recente.                                  │
│                                              │
│              [Entendi]                       │
│                                              │
└──────────────────────────────────────────────┘
```

Além disso, todos os botões ficam desabilitados:

```
┌─────────────────────────────────────────┐
│  🛠️ Ahgora Tools                         │
├─────────────────────────────────────────┤
│ [🤖 Auto Chat] [🔐 Clonar] [👥 Agentes] │
├─────────────────────────────────────────┤
│  🔔 Notificações                        │
│  [DESABILITADO toggle]                  │
│                                         │
│  [DESABILITADO] [DESABILITADO]          │
└─────────────────────────────────────────┘
```

## 🔧 Onde Editar a Data

**Arquivo**: `license-config.js`

```javascript
const LICENSE_CONFIG = {
    // ⬇️ EDITE AQUI - Altere esta data para estender
    EXPIRATION_DATE: "31/12/2030",
    
    DEBUG: false
};
```

## 📅 Exemplos de Datas Válidas

| Data | Formato | ✓/✗ |
|------|---------|-----|
| 31/12/2030 | Correto | ✓ |
| 31/12/2031 | Correto | ✓ |
| 15/06/2025 | Correto | ✓ |
| 01/01/2025 | Correto | ✓ |
| 2030-12-31 | Errado (formato) | ✗ |
| 12/31/2030 | Errado (ordem) | ✗ |
| 31-12-2030 | Errado (separador) | ✗ |

## 🗂️ Arquivos Importantes

```
atendimento_ahgora/
├── license-config.js          ← EDITE AQUI
├── popup.html                 ← Modal de expiração adicionado
├── popup.css                  ← Estilos do modal adicionado
├── popup.js                   ← Lógica de verificação
├── manifest.json              ← Configuração atualizada
├── content-zendesk.js         ← Verificação de licença
├── content-perfil.js          ← Verificação de licença
├── content-agentes.js         ← Verificação de licença
└── content-ahtools-sidebar.js ← Verificação de licença
```

## 🔄 Fluxo de Verificação

```
Usuário Abre a Extensão
        ↓
  [License-config.js carregado]
        ↓
  Função checkLicense() executada
        ↓
   ┌────────────────────┐
   │ Licença Válida?    │
   └────────────────────┘
        ↙              ↘
      SIM               NÃO
       ↓                 ↓
   Funciona         Mostra Modal
   Normal           + Desabilita
                    Tudo
```

## 📝 Checklist de Implementação

- ✅ Arquivo `license-config.js` criado
- ✅ Modal de expiração adicionado ao `popup.html`
- ✅ Estilos do modal adicionados ao `popup.css`
- ✅ Lógica de verificação adicionada ao `popup.js`
- ✅ Verificação de licença em todos os content scripts
- ✅ `manifest.json` atualizado com o novo arquivo
- ✅ Documentação criada

## ⚡ Quick Start

**Para estender a licença por 1 ano a partir de agora:**

1. Abra `license-config.js`
2. Altere: `EXPIRATION_DATE: "31/12/2030"`
3. Para: `EXPIRATION_DATE: "15/04/2027"` (exemplo com data atual +1 ano)
4. Salve o arquivo
5. Recarregue a extensão em `chrome://extensions`

---

**Dúvidas?** Consulte o arquivo `LICENSE_SYSTEM.md` para documentação completa.
