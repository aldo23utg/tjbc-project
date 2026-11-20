'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const servedSectors = [
  'Perusahaan',
  'Cafe',
  'Rumah Sakit',
  'Bank',
  'Stasiun',
  'Terminal',
  'Bandara',
  'Hotel / Resort',
  'Villa / Guesthouse',
  'Apartemen',
  'Mall',
  'Supermarket / Minimarket',
  'Showroom / Dealer',
  'Restoran',
  'Gudang (Warehouse)',
  'Sekolah',
  'Kampus',
  'Lembaga Kursus / Bimbel',
  'Puskesmas',
  'Apotek',
  'Gym',
  'Bioskop',
  'Salon / Spa / Klinik Kecantikan',
  'Gedung Serbaguna',
];

interface ServiceOption {
  code: string;
  badge: string;
  title: string;
  description: string;
  ctaLabel: string;
}

const serviceOptions: ServiceOption[] = [
  {
    code: '02 / CAKUPAN KECIL',
    badge: 'PARSIAL',
    title: 'General Cleaning Cakupan Lebih Kecil',
    description:
      'Pembersihan terfokus berdasarkan lantai gedung tertentu, ruangan spesifik (ruang rapat, ruang direksi, pantry), maupun perawatan furniture tertentu seperti sofa, karpet, dan partisi.',
    ctaLabel: 'Jadwalkan Pembersihan',
  },
  {
    code: '03 / RESIDENSIAL',
    badge: 'RUMAH TINGGAL',
    title: 'General Cleaning untuk Rumah',
    description:
      'Pembersihan menyeluruh untuk hunian pribadi dan town house—mulai dari ruang keluarga, kamar tidur, dapur, kamar mandi, hingga area teras dengan bahan pembersih aman bagi keluarga.',
    ctaLabel: 'Pesan Layanan Rumah',
  },
  {
    code: '04 / LANSKAP',
    badge: 'BERKALA',
    title: 'Perawatan Taman',
    description:
      'Pemeliharaan taman dan ruang terbuka hijau meliputi pemangkasan rumput dan tajuk, pemupukan berkala, pengendalian hama, serta perawatan tanaman indoor dan atrium gedung.',
    ctaLabel: 'Konsultasi Taman',
  },
  {
    code: '05 / ALIH DAYA',
    badge: 'KONTRAK',
    title: 'Kontrak OB',
    description:
      'Penyediaan Office Boy / Office Girl terlatih untuk mendukung kebersihan ruang kerja harian, penyiapan ruang rapat, layanan pantry, serta pengurusan operasional kantor dengan sistem kontrak resmi.',
    ctaLabel: 'Ajukan Kontrak OB',
  },
  {
    code: '06 / KEAMANAN',
    badge: 'GADA PRATAMA',
    title: 'Kontrak Satpam',
    description:
      'Penyediaan petugas keamanan (Security) bersertifikat Gada Pratama dan KTA aktif untuk pengamanan aset gedung, kontrol akses tamu dan kendaraan, patroli 24 jam, serta pelaporan insiden harian.',
    ctaLabel: 'Ajukan Kontrak Satpam',
  },
  {
    code: '07 / TRANSPORTASI',
    badge: 'SIM A / B1',
    title: 'Kontrak Supir',
    description:
      'Penyediaan pengemudi eksekutif dan operasional perusahaan yang berpengalaman, berpenampilan rapi, menguasai rute Jabodetabek, serta memiliki rekam jejak berkendara yang aman dan disiplin.',
    ctaLabel: 'Ajukan Kontrak Supir',
  },
];

