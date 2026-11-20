'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface JobOpening {
  code: string;
  status: string;
  title: string;
  location: string;
  description: string;
  applyRole: string;
}

const employeeGuarantees = [
  'BPJS Kesehatan & Ketenagakerjaan Penuh',
  'Pelatihan Teknis & Sertifikasi Resmi',
  'Jenjang Karier Supervisor Lapangan',
];

const jobOpenings: JobOpening[] = [
  {
    code: 'KODE / OPS-01',
    status: 'FULL-TIME',
    title: 'Petugas Kebersihan Profesional',
    location: 'JAKARTA SELATAN & PUSAT',
    description:
      'Menjaga standar kebersihan, higienitas, dan estetika area perkantoran komersial mitra TJBC sesuai jadwal inspeksi harian. Diutamakan memiliki pengalaman minimal 1 tahun di gedung perkantoran.',
    applyRole: 'Petugas Kebersihan Profesional (OPS-01)',
  },
  {
    code: 'KODE / SEC-02',
    status: 'FULL-TIME',
    title: 'Petugas Keamanan (Security)',
    location: 'JABODETABEK',
    description:
      'Melaksanakan pengamanan aset gedung, pemeriksaan akses tamu dan kendaraan, serta patroli berkala. Wajib memiliki sertifikat Gada Pratama aktif dan KTA yang masih berlaku.',
    applyRole: 'Petugas Keamanan / Security (SEC-02)',
  },
  {
    code: 'KODE / DRV-03',
    status: 'FULL-TIME',
    title: 'Pengemudi Eksekutif',
    location: 'JAKARTA SELATAN',
    description:
      'Mendukung mobilitas jajaran direksi perusahaan mitra dengan ketepatan waktu dan etika berkendara tinggi. Wajib memiliki SIM A aktif, menguasai rute Jabodetabek, dan berpenampilan rapi.',
    applyRole: 'Pengemudi Eksekutif (DRV-03)',
  },
];

export default function Karir() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.anim-karir-hero', {
          y: 18,
          opacity: 0,
          duration: 0.45,
          stagger: 0.08,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        });

        gsap.from('.anim-karir-jobs', {
          y: 18,
          opacity: 0,
          duration: 0.45,
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: '#lowongan',
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
      {/* 1. HERO KARIR */}
      <section className="border-b border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="anim-karir-hero inline-flex items-center gap-3">
                <span className="w-6 h-px bg-light-primary dark:bg-dark-accent-blue" />
                <span className="font-mono text-mono-sm uppercase text-light-primary dark:text-dark-accent-blue">
                  KARIR &amp; REKRUTMEN TJBC
                </span>
              </div>

              <h1 className="anim-karir-hero font-display text-display-lg-mobile md:text-display-lg text-light-on-surface dark:text-dark-on-surface text-balance">
                Bertumbuh Bersama Standar Kerja Profesional.
              </h1>

              <p className="anim-karir-hero font-body text-body-lg text-light-on-surface-muted dark:text-dark-on-surface-muted max-w-prose text-pretty">
                PT Tunas Jaya Bersinar Cemerlang membuka peluang karier bagi individu berintegritas
                yang mengutamakan ketelitian, kedisiplinan, dan pelayanan prima di lingkungan kerja
                korporat.
              </p>

              <div className="anim-karir-hero pt-2">
                <a
                  href="#lowongan"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-light-primary dark:bg-dark-primary text-light-on-primary dark:text-dark-on-primary font-label text-label-lg transition-colors duration-state-change ease-state-change hover:bg-deep-navy dark:hover:bg-dark-accent-blue"
                >
                  <span>Lihat Lowongan</span>
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 3v10M4 9l4 4 4-4"
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="anim-karir-hero lg:col-span-4 lg:border-l lg:border-light-border lg:dark:border-dark-border lg:pl-8 flex flex-col gap-4">
              <span className="font-mono text-mono-sm uppercase text-light-on-surface-muted dark:text-dark-on-surface-muted">
                JAMINAN KARYAWAN
              </span>
              <ul className="flex flex-col gap-3 font-body text-body-md text-light-on-surface dark:text-dark-on-surface">
                {employeeGuarantees.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 bg-light-primary dark:bg-dark-accent-blue shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LOWONGAN TERBUKA (#lowongan) — 3 Editorial Job Cards */}
      <section
        id="lowongan"
        className="py-section-sm lg:py-section-lg bg-light-surface-secondary dark:bg-dark-surface-secondary"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-10 border-b border-light-border dark:border-dark-border mb-10 anim-karir-jobs">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-mono-sm uppercase text-light-primary dark:text-dark-accent-blue">
                POSISI TERSEDIA
              </span>
              <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-light-on-surface dark:text-dark-on-surface">
                Lowongan Terbuka
              </h2>
            </div>
            <span className="font-mono text-mono-sm uppercase text-light-on-surface-muted dark:text-dark-on-surface-muted">
              {String(jobOpenings.length).padStart(2, '0')} POSISI AKTIF
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {jobOpenings.map((job) => (
              <article
                key={job.code}
                className="h-full p-7 rounded-sm border border-light-border dark:border-dark-border bg-light-surface-card dark:bg-dark-surface-card flex flex-col justify-between gap-8 transition-colors duration-state-change hover:border-light-primary dark:hover:border-dark-primary anim-karir-jobs"
              >
                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-mono-sm uppercase text-light-primary dark:text-dark-accent-blue">
                      {job.code}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-sm border border-light-border dark:border-dark-border bg-light-surface-secondary dark:bg-dark-surface-secondary text-light-on-surface dark:text-dark-on-surface font-mono text-mono-sm uppercase">
                      {job.status}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-headline text-title-md text-light-on-surface dark:text-dark-on-surface">
                      {job.title}
                    </h3>
                    <span className="font-mono text-mono-sm uppercase text-light-on-surface-muted dark:text-dark-on-surface-muted">
                      {job.location}
                    </span>
                  </div>

                  <p className="font-body text-body-md text-light-on-surface-muted dark:text-dark-on-surface-muted text-pretty">
                    {job.description}
                  </p>
                </div>

                <footer className="pt-5 border-t border-light-border dark:border-dark-border">
                  <Link
                    href={`/karir/lamar?posisi=${encodeURIComponent(job.applyRole)}`}
                    className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-sm bg-light-primary dark:bg-dark-primary text-light-on-primary dark:text-dark-on-primary font-label text-label-lg transition-colors duration-state-change hover:bg-deep-navy dark:hover:bg-dark-accent-blue"
                  >
                    <span>Lamar Posisi Ini</span>
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
