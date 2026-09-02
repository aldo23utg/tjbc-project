"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl font-bold text-primary tracking-tight font-primary relative z-[60]"
          onClick={() => setIsOpen(false)}
        >
          TJBC<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 font-medium text-text-secondary font-secondary">
          <Link href="/" className="hover:text-primary transition-colors">Beranda</Link>
          <Link href="#karir" className="hover:text-primary transition-colors">Karir</Link>
          <Link href="#layanan" className="hover:text-primary transition-colors">Layanan</Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-hover transition-colors btn-text">
            Hubungi Kami
          </button>
        </div>

        {/* Mobile Burger Button */}
        <button 
          className="md:flex hidden flex-col justify-center items-center gap-[6px] relative z-[60] w-8 h-8 text-text-primary !hidden md:!hidden"
          // Class di atas sengaja dioverride. Gunakan yang bawah untuk fungsionalitas aslinya.
          // Note: Tailwind v4 menggunakan display utilities yang sedikit berbeda jika di-nesting, kita gunakan 'md:hidden flex'
        />
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 z-[60] relative w-8 h-8 cursor-pointer"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Overlay Background */}
      <div 
        className={`fixed inset-0 bg-background/60 backdrop-blur-sm transition-opacity duration-300 md:hidden z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-[100dvh] w-[75vw] max-w-sm bg-surface border-l border-border shadow-2xl transition-transform duration-300 ease-in-out z-50 md:hidden flex flex-col pt-28 px-8 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 font-medium text-text-secondary font-secondary text-lg">
          <Link href="/" className="hover:text-primary transition-colors" onClick={toggleMenu}>Beranda</Link>
          <Link href="#karir" className="hover:text-primary transition-colors" onClick={toggleMenu}>Karir</Link>
          <Link href="#layanan" className="hover:text-primary transition-colors" onClick={toggleMenu}>Layanan</Link>
        </div>
        
        <div className="mt-auto mb-10 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <span className="font-secondary text-sm text-text-secondary">Tema Tampilan</span>
            <ThemeToggle />
          </div>
          <button className="bg-primary text-white w-full py-3 rounded-full hover:bg-primary-hover transition-colors btn-text">
            Hubungi Kami
          </button>
        </div>
      </div>
    </nav>
  );
}