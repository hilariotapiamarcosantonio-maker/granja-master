import { ShoppingCart } from 'lucide-react';

export default function AmazonProductCard({ asin, title, image, url }: { asin: string, title: string, image: string, url: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-xl mb-4" />
      <h3 className="font-bold text-lg mb-4 text-gray-900">{title}</h3>
      <a 
        href={url} 
        target="_blank" 
        rel="nofollow noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-black py-3 px-6 rounded-xl transition-colors w-full"
      >
        <ShoppingCart className="w-5 h-5" />
        Ver en Amazon
      </a>
    </div>
  );
}
