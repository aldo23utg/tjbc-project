import type { Metadata } from 'next';
import LamarPosisi from '@/components/sections/LamarPosisi';

export const metadata: Metadata = {
  title: 'Lamar Posisi — PT Tunas Jaya Bersinar Cemerlang (TJBC)',
  description:
    'Lengkapi data diri dan unggah CV untuk melamar posisi terbuka di PT Tunas Jaya Bersinar Cemerlang.',
};

interface LamarPageProps {
  searchParams: Promise<{ posisi?: string | string[] }>;
}

export default async function LamarPage({ searchParams }: LamarPageProps) {
  const params = await searchParams;
  const posisiParam = Array.isArray(params.posisi) ? params.posisi[0] : params.posisi;
  const initialRole = posisiParam || 'Petugas Kebersihan Profesional (OPS-01)';

  return <LamarPosisi initialRole={initialRole} />;
}
