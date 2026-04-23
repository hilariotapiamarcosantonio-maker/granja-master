import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import SafeImage from "@/components/ui/SafeImage";

export default async function Home() {
  const allRecipes = await getAllPosts('recipes');
  const allPosts = await getAllPosts('posts');
  
  // Tomamos solo los 6 más recientes para el Home
  const featuredRecipes = allRecipes.slice(0, 6);
  const latestPosts = allPosts.slice(0, 6);

  return (
    <div className="space-y-32 pb-32">
      
      {/* 1. HERO SECTION ESTRATÉGICO */}
      <section className="relative bg-brand-surface rounded-3xl p-12 md:p-24 lg:py-32 text-center space-y-8 border border-brand-primary/5 overflow-hidden">
        <div className="relative z-10 space-y-6">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-text leading-tight">
            Domina el Arte de la <span className="text-brand-primary">Repostería Rentable</span>
          </h1>
          <p className="text-gray-600 font-base text-lg max-w-2xl mx-auto leading-relaxed">
            Recetas probadas, técnicas de alta repostería y estrategias de negocio para convertir tu cocina en un activo de soberanía digital.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link href="/recetario" className="bg-brand-primary text-white font-bold uppercase tracking-wide px-8 py-4 rounded shadow-lg hover:bg-brand-accent transition-all">
              Descargar Recetario Gratis
            </Link>
            <Link href="/recetas" className="bg-white text-brand-primary border-2 border-brand-primary font-bold uppercase tracking-wide px-8 py-4 rounded hover:bg-brand-surface transition-all">
              Ver Todas las Recetas
            </Link>
          </div>
        </div>
        {/* Decoración sutil de fondo */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl"></div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-text tracking-tight">
              ¿Por qué aprender con <span className="text-brand-primary">nosotros</span>?
            </h2>
            <div className="w-24 h-1.5 bg-brand-accent mx-auto rounded-full"></div>
            <p className="text-gray-600 font-base text-lg">
              Diseñamos metodologías que transforman la pasión en sistemas rentables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-brand-surface text-brand-primary flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500 shadow-inner">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-brand-text mb-4">Metodología Paso a Paso</h3>
              <p className="text-gray-500 font-base leading-relaxed">
                No lanzamos recetas al azar. Cada guía está estructurada bajo una arquitectura de aprendizaje probada para garantizar resultados desde el primer intento.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-brand-surface text-brand-primary flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500 shadow-inner">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-brand-text mb-4">Enfoque en Rentabilidad</h3>
              <p className="text-gray-500 font-base leading-relaxed">
                Vemos los postres como activos. Te enseñamos a optimizar costos, elegir empaques premium y elevar el valor percibido de cada creación para vender más caro.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-brand-surface text-brand-primary flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500 shadow-inner">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-brand-text mb-4">Comunidad Exclusiva</h3>
              <p className="text-gray-500 font-base leading-relaxed">
                Al aprender con nosotros, entras en un ecosistema de apoyo donde compartimos proveedores, trucos de última hora y estrategias de marketing real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RECETAS DESTACADAS (Grid dinámico) */}
      <section className="space-y-10">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="font-heading text-3xl font-bold text-brand-text">Recetas Destacadas</h2>
            <p className="text-gray-500 font-base mt-2">Nuestras preparaciones más exitosas paso a paso.</p>
          </div>
          <Link href="/recetas" className="text-brand-primary font-bold border-b border-brand-primary pb-1 hover:text-brand-accent">Ver todo →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRecipes.map((recipe) => (
            <Link href={`/recetas/${recipe.slug}`} key={recipe.slug} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all">
              <div className="h-52 w-full overflow-hidden">
                <SafeImage 
                  src={recipe.frontmatter.featuredImage || "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600&auto=format&fit=crop"} 
                  alt={recipe.frontmatter.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  fallback="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600&auto=format&fit=crop"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-heading text-lg font-bold text-brand-text group-hover:text-brand-primary line-clamp-2 mb-4">{recipe.frontmatter.title}</h3>
                <p className="text-gray-500 text-sm font-base mt-2 mb-4 line-clamp-2">
                  {recipe.frontmatter.excerpt || recipe.frontmatter.meta_description || "Aprende el paso a paso detallado para lograr la textura y sabor perfectos en esta preparación."}
                </p>
                <span className="text-brand-primary font-bold text-sm mt-auto group-hover:text-brand-accent transition-colors">
                  Ver receta →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. ÚLTIMOS DEL BLOG (Lista estratégica) */}
      <section className="bg-gray-50 -mx-4 px-4 py-24 rounded-[3rem] border border-gray-100 space-y-12">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="font-heading text-3xl font-bold text-brand-text">Blog & Estrategia</h2>
          <p className="text-gray-600 font-base">Consejos de negocio, errores comunes y guías de emprendimiento.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all">
              <div className="h-52 w-full overflow-hidden">
                <SafeImage 
                  src={post.frontmatter.featuredImage || "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=600&auto=format&fit=crop"} 
                  alt={post.frontmatter.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  fallback="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=600&auto=format&fit=crop"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-heading font-bold text-brand-text group-hover:text-brand-primary leading-snug line-clamp-2 mb-4">{post.frontmatter.title}</h3>
                <p className="text-gray-500 text-sm font-base mt-2 mb-4 line-clamp-2">
                  {post.frontmatter.excerpt || post.frontmatter.meta_description}
                </p>
                <span className="text-brand-primary font-bold text-sm mt-auto group-hover:text-brand-accent transition-colors">
                  Leer más →
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/blog" className="inline-block bg-white border border-gray-200 px-6 py-3 rounded-full font-bold text-sm hover:border-brand-primary hover:text-brand-primary transition-all">
            Ir al Blog Completo
          </Link>
        </div>
      </section>

      {/* 5. CTA FINAL DE CONVERSIÓN */}
      <section className="bg-brand-primary rounded-[3rem] py-16 px-8 text-center text-white space-y-6 shadow-2xl shadow-brand-primary/20">
        <h2 className="font-heading text-2xl md:text-3xl font-bold">¿Lista para llevar tu pasión al siguiente nivel?</h2>
        <p className="text-white/80 font-base max-w-xl mx-auto">
          Descarga nuestra guía maestra y descubre cómo logramos texturas perfectas y un negocio rentable.
        </p>
        <Link href="/recetario" className="inline-block bg-brand-accent text-brand-text font-bold uppercase tracking-widest px-8 py-3.5 rounded-full hover:shadow-lg transition-all active:scale-95">
          Acceder al Recetario Ahora
        </Link>
      </section>

    </div>
  );
} 