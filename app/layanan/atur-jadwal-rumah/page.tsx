import type { Metadata } from 'next';
import AturJadwalRumahForm from '@/components/sections/Layanan/AturJadwalRumahForm';

export const metadata: Metadata = {
  title: 'Atur Jadwal Pembersihan Rumah — PT Tunas Jaya Bersinar Cemerlang (TJBC)',
  description:
    'Atur jadwal General Cleaning residensial untuk seluruh rumah atau ruangan tertentu.',
};

export default function AturJadwalRumahPage() {
  return <AturJadwalRumahForm />;
}
