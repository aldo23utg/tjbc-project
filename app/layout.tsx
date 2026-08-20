import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScroller from '@/components/layout/SmoothScroller';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PT Tunas Jaya Bersinar Cemerlang',
  description: 'Layanan kebersihan profesional untuk Anda.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-white text-slate-800 antialiased`}>
        <SmoothScroller>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroller>
      </body>
    </html>
  );
}