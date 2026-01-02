"""
Replicador de Permissões de Perfis - Gerador de Ícones

Copyright © 2025 Delean Mafra
Todos os direitos reservados

Este trabalho está licenciado sob a Licença Creative Commons
Atribuição-NãoComercial 4.0 Internacional (CC BY-NC 4.0)
Para ver uma cópia desta licença, visite:
http://delean-mafra.github.io/Ahtools/CC_BY_NC_4.0

Script para gerar ícones PNG da extensão Chrome
Requer: pip install Pillow
"""

from PIL import Image, ImageDraw, ImageFont
import os

def criar_icone(tamanho, nome_arquivo):
    """Cria um ícone simples com gradiente e símbolo de cadeado"""
    
    # Cria imagem com fundo gradiente
    img = Image.new('RGB', (tamanho, tamanho), color='white')
    draw = ImageDraw.Draw(img)
    
    # Desenha círculo de fundo com cor roxa
    margem = tamanho // 10
    draw.ellipse([margem, margem, tamanho-margem, tamanho-margem], 
                 fill='#667eea', outline='#764ba2', width=max(1, tamanho//32))
    
    # Desenha um cadeado simplificado
    centro_x = tamanho // 2
    centro_y = tamanho // 2
    
    # Corpo do cadeado
    lock_largura = tamanho // 3
    lock_altura = tamanho // 4
    lock_x1 = centro_x - lock_largura // 2
    lock_y1 = centro_y
    lock_x2 = centro_x + lock_largura // 2
    lock_y2 = centro_y + lock_altura
    
    draw.rounded_rectangle([lock_x1, lock_y1, lock_x2, lock_y2], 
                          radius=tamanho//32, fill='white')
    
    # Arco do cadeado (semicírculo superior)
    arco_largura = lock_largura // 2
    arco_altura = lock_altura
    arco_x1 = centro_x - arco_largura // 2
    arco_y1 = lock_y1 - arco_altura
    arco_x2 = centro_x + arco_largura // 2
    arco_y2 = lock_y1
    
    # Desenha o arco
    draw.arc([arco_x1, arco_y1, arco_x2, arco_y2], 
            start=0, end=180, fill='white', width=max(2, tamanho//24))
    draw.line([arco_x1, lock_y1, arco_x1, lock_y1], fill='white', width=max(2, tamanho//24))
    draw.line([arco_x2, lock_y1, arco_x2, lock_y1], fill='white', width=max(2, tamanho//24))
    
    # Buraco da fechadura
    keyhole_raio = max(1, tamanho // 32)
    draw.ellipse([centro_x - keyhole_raio, centro_y + lock_altura//4 - keyhole_raio,
                  centro_x + keyhole_raio, centro_y + lock_altura//4 + keyhole_raio], 
                 fill='#667eea')
    
    # Salva o arquivo
    img.save(nome_arquivo, 'PNG')
    print(f"✅ Criado: {nome_arquivo} ({tamanho}x{tamanho})")

def main():
    """Gera todos os ícones necessários"""
    
    # Obtém o diretório atual
    diretorio_atual = os.path.dirname(os.path.abspath(__file__))
    
    print("🎨 Gerando ícones para a extensão Chrome...\n")
    
    # Tamanhos necessários
    tamanhos = {
        'icon16.png': 16,
        'icon32.png': 32,
        'icon48.png': 48,
        'icon128.png': 128
    }
    
    # Cria cada ícone
    for nome, tamanho in tamanhos.items():
        caminho_completo = os.path.join(diretorio_atual, nome)
        criar_icone(tamanho, caminho_completo)
    
    print("\n✨ Todos os ícones foram gerados com sucesso!")
    print("\n📁 Ícones criados em:", diretorio_atual)
    print("\n⚠️  NOTA: Os ícones gerados são versões simplificadas.")
    print("   Para ícones mais elaborados, use o arquivo SVG com ferramentas profissionais.")

if __name__ == "__main__":
    try:
        main()
    except ImportError:
        print("❌ Erro: PIL/Pillow não está instalado.")
        print("\n📦 Para instalar, execute:")
        print("   pip install Pillow")
    except Exception as e:
        print(f"❌ Erro ao gerar ícones: {e}")
