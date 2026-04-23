import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recetario Gratis | Gelatinas y Postres",
  description: "Descubre recetas de gelatinas y postres fáciles, atractivas y con potencial para vender.",
};

export default function RecetarioLanding() {
  return (
    <div className="animate-fade-in max-w-4xl mx-auto space-y-16 py-8">
      
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="inline-block text-xs font-bold text-brand-accent mb-2 uppercase tracking-wider bg-brand-surface px-3 py-1 rounded-full">
          Recetario Principal de Conversión
        </div>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text leading-tight">
          Descubre recetas de <span className="text-brand-primary">gelatinas y postres fáciles</span>, atractivas y con potencial para vender
        </h1>
        <p className="text-gray-600 font-base text-lg max-w-3xl mx-auto leading-relaxed">
          Esta landing está pensada para reunir lo mejor del proyecto: recetas prácticas, ideas visuales, inspiración para preparar en casa y una base sólida para futuras recomendaciones, productos y recursos.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <a 
            href="/pdfs/recetario-basico-gelatinas-postres.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-primary text-white font-bold uppercase tracking-wide px-8 py-4 rounded shadow-lg hover:bg-brand-accent hover:shadow-xl transition-all"
          >
            Quiero Ver El Recetario
          </a>
          <Link 
            href="/recetas" 
            className="bg-white text-brand-primary border-2 border-brand-primary font-bold uppercase tracking-wide px-8 py-4 rounded hover:bg-brand-surface transition-all"
          >
            Ver Recetas Publicadas
          </Link>
        </div>
        <p className="text-sm text-gray-500 italic mt-4">
          Ideal para quienes buscan recetas fáciles, opciones para fiestas y contenido que pueda inspirar ventas.
        </p>
      </section>

      {/* Beneficios Section */}
      <section className="bg-brand-surface rounded-3xl p-8 md:p-12 border border-brand-primary/10">
        <h2 className="font-heading text-3xl font-bold text-center text-brand-text mb-10">
          Lo que busca resolver este recetario
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-base text-gray-700">
          {[
            "Encontrar recetas fáciles y agradables a la vista",
            "Inspirarte para preparar postres en casa",
            "Descubrir ideas que luego puedan ayudarte a vender",
            "Acceder a una pieza central dentro del proyecto",
            "Preparar el camino para futuras recomendaciones y cursos"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
              <span className="text-brand-primary font-bold">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Triple Feature Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-8 border-t border-gray-100">
        <div>
          <h3 className="font-heading text-xl font-bold text-brand-text mb-3">Recetas Prácticas</h3>
          <p className="text-gray-600 text-sm font-base">
            Preparaciones fáciles de entender, pensadas para que cualquier persona pueda empezar sin complicarse.
          </p>
        </div>
        <div>
          <h3 className="font-heading text-xl font-bold text-brand-text mb-3">Ideas para Vender</h3>
          <p className="text-gray-600 text-sm font-base">
            Opciones con presentación atractiva y potencial para convertirse en producto para fiestas o emprendimiento.
          </p>
        </div>
        <div>
          <h3 className="font-heading text-xl font-bold text-brand-text mb-3">Inspiración Organizada</h3>
          <p className="text-gray-600 text-sm font-base">
            Una base clara para avanzar luego hacia recursos premium, recomendaciones afiliadas y futuras captaciones.
          </p>
        </div>
      </section>

    </div>
  );
} 