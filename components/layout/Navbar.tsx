'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      <header
        id="main-navbar"
        className={`sticky top-0 z-40 w-full bg-light-surface dark:bg-dark-surface border-b transition-colors duration-state-change ease-state-change ${
          scrolled
            ? 'border-light-border dark:border-dark-border'
            : 'border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-6">
          <Link
            href="/"
            className="inline-flex items-baseline gap-0.5 font-display text-headline-md tracking-tight text-light-on-surface dark:text-dark-on-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-light-primary"
            aria-label="Beranda TJBC"
            onClick={closeDrawer}
          >
            <span>TJBC</span>
            <span className="text-light-primary dark:text-dark-accent-blue">.</span>
          </Link>

          <nav aria-label="Navigasi Utama" className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className={`relative py-2 font-label text-label-lg transition-colors duration-state-change ${
                pathname === '/'
                  ? 'text-light-primary dark:text-dark-accent-blue'
                  : 'text-light-on-surface-muted dark:text-dark-on-surface-muted hover:text-light-on-surface dark:hover:text-dark-on-surface'
              }`}
            >
              <span>Beranda</span>
              {pathname === '/' && (
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-light-primary dark:bg-dark-accent-blue" />
              )}
            </Link>
            <Link
              href="/layanan"
              className={`relative py-2 font-label text-label-lg transition-colors duration-state-change ${
                pathname === '/layanan'
                  ? 'text-light-primary dark:text-dark-accent-blue'
                  : 'text-light-on-surface-muted dark:text-dark-on-surface-muted hover:text-light-on-surface dark:hover:text-dark-on-surface'
              }`}
            >
              <span>Layanan</span>
              {pathname === '/layanan' && (
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-light-primary dark:bg-dark-accent-blue" />
              )}
            </Link>
            <Link
              href="/karir"
              className={`relative py-2 font-label text-label-lg transition-colors duration-state-change ${
                pathname === '/karir'
                  ? 'text-light-primary dark:text-dark-accent-blue'
                  : 'text-light-on-surface-muted dark:text-dark-on-surface-muted hover:text-light-on-surface dark:hover:text-dark-on-surface'
              }`}
            >
              <span>Karir</span>
              {pathname === '/karir' && (
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-light-primary dark:bg-dark-accent-blue" />
              )}
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle variant="desktop" />
            <Link
              href="/#kontak"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-light-primary dark:bg-dark-primary text-light-on-primary dark:text-dark-on-primary font-label text-label-lg transition-colors duration-state-change ease-state-change hover:bg-deep-navy dark:hover:bg-dark-accent-blue"
            >
              <span>Hubungi Kami</span>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-sm border border-light-border dark:border-dark-border bg-light-surface-card dark:bg-dark-surface-card text-light-on-surface dark:text-dark-on-surface cursor-pointer"
            aria-label="Buka menu navigasi"
            aria-controls="mobile-drawer"
            aria-expanded={isOpen}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M3 6h14M3 10h14M3 14h14" strokeLinecap="square" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        onClick={closeDrawer}
        className={`fixed inset-0 z-50 bg-deep-navy/60 transition-opacity duration-drawer-slide md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Mobile Sidebar Drawer */}
      <aside
        id="mobile-drawer"
        className={`fixed inset-y-0 right-0 z-50 w-80 max-w-full bg-light-surface-card dark:bg-dark-surface-card border-l border-light-border dark:border-dark-border transform transition-transform duration-drawer-slide ease-drawer-slide flex flex-col justify-between p-6 overflow-y-auto md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Menu Seluler"
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between pb-4 border-b border-light-border dark:border-dark-border">
            <span className="font-display text-headline-md text-light-on-surface dark:text-dark-on-surface">
              TJBC<span className="text-light-primary dark:text-dark-accent-blue">.</span>
            </span>
            <button
              type="button"
              onClick={closeDrawer}
              className="inline-flex items-center justify-center w-10 h-10 rounded-sm border border-light-border dark:border-dark-border text-light-on-surface dark:text-dark-on-surface cursor-pointer"
              aria-label="Tutup menu"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M3 3l10 10M13 3L3 13" strokeLinecap="square" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-2" aria-label="Navigasi Seluler">
            <Link
              href="/"
              onClick={closeDrawer}
              className={`py-3 border-b border-light-border dark:border-dark-border font-headline text-headline-md flex items-center justify-between ${
                pathname === '/'
                  ? 'text-light-primary dark:text-dark-accent-blue'
                  : 'text-light-on-surface dark:text-dark-on-surface'
              }`}
            >
              <span>Beranda</span>
              <span className="font-mono text-mono-sm">01</span>
            </Link>
            <Link
              href="/layanan"
              onClick={closeDrawer}
              className={`py-3 border-b border-light-border dark:border-dark-border font-headline text-headline-md flex items-center justify-between ${
                pathname === '/layanan'
                  ? 'text-light-primary dark:text-dark-accent-blue'
                  : 'text-light-on-surface dark:text-dark-on-surface'
              }`}
            >
              <span>Layanan</span>
              <span className="font-mono text-mono-sm">02</span>
            </Link>
            <Link
              href="/karir"
              onClick={closeDrawer}
              className={`py-3 border-b border-light-border dark:border-dark-border font-headline text-headline-md flex items-center justify-between ${
                pathname === '/karir'
                  ? 'text-light-primary dark:text-dark-accent-blue'
                  : 'text-light-on-surface dark:text-dark-on-surface'
              }`}
            >
              <span>Karir</span>
              <span className="font-mono text-mono-sm">03</span>
            </Link>
            <Link
              href="/#kontak"
              onClick={closeDrawer}
              className="py-3 border-b border-light-border dark:border-dark-border font-headline text-headline-md text-light-on-surface dark:text-dark-on-surface flex items-center justify-between"
            >
              <span>Hubungi Kami</span>
              <span className="font-mono text-mono-sm">04</span>
            </Link>
          </nav>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-mono-sm uppercase text-light-on-surface-muted dark:text-dark-on-surface-muted">
              Tampilan Tema
            </span>
            <ThemeToggle variant="mobile" />
          </div>
        </div>

        {/* Help Center Card */}
        <div className="mt-8 p-5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface-secondary dark:bg-dark-surface-secondary flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-mono-sm uppercase text-light-primary dark:text-dark-accent-blue">
              PUSAT BANTUAN
            </span>
            <p className="font-body text-body-md text-light-on-surface dark:text-dark-on-surface text-balance">
              Senin — Jumat, 08:00 — 17:00 WIB
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <a
              href="https://wa.me/6281294007820"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-sm bg-light-primary dark:bg-dark-primary text-light-on-primary dark:text-dark-on-primary font-label text-label-lg"
            >
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:+622178834510"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface-card dark:bg-dark-surface-card text-light-on-surface dark:text-dark-on-surface font-label text-label-lg"
            >
              <span>Telepon</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
