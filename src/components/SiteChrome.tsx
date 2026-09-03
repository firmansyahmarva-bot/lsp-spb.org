'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site, waIntentUrl } from '@/src/lib/site';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState('');
  const pathname = usePathname();

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Pelatihan K3 Indonesia — Beranda">
        <div className="brand-mark-shield">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
        <div className="brand-text">
          <span className="brand-main">Pelatihan K3 <span>Indonesia</span></span>
          <span className="brand-sub">PT Kreasi Ultimate Berjaya</span>
        </div>
      </Link>

      {/* Desktop Navigation with Hubs */}
      <nav aria-label="Navigasi utama" className="main-nav">
        <Link href="/pelatihan" className={pathname.startsWith('/pelatihan') && pathname !== '/pelatihan/ahli-k3-umum' ? 'nav-active' : ''}>
          🎓 Katalog Program
        </Link>
        <Link href="/pelatihan/ahli-k3-umum" className={`nav-highlight ${pathname === '/pelatihan/ahli-k3-umum' ? 'nav-active' : ''}`}>
          ★ Ahli K3 Umum
        </Link>
        <Link href="/regulasi-k3" className={pathname.startsWith('/regulasi-k3') ? 'nav-active' : ''}>
          📜 Regulasi K3
        </Link>
        <Link href="/panduan" className={pathname.startsWith('/panduan') ? 'nav-active' : ''}>
          📖 Panduan
        </Link>
        <Link href="/profesi" className={pathname.startsWith('/profesi') || pathname.startsWith('/kompetensi') ? 'nav-active' : ''}>
          🏆 Profesi & BNSP
        </Link>
        <Link href="/jadwal" className={pathname === '/jadwal' ? 'nav-active' : ''}>
          📅 Jadwal 2026
        </Link>
        <Link href="/alat/matriks-risiko" className={pathname.startsWith('/alat') ? 'nav-active' : ''}>
          🛠️ Alat K3
        </Link>
        <Link href="/kontak" className={pathname === '/kontak' ? 'nav-active' : ''}>
          🏢 Kontak & Profil
        </Link>
      </nav>

      <div className="header-actions">
        <a
          className="button button-small button-header-wa btn-glow"
          href={waIntentUrl('jadwal', 'Pelatihan K3')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="header-wa-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.146-.525-1.745-.722-2.868-2.502-2.955-2.617-.087-.116-.708-.941-.708-1.792s.448-1.272.607-1.446c.159-.175.347-.217.463-.217l.332.007c.115.006.27-.044.423.324.159.384.542 1.321.59 1.417.048.096.08.209.016.335-.064.126-.096.205-.191.317-.096.111-.202.248-.288.334-.096.096-.197.2-.085.391.112.191.498.822 1.069 1.331.735.656 1.355.859 1.546.955.191.096.303.08.415-.048.112-.128.479-.558.607-.749.127-.191.255-.159.431-.096.175.064 1.115.526 1.306.622.191.096.319.144.367.224.048.079.048.463-.096.868z" />
            </svg>
          </span>
          <span>Konsultasi WA</span>
          <span className="header-wa-arrow">→</span>
        </a>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-drawer"
          aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
        >
          <span className="hamburger-box">
            <span className={`hamburger-inner ${mobileMenuOpen ? 'is-active' : ''}`} />
          </span>
        </button>
      </div>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="mobile-nav-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        id="mobile-navigation-drawer"
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-nav-header">
          <Link href="/" className="brand" onClick={() => setMobileMenuOpen(false)}>
            <div className="brand-mark-shield">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div className="brand-text">
              <span className="brand-main">Pelatihan K3 <span>Indonesia</span></span>
              <span className="brand-sub">{site.name}</span>
            </div>
          </Link>
          <button
            type="button"
            className="mobile-nav-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Tutup menu"
          >
            ✕
          </button>
        </div>

        <nav className="mobile-nav-links" aria-label="Menu navigasi mobile">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            <span>🏠 Beranda</span>
            <span className="menu-arrow">→</span>
          </Link>
          <Link href="/pelatihan" onClick={() => setMobileMenuOpen(false)}>
            <span>🎓 Katalog Program Pelatihan K3</span>
            <span className="menu-arrow">→</span>
          </Link>
          <Link href="/pelatihan/ahli-k3-umum" className="mobile-link-highlight" onClick={() => setMobileMenuOpen(false)}>
            <span>★ Ahli K3 Umum (Flagship 120 JP)</span>
            <span className="menu-arrow">→</span>
          </Link>
          <Link href="/regulasi-k3" onClick={() => setMobileMenuOpen(false)}>
            <span>📜 Direktori Regulasi K3</span>
            <span className="menu-arrow">→</span>
          </Link>
          <Link href="/panduan" onClick={() => setMobileMenuOpen(false)}>
            <span>📖 Panduan & Syarat Sertifikasi</span>
            <span className="menu-arrow">→</span>
          </Link>
          <Link href="/profesi" onClick={() => setMobileMenuOpen(false)}>
            <span>🏆 Skema Profesi & BNSP</span>
            <span className="menu-arrow">→</span>
          </Link>
          <Link href="/jadwal" onClick={() => setMobileMenuOpen(false)}>
            <span>📅 Jadwal Batch 2026</span>
            <span className="menu-arrow">→</span>
          </Link>
          <Link href="/alat/matriks-risiko" onClick={() => setMobileMenuOpen(false)}>
            <span>🛠️ Alat Matriks Risiko K3</span>
            <span className="menu-arrow">→</span>
          </Link>
          <Link href="/kontak" onClick={() => setMobileMenuOpen(false)}>
            <span>🏢 Kontak & Profil Lembaga</span>
            <span className="menu-arrow">→</span>
          </Link>
        </nav>

        <div className="mobile-nav-footer">
          <p className="mobile-nav-contact-label">Layanan Konsultasi:</p>
          <a
            className="button button-accent button-full btn-glow"
            href={waIntentUrl('jadwal', 'Pelatihan K3')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
          >
            Konsultasi WhatsApp Resmi →
          </a>
          <div className="mobile-nav-contact-info">
            <span>Email: {site.email}</span>
            <span>Telp: {site.phone}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-col footer-col-brand">
        <Link href="/" className="brand brand-footer">
          <div className="brand-mark-shield">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <div className="brand-text">
            <span className="brand-main">Pelatihan K3 <span style={{ color: 'var(--amber)' }}>Indonesia</span></span>
            <span className="brand-sub">{site.name}</span>
          </div>
        </Link>
        <p className="footer-desc">
          Pusat informasi resmi dan konsultasi pendaftaran Pelatihan K3 nasional: Ahli K3 Umum (Kemnaker RI 120 JP), sertifikasi kompetensi BNSP, audit SMK3 PP 50/2012, dan In-House Training perusahaan se-Indonesia bersama PT Kreasi Ultimate Berjaya.
        </p>
        <div className="footer-badges">
          <span className="footer-badge">Sertifikasi Kemnaker RI</span>
          <span className="footer-badge">Skema BNSP RI</span>
          <span className="footer-badge">In-House Nasional</span>
        </div>
      </div>

      <div className="footer-col">
        <h2>Program Kemnaker RI</h2>
        <Link href="/pelatihan">Katalog Semua Pelatihan</Link>
        <Link href="/pelatihan/ahli-k3-umum">Ahli K3 Umum (120 JP)</Link>
        <Link href="/pelatihan/auditor-smk3">Auditor SMK3 (PP 50/2012)</Link>
        <Link href="/pelatihan/lead-auditor-smk3">Lead Auditor SMK3</Link>
        <Link href="/pelatihan/pelatihan-petugas-p3k-di-tempat-kerja-lisensi-resmi-kemnaker-ri-30-jp">Petugas P3K di Tempat Kerja</Link>
        <Link href="/pelatihan/k3-kebakaran">K3 Penanggulangan Kebakaran</Link>
        <Link href="/pelatihan/pelatihan-teknisi-k3-listrik-sertifikasi-kemnaker-ri">Teknisi K3 Listrik</Link>
        <Link href="/pelatihan/pelatihan-tenaga-kerja-pada-ketinggian-tingkat-1-tkpk-1-rope-access-kemnaker">K3 Ketinggian (TKPK 1)</Link>
        <Link href="/pelatihan/pelatihan-petugas-k3-madya-ruang-terbatas-confined-space-kemnaker">K3 Ruang Terbatas</Link>
        <Link href="/pelatihan/pelatihan-operator-forklift-sertifikasi-resmi-kemnaker-ri-kelas-ii">Operator Forklift & Crane</Link>
      </div>

      <div className="footer-col">
        <h2>Skema BNSP RI</h2>
        <Link href="/profesi">Direktori Profesi HSE</Link>
        <Link href="/profesi/ahli-k3-umum">Ahli K3 Umum Profesional</Link>
        <Link href="/profesi/ahli-k3-konstruksi">Ahli K3 Konstruksi BNSP</Link>
        <Link href="/profesi/higiene-industri">Higiene Industri (HIMU/HIMAS)</Link>
        <Link href="/kompetensi">Skema Standar SKKNI</Link>
        <Link href="/kompetensi/pengoperasian-alat-angkat-angkut-berstandar-skkni">Alat Angkat Angkut SKKNI</Link>
        <Link href="/profesi/petugas-p3k">Petugas P3K Sertifikasi BNSP</Link>
        <Link href="/industri">K3 Sektor Industri Manufaktur</Link>
        <Link href="/industri/konstruksi-bangunan-gedung-sipil-infrastruktur">K3 Sektor Konstruksi & EPC</Link>
        <Link href="/industri/eksplorasi-pengeboran-minyak-gas-hulu-upstream">K3 Sektor Minyak & Gas</Link>
      </div>

      <div className="footer-col">
        <h2>Regulasi & Hukum</h2>
        <Link href="/regulasi-k3">Direktori Regulasi K3 Lengkap</Link>
        <Link href="/regulasi-k3/uu-1-1970-keselamatan-kerja">UU No. 1 Tahun 1970</Link>
        <Link href="/regulasi-k3/pp-50-2012-penerapan-smk3">PP No. 50 Tahun 2012 (SMK3)</Link>
        <Link href="/regulasi-k3/permenaker-04-1987-panitia-pembina-k3-p2k3">Permenaker 04/1987 (P2K3)</Link>
        <Link href="/regulasi-k3/permenaker-02-1992-tata-cara-penunjukan-ahli-k3">Permenaker 02/1992 (Ahli K3)</Link>
        <Link href="/regulasi-k3/permenaker-12-2015-k3-listrik-tempat-kerja">Permenaker 12/2015 (Listrik)</Link>
        <Link href="/regulasi-k3/permenaker-09-2016-k3-pekerjaan-pada-ketinggian">Permenaker 09/2016 (Ketinggian)</Link>
        <Link href="/regulasi-k3/kepmenaker-186-1999-penanggulangan-kebakaran">Kepmenaker 186/1999 (Kebakaran)</Link>
        <Link href="/kamus-k3">Kamus Istilah K3 Nasional</Link>
        <Link href="/kamus-k3/hiradc-hazard-identification-risk-assessment-determining-control">Kamus HIRADC & Risk Matrix</Link>
      </div>

      <div className="footer-col">
        <h2>Panduan & Layanan</h2>
        <Link href="/panduan">Pusat Panduan Lengkap</Link>
        <Link href="/panduan/syarat-ahli-k3-umum">Syarat Ijazah D3/S1 Ahli K3</Link>
        <Link href="/panduan/biaya-pelatihan-k3">Estimasi Biaya & Fasilitas</Link>
        <Link href="/panduan/materi-ahli-k3-umum">Kurikulum Silabus 120 JP</Link>
        <Link href="/panduan/tugas-ahli-k3-umum">Tugas & Tanggung Jawab Ahli K3</Link>
        <Link href="/perbandingan/bnsp-vs-kemnaker">Perbandingan Kemnaker vs BNSP</Link>
        <Link href="/jadwal">Jadwal Batch 2026</Link>
        <Link href="/alat/matriks-risiko">Alat Matriks Risiko K3</Link>
        <Link href="/kontak">Profil Perusahaan & Kontak</Link>
        <Link href="/tentang">Tentang PT Kreasi Ultimate Berjaya</Link>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {site.name}. Seluruh hak cipta dilindungi.</p>
        <p className="footer-legal-notice">
          Informasi pada situs ini disajikan untuk tujuan edukasi dan konsultasi profesional. Pelaksanaan pembinaan, pengujian, evaluasi, dan penerbitan sertifikat/lisensi mengacu pada ketentuan resmi Kementerian Ketenagakerjaan RI dan/atau Badan Nasional Sertifikasi Profesi (BNSP).
        </p>
      </div>
    </footer>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, i) => (
        <span key={`${item.label}-${i}`}>
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
          {i < items.length - 1 && <b aria-hidden="true">/</b>}
        </span>
      ))}
    </nav>
  );
}