import React from 'react';

export default function PoliticaPrivacidad() {
  return (
    <div className="container mx-auto px-6 py-24 max-w-4xl text-slate-800 space-y-6">
      <h1 className="text-4xl font-black mb-8">Política de Privacidad</h1>
      
      <p>En este sitio web respetamos su información personal y en vista de cumplir con las políticas de seguridad respectivas concernientes a todo sitio web, informamos a ustedes lo siguiente.</p>
      
      <h2 className="text-2xl font-bold mt-8">Privacidad de los datos personales:</h2>
      <p>Sus datos personales le corresponden solo a usted y este sitio web es responsable de no revelar ninguna clase de información que le pertenezca (como email, números de ip, etc.), salvo su expresa autorización o fuerzas de naturaleza mayor de tipo legal que lo involucren, como hackeos o suplantaciones.</p>
      
      <h2 className="text-2xl font-bold mt-8">Responsabilidad de las opiniones vertidas:</h2>
      <p>Las publicaciones a modo de artículos (también llamados posts) son responsabilidad del autor del blog. Los comentarios vertidos por los visitantes son responsabilidad de ellos mismos.</p>
      
      <h2 className="text-2xl font-bold mt-8">Uso de Cookies:</h2>
      <p>El acceso a este sitio puede implicar la utilización de cookies, las cuales, en general, se destinan para facilitar la navegación y el análisis estadístico, además de la personalización de anuncios (Google AdSense).</p>
      
      <p className="mt-12 text-sm text-slate-500">Última actualización: {new Date().toLocaleDateString()}</p>
    </div>
  );
}