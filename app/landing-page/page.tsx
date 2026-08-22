import HeroSection from './HeroSection';
import VisiMisiSection from './VisiMisiSection';
import LayananSection from './LayananSection';
import KarirSection from './KarirSection';
import ContactSection from './ContactSection';
import PortofolioSection from './PortofolioSection';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      {/* <VisiMisiSection /> */}
      <LayananSection />
      <PortofolioSection />
      <KarirSection />
      <ContactSection />
    </main>
  );
}
