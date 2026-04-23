export default function HotmartButton({ url, texto }: { url: string, texto: string }) {
  const ebookImage = "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop";

  return (
    <div className="not-prose my-20">
      <div className="bg-brand-primary rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-brand-primary/20">
        {/* Elemento de diseño abstracto */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-accent/20 blur-2xl rounded-full"></div>
              <img src={ebookImage} alt="Recetario" className="relative w-48 md:w-64 h-auto rounded-lg shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white/10" />
            </div>
          </div>
          
          <div className="w-full lg:w-3/5 text-center lg:text-left space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold uppercase tracking-widest text-brand-accent">Acceso Inmediato</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight">
              Lleva tu negocio al <span className="italic text-brand-accent">siguiente nivel</span>
            </h2>
            <p className="text-white/80 font-base text-lg leading-relaxed">
              No es solo un libro de cocina; es el sistema de costos, marketing y recetas premium que usamos para dominar el nicho de postres rentables.
            </p>
            <div className="pt-4">
              <a href={url} target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-accent text-brand-text px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:scale-105 transition-all shadow-xl active:scale-95">
                {texto || "Descargar Ahora"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}