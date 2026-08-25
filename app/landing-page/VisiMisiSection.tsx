'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const misiItems = [
  'Mewujudkan sistem kerja yang sistematis dan mantap sehingga mampu menghasilkan sumber daya manusia yang berkualitas.',
  'Memberikan hasil yang berkualitas serta pelayanan yang memuaskan dengan harga yang terjangkau.',
  'Mewujudkan keseimbangan yang harmonis antara pimpinan dan karyawan sehingga tercipta komunikasi yang terarah dan kerjasama tim yang baik.',
  'Mewujudkan kesejahteraan para karyawan sehingga meningkatkan motivasi dan loyalitas kerja.',
  'Melatih karyawan untuk memiliki mental yang tangguh, disiplin, jujur, sopan, ramah, berpenampilan rapi dan bersih, serta kreatif dan inovatif.',
];

export default function VisiMisiSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.anim-visi', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
    });
  }, { scope: container });

  return (
    <section ref={container} id="tentang" className="px-6 py-16 md:py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* --- Visi --- */}
          <div className="anim-visi lg:col-span-5 bg-primary/5 p-8 md:p-10 rounded-3xl border border-primary/10 lg:sticky lg:top-32">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-1 rounded-full bg-primary" />
              <h2 className="text-text-primary text-2xl md:text-3xl">Visi Kami</h2>
            </div>
            <p className="text-lg md:text-xl font-medium text-text-primary leading-relaxed">
              "Menjadi Perusahaan Outsourcing & Cleaning Service yang terbaik
              dengan menciptakan tenaga kerja yang berakhlak, berkualitas,
              bertanggung jawab & selalu mengutamakan kepuasan pelanggan."
            </p>
          </div>

          {/* --- Misi --- */}
          <div className="lg:col-span-7 mt-8 lg:mt-0">
            <div className="anim-visi flex items-center gap-3 mb-8">
              <span className="w-10 h-1 rounded-full bg-primary" />
              <h2 className="text-text-primary text-2xl md:text-3xl">Misi Kami</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
              {misiItems.map((item, idx) => (
                <div key={idx} className="anim-visi flex gap-4 items-start">
                  <span className="btn-text text-primary text-lg mt-0.5 shrink-0 opacity-90 font-bold">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  <p className="body-text text-text-secondary text-sm md:text-base leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
