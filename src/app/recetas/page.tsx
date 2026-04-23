import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import { Metadata } from "next";
import SafeImage from "@/components/ui/SafeImage";

export const metadata: Metadata = {
  title: "Todas las Recetas | Gelatinas y Postres",
  description: "Explora nuestra colección completa de recetas de alta repostería y gelatinas paso a paso.",
};

export default async function RecetasIndex() {
  const recipes = await getAllPosts('recipes');

  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <header className="mb-10 border-b pb-4 border-brand-primary/10">
        <h1 className="font-heading text-4xl font-bold text-brand-primary mb-2">
          Todas las Recetas
        </h1>
        <p className="text-gray-600 font-base">
          Nuestra colección completa de alta repostería y gelatinas paso a paso.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe: any) => (
          <Link href={`/recetas/${recipe.slug}`} key={recipe.slug} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300">
            <div className="h-56 w-full bg-brand-surface relative overflow-hidden">
              <SafeImage 
                src={recipe.image || "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600&auto=format&fit=crop"} 
                alt={recipe.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                fallback="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600&auto=format&fit=crop"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="font-heading text-xl font-bold text-brand-text mb-3 group-hover:text-brand-primary transition-colors line-clamp-2">
                {recipe.title}
              </h2>
              <div className="flex gap-3 text-xs text-gray-500 font-base mb-4 mt-auto">
                <span className="bg-gray-50 px-2 py-1 rounded border border-gray-100">
                  ⏱️ {recipe.prep_time || "15 min"}
                </span>
                <span className="bg-gray-50 px-2 py-1 rounded border border-gray-100">
                  🍽️ {recipe.servings || "Varias"}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 