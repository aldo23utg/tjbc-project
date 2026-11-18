import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              TJBC<span className="text-blue-300">.</span>
            </Link>
            <p className="text-white/70 text-sm mt-3 leading-relaxed">
              PT Tunas Jaya Bersinar Cemerlang — Mitra strategis Anda dalam layanan
              Outsourcing &amp; Cleaning Service profesional sejak 2007.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">
                Navigasi
              </h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/" className="hover:text-white transition-colors">Beranda</Link></li>
                <li><Link href="/#tentang" className="hover:text-white transition-colors">Tentang Kami</Link></li>
                <li><Link href="/#layanan" className="hover:text-white transition-colors">Layanan</Link></li>
                <li><Link href="/karir" className="hover:text-white transition-colors">Karir</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">
                Kontak
              </h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>info@tjbc.co.id</li>
                <li>+62 21 1234 5678</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} PT Tunas Jaya Bersinar Cemerlang. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with dedication in Indonesia.</p>
        </div>
      </div>
    </footer>
  );
}