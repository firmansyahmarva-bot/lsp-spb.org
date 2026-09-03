'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { waIntentUrl } from '@/src/lib/site';

export function StickyCta() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Contextualize CTA message based on URL
  let intent: 'jadwal' | 'biaya' | 'syarat' | 'perusahaan' | 'daftar' | 'kemnaker_bnsp' = 'jadwal';
  let ctaText = 'Tanya Jadwal & Biaya';
  let contextName = 'Pelatihan K3';

  if (pathname.includes('/syarat')) {
    intent = 'syarat';
    ctaText = 'Konsultasi Syarat Berkas';
    contextName = 'Syarat Ahli K3 Umum';
  } else if (pathname.includes('/biaya')) {
    intent = 'biaya';
    ctaText = 'Minta Estimasi Biaya';
    contextName = 'Biaya Pelatihan K3';
  } else if (pathname.includes('/bnsp-vs-kemnaker')) {
    intent = 'kemnaker_bnsp';
    ctaText = 'Tanya Jalur BNSP / Kemnaker';
    contextName = 'Perbandingan BNSP vs Kemnaker';
  } else if (pathname.includes('/materi')) {
    intent = 'jadwal';
    ctaText = 'Tanya Silabus & Jadwal';
    contextName = 'Materi Ahli K3 Umum';
  } else if (pathname.includes('/tugas')) {
    intent = 'daftar';
    ctaText = 'Tanya Lisensi Ahli K3';
    contextName = 'Tugas Ahli K3 Umum';
  } else if (pathname.startsWith('/pelatihan/')) {
    intent = 'jadwal';
    const slug = pathname.replace('/pelatihan/', '');
    contextName = slug.replace(/-/g, ' ');
    ctaText = 'Tanya Jadwal & Kuota';
  } else if (pathname.startsWith('/kompetensi/')) {
    intent = 'syarat';
    const slug = pathname.replace('/kompetensi/', '');
    contextName = slug.replace(/-/g, ' ');
    ctaText = 'Konsultasi Uji BNSP';
  } else if (pathname.startsWith('/profesi/')) {
    intent = 'daftar';
    const slug = pathname.replace('/profesi/', '');
    contextName = slug.replace(/-/g, ' ');
    ctaText = 'Tanya Sertifikasi Profesi';
  } else if (pathname.startsWith('/industri/')) {
    intent = 'perusahaan';
    const slug = pathname.replace('/industri/', '');
    contextName = slug.replace(/-/g, ' ');
    ctaText = 'Konsultasi In-House K3';
  } else if (pathname.startsWith('/regulasi-k3/')) {
    intent = 'perusahaan';
    const slug = pathname.replace('/regulasi-k3/', '');
    contextName = slug.replace(/-/g, ' ');
    ctaText = 'Konsultasi Kepatuhan K3';
  } else if (pathname.startsWith('/alat/')) {
    intent = 'perusahaan';
    const slug = pathname.replace('/alat/', '');
    contextName = slug.replace(/-/g, ' ');
    ctaText = 'Konsultasi Riksa Uji';
  } else if (pathname.startsWith('/panduan/')) {
    intent = 'syarat';
    const slug = pathname.replace('/panduan/', '');
    contextName = slug.replace(/-/g, ' ');
    ctaText = 'Konsultasi Panduan K3';
  } else if (pathname.startsWith('/perbandingan/')) {
    intent = 'kemnaker_bnsp';
    const slug = pathname.replace('/perbandingan/', '');
    contextName = slug.replace(/-/g, ' ');
    ctaText = 'Konsultasi Jalur K3';
  }

  const targetWaUrl = waIntentUrl(intent, contextName);

  return (
    <>
      {/* Mobile Sticky Bottom Conversion Bar */}
      <div className={`mobile-sticky-cta ${isVisible ? 'is-visible' : ''}`} aria-label="Aksi Cepat Konsultasi">
        <div className="mobile-cta-inner">
          <div className="mobile-cta-info">
            <span className="mobile-cta-badge">Layanan Konsultasi</span>
            <span className="mobile-cta-label">{ctaText}</span>
          </div>
          <a
            className="mobile-cta-button"
            href={targetWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hubungi WhatsApp PT Kreasi Ultimate Berjaya"
          >
            <svg className="wa-icon" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.146-.525-1.745-.722-2.868-2.502-2.955-2.617-.087-.116-.708-.941-.708-1.792s.448-1.272.607-1.446c.159-.175.347-.217.463-.217l.332.007c.115.006.27-.044.423.324.159.384.542 1.321.59 1.417.048.096.08.209.016.335-.064.126-.096.205-.191.317-.096.111-.202.248-.288.334-.096.096-.197.2-.085.391.112.191.498.822 1.069 1.331.735.656 1.355.859 1.546.955.191.096.303.08.415-.048.112-.128.479-.558.607-.749.127-.191.255-.159.431-.096.175.064 1.115.526 1.306.622.191.096.319.144.367.224.048.079.048.463-.096.868z" />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Desktop Floating WhatsApp Trigger */}
      <aside className="desktop-floating-cta" aria-label="Konsultasi WhatsApp">
        <a
          className="desktop-floating-btn"
          href={targetWaUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Konsultasi Pelatihan K3 via WhatsApp"
        >
          <div className="desktop-floating-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.146-.525-1.745-.722-2.868-2.502-2.955-2.617-.087-.116-.708-.941-.708-1.792s.448-1.272.607-1.446c.159-.175.347-.217.463-.217l.332.007c.115.006.27-.044.423.324.159.384.542 1.321.59 1.417.048.096.08.209.016.335-.064.126-.096.205-.191.317-.096.111-.202.248-.288.334-.096.096-.197.2-.085.391.112.191.498.822 1.069 1.331.735.656 1.355.859 1.546.955.191.096.303.08.415-.048.112-.128.479-.558.607-.749.127-.191.255-.159.431-.096.175.064 1.115.526 1.306.622.191.096.319.144.367.224.048.079.048.463-.096.868z" />
            </svg>
          </div>
          <div className="desktop-floating-text">
            <strong>Konsultasi K3</strong>
            <small>Chat Tim Konsultan</small>
          </div>
        </a>
      </aside>
    </>
  );
}
