import HeroSection from '@/components/sections/landing-page/HeroSection';
import VisiMisiSection from '@/components/sections/landing-page/VisiMisiSection';
import LayananSection from '@/components/sections/landing-page/LayananSection';
import PortofolioSection from '@/components/sections/landing-page/PortofolioSection';
import KarirSection from '@/components/sections/landing-page/KarirSection';
import ContactSection from '@/components/sections/landing-page/ContactSection';

export default function LandingPage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <VisiMisiSection />
      <LayananSection />
      <PortofolioSection />
      <KarirSection />
      <ContactSection />

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40 group">
        <a
          href="https://wa.me/6281294007820"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Konsultasi via WhatsApp TJBC"
          className="inline-flex items-center gap-3 px-4 py-3 rounded-sm border border-light-border dark:border-dark-border bg-deep-navy text-on-deep-navy transition-colors duration-state-change hover:bg-brand-blue"
        >
          <svg
            className="w-5 h-5 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <path
              d="M20 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-4.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="hidden md:inline-block max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-state-change font-mono text-mono-sm uppercase">
            WhatsApp Kami
          </span>
        </a>
      </div>
    </main>
  );
}
