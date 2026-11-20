'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const misiItems = [
  'Menyelenggarakan layanan kebersihan dan pemeliharaan gedung berbasis prosedur operasional standar (SOP) yang terukur dan diaudit berkala.',
  'Mengembangkan kompetensi sumber daya manusia melalui pelatihan teknis berkelanjutan, pembinaan etika kerja, dan sertifikasi profesi.',
  'Menerapkan teknologi peralatan modern dan bahan pembersih ramah lingkungan demi menjaga keberlanjutan aset serta kesehatan penghuni gedung.',
  'Menjamin kepatuhan penuh terhadap regulasi ketenagakerjaan, keselamatan kerja (K3), dan hak-hak normatif seluruh personel alih daya.',
  'Membangun kemitraan jangka panjang yang transparan, responsif, dan berorientasi pada efisiensi biaya operasional klien korporasi.',
];

export default function VisiMisiSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.anim-visi', {
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

  return (
    <section
      ref={container}
      id="tentang"
      className="py-section-sm lg:py-section-lg bg-light-surface-secondary dark:bg-dark-surface-secondary border-b border-light-border dark:border-dark-border"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col gap-6 anim-visi">
            <span className="font-mono text-mono-sm uppercase text-light-primary dark:text-dark-accent-blue">
              VISI PERUSAHAAN
            </span>
            <blockquote className="border-l-2 border-light-primary dark:border-dark-accent-blue pl-6">
              <p className="font-headline text-headline-lg-mobile md:text-headline-lg text-light-on-surface dark:text-dark-on-surface text-balance">
                Menjadi mitra strategis terdepan di Indonesia dalam pengelolaan fasilitas,
                kebersihan profesional, dan penyediaan tenaga alih daya yang berintegritas serta
                berstandar internasional.
              </p>
            </blockquote>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6 anim-visi">
            <span className="font-mono text-mono-sm uppercase text-light-primary dark:text-dark-accent-blue">
              MISI KAMI
            </span>

            <div className="border-t border-light-border dark:border-dark-border divide-y divide-light-border dark:divide-dark-border">
              {misiItems.map((item, idx) => (
                <div key={idx} className="py-7 grid grid-cols-12 gap-4 items-center">
                  <span className="col-span-2 sm:col-span-1 font-mono text-mono-sm text-light-primary dark:text-dark-accent-blue">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <p className="col-span-10 sm:col-span-11 font-body text-body-lg text-light-on-surface dark:text-dark-on-surface text-pretty">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
