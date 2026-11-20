'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function KontrakSatpamForm() {
  const container = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState('6');
  const [property, setProperty] = useState('Gedung Perkantoran');
  const [posts, setPosts] = useState('1');
  const [personnel, setPersonnel] = useState('3');
  const [shift, setShift] = useState('3 Shift (8 Jam / 24 Jam)');
  const [cert, setCert] = useState('Gada Pratama + KTA Aktif');
  const [location, setLocation] = useState('');
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
      `Pengajuan kontrak ${personnel} personel Satpam (${posts} pos jaga) selama ${duration} bulan telah kami terima. Tim TJBC akan segera menghubungi Anda.`
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
                    d="M10 2.5L4 5v4.5c0 4 2.5 6.8 6 8 3.5-1.2 6-4 6-8V5l-6-2.5Z"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-mono-sm uppercase text-light-primary dark:text-dark-accent-blue">
                  06 / KEAMANAN — PENGAJUAN KONTRAK
                </span>
                <h1 className="font-headline text-title-md text-light-on-surface dark:text-dark-on-surface">
                  Kontrak Satpam (Security)
                </h1>
                <p className="font-body text-body-md text-light-on-surface-muted dark:text-dark-on-surface-muted text-pretty">
                  Lengkapi spesifikasi pengamanan lokasi, pola shift, dan jumlah personel
                  bersertifikat.
                </p>
              </div>
            </div>

            {!submittedSummary ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Durasi Bekerja */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="sec-duration"
                    className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface"
                  >
                    Durasi Bekerja
                  </label>
                  <select
                    id="sec-duration"
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

                {/* Jenis Objek Pengamanan */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="sec-property"
                    className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface"
                  >
                    Jenis Objek Pengamanan
                  </label>
                  <select
                    id="sec-property"
                    value={property}
                    onChange={(e) => setProperty(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-light-on-surface dark:text-dark-on-surface font-body text-body-md focus:outline-none focus:border-light-primary dark:focus:border-dark-primary"
                  >
                    <option value="Gedung Perkantoran">Gedung Perkantoran</option>
                    <option value="Pabrik / Gudang">Pabrik / Gudang (Warehouse)</option>
                    <option value="Perumahan / Cluster">Perumahan / Cluster</option>
                    <option value="Hotel / Mall / Komersial">Hotel / Mall / Area Komersial</option>
                    <option value="Sekolah / Kampus / Rumah Sakit">
                      Sekolah / Kampus / Rumah Sakit
                    </option>
                  </select>
                </div>

                {/* Jumlah Pos & Jumlah Personel */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="sec-posts"
                      className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface"
                    >
                      Jumlah Pos Jaga
                    </label>
                    <input
                      id="sec-posts"
                      type="number"
                      min={1}
                      max={30}
                      required
                      value={posts}
                      onChange={(e) => setPosts(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-light-on-surface dark:text-dark-on-surface font-mono text-body-md tabular-nums focus:outline-none focus:border-light-primary dark:focus:border-dark-primary"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="sec-personnel"
                      className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface"
                    >
                      Jumlah Personel
                    </label>
                    <input
                      id="sec-personnel"
                      type="number"
                      min={1}
                      max={100}
                      required
                      value={personnel}
                      onChange={(e) => setPersonnel(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-light-on-surface dark:text-dark-on-surface font-mono text-body-md tabular-nums focus:outline-none focus:border-light-primary dark:focus:border-dark-primary"
                    />
                  </div>
                </div>

                {/* Sistem Shift & Sertifikasi */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="sec-shift"
                      className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface"
                    >
                      Pola Shift Penjagaan
                    </label>
                    <select
                      id="sec-shift"
                      value={shift}
                      onChange={(e) => setShift(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-light-on-surface dark:text-dark-on-surface font-body text-body-md focus:outline-none focus:border-light-primary dark:focus:border-dark-primary"
                    >
                      <option value="3 Shift (8 Jam / 24 Jam)">3 Shift (8 Jam / 24 Jam)</option>
                      <option value="2 Shift (12 Jam / 24 Jam)">2 Shift (12 Jam / 24 Jam)</option>
                      <option value="1 Shift (Jam Operasional)">1 Shift (Jam Operasional)</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="sec-cert"
                      className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface"
                    >
                      Kualifikasi Sertifikasi
                    </label>
                    <select
                      id="sec-cert"
                      value={cert}
                      onChange={(e) => setCert(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-light-on-surface dark:text-dark-on-surface font-body text-body-md focus:outline-none focus:border-light-primary dark:focus:border-dark-primary"
                    >
                      <option value="Gada Pratama + KTA Aktif">Gada Pratama + KTA Aktif</option>
                      <option value="Gada Madya (Danru / Koordinator)">
                        Gada Madya (Danru / Koordinator)
                      </option>
                      <option value="Kombinasi Danru & Anggota">Kombinasi Danru &amp; Anggota</option>
                    </select>
                  </div>
                </div>

                {/* Lokasi Penempatan */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="sec-location"
                    className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface"
                  >
                    Lokasi Penempatan &amp; Catatan
                  </label>
                  <textarea
                    id="sec-location"
                    rows={3}
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Contoh: Kawasan Industri Cikarang, butuh kontrol akses keluar-masuk truk dan patroli malam."
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
