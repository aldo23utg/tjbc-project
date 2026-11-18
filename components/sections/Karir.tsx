'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button, buttonVariants } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { BroomIcon, ShieldHalfIcon, TruckIcon, IconComponent } from '@/components/ui/icons';

gsap.registerPlugin(ScrollTrigger);

interface JobOpening {
  id: number;
  title: string;
  category: string;
  description: string;
  badges: string[];
  icon: IconComponent;
}

const jobOpenings: JobOpening[] = [
  {
    id: 1,
    title: 'Petugas Kebersihan Profesional',
    category: 'Manajemen Fasilitas',
    description:
      'Bertanggung jawab menjaga standar kebersihan dan sanitasi tingkat tinggi di lingkungan perkantoran korporat premium.',
    badges: ['Penuh Waktu', 'Berbagai Lokasi'],
    icon: BroomIcon,
  },
  {
    id: 2,
    title: 'Petugas Keamanan (Security)',
    category: 'Layanan Keamanan',
    description:
      'Memastikan keamanan, ketertiban, dan keselamatan lingkungan kerja serta aset bagi mitra korporat kami.',
    badges: ['Penuh Waktu', 'Sistem Shift'],
    icon: ShieldHalfIcon,
  },
  {
    id: 3,
    title: 'Pengemudi Eksekutif',
    category: 'Logistik & Transportasi',
    description:
      'Memberikan layanan mobilitas yang aman, tepat waktu, dan profesional untuk jajaran eksekutif perusahaan.',
    badges: ['Kontrak', 'Jakarta Pusat'],
    icon: TruckIcon,
  },
];

export default function Karir() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.anim-karir-hero', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.1,
    });

    gsap.from('.anim-karir-jobs', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#lowongan',
        start: 'top 80%',
      },
    });
  }, { scope: container });

  return (
    <div ref={container} className="w-full min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
          <h1 className="anim-karir-hero text-text-primary text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            Bergabung Bersama <br />
            Tim Kami
          </h1>
          <p className="anim-karir-hero body-text text-text-secondary text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Kami percaya bahwa sumber daya manusia adalah aset terbesar kami. Kami mencari individu berdedikasi yang memiliki komitmen sama terhadap keunggulan, integritas, dan pelayanan terbaik.
          </p>
          <div className="anim-karir-hero">
            <a
              href="#lowongan"
              className={buttonVariants({
                size: 'lg',
                className: 'rounded-xl px-8 h-12 font-semibold shadow-sm',
              })}
            >
              Lihat Lowongan
            </a>
          </div>
        </div>
      </section>

      {/* Lowongan Terbuka Section */}
      <section id="lowongan" className="w-full py-16 md:py-24 bg-surface/60">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Lowongan */}
          <div className="anim-karir-jobs text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-text-primary text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Lowongan Terbuka
            </h2>
            <p className="body-text text-text-secondary text-sm sm:text-base">
              Temukan posisi yang sesuai untuk berkembang bersama penyedia layanan fasilitas dan alih daya terkemuka.
            </p>
          </div>

          {/* Grid Lowongan Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {jobOpenings.map((job) => {
              const Icon = job.icon;
              return (
                <Card
                  key={job.id}
                  className="anim-karir-jobs bg-background border-border/60 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between rounded-2xl p-2"
                >
                  <div>
                    <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-4">
                      <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center shrink-0 text-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col">
                        <CardTitle className="text-lg md:text-xl font-bold leading-snug text-text-primary">
                          {job.title}
                        </CardTitle>
                        <CardDescription className="text-xs md:text-sm text-text-secondary mt-0.5">
                          {job.category}
                        </CardDescription>
                      </div>
                    </CardHeader>

                    <CardContent className="pb-6">
                      <p className="body-text text-text-secondary text-sm md:text-base leading-relaxed mb-6">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {job.badges.map((badge, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-primary-container text-on-primary-container hover:bg-primary-container/80 font-semibold text-xs px-3 py-1 border-0"
                          >
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>

                  <CardFooter className="pt-0">
                    <Button
                      variant="outline"
                      className="w-full rounded-xl border-primary/50 text-primary font-semibold hover:bg-primary hover:text-white transition-colors h-11 cursor-pointer"
                    >
                      Lamar Sekarang
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

