import type { Metadata } from "next";
import { Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Sidebar from "@/components/layout/Sidebar";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/layout/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gelatinas y Postres | Recetas Fáciles y Negocio",
  description: "Descubre recetas de gelatinas y postres fáciles, atractivas y con potencial para vender.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${openSans.variable} ${playfair.variable}`}>
      <body className="flex min-h-screen flex-col antialiased bg-white">
        
        {/* Encabezado Principal */}
        <header className="w-full bg-white py-4 border-b border-gray-100 shadow-sm sticky top-0 z-50">
  <div className="container mx-auto px-4 max-w-6xl flex justify-between items-center">
    <Link href="/" className="font-heading text-xl font-bold text-brand-primary">
      Gelatinas y Postres
    </Link>
    <nav className="flex items-center gap-2 md:gap-6 text-[10px] md:text-sm font-bold text-brand-text">
      <Link href="/" className="hover:text-brand-primary transition-colors hidden sm:block">Inicio</Link>
      <Link href="/recetas" className="hover:text-brand-primary transition-colors">Recetas</Link>
      <Link href="/blog" className="hover:text-brand-primary transition-colors hidden sm:block">Blog</Link>
      <Link href="/masterclass" className="bg-[#DC2626] text-white px-3 py-2 md:px-5 md:py-2.5 rounded-full font-black uppercase tracking-widest text-[9px] md:text-[10px] shadow-lg hover:scale-105 transition-all animate-pulse">
        Masterclass
      </Link>
    </nav>
  </div>
</header>

        {/* Contenedor de la Granja */}
        <div className="container mx-auto px-4 py-8 flex-grow max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-10">
            
            {/* Contenido (Recetas/Blog) */}
            <main className="w-full lg:w-3/4">
              {children}
            </main>

            {/* Monetización (Sidebar) */}
            <aside className="w-full lg:w-1/4">
              <Sidebar />
            </aside>
            
          </div>
        </div>

        {/* Cierre */}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
