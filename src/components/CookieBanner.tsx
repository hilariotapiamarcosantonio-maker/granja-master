'use client';

import React, { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('cookieAccepted');
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 text-white p-4 z-50 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
      <p className="text-center sm:text-left text-slate-300">
        Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación. Si continúa navegando, consideramos que acepta su uso.
        Puede obtener más información en nuestra <a href="/politica-de-privacidad" className="underline hover:text-white">Política de Privacidad</a>.
      </p>
      <button 
        onClick={acceptCookies}
        className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-2 px-6 rounded whitespace-nowrap transition-colors"
      >
        Aceptar Cookies
      </button>
    </div>
  );
}