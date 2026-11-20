import type { Metadata } from 'next';
import AturJadwalForm from '@/components/sections/Layanan/AturJadwalForm';

export const metadata: Metadata = {
  title: 'Atur Jadwal Pembersihan — PT Tunas Jaya Bersinar Cemerlang (TJBC)',
  description:
    'Atur jadwal General Cleaning cakupan kecil berdasarkan lantai gedung atau ruangan spesifik.',
};

export default function AturJadwalPage() {
  return <AturJadwalForm />;
}
