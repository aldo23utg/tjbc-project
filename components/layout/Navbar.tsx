"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isOpen 
        ? "bg-transparent border-transparent backdrop-blur-none" 
        : "bg-background/80 backdrop-blur-md border-b border-border"
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Mobile Burger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-start gap-1.5 z-[60] relative w-8 h-8 cursor-pointer text-text-primary"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className={`block h-0.5 bg-current transition-all duration-300 origin-center ${isOpen ? 'w-5 rotate-45 translate-y-[8px]' : 'w-6'}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block h-0.5 bg-current transition-all duration-300 origin-center ${isOpen ? 'w-5 -rotate-45 -translate-y-[8px]' : 'w-6'}`} />
        </button>

        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl font-bold text-primary tracking-tight font-primary relative z-[60] md:ml-0 ml-4 flex-1 md:flex-none"
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
      </div>

      {/* Overlay Background */}
      <div 
        className={`fixed inset-0 bg-text-primary/40 transition-opacity duration-300 md:hidden z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-[100dvh] w-[80vw] max-w-[320px] bg-surface border-r border-border shadow-2xl transition-transform duration-300 ease-in-out z-50 md:hidden flex flex-col pt-24 px-6 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Navigation Links */}
        <div className="flex flex-col gap-2 font-tertiary text-text-secondary">
          <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-primary-container hover:text-primary transition-colors" onClick={toggleMenu}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            Beranda
          </Link>
          <Link href="#karir" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-primary-container hover:text-primary transition-colors" onClick={toggleMenu}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            Karir
          </Link>
          <Link href="#layanan" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-primary-container hover:text-primary transition-colors" onClick={toggleMenu}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            Layanan
          </Link>
          
          {/* Theme Toggle - Ikon ThemeToggle pindah ke kiri */}
          <div 
            className="flex items-center gap-3 px-3 py-2.5 mt-2 rounded-lg bg-surface border border-border cursor-pointer hover:bg-primary-container hover:text-primary transition-colors"
            onClick={(e) => {
              const toggleBtn = e.currentTarget.querySelector('button');
              if (toggleBtn && !toggleBtn.contains(e.target as Node)) {
                toggleBtn.click();
              }
            }}
          >
            <ThemeToggle />
            <span className="pointer-events-none">Tema Tampilan</span>
          </div>
        </div>
        
        {/* Card Promo / Call to Action */}
        <div className="mt-auto mb-8 bg-primary-container rounded-2xl p-5 relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute -top-4 w-10 h-10 bg-primary rounded-full opacity-20 blur-md"></div>
          
          <h4 className="font-primary font-bold text-primary mb-2">Pusat Bantuan</h4>
          <p className="font-tertiary text-xs text-text-secondary mb-5">
            Layanan pengaduan dan informasi operasional saat ini sedang dalam pemeliharaan.
          </p>
          
          <button 
            disabled 
            className="w-full bg-primary/60 text-white/80 py-2.5 rounded-xl font-primary font-semibold text-sm cursor-not-allowed transition-all"
          >
            Hubungi Kami
          </button>
        </div>

      </div>
    </nav>
  );
}