import type { Metadata } from 'next';
import KontrakSupirForm from '@/components/sections/Layanan/KontrakSupirForm';

export const metadata: Metadata = {
  title: 'Kontrak Supir Perusahaan — PT Tunas Jaya Bersinar Cemerlang (TJBC)',
  description:
    'Ajukan kontrak pengemudi perusahaan dengan pilihan kategori, SIM wajib, transmisi armada, dan jumlah supir.',
};

export default function KontrakSupirPage() {
  return <KontrakSupirForm />;
}
