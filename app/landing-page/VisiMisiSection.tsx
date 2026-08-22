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
    <section ref={container} id="tentang" className="px-6 py-16 md:py-20">
      <div className="max-w-5xl mx-auto">
        {/* --- Visi --- */}
        <div className="anim-visi mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-1 rounded-full bg-primary" />
            <h2 className="text-text-primary text-2xl md:text-3xl">Visi</h2>
          </div>
          <p className="body-text text-text-secondary max-w-3xl leading-relaxed">
            Menjadi Perusahaan Outsourcing &amp; Cleaning Service yang terbaik
            dengan menciptakan tenaga kerja yang berakhlak, berkualitas,
            bertanggung jawab &amp; selalu mengutamakan kepuasan pelanggan.
          </p>
        </div>

        {/* --- Misi --- */}
        <div className="anim-visi">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-1 rounded-full bg-primary" />
            <h2 className="text-text-primary text-2xl md:text-3xl">Misi</h2>
          </div>
          <ol className="space-y-4 max-w-3xl">
            {misiItems.map((item, idx) => (
              <li key={idx} className="anim-visi flex gap-4 items-start">
                <span className="btn-text text-primary mt-0.5 shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <p className="body-text text-text-secondary">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
