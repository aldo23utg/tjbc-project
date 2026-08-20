'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
// 1. Import komponen Karir yang baru dibuat
import Karir from '@/components/sections/Karir'; 

export default function Home() {
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
    <main ref={container} className="min-h-screen pt-32">
      {/* --- HERO SECTION KITA SEBELUMNYA --- */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center mt-20">
          <h1 className="anim-hero text-5xl md:text-7xl font-extrabold text-blue-800 tracking-tight leading-tight mb-6">
            Solusi Kebersihan <br /> Terpercaya Anda.
          </h1>
          <p className="anim-hero text-lg text-gray-500 max-w-2xl mb-10 leading-relaxed">
            Kami memberikan layanan kebersihan B2B dan B2C dengan standar tertinggi untuk menciptakan lingkungan yang sehat, bersih, dan nyaman bagi semua orang.
          </p>
          <div className="anim-hero flex gap-4">
            <button className="bg-blue-800 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-900 transition-all shadow-lg shadow-blue-800/30">
              Pesan Layanan
            </button>
          </div>
        </div>
      </section>

      {/* --- SECTION KARIR --- */}
      {/* 2. Letakkan komponen di sini */}
      <Karir />
      
    </main>
  );
}