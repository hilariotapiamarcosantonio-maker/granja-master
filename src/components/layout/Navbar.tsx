'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Recetas', href: '/recetas' },
    { name: 'Blog', href: '/blog' },
    { name: 'Biblioteca', href: '/biblioteca' },
  ];

  return (
    <header className="w-full bg-white py-4 border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-6xl flex justify-between items-center">
        <Link href="/" className="font-heading text-xl font-bold text-brand-primary">
          Gelatinas y Postres
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-brand-text">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-brand-primary transition-colors">
              {link.name}
            </Link>
          ))}
          <Link href="/masterclass" className="bg-[#DC2626] text-white px-5 py-2.5 rounded-full font-black uppercase tracking-widest text-[10px] shadow-lg hover:scale-105 transition-all animate-pulse">
            Masterclass
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button className="md:hidden p-2 text-brand-text" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-bold text-brand-text">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={toggleMenu} className="hover:text-brand-primary transition-colors">
              {link.name}
            </Link>
          ))}
          <Link href="/masterclass" onClick={toggleMenu} className="bg-[#DC2626] text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm shadow-lg hover:scale-105 transition-all">
            Masterclass VSL
          </Link>
        </nav>
      </div>
    </header>
  );
}
