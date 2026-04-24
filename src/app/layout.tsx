import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';

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
        <Navbar />

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
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
        <Analytics />
      </body>
    </html>
  );
}
"// Analytics Active" 
