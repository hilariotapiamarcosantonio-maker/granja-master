export default function AmazonProduct({ asin, nombre }: { asin: string, nombre: string }) {
  const amazonUrl = `https://www.amazon.com/dp/${asin}/?tag=TU_AMAZON_TAG`;
  const placeholder = "https://images.unsplash.com/photo-1596040332304-7a3b379e4d02?q=80&w=400&auto=format&fit=crop";

  return (
    <div className="not-prose my-16 group">
      <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col md:flex-row items-stretch">
        <div className="md:w-1/3 bg-slate-50 flex items-center justify-center p-8 group-hover:bg-brand-surface transition-colors">
          <img src={placeholder} alt={nombre} className="w-full h-auto max-h-40 object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="md:w-2/3 p-8 md:p-10 flex flex-col justify-center space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
            <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em]">Selección Profesional</span>
          </div>
          <h3 className="font-heading text-2xl font-bold text-brand-text leading-tight">{nombre}</h3>
          <p className="text-gray-500 font-base text-sm leading-relaxed">
            Hemos seleccionado este utensilio por su durabilidad y precisión. Es el mismo que usamos en nuestras guías maestras para asegurar resultados de alta repostería.
          </p>
          <div className="pt-2">
            <a href={amazonUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand-text text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-brand-primary transition-all shadow-lg active:scale-95">
              Ver en Amazon
              <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
