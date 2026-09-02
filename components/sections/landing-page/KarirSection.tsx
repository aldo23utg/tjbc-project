'use client';

import { buttonVariants } from '@/components/ui/button';

export default function KarirSection() {
  return (
    <section id="karir" className="py-8 md:py-10 bg-background">
      <div className="relative flex flex-col items-center justify-center max-w-5xl mx-auto text-center px-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="hidden sm:block w-8 h-0.5 rounded-full bg-primary" />
          <h3 className="text-text-primary m-0">Bergabung Bersama Kami</h3>
          <span className="hidden sm:block w-8 h-0.5 rounded-full bg-primary" />
        </div>

        <p className="font-tertiary text-sm leading-relaxed text-text-secondary max-w-2xl mx-auto mb-6">
          Kami selalu mencari individu yang berdedikasi, tanggap, dan memiliki
          komitmen tinggi terhadap kualitas pelayanan. Jika Anda memiliki semangat
          untuk menciptakan lingkungan yang bersih, aman, dan nyaman, jadilah
          bagian dari tim profesional kami.
        </p>

        <a 
          href="#" 
          className={buttonVariants({ className: "rounded-full shadow-md shadow-primary/20 px-6 h-10 text-sm hover:scale-105 transition-transform" })}
        >
          Informasi Selengkapnya
        </a>
      </div>
    </section>
  );
}
