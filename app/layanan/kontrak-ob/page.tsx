import type { Metadata } from 'next';
import KontrakObForm from '@/components/sections/Layanan/KontrakObForm';

export const metadata: Metadata = {
  title: 'Kontrak Office Boy / Girl — PT Tunas Jaya Bersinar Cemerlang (TJBC)',
  description:
    'Ajukan kontrak Office Boy / Girl dengan rincian durasi, jumlah lantai, ruangan, dan jumlah personel.',
};

export default function KontrakObPage() {
  return <KontrakObForm />;
}
