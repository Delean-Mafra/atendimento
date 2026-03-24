# Ícones da Extensão

## ⚠️ IMPORTANTE

Os ícones PNG precisam ser criados antes de usar a extensão.
Use o arquivo `icon128.svg` como referência ou a `imagem_principal.png`.

## Tamanhos necessários:

A extensão está configurada para usar `imagem_principal.png` como ícone em todos os tamanhos.
Para melhor qualidade, recomenda-se gerar variações nos tamanhos abaixo e apontar o `manifest.json` para cada arquivo.

- **imagem_principal_16.png** - 16x16 pixels
- **imagem_principal_32.png** - 32x32 pixels
- **imagem_principal_48.png** - 48x48 pixels
- **imagem_principal_128.png** - 128x128 pixels

## Como criar os ícones:

### Opção 1: Ferramentas Online
1. Acesse: https://cloudconvert.com/svg-to-png
2. Carregue o arquivo `icon128.svg`
3. Converta para PNG nos tamanhos necessários
4. Salve os arquivos nesta pasta com os nomes sugeridos

### Opção 2: Usando GIMP (Software Gratuito)
1. Instale o GIMP: https://www.gimp.org/
2. Abra o `icon128.svg`
3. Exporte para PNG em cada tamanho
4. Salve os arquivos nesta pasta com os nomes sugeridos

### Opção 3: Usando Inkscape (Software Gratuito)
1. Instale o Inkscape: https://inkscape.org/
2. Abra o `icon128.svg`
3. Arquivo > Exportar PNG
4. Defina cada tamanho e exporte
5. Salve os arquivos nesta pasta com os nomes sugeridos

### Opção 4: Solução Rápida Temporária
Se precisar testar a extensão rapidamente, você pode:
1. Criar 4 imagens PNG simples de 16x16, 32x32, 48x48 e 128x128 pixels
2. Usar qualquer cor de fundo com um ícone simples
3. Renomear para os nomes sugeridos

## Verificação

Após criar os ícones, esta pasta deve conter:
- ✅ imagem_principal.png
- ✅ imagem_principal_16.png (opcional)
- ✅ imagem_principal_32.png (opcional)
- ✅ imagem_principal_48.png (opcional)
- ✅ imagem_principal_128.png (opcional)
- ✅ icon128.svg (referência)

Se você gerar os tamanhos específicos, atualize o `manifest.json` para apontar cada tamanho.
