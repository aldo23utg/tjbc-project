'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function pad2(n: number) {
  return String(n).padStart(2, '0');
}

function resizeStrings(arr: (string | null)[], target: number): (string | null)[] {
  if (arr.length === target) return arr;
  if (arr.length > target) return arr.slice(0, target);
  return [...arr, ...Array.from({ length: target - arr.length }, () => null)];
}

export default function KontrakObForm() {
  const container = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState('6');
  const [floors, setFloors] = useState('1');
  const [workers, setWorkers] = useState('2');
  const [roomFiles, setRoomFiles] = useState<(string | null)[]>([null]);
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

  const syncRooms = (next: number) => {
    const clamped = Math.max(1, Math.min(30, next || 1));
    setRoomFiles((prev) => resizeStrings(prev, clamped));
  };

  const setRoomFile = (idx: number, name: string | null) => {
    setRoomFiles((prev) => prev.map((item, i) => (i === idx ? name : item)));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedSummary(
      `Pengajuan kontrak ${workers} personel OB selama ${duration} bulan untuk ${floors} lantai (${roomFiles.length} ruangan) telah kami terima.`
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
                  <rect
                    x="4"
                    y="3"
                    width="12"
                    height="14"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                  />
                  <path
                    d="M7 7h6M7 10h6M7 13h4"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-mono-sm uppercase text-light-primary dark:text-dark-accent-blue">
                  05 / ALIH DAYA — PENGAJUAN KONTRAK
                </span>
                <h1 className="font-headline text-title-md text-light-on-surface dark:text-dark-on-surface">
                  Kontrak Office Boy / Girl
                </h1>
                <p className="font-body text-body-md text-light-on-surface-muted dark:text-dark-on-surface-muted text-pretty">
                  Tentukan durasi kontrak, cakupan lantai serta ruangan, dan jumlah personel OB.
                </p>
              </div>
            </div>

            {!submittedSummary ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Durasi Bekerja */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="ob-duration"
                    className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface"
                  >
                    Durasi Bekerja
                  </label>
                  <select
                    id="ob-duration"
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

                {/* Jumlah Lantai & Jumlah Pekerja */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="ob-floors"
                      className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface"
                    >
                      Jumlah Lantai
                    </label>
                    <input
                      id="ob-floors"
                      type="number"
                      min={1}
                      max={50}
                      required
                      value={floors}
                      onChange={(e) => setFloors(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-light-on-surface dark:text-dark-on-surface font-mono text-body-md tabular-nums focus:outline-none focus:border-light-primary dark:focus:border-dark-primary"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="ob-workers"
                      className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface"
                    >
                      Jumlah Pekerja
                    </label>
                    <input
                      id="ob-workers"
                      type="number"
                      min={1}
                      max={50}
                      required
                      value={workers}
                      onChange={(e) => setWorkers(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-light-on-surface dark:text-dark-on-surface font-mono text-body-md tabular-nums focus:outline-none focus:border-light-primary dark:focus:border-dark-primary"
                    />
                  </div>
                </div>

                {/* Jumlah Ruangan */}
                <div className="p-4 rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface flex items-center justify-between gap-4">
                  <div className="flex flex-col gap-0.5">
                    <label
                      htmlFor="ob-room-count"
                      className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface"
                    >
                      Jumlah Ruangan
                    </label>
                    <span className="font-body text-body-md text-light-on-surface-muted dark:text-dark-on-surface-muted">
                      Lampirkan gambar setiap ruangan.
                    </span>
                  </div>
                  <div className="flex items-center border border-light-border dark:border-dark-border rounded-sm bg-light-surface-card dark:bg-dark-surface-card shrink-0">
                    <button
                      type="button"
                      onClick={() => syncRooms(roomFiles.length - 1)}
                      aria-label="Kurangi jumlah ruangan"
                      className="w-9 h-9 flex items-center justify-center font-label text-label-lg text-light-on-surface dark:text-dark-on-surface hover:bg-light-surface-secondary dark:hover:bg-dark-surface-secondary border-r border-light-border dark:border-dark-border cursor-pointer"
                    >
                      -
                    </button>
                    <input
                      id="ob-room-count"
                      type="number"
                      min={1}
                      max={30}
                      value={roomFiles.length}
                      onChange={(e) => syncRooms(parseInt(e.target.value, 10))}
                      className="w-12 h-9 text-center border-0 bg-transparent font-mono text-body-md tabular-nums text-light-on-surface dark:text-dark-on-surface focus:outline-none p-0"
                    />
                    <button
                      type="button"
                      onClick={() => syncRooms(roomFiles.length + 1)}
                      aria-label="Tambah jumlah ruangan"
                      className="w-9 h-9 flex items-center justify-center font-label text-label-lg text-light-on-surface dark:text-dark-on-surface hover:bg-light-surface-secondary dark:hover:bg-dark-surface-secondary border-l border-light-border dark:border-dark-border cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Dynamic Room Image Uploads */}
                <div className="flex flex-col gap-3.5">
                  {roomFiles.map((fileName, idx) => {
                    const num = pad2(idx + 1);
                    return (
                      <div
                        key={idx}
                        className="p-4 rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface flex flex-col gap-2.5"
                      >
                        <span className="font-mono text-mono-sm uppercase text-light-primary dark:text-dark-accent-blue">
                          GAMBAR RUANGAN {num}
                        </span>
                        <label className="cursor-pointer rounded-sm border border-dashed border-light-border dark:border-dark-border bg-light-surface-card dark:bg-dark-surface-card p-3.5 flex items-center justify-between gap-3 transition-colors duration-state-change hover:border-light-primary dark:hover:border-dark-primary">
                          <span
                            className={`font-body text-body-md truncate ${
                              fileName
                                ? 'text-light-on-surface dark:text-dark-on-surface'
                                : 'text-light-on-surface-muted dark:text-dark-on-surface-muted'
                            }`}
                          >
                            {fileName || `Unggah foto ruangan ${num} (JPG, PNG)`}
                          </span>
                          <span className="shrink-0 px-3 py-1.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface font-label text-label-lg text-light-on-surface dark:text-dark-on-surface">
                            Pilih Foto
                          </span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setRoomFile(idx, e.target.files?.[0]?.name || null)}
                            className="sr-only"
                          />
                        </label>
                      </div>
                    );
                  })}
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
