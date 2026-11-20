import type { Metadata } from 'next';
import KontrakSatpamForm from '@/components/sections/Layanan/KontrakSatpamForm';

export const metadata: Metadata = {
  title: 'Kontrak Satpam (Security) — PT Tunas Jaya Bersinar Cemerlang (TJBC)',
  description:
    'Ajukan kontrak Satpam bersertifikat dengan spesifikasi objek pengamanan, pos jaga, pola shift, dan jumlah personel.',
};

export default function KontrakSatpamPage() {
  return <KontrakSatpamForm />;
}
