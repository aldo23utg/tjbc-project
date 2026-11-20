'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    quote:
      'Kedisiplinan tim kebersihan TJBC terasa sejak bulan pertama. Audit area lobi dan ruang rapat kami selalu melampaui standar SLA tanpa perlu pengawasan berlebih dari tim internal.',
    author: 'Hendra Wijaya',
    role: 'Head of General Affairs',
    company: 'PT GRAHA SENTOSA PROPERTI',
  },
  {
    id: 2,
    quote:
      'Area taman dan lanskap kawasan perkantoran kami jauh lebih terawat dan konsisten sepanjang musim. Penjadwalan pemangkasan dan pemupukannya sangat rapi.',
    author: 'Ratna Kusuma',
    role: 'Building Manager',
    company: 'MENARA MANDALA SUDIRMAN',
  },
  {
    id: 3,
    quote:
      'Untuk pengadaan tenaga pengemudi eksekutif dan petugas keamanan, TJBC memberikan transparansi penuh atas kelengkapan legalitas serta pergantian personel yang cepat.',
    author: 'Bambang Sutrisno',
    role: 'VP Corporate Services',
    company: 'BANK NUSANTARA KARYA',
  },
  {
    id: 4,
    quote:
      'Komunikasi dengan tim supervisor TJBC sangat lugas. Setiap permintaan deep cleaning akhir pekan selalu dieksekusi tepat waktu dengan dokumentasi laporan yang jelas.',
    author: 'Dewi Anggraini',
    role: 'Procurement Lead',
    company: 'RS MEDIKA HARAPAN',
  },
];

export default function PortofolioSection() {
  const container = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.anim-port', {
          y: 18,
          opacity: 0,
          duration: 0.45,
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: container.current,
            start: 'top 85%',
            once: true,
          },
        });
      });
    },
    { scope: container }
  );

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[activeIndex];

  return (
    <section
      ref={container}
      id="portofolio"
      className="py-section-sm lg:py-section-lg bg-light-surface-secondary dark:bg-dark-surface-secondary border-b border-light-border dark:border-dark-border"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b border-light-border dark:border-dark-border anim-port">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-mono-sm uppercase text-light-primary dark:text-dark-accent-blue">
              PORTOFOLIO &amp; ULASAN KLIEN
            </span>
            <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-light-on-surface dark:text-dark-on-surface">
              Dipercaya Berbagai Institusi Korporat
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-mono-sm text-light-on-surface dark:text-dark-on-surface tabular-nums">
              {String(activeIndex + 1).padStart(2, '0')} /{' '}
              {String(testimonials.length).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Testimoni sebelumnya"
                className="inline-flex items-center justify-center w-11 h-11 rounded-sm border border-light-border dark:border-dark-border bg-light-surface-card dark:bg-dark-surface-card text-light-on-surface dark:text-dark-on-surface transition-colors duration-state-change hover:border-light-primary dark:hover:border-dark-primary hover:text-light-primary dark:hover:text-dark-accent-blue cursor-pointer"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path
                    d="M13 8H3M7 4L3 8l4 4"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Testimoni berikutnya"
                className="inline-flex items-center justify-center w-11 h-11 rounded-sm border border-light-border dark:border-dark-border bg-light-surface-card dark:bg-dark-surface-card text-light-on-surface dark:text-dark-on-surface transition-colors duration-state-change hover:border-light-primary dark:hover:border-dark-primary hover:text-light-primary dark:hover:text-dark-accent-blue cursor-pointer"
              >
                <svg
                  className="w-4 h-4"
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
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 lg:pt-16 anim-port">
          <div className="min-h-[220px] flex flex-col justify-between gap-10 transition-opacity duration-state-change">
            <div
              key={current.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-9">
                <blockquote className="font-headline text-headline-lg-mobile md:text-headline-lg text-light-on-surface dark:text-dark-on-surface text-balance">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
              </div>
              <div className="lg:col-span-3 lg:border-l lg:border-light-border lg:dark:border-dark-border lg:pl-8 flex flex-col gap-1">
                <span className="font-headline text-title-md text-light-on-surface dark:text-dark-on-surface">
                  {current.author}
                </span>
                <span className="font-body text-body-md text-light-on-surface-muted dark:text-dark-on-surface-muted">
                  {current.role}
                </span>
                <span className="font-mono text-mono-sm uppercase text-light-primary dark:text-dark-accent-blue pt-2">
                  {current.company}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
