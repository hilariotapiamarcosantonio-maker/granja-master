import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import { Metadata } from "next";
import SafeImage from "@/components/ui/SafeImage";

export const metadata: Metadata = {
  title: "Blog de Repostería y Emprendimiento | Gelatinas y Postres",
  description: "Consejos, errores comunes y estrategias para emprender con gelatinas y postres.",
};

export default async function BlogIndex() {
  const posts = await getAllPosts('posts');

  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <header className="mb-10 border-b pb-4 border-brand-primary/10">
        <h1 className="font-heading text-4xl font-bold text-brand-primary mb-2">
          Blog & Estrategia
        </h1>
        <p className="text-gray-600 font-base">
          Técnicas de alta repostería y consejos de negocio para tu emprendimiento.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300">
            <div className="h-48 w-full bg-brand-surface relative overflow-hidden">
              <SafeImage
    src={post.frontmatter.featuredImage || post.frontmatter.image || "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600&auto=format&fit=crop"}
    alt={post.frontmatter.title}
    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
    fallback="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600&auto=format&fit=crop"
  />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="text-xs font-bold text-brand-accent mb-2 uppercase tracking-wider">
                {post.frontmatter.category || "Artículo"}
              </div>
              <h2 className="font-heading text-xl font-bold text-brand-text mb-2 group-hover:text-brand-primary line-clamp-2">
                {post.frontmatter.title}
              </h2>
              <p className="text-gray-600 font-base text-sm line-clamp-3 mt-auto">
                {post.frontmatter.excerpt || post.frontmatter.meta_description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
