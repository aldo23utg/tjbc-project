'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function HeroSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.anim-hero', {
          y: 18,
          opacity: 0,
          duration: 0.45,
          stagger: 0.08,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        });
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="border-b border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="anim-hero inline-flex items-center gap-3">
              <span className="w-6 h-px bg-light-primary dark:bg-dark-accent-blue" />
              <span className="font-mono text-mono-sm uppercase text-light-primary dark:text-dark-accent-blue">
                PT TUNAS JAYA BERSINAR CEMERLANG
              </span>
            </div>

            <h1 className="anim-hero font-display text-display-lg-mobile md:text-display-lg text-light-on-surface dark:text-dark-on-surface text-balance">
              Standar Presisi untuk Kebersihan, Taman, dan Alih Daya Korporat.
            </h1>

            <p className="anim-hero font-body text-body-lg text-light-on-surface-muted dark:text-dark-on-surface-muted max-w-prose text-pretty">
              Kami membantu institusi, perkantoran, dan kawasan komersial menjaga operasional
              harian tetap higienis, asri, dan tertata melalui tenaga kerja terlatih dan sistem
              supervisi terukur.
            </p>

            <div className="anim-hero flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#kontak"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-light-primary dark:bg-dark-primary text-light-on-primary dark:text-dark-on-primary font-label text-label-lg transition-colors duration-state-change ease-state-change hover:bg-deep-navy dark:hover:bg-dark-accent-blue"
              >
                <span>Hubungi Kami</span>
              </a>

              <a
                href="#layanan"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-sm border border-light-border dark:border-dark-border bg-light-surface-card dark:bg-dark-surface-card text-light-on-surface dark:text-dark-on-surface font-label text-label-lg transition-colors duration-state-change ease-state-change hover:border-light-primary dark:hover:border-dark-primary hover:text-light-primary dark:hover:text-dark-accent-blue"
              >
                <span>Layanan Kami</span>
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
              </a>
            </div>
          </div>

          <div className="anim-hero lg:col-span-6">
            <div className="relative border border-light-border dark:border-dark-border rounded-sm bg-light-surface-card dark:bg-dark-surface-card p-2">
              <div className="relative overflow-hidden rounded-sm aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://lh3.googleusercontent.com/aida/ALJJyrCO5bSaBouNWh0S-XhTY_z_8ohmsfp1xwhyOWxS3oxPCKpoQH4aIdXAhcc7gNYYCKU-mcoseKRGGdTKcTrDjoh5TSGjBeikpAOJFGoJI8SLAhF5D_PmXxrbaJ3o_xCsccxhZb1NQIGDiT8yYB8qlRdy7DcbbJ5538qptnNlafjMozRxOmuVggnn0hquJXXgWXkS4DXX_zAOnqBlKg7voI1FV7rE5NvAYsjdA_JcseXoMsKIvZDbbho"
                  alt="Tim operasional profesional PT Tunas Jaya Bersinar Cemerlang di lobi gedung korporat"
                  className="w-full h-full object-cover"
                  fetchPriority="high"
                />
                <div className="absolute bottom-0 left-0 bg-deep-navy text-on-deep-navy px-4 py-2.5 border-t border-r border-deep-navy-border">
                  <span className="font-mono text-mono-sm uppercase">
                    OPERASIONAL TERSTANDAR / JABODETABEK
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
