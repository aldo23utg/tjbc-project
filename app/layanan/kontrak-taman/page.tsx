import type { Metadata } from 'next';
import KontrakTamanForm from '@/components/sections/Layanan/KontrakTamanForm';

export const metadata: Metadata = {
  title: 'Kontrak Perawatan Taman — PT Tunas Jaya Bersinar Cemerlang (TJBC)',
  description:
    'Ajukan kontrak perawatan taman dengan detail luas area, durasi, jumlah pekerja, dan foto lokasi.',
};

export default function KontrakTamanPage() {
  return <KontrakTamanForm />;
}
