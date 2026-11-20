'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function KontrakSupirForm() {
  const container = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState('6');
  const [category, setCategory] = useState('Supir Eksekutif / Direksi');
  const [sim, setSim] = useState('SIM A');
  const [driverCount, setDriverCount] = useState('1');
  const [transmission, setTransmission] = useState('Matic & Manual');
  const [area, setArea] = useState('');
  const [submittedSummary, setSubmittedSummary] = useState<string | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.anim-form-card', {
          y: 16,
          opacity: 0,
          duration: 0.45,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        });
      });
    },
    { scope: container }
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedSummary(
      `Pengajuan kontrak ${driverCount} supir (${sim}) selama ${duration} bulan telah kami terima. Tim TJBC akan segera menghubungi Anda.`
    );
  };

  return (
    <div ref={container} className="min-h-screen flex flex-col">
      {/* CONTEXTUAL TOP BAR */}
      <header className="sticky top-0 z-40 w-full bg-light-surface dark:bg-dark-surface border-b border-light-border dark:border-dark-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <Link
            href="/layanan"
            className="inline-flex items-center gap-2 font-label text-label-lg text-light-on-surface dark:text-dark-on-surface hover:text-light-primary dark:hover:text-dark-accent-blue transition-colors duration-state-change"
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
            <span>Kembali ke Layanan</span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-baseline gap-0.5 font-display text-title-md tracking-tight text-light-on-surface dark:text-dark-on-surface"
            aria-label="Beranda TJBC"
          >
            <span>TJBC</span>
            <span className="text-light-primary dark:text-dark-accent-blue">.</span>
          </Link>
        </div>
      </header>

      {/* MAIN FORM CONTENT */}
      <main className="flex-1 py-6 sm:py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="anim-form-card rounded-sm border border-light-border dark:border-dark-border bg-light-surface-card dark:bg-dark-surface-card p-5 sm:p-8 flex flex-col gap-6">
            {/* Form Header */}
            <div className="flex items-start gap-3.5 pb-5 border-b border-light-border dark:border-dark-border">
              <div className="w-10 h-10 shrink-0 rounded-sm border border-light-border dark:border-dark-border bg-light-surface-secondary dark:bg-dark-surface-secondary flex items-center justify-center text-light-primary dark:text-dark-accent-blue">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="7"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                  />
                  <circle cx="10" cy="10" r="2" />
                  <path
                    d="M3.5 9h4.5M12 9h4.5M10 12v5"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-mono-sm uppercase text-light-primary dark:text-dark-accent-blue">
                  07 / TRANSPORTASI — PENGAJUAN KONTRAK
                </span>
                <h1 className="font-headline text-title-md text-light-on-surface dark:text-dark-on-surface">
                  Kontrak Supir Perusahaan
                </h1>
                <p className="font-body text-body-md text-light-on-surface-muted dark:text-dark-on-surface-muted text-pretty">
                  Tentukan durasi kontrak, kualifikasi SIM, jenis armada, dan jumlah pengemudi.
                </p>
              </div>
            </div>

            {!submittedSummary ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Durasi Bekerja */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="drv-duration"
                    className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface"
                  >
                    Durasi Bekerja
                  </label>
                  <select
                    id="drv-duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-light-on-surface dark:text-dark-on-surface font-body text-body-md focus:outline-none focus:border-light-primary dark:focus:border-dark-primary"
                  >
                    <option value="6">6 Bulan (Minimal)</option>
                    <option value="12">12 Bulan (1 Tahun)</option>
                    <option value="24">24 Bulan (2 Tahun)</option>
                    <option value="36">36 Bulan (3 Tahun)</option>
                  </select>
                </div>

                {/* Kategori Pengemudi & Jenis SIM */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="drv-category"
                      className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface"
                    >
                      Kategori Pengemudi
                    </label>
                    <select
                      id="drv-category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-light-on-surface dark:text-dark-on-surface font-body text-body-md focus:outline-none focus:border-light-primary dark:focus:border-dark-primary"
                    >
                      <option value="Supir Eksekutif / Direksi">Supir Eksekutif / Direksi</option>
                      <option value="Supir Operasional Kantor">Supir Operasional Kantor</option>
                      <option value="Supir Logistik / Niaga">Supir Logistik / Niaga</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="drv-sim"
                      className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface"
                    >
                      Jenis SIM Wajib
                    </label>
                    <select
                      id="drv-sim"
                      value={sim}
                      onChange={(e) => setSim(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-light-on-surface dark:text-dark-on-surface font-body text-body-md focus:outline-none focus:border-light-primary dark:focus:border-dark-primary"
                    >
                      <option value="SIM A">SIM A (Kendaraan Penumpang)</option>
                      <option value="SIM B1">SIM B1 (Minibus / Box)</option>
                      <option value="SIM B2">SIM B2 (Kendaraan Niaga Berat)</option>
                    </select>
                  </div>
                </div>

                {/* Jumlah Supir & Transmisi Armada */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="drv-count"
                      className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface"
                    >
                      Jumlah Supir
                    </label>
                    <input
                      id="drv-count"
                      type="number"
                      min={1}
                      max={50}
                      required
                      value={driverCount}
                      onChange={(e) => setDriverCount(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-light-on-surface dark:text-dark-on-surface font-mono text-body-md tabular-nums focus:outline-none focus:border-light-primary dark:focus:border-dark-primary"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="drv-transmission"
                      className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface"
                    >
                      Transmisi Armada
                    </label>
                    <select
                      id="drv-transmission"
                      value={transmission}
                      onChange={(e) => setTransmission(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-light-on-surface dark:text-dark-on-surface font-body text-body-md focus:outline-none focus:border-light-primary dark:focus:border-dark-primary"
                    >
                      <option value="Matic & Manual">Matic &amp; Manual</option>
                      <option value="Matic (Otomatis)">Matic (Otomatis)</option>
                      <option value="Manual">Manual</option>
                    </select>
                  </div>
                </div>

                {/* Area Rute & Jam Operasional */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="drv-area"
                    className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface"
                  >
                    Area Rute &amp; Jam Operasional
                  </label>
                  <textarea
                    id="drv-area"
                    rows={3}
                    required
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="Contoh: Rute Jabodetabek, Senin–Jumat pukul 07:30–17:30 WIB, penjemputan di Jakarta Selatan."
                    className="w-full px-3.5 py-2.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-light-on-surface dark:text-dark-on-surface font-body text-body-md focus:outline-none focus:border-light-primary dark:focus:border-dark-primary"
                  />
                </div>

                {/* Single Submit Button */}
                <div className="pt-4 border-t border-light-border dark:border-dark-border flex justify-end">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 rounded-sm bg-deep-navy dark:bg-dark-primary text-on-deep-navy dark:text-dark-on-primary font-label text-label-lg transition-colors duration-state-change hover:bg-brand-blue dark:hover:bg-dark-accent-blue cursor-pointer"
                  >
                    <span>Ajukan Kontrak</span>
                  </button>
                </div>
              </form>
            ) : (
              /* Success State */
              <div className="py-6 flex flex-col gap-4">
                <span className="inline-flex w-fit px-2.5 py-1 rounded-sm bg-success text-on-success font-mono text-mono-sm uppercase">
                  PENGAJUAN KONTRAK DITERIMA
                </span>
                <p className="font-body text-body-md text-light-on-surface dark:text-dark-on-surface">
                  {submittedSummary}
                </p>
                <div className="pt-2">
                  <Link
                    href="/layanan"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm border border-light-border dark:border-dark-border font-label text-label-lg text-light-on-surface dark:text-dark-on-surface hover:border-light-primary dark:hover:border-dark-primary transition-colors duration-state-change"
                  >
                    <span>Kembali ke Menu Layanan</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
