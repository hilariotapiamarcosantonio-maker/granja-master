import Link from 'next/link';
export default function RecipeCard({ title, slug }: { title: string, slug: string }) {
  return (
    <div className="bg-brand-surface p-4 rounded-lg shadow-sm border border-brand-primary/10">
      <div className="aspect-video bg-gray-200 rounded mb-4"></div>
      <h3 className="font-heading text-xl mb-2 text-brand-text">{title}</h3>
      <Link href={`/recetas/${slug}`} className="text-brand-primary font-bold hover:underline font-base">Ver receta →</Link>
    </div>
  );
}