export default function Layanan() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.anim-layanan-hero', {
          y: 18,
          opacity: 0,
          duration: 0.45,
          stagger: 0.08,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        });

        gsap.from('.anim-layanan-card', {
          y: 18,
          opacity: 0,
          duration: 0.45,
          stagger: 0.08,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: '#daftar-layanan',
            start: 'top 85%',
            once: true,
          },
        });
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="w-full flex-1 bg-light-surface dark:bg-dark-surface">
      {/* 1. HERO LAYANAN */}
      <section className="border-b border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
          <div className="flex flex-col gap-5 max-w-3xl">
            <div className="anim-layanan-hero inline-flex items-center gap-3">
              <span className="w-6 h-px bg-light-primary dark:bg-dark-accent-blue" />
              <span className="font-mono text-mono-sm uppercase text-light-primary dark:text-dark-accent-blue">
                KATALOG LAYANAN TJBC
              </span>
            </div>

            <h1 className="anim-layanan-hero font-display text-display-lg-mobile md:text-display-lg text-light-on-surface dark:text-dark-on-surface text-balance">
              Tujuh Layanan Terstandar untuk Gedung, Hunian, dan Tenaga Kerja.
            </h1>

            <p className="anim-layanan-hero font-body text-body-lg text-light-on-surface-muted dark:text-dark-on-surface-muted max-w-prose text-pretty">
              Pilih cakupan layanan yang sesuai dengan skala properti dan kebutuhan operasional
              Anda—mulai dari pembersihan gedung menyeluruh hingga kontrak tenaga pendukung resmi.
            </p>
          </div>
        </div>
      </section>

      {/* 2. DAFTAR 7 OPSI LAYANAN */}
      <section
        id="daftar-layanan"
        className="py-section-sm lg:py-section-lg bg-light-surface-secondary dark:bg-dark-surface-secondary"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-6">
          {/* Opsi 01: General Cleaning Cakupan Besar */}
          <article className="anim-layanan-card p-6 lg:p-8 rounded-sm border border-light-border dark:border-dark-border bg-light-surface-card dark:bg-dark-surface-card flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-5 border-b border-light-border dark:border-dark-border">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-mono-sm text-light-primary dark:text-dark-accent-blue">
                    01 / CAKUPAN BESAR
                  </span>
                  <span className="px-2 py-0.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface-secondary dark:bg-dark-surface-secondary font-mono text-mono-sm uppercase text-light-on-surface dark:text-dark-on-surface">
                    GEDUNG PENUH
                  </span>
                </div>
                <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-light-on-surface dark:text-dark-on-surface">
                  General Cleaning (Cakupan Besar)
                </h2>
                <p className="font-body text-body-md text-light-on-surface-muted dark:text-dark-on-surface-muted max-w-prose">
                  Pembersihan menyeluruh pada satu gedung penuh secara terpadu, mencakup area
                  publik, fasad, ruang kerja, hingga fasilitas penunjang untuk berbagai sektor
                  properti:
                </p>
              </div>
              <Link
                href="/#kontak"
                className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm bg-light-primary dark:bg-dark-primary text-light-on-primary dark:text-dark-on-primary font-label text-label-lg transition-colors duration-state-change hover:bg-deep-navy dark:hover:bg-dark-accent-blue"
              >
                <span>Konsultasi Layanan</span>
              </Link>
            </div>

            {/* Sektor yang Dilayani (Collapsible Dropdown List) */}
            <details className="group rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface">
              <summary className="list-none cursor-pointer px-4 py-3.5 flex items-center justify-between gap-4 select-none [&::-webkit-details-marker]:hidden">
                <span className="font-mono text-mono-sm uppercase text-light-on-surface dark:text-dark-on-surface">
                  SEKTOR YANG DILAYANI
                </span>
                <svg
                  className="w-4 h-4 text-light-primary dark:text-dark-accent-blue transition-transform duration-state-change group-open:rotate-180"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path
                    d="M4 6l4 4 4-4"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                  />
                </svg>
              </summary>
              <div className="px-4 pb-4 pt-3 border-t border-light-border dark:border-dark-border grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {servedSectors.map((sector) => (
                  <span
                    key={sector}
                    className="px-3 py-2 rounded-sm border border-light-border dark:border-dark-border bg-light-surface-card dark:bg-dark-surface-card font-body text-body-md text-light-on-surface dark:text-dark-on-surface"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </details>
          </article>

          {/* Grid 2 columns on desktop, 1 column on mobile for Options 02–07 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {serviceOptions.map((item) => (
              <article
                key={item.code}
                className="anim-layanan-card h-full p-6 lg:p-8 rounded-sm border border-light-border dark:border-dark-border bg-light-surface-card dark:bg-dark-surface-card flex flex-col justify-between gap-6 transition-colors duration-state-change hover:border-light-primary dark:hover:border-dark-primary"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-mono-sm text-light-primary dark:text-dark-accent-blue">
                      {item.code}
                    </span>
                    <span className="px-2 py-0.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface-secondary dark:bg-dark-surface-secondary font-mono text-mono-sm uppercase text-light-on-surface dark:text-dark-on-surface">
                      {item.badge}
                    </span>
                  </div>
                  <h2 className="font-headline text-headline-md text-light-on-surface dark:text-dark-on-surface">
                    {item.title}
                  </h2>
                  <p className="font-body text-body-md text-light-on-surface-muted dark:text-dark-on-surface-muted text-pretty">
                    {item.description}
                  </p>
                </div>

                <footer className="pt-4 border-t border-light-border dark:border-dark-border">
                  <Link
                    href="/#kontak"
                    className="group inline-flex items-center justify-between w-full font-label text-label-lg text-light-primary dark:text-dark-accent-blue"
                  >
                    <span>{item.ctaLabel}</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-state-change group-hover:translate-x-1"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                      />
                    </svg>
                  </Link>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP BUTTON */}
      <div className="fixed bottom-6 right-6 z-40 group">
        <a
          href="https://wa.me/6281294007820"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Konsultasi via WhatsApp TJBC"
          className="inline-flex items-center gap-3 px-4 py-3 rounded-sm border border-light-border dark:border-dark-border bg-deep-navy text-on-deep-navy transition-colors duration-state-change hover:bg-brand-blue"
        >
          <svg
            className="w-5 h-5 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <path
              d="M20 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-4.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="hidden md:inline-block max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-state-change font-mono text-mono-sm uppercase">
            WhatsApp Kami
          </span>
        </a>
      </div>
    </div>
  );
}
