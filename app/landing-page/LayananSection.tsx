'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, TreePine, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { ServiceCard } from '@/components/layout/ServiceCard';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const layananData = [
  {
    number: "01",
    icon: Sparkles,
    judul: 'General Cleaning',
    deskripsi:
      'General Cleaning merupakan program pembersihan mendalam yang berfokus pada elemen-elemen yang tidak tersentuh oleh perawatan harian biasa. Meliputi proses deep cleaning, sterilisasi, dan penanganan noda membandel, layanan ini memastikan fasilitas bisnis maupun hunian Anda kembali bersih, representatif, dan aman.',
  },
  {
    number: "02",
    icon: TreePine,
    judul: 'Perawatan Taman',
    deskripsi:
      'Layanan pemeliharaan area luar yang mencakup pembersihan total lahan, pemangkasan dahan, pengendalian gulma, serta manajemen sampah kebun. Kami merestorasi dan merawat taman Anda dengan standar kebersihan tinggi agar tetap sehat dan tertata rapi.',
  },
  {
    number: "03",
    icon: ShieldCheck,
    judul: 'Perusahaan Alih Daya (Outsourcing)',
    deskripsi:
      'Solusi alih daya tenaga kerja profesional untuk mendukung kelancaran operasional Anda. Kami menyalurkan tenaga keamanan bersertifikat dan pengemudi berpengalaman yang siap memberikan perlindungan serta pelayanan mobilitas terbaik.',
  },
];

export default function LayananSection() {
  const container = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useGSAP(() => {
    gsap.fromTo('.anim-layanan', 
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
        },
      }
    );
  }, { scope: container });

  return (
    <section ref={container} id="layanan" className="flex w-full items-center justify-center bg-background px-6 py-12 md:py-16 text-text-primary">
      <div className="mx-auto w-full max-w-7xl">
        {/* Heading */}
        <div className="anim-layanan text-center mb-14">
          <h2 className="text-text-primary mb-4">Layanan Kami</h2>
          <p className="body-text text-text-secondary max-w-2xl mx-auto">
            Solusi lengkap untuk kebutuhan kebersihan dan operasional perusahaan Anda.
          </p>
        </div>

        {/* Cards */}
        <div 
          ref={scrollContainerRef}
          className="mt-12 flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 snap-x snap-mandatory sm:snap-none pb-4 sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {layananData.map((item, idx) => (
            <ServiceCard
              key={item.number}
              className="w-[85vw] sm:w-auto shrink-0 snap-center sm:snap-align-none"
              number={item.number}
              icon={item.icon}
              title={item.judul}
              copy={item.deskripsi}
            />
          ))}
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="flex sm:hidden justify-center gap-4 mt-6">
          <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-primary/20 text-primary hover:bg-primary hover:text-white" onClick={scrollLeft} aria-label="Scroll left">
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-primary/20 text-primary hover:bg-primary hover:text-white" onClick={scrollRight} aria-label="Scroll right">
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
