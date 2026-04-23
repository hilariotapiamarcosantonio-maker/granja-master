import { MetadataRoute } from 'next';
import { getAllPosts } from "@/lib/api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const recipes = await getAllPosts('recipes');
    const posts = await getAllPosts('posts');

    const baseUrl = 'https://gelatinasypostres.com'; // Sustituir por URL real

    const recipeEntries = recipes.map((r) => ({
        url: `${baseUrl}/recetas/${r.slug}`,
        lastModified: new Date(),
    }));

    const postEntries = posts.map((p) => ({
        url: `${baseUrl}/blog/${p.slug}`,
        lastModified: new Date(),
    }));

    return [
        { url: baseUrl, lastModified: new Date() },
        { url: `${baseUrl}/recetas`, lastModified: new Date() },
        { url: `${baseUrl}/blog`, lastModified: new Date() },
        { url: `${baseUrl}/biblioteca`, lastModified: new Date() },
        ...recipeEntries,
        ...postEntries
    ];
}
