'use client';
import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

export default function AmazonProductCard({ title, image, url }: { title: string, image?: string, url: string }) {
  // Estado para manejar el error de imagen
  const [imgError, setImgError] = React.useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 items-center">
      {image && !imgError ? (
        <img 
          src={image} 
          alt={title} 
          className="w-full md:w-48 h-48 object-cover rounded-xl"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full md:w-48 h-48 bg-slate-50 rounded-xl flex flex-col items-center justify-center gap-2 border border-slate-100">
          <Star className="w-8 h-8 text-yellow-400" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Herramienta Seleccionada</span>
        </div>
      )}
      <div className="flex-1 w-full">
        <h3 className="font-bold text-lg md:text-xl mb-4 text-gray-900">{title}</h3>
        <a 
          href={url} 
          target="_blank" 
          rel="nofollow noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-black py-3 px-6 rounded-xl transition-colors w-full md:w-auto md:inline-flex"
        >
          <ShoppingCart className="w-5 h-5" />
          Ver en Amazon
        </a>
      </div>
    </div>
  );
}
