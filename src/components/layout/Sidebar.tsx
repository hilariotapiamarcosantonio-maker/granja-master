import AdSlot from '../monetization/AdSlot';
export default function Sidebar() {
  return (
    <aside className="space-y-8">
      <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
        <h3 className="font-heading text-lg mb-4 border-b pb-2 text-brand-primary">Publicidad</h3>
        <AdSlot width={250} height={250} />
      </div>
      <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
        <h3 className="font-heading text-lg mb-4 border-b pb-2 text-brand-primary">Categorías</h3>
        <ul className="space-y-2 font-base">
          <li><a href="#" className="text-brand-primary hover:underline text-sm font-medium">Gelatinas de Leche</a></li>
          <li><a href="#" className="text-brand-primary hover:underline text-sm font-medium">Postres sin Horno</a></li>
        </ul>
      </div>
    </aside>
  );
}