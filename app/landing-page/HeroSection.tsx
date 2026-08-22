'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ShieldCheck, Award, Zap, CalendarClock, Briefcase } from 'lucide-react';

const features = [
  { icon: ShieldCheck, label: 'Terpercaya' },
  { icon: Award, label: 'Berkualitas' },
  { icon: Zap, label: 'Cepat' },
  { icon: CalendarClock, label: 'Fleksibel' },
  { icon: Briefcase, label: 'Professional' },
];

export default function HeroSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.anim-hero', {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      delay: 0.2,
    });
  }, { scope: container });

  return (
    <section ref={container} className="px-6 pt-32 pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* --- Sisi Kiri: Gambar --- */}
        <div className="anim-hero flex-1 w-full max-w-lg lg:max-w-none">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
            <Image
              src="/hero-team.png"
              alt="Tim profesional PT Tunas Jaya Bersinar Cemerlang"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay gradien halus */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
          </div>
          
          {/* --- Fitur Tambahan --- */}
          <div className="anim-hero mt-8 flex flex-nowrap justify-between items-start gap-2 md:gap-4 w-full overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center flex-1 min-w-[60px] md:min-w-[0]">
                <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary mb-2 md:mb-3" strokeWidth={1.5} />
                <span className="text-[10px] sm:text-xs md:text-base font-semibold text-text-primary text-center leading-tight">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* --- Sisi Kanan: Teks --- */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="anim-hero text-text-primary mb-6">
            Outsourcing Profesional & Layanan Kebersihan
          </h2>
          <p className="anim-hero body-text text-text-secondary max-w-xl mb-4 mx-auto lg:mx-0">
            Didirikan pada Agustus 2007, PT. Tunas Jaya Bersinar Cemerlang berkomitmen
            menghadirkan standar baru dalam industri Outsourcing dan Cleaning Service
            dengan menyeimbangkan keahlian teknis (hard skill) dan kekuatan karakter
            (soft skill).
          </p>
          <p className="anim-hero body-text text-text-secondary max-w-xl mb-10 mx-auto lg:mx-0">
            Di tengah persaingan industri, kami memastikan setiap personil dibekali
            pelatihan intensif agar memiliki etika kerja, integritas, dan tanggung jawab
            yang tinggi. Sebagai mitra strategis, Tunas Jaya siap memberikan layanan
            profesional yang mendukung operasional serta menciptakan lingkungan kerja
            yang bersih, asri, dan kondusif bagi pertumbuhan perusahaan Anda.
          </p>
          <div className="anim-hero flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#kontak"
              className="btn-text text-sm bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary-hover transition-all shadow-lg shadow-primary/25 text-center"
            >
              Hubungi Kami
            </a>
            <a
              href="#layanan"
              className="btn-text text-sm border-2 border-primary text-primary px-6 py-2.5 rounded-full hover:bg-primary hover:text-white transition-all text-center"
            >
              Layanan Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
