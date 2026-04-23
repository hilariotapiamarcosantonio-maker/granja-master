import os

# Rutas de las carpetas de contenido
paths = [
    'content/recipes',
    'content/posts'
]

# Componentes a inyectar
# Nota: Marcos, aquí puedes cambiar "TU_LINK_REAL" por tu enlace de afiliado de Hotmart después.
amazon_tag = '<AmazonProduct asin="B00004OCNS" nombre="Molde para Gelatina Recomendado" />'
hotmart_tag = '<HotmartButton url="[https://go.hotmart.com/TU_LINK_REAL](https://go.hotmart.com/TU_LINK_REAL)" texto="Acceder al Recetario Maestro" />'

def inject_monetization():
    files_updated = 0
    
    for path in paths:
        if not os.path.exists(path):
            print(f"La ruta {path} no existe. Saltando...")
            continue
            
        for filename in os.listdir(path):
            if filename.endswith('.md'):
                file_path = os.path.join(path, filename)
                
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Verificamos si ya tiene los componentes para no duplicar
                has_amazon = 'AmazonProduct' in content
                has_hotmart = 'HotmartButton' in content
                
                if not has_amazon or not has_hotmart:
                    new_content = content.strip() + "\n\n---\n\n"
                    if not has_amazon:
                        new_content += amazon_tag + "\n"
                    if not has_hotmart:
                        new_content += hotmart_tag + "\n"
                    
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    files_updated += 1
                    print(f"Inyectado en: {filename}")

    print(f"\nProceso terminado. Se actualizaron {files_updated} archivos.")

if __name__ == "__main__":
    inject_monetization()
