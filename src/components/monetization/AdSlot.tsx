export default function AdSlot({ width, height }: { width: number, height: number }) {
  return (
    <div style={{ width, height }} className="bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center my-4 overflow-hidden mx-auto">
      <span className="text-[10px] text-gray-400 uppercase tracking-widest">Publicidad</span>
    </div>
  );
}