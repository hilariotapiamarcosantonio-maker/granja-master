import React from 'react';
import { getAllPosts } from "@/lib/api";
import Link from 'next/link';

// Componente de servidor para cargar datos
async function getLibraryData() {
  const recipes = await getAllPosts('recipes');
  // Ordenar y tomar 4 populares (usando el orden actual como proxy de popularidad por ahora)
  const populares = recipes.slice(0, 4);
  return { populares };
}

export default async function BibliotecaPage() {
  const { populares } = await getLibraryData();

  const recursosDescargables = [
    { t: "Calculadora de Costos", d: "Calculadora técnica de márgenes (Automatizada Excel)", link: "/docs/Calculadora_Costos_Gelatinas.pdf" },
    { t: "Guía WhatsApp Business", d: "Guiones exactos para cerrar ventas por chat", link: "/docs/Guia_WhatsApp_Ventas.pdf" },
    { t: "Recetario de 10 Postres", d: "10 recetas diseñadas para la recompra semanal", link: "/docs/Mini_Recetario_10_Postres.pdf" }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-32 font-sans selection:bg-yellow-300 selection:text-black">
      {/* Header */}
      <section className="bg-slate-950 text-white py-24 px-6 mb-16 border-b-8 border-[#DC2626]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-block bg-white/10 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-yellow-400 border border-white/20">
            Acceso Inmediato
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">Tu Biblioteca <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">Maestra.</span></h1>
          <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">Herramientas, guías y recetas para escalar tu negocio de postres.</p>
        </div>
      </section>

      {/* Grid Principal: Masterclass destacada */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-black tracking-tighter mb-10 text-slate-900">Entrenamiento Premium</h2>
        <Link href="/masterclass" className="block group bg-white rounded-[2.5rem] border-4 border-yellow-400 shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 relative overflow-hidden p-1">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-slate-950 text-white rounded-[2rem] p-8 md:p-12">
            <div className="flex-1 space-y-4">
              <span className="text-yellow-400 font-black uppercase tracking-widest text-xs">Recomendado</span>
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter">Blueprint Maestro</h3>
              <p className="text-slate-400 text-lg">El sistema completo para dominar la rentabilidad en el nicho de postres.</p>
              <span className="inline-block bg-yellow-400 text-slate-950 font-black px-8 py-4 rounded-xl uppercase tracking-widest text-sm hover:bg-white transition-colors">Acceso Inmediato</span>
            </div>
          </div>
        </Link>
      </section>

      {/* Grid de Recetas (Muestras gratuitas) */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-black tracking-tighter mb-10 text-slate-900">Muestras Gratuitas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {populares.map((post, i) => (
            <Link key={i} href={`/recetas/${post.slug}`} className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={post.image || "/images/recipes/default.jpg"} alt={post.frontmatter.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-[#DC2626] transition-colors">{post.frontmatter.title}</h4>
                <p className="text-slate-500 text-xs font-medium flex-grow">{post.frontmatter.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Sección de Descargas */}
      <section className="px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-black tracking-tighter mb-10 text-slate-900">Herramientas de Trabajo</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {recursosDescargables.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center shadow-sm">
              <div className="w-16 h-16 bg-[#00B547]/10 text-[#00B547] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{item.t}</h4>
              <p className="text-slate-500 text-sm mb-6 flex-grow">{item.d}</p>
              <a href={item.link} download className="w-full bg-[#00B547] text-white font-black uppercase tracking-widest text-xs px-6 py-4 rounded-xl hover:bg-[#009b3d] transition-colors">
                Obtener Gratis
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
