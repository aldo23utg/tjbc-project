import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LayoutShell from '@/components/layout/LayoutShell';
import SmoothScroller from '@/components/layout/SmoothScroller';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-plus-jakarta-sans',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'PT Tunas Jaya Bersinar Cemerlang (TJBC) — Kebersihan, Pertamanan & Alih Daya Korporat',
  description:
    'PT Tunas Jaya Bersinar Cemerlang membantu institusi, perkantoran, dan kawasan komersial menjaga operasional harian tetap higienis, asri, dan tertata.',
};

const themeInitScript = `
(function () {
  var pref = 'system';
  try {
    pref = localStorage.getItem('tjbc-theme') || 'system';
  } catch (e) {}
  var isDark = pref === 'dark' || (pref === 'system' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} ${jetbrainsMono.variable} bg-light-surface dark:bg-dark-surface text-light-on-surface dark:text-dark-on-surface font-body antialiased selection:bg-light-primary selection:text-light-on-primary`}
      >
        <ThemeProvider defaultTheme="system">
          <SmoothScroller>
            <LayoutShell navbar={<Navbar />} footer={<Footer />}>
              {children}
            </LayoutShell>
          </SmoothScroller>
        </ThemeProvider>
      </body>
    </html>
  );
}
