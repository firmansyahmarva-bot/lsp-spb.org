import Link from 'next/link';
import { site, waIntentUrl } from '@/src/lib/site';

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label={`${site.name} — Beranda Ahli K3`}>
        <span className="brand-mark">K3</span>
        <div className="brand-text">
          <span className="brand-main">ahli-k3<b>.co.id</b></span>
          <span className="brand-sub">{site.name}</span>
        </div>
      </Link>
      <nav aria-label="Navigasi utama" className="main-nav">
        <Link href="/pelatihan/ahli-k3-umum" className="nav-highlight">Ahli K3 Umum</Link>
        <Link href="/pelatihan">Program Pelatihan</Link>
        <Link href="/panduan/syarat-ahli-k3-umum">Syarat</Link>
        <Link href="/panduan/biaya-pelatihan-k3">Biaya</Link>
        <Link href="/perbandingan/bnsp-vs-kemnaker">Kemnaker vs BNSP</Link>
        <Link href="/jadwal">Jadwal</Link>
        <Link href="/kontak">Kontak</Link>
      </nav>
      <div className="header-actions">
        <a
          className="button button-small button-header-wa"
          href={waIntentUrl('jadwal', 'Ahli K3 Umum')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Konsultasi WA</span>
          <span className="header-wa-arrow">→</span>
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-col footer-col-brand">
        <Link href="/" className="brand brand-footer">
          <span className="brand-mark">K3</span>
          <div className="brand-text">
            <span className="brand-main">ahli-k3<b>.co.id</b></span>
            <span className="brand-sub">{site.name}</span>
          </div>
        </Link>
        <p className="footer-desc">
          Pusat informasi, bimbingan, dan konsultasi resmi pelatihan Ahli K3 Umum, sertifikasi Kemnaker RI, skema kompetensi BNSP, dan penyelenggaraan In-House Training K3 di Indonesia.
        </p>
        <div className="footer-badges">
          <span className="footer-badge">Sertifikasi Kemnaker RI</span>
          <span className="footer-badge">Skema Kompetensi BNSP</span>
          <span className="footer-badge">In-House Se-Indonesia</span>
        </div>
      </div>

      <div className="footer-col">
        <h2>Program Unggulan</h2>
        <Link href="/pelatihan/ahli-k3-umum">Ahli K3 Umum Kemnaker</Link>
        <Link href="/pelatihan/auditor-smk3">Auditor SMK3</Link>
        <Link href="/pelatihan/petugas-p3k-tempat-kerja">Petugas P3K Tempat Kerja</Link>
        <Link href="/pelatihan/k3-kebakaran">K3 Penanggulangan Kebakaran</Link>
        <Link href="/pelatihan/k3-listrik">K3 Listrik & Teknisi</Link>
        <Link href="/pelatihan/bekerja-di-ketinggian">K3 Bekerja di Ketinggian</Link>
        <Link href="/pelatihan/k3-ruang-terbatas">K3 Ruang Terbatas (Confined Space)</Link>
        <Link href="/pelatihan">Semua Program Pelatihan →</Link>
      </div>

      <div className="footer-col">
        <h2>Panduan & Layanan</h2>
        <Link href="/panduan/syarat-ahli-k3-umum">Syarat Pendaftaran Ahli K3</Link>
        <Link href="/panduan/materi-ahli-k3-umum">Materi & Kurikulum 120 JP</Link>
        <Link href="/panduan/tugas-ahli-k3-umum">Tugas & Wewenang Ahli K3</Link>
        <Link href="/panduan/biaya-pelatihan-k3">Estimasi Biaya Pelatihan K3</Link>
        <Link href="/perbandingan/bnsp-vs-kemnaker">Perbedaan BNSP vs Kemnaker</Link>
        <Link href="/profesi/ahli-k3-umum">Prospek Karir Ahli K3 Umum</Link>
        <Link href="/jadwal">Konsultasi Jadwal Batch</Link>
        <Link href="/alat/matriks-risiko">Alat Matriks Risiko K3</Link>
      </div>

      <div className="footer-col">
        <h2>Kantor & Layanan</h2>
        <div className="footer-contact-item">
          <strong>Kantor Yogyakarta / Sleman:</strong>
          <span>Jl. Wonosari Km 8.5, Gandu, Sendangtirto, Berbah, Sleman, D.I. Yogyakarta 55573</span>
        </div>
        <div className="footer-contact-item">
          <strong>Layanan Semarang:</strong>
          <span>Jl. Jaten III, Pedurungan Tengah, Semarang, Jawa Tengah 50192</span>
        </div>
        <div className="footer-contact-item">
          <strong>Kontak Resmi:</strong>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={waIntentUrl('jadwal')}>{site.whatsappDisplay} (WhatsApp)</a>
          <span>Telepon: {site.phone}</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {site.name}. Seluruh hak cipta dilindungi.</p>
        <p className="footer-legal-notice">
          Informasi pada situs ini disajikan untuk tujuan edukasi dan konsultasi profesional. Pelaksanaan pembinaan, pengujian, evaluasi, dan penerbitan sertifikat/lisensi mengacu pada peraturan perundang-undangan Kementerian Ketenagakerjaan RI dan/atau Badan Nasional Sertifikasi Profesi (BNSP).
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
