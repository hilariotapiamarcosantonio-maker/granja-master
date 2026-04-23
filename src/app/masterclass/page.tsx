'use client';

import React, { useState, useEffect } from 'react';

const currencyMap: Record<string, { symbol: string, price: string, old: string, totalValue: string }> = {
  'DO': { symbol: 'RD$', price: '2,060', old: '5,700', totalValue: '12,500' },
  'US': { symbol: '$', price: '34.95', old: '97.00', totalValue: '208.00' },
  'MX': { symbol: '$', price: '600', old: '1,650', totalValue: '3,800' },
  'DEFAULT': { symbol: '$', price: '34.95', old: '97.00', totalValue: '208.00' }
};

export default function MasterclassUltimate() {
  const [currency, setCurrency] = useState(currencyMap['DEFAULT']);
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });
  const [spots, setSpots] = useState(7);
  const [visitors, setVisitors] = useState(243);
  const hotmartLink = "https://go.hotmart.com/F104277018P?ap=eda1";

  // Temporizador
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { minutes: prev.minutes - 1, seconds: 59 };
        return { minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Geolocalización
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (currencyMap[data.country_code]) setCurrency(currencyMap[data.country_code]);
      }).catch(() => {});
  }, []);

  // Simulador de Visitantes (Prueba Social)
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitors(prev => prev + Math.floor(Math.random() * 5) - 1);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[99999] overflow-y-auto bg-[#F8FAFC] text-slate-900 font-sans antialiased selection:bg-yellow-300 selection:text-black">
      
      {/* 1. URGENCY HEADER (Agresivo) */}
      <div className="bg-[#DC2626] text-white py-2 px-4 text-center sticky top-0 z-[100] flex flex-wrap justify-center items-center gap-2 md:gap-4 shadow-[0_5px_15px_rgba(220,38,38,0.4)]">
        <span className="text-[11px] md:text-sm font-black uppercase tracking-wider animate-pulse">⚠️ ATENCIÓN: Las inscripciones con el 65% de DESCUENTO cierran en:</span>
        <span className="text-lg md:text-xl tabular-nums font-black bg-black/30 px-3 py-1 rounded text-yellow-300">
          {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
        </span>
      </div>

      {/* VISITORS TOAST (Regresa la Vida) */}
      <div className="fixed bottom-6 left-6 z-[100000] hidden md:block animate-bounce-slow">
        <div className="bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border-2 border-red-500 flex items-center gap-3">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
          </div>
          <p className="text-[11px] font-black text-slate-600 uppercase tracking-widest">
            <span className="text-red-600">{visitors} emprendedoras</span> viendo esta oferta
          </p>
        </div>
      </div>

      {/* 2. HERO / VSL SECTION */}
      <section className="bg-white pt-10 pb-16 px-4 border-b-4 border-slate-200">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-block bg-yellow-100 text-yellow-800 px-5 py-1.5 rounded-full text-xs md:text-sm font-black uppercase tracking-widest border border-yellow-300 shadow-sm">
            Para emprendedoras que quieren facturar desde casa
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] text-slate-900">
            Descubre El "Blueprint" Exacto Para Construir Un Negocio De <span className="text-[#DC2626] underline decoration-4 decoration-yellow-400 bg-yellow-100 px-2">Postres En Vaso Altamente Rentable</span> En Menos De 15 Días.
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-10 items-center mt-10 text-left">
             <div className="space-y-6">
                <p className="text-lg md:text-xl text-slate-600 font-medium">
                  Sin ser chef profesional, sin invertir miles de dólares en equipos y dominando la <strong className="text-slate-900 bg-yellow-200 px-1">ingeniería de costos</strong> para no perder ni un centavo en cada venta.
                </p>
                <div className="space-y-4">
                   <a href={hotmartLink} target="_blank" className="block w-full text-center bg-[#00B547] text-white text-xl md:text-2xl font-black uppercase tracking-tight px-4 py-6 rounded-xl shadow-[0_8px_0_#008A36,0_15px_30px_rgba(0,181,71,0.4)] hover:translate-y-1 hover:shadow-[0_4px_0_#008A36,0_10px_20px_rgba(0,181,71,0.5)] active:translate-y-2 active:shadow-[0_0px_0_#008A36] transition-all">
                      SÍ, QUIERO ACCEDER AHORA
                   </a>
                   <div className="flex flex-wrap justify-center items-center gap-2 text-[10px] font-bold text-slate-500 uppercase">
                      <span className="flex items-center gap-1">🔒 Compra Segura</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-[#00B547]">✔️ Acceso Inmediato</span>
                   </div>
                </div>
             </div>
             
             {/* Imagen Hero Dinámica (.png) */}
             <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-100 transform hover:-translate-y-2 transition-transform duration-500">
                <img src="/images/hero-masterclass-final.png" alt="Postres Premium" className="w-full h-auto object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
                <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded uppercase shadow-lg">🔥 ALTA DEMANDA</div>
             </div>
          </div>

          {/* VSL YOUTUBE REAL */}
          <div className="mt-16 relative aspect-video bg-slate-900 rounded-xl shadow-2xl overflow-hidden border-8 border-slate-100 max-w-4xl mx-auto">
             <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/uSrL0LMZiIc?controls=1&rel=0&modestbranding=1" 
                title="Presentación Postres en Vaso" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
             </iframe>
          </div>
        </div>
      </section>

      {/* 3. VALUE STACK (Oscuro y Contrastante con .png) */}
      <section className="py-20 px-4 bg-slate-950 text-white overflow-hidden border-t-8 border-[#DC2626]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-yellow-400">¿Qué te llevas exactamente hoy?</h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-yellow-400/20 blur-[100px] rounded-full"></div>
              <img src="/images/bundle.png" alt="Pack Completo" className="relative z-10 w-full transform hover:scale-105 transition-transform duration-500 drop-shadow-2xl" onError={(e) => e.currentTarget.style.display = 'none'} />
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4">
                {[
                  { title: "Blueprint Maestro: El Negocio de las Gelatinas", val: "97.00" },
                  { title: "BONO #1: Marketing en Instagram para Postres", val: "47.00" },
                  { title: "BONO #2: Guiones de Cierre por WhatsApp", val: "37.00" },
                  { title: "BONO #3: Planilla Automatizada de Costos", val: "27.00" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start md:items-center justify-between p-4 bg-slate-800/80 rounded-xl border border-slate-700 hover:border-yellow-400 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#00B547] text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm shrink-0 shadow-[0_0_10px_#00B547]">✓</div>
                      <span className="font-bold text-sm md:text-lg">{item.title}</span>
                    </div>
                    <span className="text-slate-400 line-through text-sm shrink-0 ml-4">Valor: {currency.symbol}{item.val}</span>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-gradient-to-br from-[#DC2626] to-red-900 rounded-2xl border-2 border-red-400 text-center space-y-4 shadow-2xl relative overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>
                <p className="text-lg font-bold text-red-200 uppercase tracking-widest">Valor Total Real: <span className="line-through text-white/50">{currency.symbol}{currency.totalValue}</span></p>
                <div className="space-y-1">
                  <p className="text-sm md:text-base font-black uppercase tracking-widest text-yellow-300 animate-pulse">Tu Inversión Hoy Solamente:</p>
                  <p className="text-6xl md:text-8xl font-black tracking-tighter text-white drop-shadow-lg">{currency.symbol}{currency.price}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GARANTÍA Y CIERRE */}
      <section className="py-24 px-4 bg-white text-center">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">¿Lista para tomar acción o seguirás buscando recetas que no dejan margen?</h2>
          <div className="space-y-4">
             <a href={hotmartLink} target="_blank" className="block w-full bg-[#00B547] text-white text-2xl md:text-4xl font-black uppercase tracking-tight px-4 py-8 rounded-2xl shadow-[0_10px_0_#008A36] hover:translate-y-1 hover:shadow-[0_5px_0_#008A36] active:translate-y-2 active:shadow-[0_0px_0_#008A36] transition-all">
                SÍ, QUIERO MI NEGOCIO AHORA
             </a>
             <p className="text-red-600 font-bold animate-pulse text-sm md:text-base pt-4">🔥 Solo quedan {spots} cupos disponibles. El precio subirá a {currency.symbol}{currency.old} pronto.</p>
          </div>
          <div className="pt-10 flex justify-center opacity-40 grayscale">
            <span className="font-bold text-[10px] tracking-widest uppercase">PAGOS PROCESADOS 100% SEGUROS POR HOTMART</span>
          </div>
        </div>
      </section>

    </div>
  );
}