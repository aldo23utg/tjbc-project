import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-800 tracking-tight">
          TJBC<span className="text-blue-500">.</span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-blue-800 transition-colors">Beranda</Link>
          <Link href="#karir" className="hover:text-blue-800 transition-colors">Karir</Link>
          <Link href="#layanan" className="hover:text-blue-800 transition-colors">Layanan</Link>
          <Link href="#tentang" className="hover:text-blue-800 transition-colors">Tentang Kami</Link>
        </div>
        <button className="bg-blue-800 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-900 transition-colors">
          Hubungi Kami
        </button>
      </div>
    </nav>
  );
}