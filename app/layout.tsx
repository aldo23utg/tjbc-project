import type { Metadata } from 'next';
import { Open_Sans, Source_Sans_3, Maven_Pro } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScroller from '@/components/layout/SmoothScroller';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const openSans = Open_Sans({ 
  subsets: ['latin'], 
  variable: '--font-open-sans' 
});

const sourceSans = Source_Sans_3({ 
  subsets: ['latin'], 
  variable: '--font-source-sans' 
});

const mavenPro = Maven_Pro({ 
  subsets: ['latin'], 
  variable: '--font-maven-pro' 
});

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
    <html lang="id" suppressHydrationWarning>
      <body className={`${openSans.variable} ${sourceSans.variable} ${mavenPro.variable} font-sans antialiased`}>
        <ThemeProvider defaultTheme="system">
          <SmoothScroller>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroller>
        </ThemeProvider>
      </body>
    </html>
  );
}