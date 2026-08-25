'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    
    let closestIndex = 0;
    let minDistance = Infinity;
    
    Array.from(container.children).forEach((child, index) => {
      const childElement = child as HTMLElement;
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
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const children = Array.from(container.children) as HTMLElement[];
    if (children[index]) {
      const child = children[index];
      const scrollPos = child.offsetLeft - (container.clientWidth - child.clientWidth) / 2;
      container.scrollTo({ left: scrollPos, behavior: 'smooth' });
      setActiveIndex(index);
    }
  };

  useGSAP(() => {
    gsap.fromTo('.anim-port', 
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

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <section ref={container} id="portofolio" className="w-full bg-background py-12 md:py-16 text-text-primary overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6">
        
        {/* --- Header Atas --- */}
        {/* <div className="anim-port text-center mb-16 md:mb-20">
          <h2 className="text-text-primary text-3xl md:text-5xl font-bold mb-5 tracking-tight leading-tight">
            Baca ulasan, <br className="hidden md:block" />
            bekerja dengan tenang.
          </h2>
          <div className="flex items-center justify-center gap-2 text-text-secondary text-sm md:text-base font-medium">
            <span>5.0/5</span>
            <Star className="w-5 h-5 fill-success text-success" />
            <span className="font-bold text-text-primary">Tunas Jaya</span>
            <span>Berdasarkan 150+ ulasan</span>
          </div>
        </div> */}

        {/* --- Layout Utama (Kiri Teks, Kanan Slider) --- */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center">
          
          {/* Sisi Kiri */}
          <div className="anim-port w-full lg:w-1/3 flex flex-col justify-center">
            <Quote className="w-16 h-16 text-border mb-4 md:mb-6 fill-border" />
            <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-2 md:mb-10 leading-snug">
              Apa kata <br className="hidden lg:block"/> pelanggan kami
            </h3>
            
            {/* Navigasi (Panah) */}
            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={scrollLeft}
                className="p-2 hover:bg-border/50 rounded-full transition-colors text-text-primary cursor-pointer"
                aria-label="Previous review"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              {/* Progress Line */}
              <div className="h-[2px] w-20 bg-border relative">
                <div className="absolute top-0 left-1/4 h-full w-1/2 bg-text-primary rounded-full" />
              </div>
              <button 
                onClick={scrollRight}
                className="p-2 hover:bg-border/50 rounded-full transition-colors text-text-primary cursor-pointer"
                aria-label="Next review"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Sisi Kanan: Slider Card */}
          <div className="anim-port w-full lg:w-2/3 relative min-w-0">
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-3 md:gap-6 overflow-x-auto snap-x snap-mandatory md:snap-none pb-8 pt-4 px-[10vw] md:px-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {reviews.map((review, idx) => (
                <div 
                  key={review.id} 
                  className={`w-[80vw] md:w-[380px] shrink-0 snap-center snap-always md:snap-align-none flex flex-col transition-all duration-300 ease-in-out ${activeIndex === idx ? 'scale-100 opacity-100' : 'scale-[0.85] opacity-50 md:scale-100 md:opacity-100'}`}
                >
                  {/* Bubble Ulasan */}
                  <div className="bg-background rounded-3xl p-8 shadow-sm relative mb-6 border border-border/50">
                    <p className="text-text-secondary text-sm md:text-base mb-8 leading-relaxed min-h-[140px] md:min-h-[120px]">
                      {review.text}
                    </p>
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-success text-success" />
                      ))}
                    </div>
                    {/* Buntut (Tail) Bubble */}
                    <svg 
                      className="absolute -bottom-[14px] left-8 w-6 h-4 text-background drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)]" 
                      viewBox="0 0 24 16" 
                      fill="currentColor"
                    >
                      <path d="M0 0h24L0 16V0z" />
                    </svg>
                  </div>
                  
                  {/* Profil Pengguna */}
                  <div className="flex items-center gap-4 pl-4">
                    <div className="w-12 h-12 rounded-full bg-border flex items-center justify-center shrink-0">
                      <span className="text-base font-semibold text-text-secondary">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="card-title text-sm m-0 text-text-primary mb-0.5">
                        {review.name}
                      </h4>
                      <p className="text-xs font-medium text-text-secondary">
                        {review.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Navigation Dots */}
            <div className="flex md:hidden justify-center items-center gap-2 mt-2">
              {reviews.map((_, idx) => (
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
      </div>
    </section>
  );
}
