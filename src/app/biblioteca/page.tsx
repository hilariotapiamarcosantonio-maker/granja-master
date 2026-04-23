'use client';

import React from 'react';

const recursos = [
  { t: "El Negocio de las Gelatinas", d: "Blueprint Maestro: Rentabilidad en 15 Días", p: "$34.95", type: "Premium", link: "/masterclass", color: "bg-slate-950 text-yellow-400" },
  { t: "Guía WhatsApp Business", d: "Guiones exactos para cerrar ventas por chat", p: "GRATIS", type: "Bono", link: "#", color: "bg-[#00B547] text-white" },
  { t: "Planilla de Costos Excel", d: "Calculadora técnica de márgenes (Automatizada)", p: "GRATIS", type: "Herramienta", link: "#", color: "bg-[#00B547] text-white" },
  { t: "Recetario de Lanzamiento", d: "10 recetas diseñadas para la recompra semanal", p: "GRATIS", type: "Receta", link: "#", color: "bg-[#00B547] text-white" }
];

export default function BibliotecaPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-32 font-sans selection:bg-yellow-300 selection:text-black">
      {/* Header */}
      <section className="bg-slate-950 text-white py-24 px-6 mb-16 border-b-8 border-[#DC2626]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-block bg-white/10 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-yellow-400 border border-white/20">
            Acceso Inmediato
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">Tu Arsenal de <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">Soberanía Digital.</span></h1>
          <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">Descarga las herramientas de ingeniería comercial y comienza a facturar con tus postres hoy mismo.</p>
        </div>
      </section>

      {/* Grid de Recursos */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recursos.map((item, i) => (
            <div key={i} className="group bg-white p-8 rounded-[2.5rem] border-2 border-slate-100 hover:border-[#DC2626] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col h-full">
              {item.type === "Premium" && <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-[#DC2626]"></div>}
              
              <div className={`text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest self-start mb-6 shadow-sm ${item.color}`}>
                {item.type}
              </div>
              
              <h3 className="text-2xl font-black tracking-tighter mb-4 text-slate-900 leading-tight">{item.t}</h3>
              <p className="text-slate-500 text-sm mb-8 font-medium flex-grow">{item.d}</p>
              
              <div className="flex items-center justify-between pt-6 border-t-2 border-slate-50 mt-auto">
                <span className="font-black text-slate-900 text-lg">{item.p}</span>
                <a href={item.link} className="bg-slate-900 text-white text-[11px] font-black uppercase px-6 py-3 rounded-xl hover:bg-[#DC2626] transition-colors shadow-md">
                  Acceder
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}