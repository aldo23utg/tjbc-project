'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, TreePine, ShieldCheck } from 'lucide-react';
import { ServiceCard } from '@/components/layout/ServiceCard';

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
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    
    // Center position of the scroll container
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    
    let closestIndex = 0;
    let minDistance = Infinity;
    
    // Find the child closest to the center
    Array.from(container.children).forEach((child, index) => {
      const childElement = child as HTMLElement;
      // Center position of the child relative to the scroll container
      const childCenter = childElement.offsetLeft + childElement.clientWidth / 2;
      
      const distance = Math.abs(childCenter - containerCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });
    
    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  const scrollTo = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const children = Array.from(container.children) as HTMLElement[];
    if (children[index]) {
      const child = children[index];
      const scrollPos = child.offsetLeft - (container.clientWidth - child.clientWidth) / 2;
      container.scrollTo({ left: scrollPos, behavior: 'smooth' });
      setActiveIndex(index);
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

        <div className="anim-layanan w-full relative">
          {/* Cards */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="mt-12 flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 snap-x snap-mandatory sm:snap-none pb-4 sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-[10vw] sm:px-0"
          >
          {layananData.map((item, idx) => (
            <ServiceCard
              key={item.number}
              className={`w-[80vw] sm:w-auto shrink-0 snap-center snap-always sm:snap-align-none transition-all duration-300 ease-in-out ${activeIndex === idx ? 'scale-100 opacity-100' : 'scale-[0.85] opacity-50 sm:scale-100 sm:opacity-100'}`}
              number={item.number}
              icon={item.icon}
              title={item.judul}
              copy={item.deskripsi}
            />
          ))}
        </div>

          {/* Mobile Navigation Dots */}
          <div className="flex sm:hidden justify-center items-center gap-2 mt-6">
            {layananData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-6 bg-primary' : 'w-2 bg-border'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
