import React from 'react';

export default function TerminosCondiciones() {
  return (
    <div className="container mx-auto px-6 py-24 max-w-4xl text-slate-800 space-y-6">
      <h1 className="text-4xl font-black mb-8">Términos y Condiciones</h1>
      
      <p>Bienvenido a nuestro sitio web. Al acceder y utilizar este sitio, usted acepta estar sujeto a los siguientes términos y condiciones de uso, los cuales, junto con nuestra política de privacidad, rigen la relación de este sitio web con usted.</p>
      
      <h2 className="text-2xl font-bold mt-8">Uso del sitio:</h2>
      <p>El contenido de las páginas de este sitio web es solo para su información general y uso. Está sujeto a cambios sin previo aviso.</p>
      <p>Ni nosotros ni ningún tercero ofrecemos garantía alguna sobre la precisión, puntualidad, rendimiento, integridad o idoneidad de la información y los materiales encontrados u ofrecidos en este sitio web para cualquier propósito particular.</p>
      
      <h2 className="text-2xl font-bold mt-8">Derechos de Propiedad Intelectual:</h2>
      <p>Este sitio web contiene material que es de nuestra propiedad o está bajo licencia nuestra. Este material incluye, pero no se limita a, el diseño, la disposición, el aspecto, la apariencia y los gráficos.</p>
      
      <h2 className="text-2xl font-bold mt-8">Enlaces a otros sitios web:</h2>
      <p>De vez en cuando, este sitio web también puede incluir enlaces a otros sitios web. Estos enlaces se proporcionan para su conveniencia para proporcionar más información. No significan que respaldamos los sitios web. No tenemos ninguna responsabilidad por el contenido de los sitios web enlazados.</p>
      
      <p className="mt-12 text-sm text-slate-500">Última actualización: {new Date().toLocaleDateString()}</p>
    </div>
  );
}