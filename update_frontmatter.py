import os
import re
import random

CONTENT_DIRS = [
    'src/content/blog',
    'src/content/recetas',
    'content/posts',
    'content/recipes'
]

IMAGE_DIRS = {
    'posts': 'public/images/posts',
    'recipes': 'public/images/recipes'
}

PUBLIC_URL_BASE = {
    'posts': '/images/posts',
    'recipes': '/images/recipes'
}

def update_frontmatter():
    print("Iniciando Enrutador Final V6 (Fuzzy + Fallback)...\n")
    
    # Load all available images
    images_by_cat = {'posts': [], 'recipes': []}
    for cat, img_dir in IMAGE_DIRS.items():
        if os.path.exists(img_dir):
            for img in os.listdir(img_dir):
                if img.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
                    images_by_cat[cat].append({
                        'name': img,
                        'name_lower': img.lower(),
                        'url': f"{PUBLIC_URL_BASE[cat]}/{img}"
                    })

    for content_dir in CONTENT_DIRS:
        if not os.path.exists(content_dir):
            continue
            
        # Determine category based on path
        cat = 'posts' if 'blog' in content_dir or 'posts' in content_dir else 'recipes'
        available_images = images_by_cat[cat]
        
        if not available_images:
            continue

        print(f"Procesando: {content_dir}")
        for filename in os.listdir(content_dir):
            if filename.endswith('.md'):
                filepath = os.path.join(content_dir, filename)
                slug = os.path.splitext(filename)[0].lower()
                slug_parts = set(re.split(r'[^a-z0-9]+', slug))
                
                best_match = None
                best_score = 0
                
                for img in available_images:
                    img_name_base = os.path.splitext(img['name_lower'])[0]
                    img_parts = set(re.split(r'[^a-z0-9]+', img_name_base))
                    
                    if slug == img_name_base:
                        best_match = img
                        best_score = 100
                        break
                    
                    intersection = slug_parts.intersection(img_parts)
                    score = len(intersection)
                    if score > best_score:
                        best_score = score
                        best_match = img
                
                # If no good match, pick a random one from category to avoid empty images
                if not best_match or best_score < 1:
                    best_match = random.choice(available_images)
                    print(f"  RANDOM: {filename} -> {best_match['url']}")
                else:
                    print(f"  MATCH: {filename} -> {best_match['url']} (Score: {best_score})")

                image_url = best_match['url']
                
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                if 'image:' in content:
                    new_content = re.sub(r'image:.*', f'image: "{image_url}"', content)
                else:
                    new_content = re.sub(r'^---', f'---\nimage: "{image_url}"', content)
                
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)

if __name__ == "__main__":
    update_frontmatter()