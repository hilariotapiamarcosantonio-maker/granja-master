import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const rootDirectory = process.cwd();

export function getPostSlugs(type: 'recipes' | 'posts') {
  const postsDirectory = path.join(rootDirectory, 'content', type);
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, type: 'recipes' | 'posts') {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(rootDirectory, 'content', type, `${realSlug}.md`);
  
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  // Flatten common fields for easier frontend access
  return { 
    slug: realSlug, 
    ...data, 
    frontmatter: data, 
    content,
    image: data.image || data.featuredImage || data.featured_image
  };
}

export function getAllPosts(type: 'recipes' | 'posts') {
  const slugs = getPostSlugs(type);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, type))
    .filter((post) => post !== null);
  return posts;
}
