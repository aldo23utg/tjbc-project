'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const APP_EMAIL = 'tunasjayaclean@gmail.com';
const APP_PHONE = '081235188282';
const APP_PHONE_2 = '081331733891';

function CopyItem({ value, href }: { value: string; href: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <div className="flex items-center gap-3 group">
      <a 
        href={href} 
        className="text-lg font-semibold text-text-primary hover:text-primary transition-colors"
      >
        {value}
      </a>
      <button 
        onClick={handleCopy} 
        className="p-1.5 rounded-md text-text-secondary bg-surface border border-border shadow-sm hover:text-primary hover:bg-primary/5 transition-colors"
        title="Salin otomatis"
      >
        {copied ? <Check className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section id="kontak" className="w-full bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-text-primary mb-12 md:mb-16">
          Hubungi Kami
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          
          {/* Kolom 1: Alamat & Map */}
          <div className="flex flex-col">
            <h3 className="text-text-primary mb-6">Alamat</h3>
            <p className="body-text text-text-secondary mb-8">
              Perum Bumi Suko Indah D2/81<br />
              Sidoarjo - 61224
            </p>
            
            {/* Map disisipkan di bawah teks alamat */}
            <div className="w-full h-56 md:h-64 rounded-xl overflow-hidden bg-surface border border-border relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.2428585444743!2d112.69539307410292!3d-7.438379673286377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e1554589d97d%3A0xc3cfd713c4c1a79!2sPerumahan%20Bumi%20Suko%20Indah!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
                className="w-full h-full border-0 transition-all duration-500" 
                loading="lazy" 
              />
            </div>
          </div>

          {/* Kolom 2: Kontak Telepon & Email */}
          <div className="flex flex-col">
            <h3 className="text-text-primary mb-6">Kontak</h3>
            
            <div className="mb-6">
              <p className="text-sm text-text-secondary mb-1">Email Perusahaan</p>
              <CopyItem value={APP_EMAIL} href={`mailto:${APP_EMAIL}`} />
            </div>
            
            <div className="mb-6">
              <p className="text-sm text-text-secondary mb-1">Telepon</p>
              <div className="flex flex-col gap-2">
                <CopyItem value={APP_PHONE} href={`tel:${APP_PHONE}`} />
                <CopyItem value={APP_PHONE_2} href={`tel:${APP_PHONE_2}`} />
              </div>
            </div>
          </div>

          {/* Kolom 3: Jam Kerja */}
          <div className="flex flex-col">
            <h3 className="text-text-primary mb-6">Jam Kerja</h3>
            
            <div className="mb-6">
              <p className="text-sm text-text-secondary mb-1">Senin - Sabtu:</p>
              <div className="flex items-center gap-4 text-lg font-medium text-text-primary">
                <span>08:00</span>
                <div className="flex-1 h-px bg-border" />
                <span>16:00</span>
              </div>
            </div>
            
            <div className="mb-10">
              <p className="text-sm text-text-secondary mb-1">Minggu:</p>
              <div className="flex items-center gap-4 text-lg font-medium text-text-primary opacity-60">
                <span>Tutup</span>
                <div className="flex-1 h-px bg-border" />
                <span>Tutup</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
