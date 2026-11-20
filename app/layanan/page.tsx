import type { Metadata } from 'next';
import Layanan from '@/components/sections/Layanan';

export const metadata: Metadata = {
  title: 'Layanan — PT Tunas Jaya Bersinar Cemerlang (TJBC)',
  description:
    'Tujuh layanan terstandar PT Tunas Jaya Bersinar Cemerlang untuk gedung, hunian, perawatan taman, dan kontrak tenaga kerja.',
};

export default function LayananPage() {
  return (
    <main className="flex-1 flex flex-col">
      <Layanan />
    </main>
  );
}
