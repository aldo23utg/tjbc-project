import Link from 'next/link';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary tracking-tight font-primary">
          TJBC<span className="text-blue-500">.</span>
        </Link>
        <div className="hidden md:flex gap-8 font-medium text-text-secondary font-secondary">
          <Link href="/" className="hover:text-primary transition-colors">Beranda</Link>
          <Link href="#karir" className="hover:text-primary transition-colors">Karir</Link>
          <Link href="#layanan" className="hover:text-primary transition-colors">Layanan</Link>
        </div>
        {/* <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-hover transition-colors btn-text">
            Hubungi Kami
          </button>
        </div> */}
      </div>
    </nav>
  );
}