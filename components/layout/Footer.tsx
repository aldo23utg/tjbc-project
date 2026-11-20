import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-on-deep-navy border-t border-deep-navy-border pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Link
              href="/"
              className="font-display text-headline-md text-on-deep-navy inline-flex items-baseline"
            >
              <span>TJBC</span>
              <span className="text-dark-accent-blue">.</span>
            </Link>
            <p className="font-body text-body-md text-deep-navy-muted max-w-md text-pretty">
              PT Tunas Jaya Bersinar Cemerlang adalah perusahaan penyedia jasa kebersihan
              profesional, perawatan taman korporat, dan alih daya tenaga kerja terstandar yang
              berpusat di Jakarta Selatan.
            </p>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="font-mono text-mono-sm uppercase text-deep-navy-muted">NAVIGASI</span>
            <ul className="flex flex-col gap-2.5 font-body text-body-md">
              <li>
                <Link
                  href="/"
                  className="text-on-deep-navy hover:text-dark-accent-blue transition-colors duration-state-change"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/#tentang"
                  className="text-on-deep-navy hover:text-dark-accent-blue transition-colors duration-state-change"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/#layanan"
                  className="text-on-deep-navy hover:text-dark-accent-blue transition-colors duration-state-change"
                >
                  Layanan
                </Link>
              </li>
              <li>
                <Link
                  href="/karir"
                  className="text-on-deep-navy hover:text-dark-accent-blue transition-colors duration-state-change"
                >
                  Karir
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="font-mono text-mono-sm uppercase text-deep-navy-muted">KONTAK</span>
            <ul className="flex flex-col gap-2.5 font-body text-body-md text-deep-navy-muted">
              <li>Jl. TB Simatupang Kav. 18, Jakarta Selatan 12430</li>
              <li>
                <a
                  href="mailto:info@tjbc.co.id"
                  className="text-on-deep-navy hover:text-dark-accent-blue transition-colors duration-state-change"
                >
                  info@tjbc.co.id
                </a>
              </li>
              <li>
                <a
                  href="tel:+622178834510"
                  className="font-mono text-body-md text-on-deep-navy hover:text-dark-accent-blue transition-colors duration-state-change"
                >
                  (021) 7883-4510
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="font-mono text-mono-sm uppercase text-deep-navy-muted">
              JAM KERJA
            </span>
            <div className="flex flex-col gap-1 font-body text-body-md text-deep-navy-muted">
              <span>Senin — Jumat</span>
              <span className="font-mono text-mono-sm text-on-deep-navy">08:00 — 17:00 WIB</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-deep-navy-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-mono-sm text-deep-navy-muted">
            © {new Date().getFullYear()} PT TUNAS JAYA BERSINAR CEMERLANG. HAK CIPTA DILINDUNGI.
          </p>
          <span className="font-mono text-mono-sm text-deep-navy-muted">
            JAKARTA SELATAN / INDONESIA
          </span>
        </div>
      </div>
    </footer>
  );
}
