'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ContactRowProps {
  label: string;
  value: string;
  monoValue?: boolean;
}

function ContactCopyRow({ label, value, monoValue = false }: ContactRowProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-4 flex items-center justify-between gap-4">
      <div className="flex flex-col gap-0.5">
        <span className="font-mono text-mono-sm uppercase text-light-on-surface-muted dark:text-dark-on-surface-muted">
          {label}
        </span>
        <span
          className={`${
            monoValue ? 'font-mono tabular-nums' : 'font-body'
          } text-body-lg text-light-on-surface dark:text-dark-on-surface`}
        >
          {value}
        </span>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border bg-light-surface-card dark:bg-dark-surface-card font-mono text-mono-sm uppercase transition-colors duration-state-change cursor-pointer ${
          copied
            ? 'border-success text-success'
            : 'border-light-border dark:border-dark-border text-light-on-surface-muted dark:text-dark-on-surface-muted hover:border-light-primary dark:hover:border-dark-primary hover:text-light-primary dark:hover:text-dark-accent-blue'
        }`}
      >
        <svg
          className="w-3.5 h-3.5"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <rect x="5" y="5" width="8" height="9" rx="1" />
          <path d="M11 5V3a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1" />
        </svg>
        <span>{copied ? 'Tersalin' : 'Salin'}</span>
      </button>
    </div>
  );
}

export default function ContactSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.anim-kontak', {
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
      id="kontak"
      className="py-section-sm lg:py-section-lg bg-light-surface dark:bg-dark-surface"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6 flex flex-col gap-10 anim-kontak">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-mono-sm uppercase text-light-primary dark:text-dark-accent-blue">
                HUBUNGI KAMI
              </span>
              <h2 className="font-headline text-headline-xl-mobile md:text-headline-xl text-light-on-surface dark:text-dark-on-surface text-balance">
                Jadwalkan Survei Lokasi atau Konsultasi Kebutuhan.
              </h2>
            </div>

            <div className="pt-6 border-t border-light-border dark:border-dark-border flex flex-col gap-2">
              <span className="font-mono text-mono-sm uppercase text-light-on-surface-muted dark:text-dark-on-surface-muted">
                KANTOR PUSAT
              </span>
              <p className="font-body text-body-lg text-light-on-surface dark:text-dark-on-surface">
                Jl. TB Simatupang Kav. 18, Gedung Graha Cemerlang Lt. 4, Cilandak, Jakarta Selatan
                12430
              </p>
            </div>

            <div className="border-t border-light-border dark:border-dark-border divide-y divide-light-border dark:divide-dark-border">
              <ContactCopyRow label="EMAIL KORPORAT" value="info@tjbc.co.id" />
              <ContactCopyRow label="TELEPON KANTOR" value="(021) 7883-4510" monoValue />
              <ContactCopyRow
                label="LAYANAN KOMERSIAL & WHATSAPP"
                value="+62 812-9400-7820"
                monoValue
              />
            </div>

            <div className="border-t border-light-border dark:border-dark-border pt-6 flex flex-col gap-3">
              <span className="font-mono text-mono-sm uppercase text-light-on-surface-muted dark:text-dark-on-surface-muted">
                JAM OPERASIONAL KANTOR
              </span>
              <div className="divide-y divide-light-border dark:divide-dark-border border-y border-light-border dark:border-dark-border">
                <div className="py-3 flex items-center justify-between gap-4">
                  <span className="font-body text-body-md text-light-on-surface dark:text-dark-on-surface">
                    Senin — Jumat
                  </span>
                  <span className="font-mono text-mono-sm text-light-on-surface dark:text-dark-on-surface tabular-nums">
                    08:00 — 17:00 WIB
                  </span>
                </div>
                <div className="py-3 flex items-center justify-between gap-4">
                  <span className="font-body text-body-md text-light-on-surface dark:text-dark-on-surface">
                    Sabtu (Tim Operasional)
                  </span>
                  <span className="font-mono text-mono-sm text-light-on-surface dark:text-dark-on-surface tabular-nums">
                    08:00 — 13:00 WIB
                  </span>
                </div>
                <div className="py-3 flex items-center justify-between gap-4">
                  <span className="font-body text-body-md text-light-on-surface-muted dark:text-dark-on-surface-muted">
                    Minggu &amp; Hari Libur
                  </span>
                  <span className="font-mono text-mono-sm text-light-on-surface-muted dark:text-dark-on-surface-muted">
                    TUTUP
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 anim-kontak">
            <div className="border border-light-border dark:border-dark-border rounded-sm bg-light-surface-card dark:bg-dark-surface-card p-2">
              <div className="overflow-hidden rounded-sm aspect-[4/3] lg:aspect-[5/4] bg-light-surface-secondary dark:bg-dark-surface-secondary">
                <iframe
                  title="Lokasi Kantor Pusat PT Tunas Jaya Bersinar Cemerlang di Jakarta Selatan"
                  src="https://www.google.com/maps?q=Jl.+TB+Simatupang,+Cilandak,+Jakarta+Selatan&output=embed"
                  className="w-full h-full border-0 grayscale contrast-95 hover:grayscale-0 transition-all duration-surface-enter"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="px-3 py-2.5 flex items-center justify-between border-t border-light-border dark:border-dark-border mt-2">
                <span className="font-mono text-mono-sm uppercase text-light-on-surface-muted dark:text-dark-on-surface-muted">
                  KOORDINAT / CILANDAK, JAKARTA SELATAN
                </span>
                <a
                  href="https://maps.google.com/?q=Jl.+TB+Simatupang,+Cilandak,+Jakarta+Selatan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-mono-sm uppercase text-light-primary dark:text-dark-accent-blue hover:underline"
                >
                  BUKA PETA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
