'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function KontrakTamanForm() {
  const container = useRef<HTMLDivElement>(null);
  const [gardenArea, setGardenArea] = useState('');
  const [duration, setDuration] = useState('6');
  const [workerCount, setWorkerCount] = useState(2);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
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

  const syncWorkers = (val: number) => {
    setWorkerCount(Math.max(1, Math.min(50, val || 1)));
  };

  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newNames = Array.from(e.target.files).map((f) => f.name);
      setUploadedFiles((prev) => [...prev, ...newNames]);
      e.target.value = '';
    }
  };

  const removeFile = (idx: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedSummary(
      `Pengajuan kontrak perawatan taman seluas ${gardenArea} m² selama ${duration} bulan dengan ${workerCount} pekerja telah kami terima. Tim TJBC akan segera menghubungi Anda.`
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
                  <path
                    d="M10 17V9M10 9c0-3.5 2.5-6 6-6 0 3.5-2.5 6-6 6ZM10 11c0-3-2-5-5-5 0 3 2 5 5 5Z"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-mono-sm uppercase text-light-primary dark:text-dark-accent-blue">
                  04 / LANSKAP — PENGAJUAN KONTRAK
                </span>
                <h1 className="font-headline text-title-md text-light-on-surface dark:text-dark-on-surface">
                  Kontrak Perawatan Taman
                </h1>
                <p className="font-body text-body-md text-light-on-surface-muted dark:text-dark-on-surface-muted text-pretty">
                  Lengkapi detail area taman, durasi kontrak, dan kebutuhan tenaga perawatan.
                </p>
              </div>
            </div>

            {!submittedSummary ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Luas Taman */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="garden-area"
                    className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface"
                  >
                    Luas Taman (m²)
                  </label>
                  <input
                    id="garden-area"
                    type="number"
                    min={1}
                    required
                    value={gardenArea}
                    onChange={(e) => setGardenArea(e.target.value)}
                    placeholder="Contoh: 250"
                    className="w-full px-3.5 py-2.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-light-on-surface dark:text-dark-on-surface font-mono text-body-md tabular-nums focus:outline-none focus:border-light-primary dark:focus:border-dark-primary"
                  />
                </div>

                {/* Durasi Kontrak */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contract-duration"
                    className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface"
                  >
                    Durasi Kontrak
                  </label>
                  <select
                    id="contract-duration"
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

                {/* Jumlah Pekerja */}
                <div className="p-4 rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface flex items-center justify-between gap-4">
                  <div className="flex flex-col gap-0.5">
                    <label
                      htmlFor="worker-count"
                      className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface"
                    >
                      Jumlah Pekerja
                    </label>
                    <span className="font-body text-body-md text-light-on-surface-muted dark:text-dark-on-surface-muted">
                      Tenaga perawatan yang dibutuhkan.
                    </span>
                  </div>
                  <div className="flex items-center border border-light-border dark:border-dark-border rounded-sm bg-light-surface-card dark:bg-dark-surface-card shrink-0">
                    <button
                      type="button"
                      onClick={() => syncWorkers(workerCount - 1)}
                      aria-label="Kurangi jumlah pekerja"
                      className="w-9 h-9 flex items-center justify-center font-label text-label-lg text-light-on-surface dark:text-dark-on-surface hover:bg-light-surface-secondary dark:hover:bg-dark-surface-secondary border-r border-light-border dark:border-dark-border cursor-pointer"
                    >
                      -
                    </button>
                    <input
                      id="worker-count"
                      type="number"
                      min={1}
                      max={50}
                      value={workerCount}
                      onChange={(e) => syncWorkers(parseInt(e.target.value, 10))}
                      className="w-12 h-9 text-center border-0 bg-transparent font-mono text-body-md tabular-nums text-light-on-surface dark:text-dark-on-surface focus:outline-none p-0"
                    />
                    <button
                      type="button"
                      onClick={() => syncWorkers(workerCount + 1)}
                      aria-label="Tambah jumlah pekerja"
                      className="w-9 h-9 flex items-center justify-center font-label text-label-lg text-light-on-surface dark:text-dark-on-surface hover:bg-light-surface-secondary dark:hover:bg-dark-surface-secondary border-l border-light-border dark:border-dark-border cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Gambar Taman (Multi-file) */}
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface">
                      Gambar Taman
                    </span>
                    <span className="font-body text-body-md text-light-on-surface-muted dark:text-dark-on-surface-muted">
                      Dapat mengunggah lebih dari 1 foto area taman.
                    </span>
                  </div>
                  <label
                    htmlFor="garden-images"
                    className="cursor-pointer rounded-sm border border-dashed border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface p-6 flex flex-col items-center justify-center gap-2 text-center transition-colors duration-state-change hover:border-light-primary dark:hover:border-dark-primary"
                  >
                    <svg
                      className="w-8 h-8 text-light-on-surface-muted dark:text-dark-on-surface-muted"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="16"
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                      />
                      <circle cx="8.5" cy="9.5" r="1.5" />
                      <path
                        d="M21 16l-5-5-6 6-3-3-4 4"
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                      />
                    </svg>
                    <span className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface">
                      {uploadedFiles.length > 0
                        ? `${uploadedFiles.length} foto taman dipilih`
                        : 'Pilih beberapa foto taman'}
                    </span>
                    <span className="font-mono text-mono-sm text-light-on-surface-muted dark:text-dark-on-surface-muted">
                      JPG, PNG — MULTI FILE
                    </span>
                    <span className="mt-1 inline-flex items-center px-3.5 py-1.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface-card dark:bg-dark-surface-card font-label text-label-lg text-light-on-surface dark:text-dark-on-surface">
                      Tambah Foto
                    </span>
                    <input
                      id="garden-images"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleFilesChange}
                      className="sr-only"
                    />
                  </label>

                  {uploadedFiles.length > 0 && (
                    <ul className="flex flex-col gap-2 pt-1">
                      {uploadedFiles.map((fileName, idx) => (
                        <li
                          key={`${fileName}-${idx}`}
                          className="px-3.5 py-2 rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface flex items-center justify-between gap-3"
                        >
                          <span className="font-body text-body-md text-light-on-surface dark:text-dark-on-surface truncate">
                            {idx + 1}. {fileName}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeFile(idx)}
                            className="font-mono text-mono-sm uppercase text-light-primary dark:text-dark-accent-blue shrink-0 cursor-pointer"
                          >
                            Hapus
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
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
