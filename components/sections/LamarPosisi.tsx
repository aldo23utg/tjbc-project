'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface LamarPosisiProps {
  initialRole: string;
}

export default function LamarPosisi({ initialRole }: LamarPosisiProps) {
  const container = useRef<HTMLDivElement>(null);
  const [cvFileName, setCvFileName] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.anim-lamar', {
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setCvFileName(file ? file.name : null);
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setCvFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div ref={container} className="min-h-screen flex flex-col">
      {/* CONTEXTUAL TOP BAR (No Footer, Focused Task Flow) */}
      <header className="sticky top-0 z-40 w-full bg-light-surface dark:bg-dark-surface border-b border-light-border dark:border-dark-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <Link
            href="/karir"
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
            <span>Kembali ke Karir</span>
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

      {/* MAIN FORM CONTENT (No Footer) */}
      <main className="flex-1 py-8 sm:py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="anim-lamar rounded-sm border border-light-border dark:border-dark-border bg-light-surface-card dark:bg-dark-surface-card p-6 sm:p-8 flex flex-col gap-6">
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
                    d="M4 3v14M4 4h9l-1.5 3L13 10H4"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="font-headline text-title-md text-light-on-surface dark:text-dark-on-surface">
                  Informasi Posisi &amp; Data Diri
                </h1>
                <p className="font-body text-body-md text-light-on-surface-muted dark:text-dark-on-surface-muted">
                  Lengkapi data diri dan unggah CV untuk melamar posisi yang dipilih.
                </p>
              </div>
            </div>

            {!submitted ? (
              /* Form Body */
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="applicant-role"
                      className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface"
                    >
                      Posisi yang dilamar
                    </label>
                    <input
                      id="applicant-role"
                      type="text"
                      readOnly
                      value={initialRole}
                      className="w-full px-3.5 py-2.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface-secondary dark:bg-dark-surface-secondary text-light-on-surface dark:text-dark-on-surface font-body text-body-md focus:outline-none focus:border-light-primary dark:focus:border-dark-primary"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="applicant-name"
                      className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      id="applicant-name"
                      type="text"
                      required
                      placeholder="Masukkan nama lengkap"
                      className="w-full px-3.5 py-2.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-light-on-surface dark:text-dark-on-surface font-body text-body-md focus:outline-none focus:border-light-primary dark:focus:border-dark-primary"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="applicant-phone"
                      className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface"
                    >
                      Nomor WhatsApp
                    </label>
                    <input
                      id="applicant-phone"
                      type="tel"
                      required
                      placeholder="Contoh: 081234567890"
                      className="w-full px-3.5 py-2.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-light-on-surface dark:text-dark-on-surface font-body text-body-md focus:outline-none focus:border-light-primary dark:focus:border-dark-primary"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="applicant-email"
                      className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface"
                    >
                      Alamat Email
                    </label>
                    <input
                      id="applicant-email"
                      type="email"
                      required
                      placeholder="nama@email.com"
                      className="w-full px-3.5 py-2.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-light-on-surface dark:text-dark-on-surface font-body text-body-md focus:outline-none focus:border-light-primary dark:focus:border-dark-primary"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="applicant-dob"
                      className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface"
                    >
                      Tanggal Lahir &amp; Usia
                    </label>
                    <input
                      id="applicant-dob"
                      type="text"
                      required
                      placeholder="Contoh: 14 Mei 1998 (28 thn)"
                      className="w-full px-3.5 py-2.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-light-on-surface dark:text-dark-on-surface font-body text-body-md focus:outline-none focus:border-light-primary dark:focus:border-dark-primary"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="applicant-domicile"
                      className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface"
                    >
                      Domisili Saat Ini
                    </label>
                    <input
                      id="applicant-domicile"
                      type="text"
                      required
                      placeholder="Contoh: Jakarta Selatan"
                      className="w-full px-3.5 py-2.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-light-on-surface dark:text-dark-on-surface font-body text-body-md focus:outline-none focus:border-light-primary dark:focus:border-dark-primary"
                    />
                  </div>
                </div>

                {/* Upload CV */}
                <div className="flex flex-col gap-2 pt-1">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface">
                      Upload CV
                    </span>
                    <span className="font-body text-body-md text-light-on-surface-muted dark:text-dark-on-surface-muted">
                      Seret dan lepas atau pilih dokumen CV terbaru Anda.
                    </span>
                  </div>
                  <label
                    htmlFor="applicant-cv"
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragging(true);
                    }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleDrop}
                    className={`cursor-pointer rounded-sm border border-dashed bg-light-surface dark:bg-dark-surface p-6 flex flex-col items-center justify-center gap-2 text-center transition-colors duration-state-change ${
                      isDragging
                        ? 'border-light-primary dark:border-dark-primary'
                        : 'border-light-border dark:border-dark-border hover:border-light-primary dark:hover:border-dark-primary'
                    }`}
                  >
                    <svg
                      className="w-8 h-8 text-light-on-surface-muted dark:text-dark-on-surface-muted"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 16V7m0 0-3 3m3-3 3 3"
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                      />
                      <path
                        d="M6.5 19h11a3.5 3.5 0 0 0 .5-6.96A5 5 0 0 0 8.2 9.2 3.5 3.5 0 0 0 6.5 19Z"
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                      />
                    </svg>
                    <span className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface">
                      {cvFileName || 'Pilih file atau seret ke sini.'}
                    </span>
                    <span className="font-mono text-mono-sm text-light-on-surface-muted dark:text-dark-on-surface-muted">
                      PDF, DOCX, JPG - MAKS. 10MB
                    </span>
                    <span className="mt-1 inline-flex items-center px-3.5 py-1.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface-card dark:bg-dark-surface-card font-label text-label-lg text-light-on-surface dark:text-dark-on-surface">
                      Pilih File
                    </span>
                    <input
                      id="applicant-cv"
                      type="file"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg"
                      onChange={handleFileChange}
                      className="sr-only"
                    />
                  </label>
                </div>

                {/* Single Submit Button */}
                <div className="pt-4 border-t border-light-border dark:border-dark-border flex justify-end">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 rounded-sm bg-deep-navy dark:bg-dark-primary text-on-deep-navy dark:text-dark-on-primary font-label text-label-lg transition-colors duration-state-change hover:bg-brand-blue dark:hover:bg-dark-accent-blue cursor-pointer"
                  >
                    <span>Submit</span>
                  </button>
                </div>
              </form>
            ) : (
              /* Success State */
              <div className="py-6 flex flex-col gap-4">
                <span className="inline-flex w-fit px-2.5 py-1 rounded-sm bg-success text-on-success font-mono text-mono-sm uppercase">
                  LAMARAN DITERIMA
                </span>
                <p className="font-body text-body-md text-light-on-surface dark:text-dark-on-surface">
                  Terima kasih. Tim Rekrutmen PT Tunas Jaya Bersinar Cemerlang akan meninjau data
                  Anda dan menghubungi melalui WhatsApp dalam 2 hari kerja.
                </p>
                <div className="pt-2">
                  <Link
                    href="/karir"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm border border-light-border dark:border-dark-border font-label text-label-lg text-light-on-surface dark:text-dark-on-surface hover:border-light-primary dark:hover:border-dark-primary transition-colors duration-state-change"
                  >
                    <span>Kembali ke Daftar Lowongan</span>
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
