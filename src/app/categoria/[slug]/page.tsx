import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import SafeImage from "@/components/ui/SafeImage";
import { notFound } from "next/navigation";

export default async function CategoriaPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  // Decodificamos el slug a texto legible (ej: "postres-para-vender" -> "postres para vender")
  const categoryName = slug.replace(/-/g, ' ').toLowerCase();

  const allRecipes = await getAllPosts('recipes');
  const allPosts = await getAllPosts('posts');
  const allContent = [...allRecipes, ...allPosts];

  // Filtramos el contenido que coincida con la categoría
  const filteredContent = allContent.filter(item => {
    const itemCat = (item.frontmatter.category || item.frontmatter.recipe_category || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const searchSlug = slug.replace(/-/g, ' ').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return itemCat.includes(searchSlug) || searchSlug.includes(itemCat);
  });

  if (filteredContent.length === 0) {
    return (
      <div className="text-center py-32 space-y-6">
        <h1 className="font-heading text-4xl font-bold text-brand-primary">Categoría en construcción</h1>
        <p className="text-gray-600">Pronto añadiremos contenido a esta sección.</p>
        <Link href="/" className="text-brand-accent font-bold hover:underline">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <header className="mb-16 text-center border-b border-gray-100 pb-8">
        <div className="text-brand-accent font-bold text-sm uppercase tracking-widest mb-2">Explorando Categoría</div>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-text capitalize">
          {categoryName}
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredContent.map((item) => (
          <Link href={`/${item.frontmatter.post_type === 'recipe' ? 'recetas' : 'blog'}/${item.slug}`} key={item.slug} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col h-full">
            <div className="h-56 w-full overflow-hidden bg-brand-surface">
              <SafeImage 
                src={item.frontmatter.featuredImage || "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600&auto=format&fit=crop"} 
                alt={item.frontmatter.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                fallback="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600&auto=format&fit=crop"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-heading text-xl font-bold text-brand-text group-hover:text-brand-primary mb-3 line-clamp-2">{item.frontmatter.title}</h3>
              <p className="text-gray-500 text-sm font-base mt-auto line-clamp-2">{item.frontmatter.excerpt || item.frontmatter.meta_description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 