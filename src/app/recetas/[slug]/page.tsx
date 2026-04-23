import { getPostBySlug, getPostSlugs, getAllPosts } from "@/lib/api";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import HotmartButton from "../../../components/monetization/HotmartButton";
import AmazonProduct from "../../../components/monetization/AmazonProduct";
import SafeImage from "@/components/ui/SafeImage";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getPostSlugs("recipes");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  const post = await getPostBySlug(slug, 'recipes');

  if (!post) {
    return {
      title: 'Receta no encontrada',
    };
  }

  return {
    title: post.frontmatter.meta_title || post.frontmatter.title,
    description: post.frontmatter.meta_description,
    openGraph: {
      images: [post.frontmatter.featuredImage || '/logo-gelatinas-y-postres.png'],
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  // En Next.js 15+, params es una promesa que DEBE resolverse
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const post = await getPostBySlug(slug, 'recipes');

  if (!post) return notFound();

  const allRecipes = await getAllPosts('recipes');
  const allPosts = await getAllPosts('posts');

  const CustomLink = ({ href: originalHref, ...rest }: any) => {
    let href = originalHref || '';
    if (href.startsWith('INTERNAL:/') || href.startsWith('/')) {
      const cleanSlug = href.replace('INTERNAL:/', '').replace(/^\//, '');
      if (allRecipes.some(r => r.slug === cleanSlug)) {
        href = `/recetas/${cleanSlug}`;
      } else if (allPosts.some(p => p.slug === cleanSlug)) {
        href = `/blog/${cleanSlug}`;
      } else {
        href = `/${cleanSlug}`;
      }
    }
    return <Link href={href} {...rest} className="text-brand-primary font-bold hover:text-brand-accent underline transition-colors" />;
  };

  const components = { HotmartButton, AmazonProduct, a: CustomLink };

  const postIndex = allRecipes.findIndex(p => p.slug === slug);
  const prevPost = postIndex > 0 ? allRecipes[postIndex - 1] : null;
  const nextPost = postIndex < allRecipes.length - 1 ? allRecipes[postIndex + 1] : null;

  return (
    <>
      {/* Hero Section de la Receta */}
      <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <SafeImage 
          src={post.frontmatter.featuredImage || post.frontmatter.image || "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1600&auto=format&fit=crop"} 
          alt={post.frontmatter.title}
          className="w-full h-full object-cover"
          fallback="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1600&auto=format&fit=crop"
        />
        {/* Overlay degradado para mejorar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
              {post.frontmatter.recipe_category || "Receta Premium"}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-heading leading-tight shadow-sm">
              {post.frontmatter.title}
            </h1>
          </div>
        </div>
      </div>

      <article className="max-w-none py-12">
        <div className="prose prose-pink prose-lg max-w-none font-base">
          <MDXRemote source={post.content} components={components} />
        </div>
      </article>

      {/* Navegación Premium entre Recetas */}
      <div className="flex flex-col sm:flex-row justify-between gap-8 my-20 pt-10 border-t border-gray-100">
        
        {/* Enlace Receta Anterior */}
        {prevPost ? (
          <Link href={`/recetas/${prevPost.slug}`} className="group flex flex-row items-center gap-5 w-full sm:w-1/2 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-brand-primary/20 hover:shadow-lg transition-all duration-300">
            {/* Icono Flecha Izquierda (SVG) */}
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-surface text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            </div>
            {/* Texto */}
            <div className="flex flex-col">
              <span className="text-xs text-brand-primary/70 uppercase tracking-widest font-bold mb-1">Receta Anterior</span>
              <span className="font-heading font-bold text-lg text-brand-text line-clamp-2 group-hover:text-brand-primary transition-colors">{prevPost.frontmatter.title}</span>
            </div>
          </Link>
        ) : <div className="w-full sm:w-1/2"></div>}
        
        {/* Enlace Siguiente Receta */}
        {nextPost ? (
          <Link href={`/recetas/${nextPost.slug}`} className="group flex flex-row-reverse items-center gap-5 w-full sm:w-1/2 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-brand-primary/20 hover:shadow-lg transition-all duration-300 text-right">
            {/* Icono Flecha Derecha (SVG) */}
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-surface text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </div>
            {/* Texto */}
            <div className="flex flex-col">
              <span className="text-xs text-brand-primary/70 uppercase tracking-widest font-bold mb-1">Siguiente Receta</span>
              <span className="font-heading font-bold text-lg text-brand-text line-clamp-2 group-hover:text-brand-primary transition-colors">{nextPost.frontmatter.title}</span>
            </div>
          </Link>
        ) : <div className="w-full sm:w-1/2"></div>}
      </div>
    </>
  );
}