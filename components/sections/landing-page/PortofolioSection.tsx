'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { QuoteIcon, ArrowLeft, ArrowRight } from '@/components/ui/icons';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    id: 1,
    name: 'Budi Santoso',
    text: 'Sangat merekomendasikan layanan PT Tunas Jaya Bersinar Cemerlang. Sejak bekerja sama, manajemen kebersihan fasilitas kantor kami menjadi jauh lebih baik dan terstruktur. Tim yang ditugaskan sangat profesional dan proaktif.',
    date: '2 minggu yang lalu',
    rating: 5,
  },
  {
    id: 2,
    name: 'Siti Aminah',
    text: 'Sebelum menggunakan layanan outsourcing dari Tunas Jaya, kami sering kesulitan mengelola jadwal tenaga keamanan. Sekarang, semuanya berjalan lancar dan keamanan lingkungan perusahaan sangat terjamin. Respons manajemen mereka juga sangat cepat.',
    date: '3 minggu yang lalu',
    rating: 5,
  },
  {
    id: 3,
    name: 'Hendro Wibowo',
    text: 'Layanan perawatan taman mereka luar biasa. Area hijau di sekitar pabrik kami yang sebelumnya kurang terawat kini tampak asri dan rapi. Karyawan kami pun merasa lebih nyaman bekerja.',
    date: '1 bulan yang lalu',
    rating: 5,
  },
  {
    id: 4,
    name: 'Diana Putri',
    text: 'Kami sangat puas dengan layanan general cleaning yang diberikan. Noda membandel di area produksi yang sulit dibersihkan kini hilang tak berbekas. Tim pembersih bekerja dengan sangat teliti dan mematuhi standar K3 yang ketat.',
    date: '2 bulan yang lalu',
    rating: 5,
  },
];

export default function PortofolioSection() {
  const container = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    gsap.fromTo(
      '.anim-port',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
        },
      }
    );
  }, { scope: container });

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const currentReview = reviews[activeIndex];

  return (
    <section
      ref={container}
      id="portofolio"
      className="w-full bg-background py-12 md:py-20 text-text-primary overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center justify-between">
          
          {/* Sisi Kiri: Teks Header */}
          <div className="anim-port w-full lg:w-5/12 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-primary font-semibold text-sm md:text-base">
                Testimoni
              </span>
              <span className="w-10 h-[2px] bg-primary/30 rounded-full" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3 leading-tight">
              Apa Kata Pelanggan Kami
            </h2>

            <p className="body-text text-text-secondary text-sm md:text-base max-w-md">
              Dipercaya oleh berbagai perusahaan dan organisasi yang yakin pada kualitas layanan kami.
            </p>
          </div>

          {/* Sisi Kanan: Kartu Testimoni */}
          <div className="anim-port w-full lg:w-7/12">
            <div className="bg-background rounded-2xl p-6 sm:p-8 md:p-10 border border-border shadow-xs flex flex-col sm:flex-row gap-4 sm:gap-8 items-start">
              
              {/* Ikon Kutipan (Quote) */}
              <div className="shrink-0">
                <QuoteIcon className="w-10 h-10 md:w-12 md:h-12 text-primary fill-primary rotate-180" />
              </div>

              {/* Konten Ulasan & Navigasi */}
              <div className="flex-1 flex flex-col justify-between w-full min-w-0">
                <p
                  key={`text-${currentReview.id}`}
                  className="text-text-primary text-base md:text-lg font-medium leading-relaxed mb-8 animate-in fade-in duration-300"
                >
                  &ldquo;{currentReview.text}&rdquo;
                </p>

                <div className="flex items-center justify-between gap-4 mt-auto">
                  {/* Profil Pengguna */}
                  <div
                    key={`author-${currentReview.id}`}
                    className="flex items-center gap-3.5 animate-in fade-in duration-300"
                  >
                    <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-primary">
                        {currentReview.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm md:text-base text-text-primary leading-snug">
                        {currentReview.name}
                      </h4>
                      <p className="text-xs text-text-secondary">
                        {currentReview.date}
                      </p>
                    </div>
                  </div>

                  {/* Tombol Navigasi (Panah) */}
                  <div className="flex items-center gap-2.5 shrink-0">
                    <button
                      onClick={handlePrev}
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-pointer"
                      aria-label="Ulasan sebelumnya"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-pointer"
                      aria-label="Ulasan selanjutnya"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

