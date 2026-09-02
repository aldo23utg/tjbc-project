# TJBC Project Guide

Dokumen ini berisi panduan utama dan aturan baku untuk pengembangan proyek TJBC. Seluruh pengembang dan AI assistant **wajib** mematuhi aturan-aturan berikut tanpa terkecuali.

## 1. Teknologi Inti (Tech Stack)
Pengembangan proyek ini **sangat dibatasi** hanya pada teknologi berikut:
- **Next.js** (App Router)
- **TailwindCSS** (v4)
- **GSAP** (untuk semua jenis animasi)
- **Lenis** (untuk fitur smooth scrolling)

> **Peringatan:** DILARANG KERAS menginstal atau menggunakan library tambahan untuk UI, styling, atau animasi seperti `framer-motion`, `lucide-react`, `radix-ui`, `next-themes`, `class-variance-authority`, `clsx`, `tailwind-merge`, dll. Jika membutuhkan fitur tersebut, buat implementasi kustom menggunakan React, TypeScript, dan Tailwind murni.

## 2. Styling (Theme & Typography)
Semua warna tema (theme color) dan tipografi (typography) **hanya boleh** menggunakan variabel yang telah didefinisikan di dalam file:
- `app/globals.css`

Jangan menggunakan utility class warna bawaan Tailwind secara acak (seperti `text-blue-500` atau `bg-red-400`). Gunakan variabel CSS atau custom utilities yang sudah disiapkan di `globals.css` (misal: `bg-primary`, `text-text-secondary`, dsb).

## 3. Struktur Direktori (Architecture)
Proyek ini menggunakan pembagian direktori yang ketat untuk menjaga kerapian kode. Berikut adalah penempatan file yang diwajibkan:

- **Halaman (Pages)**
  Semua file routing dan halaman utama (termasuk `page.tsx`, `layout.tsx`) harus dibuat di dalam:
  👉 `app/`

- **Komponen UI Dasar (UI Components)**
  Semua komponen UI dasar yang sifatnya modular dan reusable (seperti Button, Badge, Card, ThemeToggle, custom Icons) harus dibuat di dalam:
  👉 `components/ui/`

- **Komponen Layout (Layout Components)**
  Semua komponen yang membentuk kerangka utama tata letak halaman (seperti Navbar, Footer, Wrapper, SmoothScroller, ServiceCard umum) harus dibuat di dalam:
  👉 `components/layout/`

- **Komponen Bagian Halaman (Section Components)**
  Semua komponen yang merupakan *section* atau bagian besar dari sebuah halaman (seperti HeroSection, LayananSection, PortofolioSection, dsb) harus dibuat di dalam:
  👉 `components/sections/`

---
*Dokumen ini dibuat untuk memastikan konsistensi kode dan performa aplikasi yang optimal.*
