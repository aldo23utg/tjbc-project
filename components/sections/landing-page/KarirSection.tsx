'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function KarirSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.anim-karir', {
          y: 18,
          opacity: 0,
          duration: 0.45,
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

  return (
    <section
      ref={container}
      id="karir"
      className="bg-brand-blue text-on-brand-blue arch-grid-bg py-16 lg:py-24 border-b border-deep-navy-border"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center anim-karir">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <span className="font-mono text-mono-sm uppercase text-on-brand-blue/80">
              BERKARIR BERSAMA TJBC
            </span>
            <h2 className="font-headline text-headline-xl-mobile md:text-headline-xl text-on-brand-blue text-balance">
              Bangun Karier Profesional dengan Budaya Kerja Terstruktur dan Terjamin.
            </h2>
            <p className="font-body text-body-lg text-on-brand-blue/90 max-w-prose">
              Kami membuka kesempatan bagi talenta disiplin di bidang kebersihan profesional,
              pengamanan gedung, dan transportasi eksekutif dengan pelatihan resmi serta jaminan
              ketenagakerjaan penuh.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Link
              href="/karir"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-sm bg-light-surface-card text-deep-navy font-label text-label-lg transition-colors duration-state-change hover:bg-light-surface-secondary"
            >
              <span>Lihat Lowongan Terbuka</span>
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
