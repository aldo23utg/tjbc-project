'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const layananData = [
  {
    number: '01.',
    title: 'General Cleaning',
    description:
      'Pemeliharaan kebersihan menyeluruh untuk gedung perkantoran, pusat perbelanjaan, rumah sakit, dan fasilitas industri dengan standar higienitas ketat.',
    bullets: [
      'Daily Office & Lobby Care',
      'Kristalisasi Marmer & Granit',
      'Pembersihan Kaca Fasad',
      'Deep Cleaning Pasca-Konstruksi',
    ],
    image:
      'https://lh3.googleusercontent.com/aida/ALJJyrDh160jh59qq3KXTh3F3VJNMJG4MdMvkRM8G5RtNOd8DnqcVCr5FOk1u-NO6VAnHBrWtQ21HgjyEbR4H22xRN5zQtfUi_MxjVJ3EvDAzCkLrP7AI6EU2Y4wePtXATgPz72fxj7R1mhxrPX7fyzUWJarnwIj-5dJByZBOzSNZz5T91zVFvNeTik9Q9Wemf3udU0SqbAFge_Et9ME0BDt2JnHtHwRCHNQCvx_HYn1CP3aPLXrlz7yr9T89HL_v10izXaXQw',
    alt: 'Layanan General Cleaning TJBC di gedung perkantoran',
    tag: 'SOP BERSTANDAR K3',
  },
  {
    number: '02.',
    title: 'Perawatan Taman',
    description:
      'Pengelolaan lanskap dan ruang terbuka hijau korporat agar selalu tertata rapi, sehat, dan mendukung citra arsitektural kawasan bisnis Anda.',
    bullets: [
      'Pemangkasan & Pembentukan Tajuk',
      'Pemupukan & Pengendalian Hama',
      'Perawatan Tanaman Indoor & Atrium',
      'Renovasi & Penataan Lanskap',
    ],
    image:
      'https://lh3.googleusercontent.com/aida/ALJJyrAdvaB_CJ4uP7uE-zOB1K1Xk_7SfHWbY_RX-IJJF_Kg5XgL6L2RquZhOyTRWsgBE7jAqGCBR2kctrf_Qc9qlwQOWVo9i4EOVOuZE4ydJJssEdnfDkkqlx3laOMnTXBAhn0zDFmBx6RTR2Bpibj3GMnAN9zBVUfHjY2AokT6CYLnuS8yYX_JjA84vo20JvsmoO8abjRuPi20xdVrHbnXkYpyAWxmQQW1zmEfXxa3q-PrRDYYFK8IrBeDU8qWQv7GozHA',
    alt: 'Layanan Perawatan Taman dan Lanskap Korporat TJBC',
    tag: 'PEMELIHARAAN BERKALA',
  },
  {
    number: '03.',
    title: 'Perusahaan Alih Daya',
    description:
      'Penyediaan dan pengelolaan tenaga kerja pendukung profesional (outsourcing) dengan tata kelola administrasi ketenagakerjaan yang patuh hukum dan transparan.',
    bullets: [
      'Petugas Keamanan (Gada Pratama)',
      'Pengemudi Eksekutif & Operasional',
      'Resepsionis & Office Support',
      'Teknisi Pemeliharaan Gedung',
    ],
    image:
      'https://lh3.googleusercontent.com/aida/ALJJyrDW7fk0hF-3HaLgdp4_0KnmZVKpyPYr-jCeXyseDze_45iauVd9sgz3EivhqmO_4_YbYRcev5vqn9jXiUFw7EzRcQyc3fID7B1ewCxTv3I_rkRBgglz1zlFWRaBNMIpIHIHNl1RNfkg_ZO-TcXeMACi9NGJdxYO9BACrwn_qLSL-KMvz9KPvSWqWYalOt8UlPTf16JZvJqIXc2HQGBJ0V5OjtHXRu1lqdG9sxHnvyzoaplj7I65tiScLWo',
    alt: 'Layanan Alih Daya Security dan Pengemudi Eksekutif TJBC',
    tag: 'LEGALITAS & BPJS PENUH',
  },
];

export default function LayananSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.anim-layanan', {
          y: 18,
          opacity: 0,
          duration: 0.45,
          stagger: 0.12,
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
      id="layanan"
      className="py-section-sm lg:py-section-lg bg-light-surface dark:bg-dark-surface border-b border-light-border dark:border-dark-border"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-light-border dark:border-dark-border anim-layanan">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="font-mono text-mono-sm uppercase text-light-primary dark:text-dark-accent-blue">
              CAKUPAN LAYANAN
            </span>
            <h2 className="font-headline text-headline-xl-mobile md:text-headline-xl text-light-on-surface dark:text-dark-on-surface text-balance">
              Solusi Terstruktur untuk Kebutuhan Operasional Gedung &amp; Bisnis.
            </h2>
          </div>
          <p className="font-body text-body-md text-light-on-surface-muted dark:text-dark-on-surface-muted max-w-sm">
            Setiap unit layanan dikelola oleh koordinator lapangan khusus dengan laporan inspeksi
            rutin.
          </p>
        </div>

        <div className="divide-y divide-light-border dark:divide-dark-border">
          {layananData.map((service) => (
            <article
              key={service.number}
              className="group py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-colors duration-state-change hover:bg-light-surface-card dark:hover:bg-dark-surface-card lg:px-6 lg:-mx-6 rounded-sm anim-layanan"
            >
              <div className="lg:col-span-2 flex items-baseline gap-3">
                <span className="font-mono text-mono-lg-mobile md:text-mono-lg text-light-primary dark:text-dark-accent-blue">
                  {service.number}
                </span>
              </div>

              <div className="lg:col-span-6 flex flex-col gap-4">
                <h3 className="font-headline text-headline-lg-mobile md:text-headline-lg text-light-on-surface dark:text-dark-on-surface">
                  {service.title}
                </h3>
                <p className="font-body text-body-md text-light-on-surface-muted dark:text-dark-on-surface-muted max-w-prose">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pt-2 font-body text-body-md text-light-on-surface dark:text-dark-on-surface">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-light-primary dark:bg-dark-accent-blue rounded-none shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <div className="overflow-hidden rounded-sm border border-light-border dark:border-dark-border aspect-[16/9]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-surface-enter group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="font-mono text-mono-sm uppercase text-light-on-surface-muted dark:text-dark-on-surface-muted">
                    {service.tag}
                  </span>
                  <a
                    href="#kontak"
                    className="inline-flex items-center gap-2 font-label text-label-lg text-light-primary dark:text-dark-accent-blue"
                  >
                    <span>Minta Penawaran</span>
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
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
