import Link from 'next/link';
import { site, waIntentUrl } from '@/src/lib/site';

export function HeroCta({
  primaryText = 'Tanya Jadwal & Kuota Batch',
  primaryIntent = 'jadwal',
  secondaryText = 'Minta Estimasi Biaya',
  secondaryIntent = 'biaya',
  context = 'Ahli K3 Umum',
}: {
  primaryText?: string;
  primaryIntent?: 'jadwal' | 'biaya' | 'syarat' | 'perusahaan' | 'daftar' | 'kemnaker_bnsp';
  secondaryText?: string;
  secondaryIntent?: 'jadwal' | 'biaya' | 'syarat' | 'perusahaan' | 'daftar' | 'kemnaker_bnsp';
  context?: string;
}) {
  return (
    <div className="hero-cta-group">
      <a
        className="button button-primary button-large"
        href={waIntentUrl(primaryIntent, context)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>{primaryText}</span>
        <span className="btn-icon">→</span>
      </a>
      <a
        className="button button-secondary button-large"
        href={waIntentUrl(secondaryIntent, context)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>{secondaryText}</span>
      </a>
    </div>
  );
}

export function TrustStrip() {
  return (
    <div className="trust-strip" aria-label="Jaminan Layanan">
      <div className="trust-item">
        <span className="trust-badge">✓</span>
        <div>
          <strong>Lembaga Terpercaya</strong>
          <small>{site.name}</small>
        </div>
      </div>
      <div className="trust-item">
        <span className="trust-badge">✓</span>
        <div>
          <strong>Standar Regulasi</strong>
          <small>Kemnaker RI & Skema BNSP</small>
        </div>
      </div>
      <div className="trust-item">
        <span className="trust-badge">✓</span>
        <div>
          <strong>Pre-Screening Berkas</strong>
          <small>Verifikasi Ijazah & Syarat Gratis</small>
        </div>
      </div>
      <div className="trust-item">
        <span className="trust-badge">✓</span>
        <div>
          <strong>Layanan Se-Indonesia</strong>
          <small>Publik Online & In-House Perusahaan</small>
        </div>
      </div>
    </div>
  );
}

export function InHouseCtaBox({
  title = 'Butuh Pelatihan In-House untuk Perusahaan Anda?',
  subtitle = 'Lebih hemat biaya, jadwal fleksibel, dan materi disesuaikan 100% dengan risiko industri tempat kerja Anda.',
  programName = 'Ahli K3 Umum & K3 Teknis',
}: {
  title?: string;
  subtitle?: string;
  programName?: string;
}) {
  return (
    <section className="inhouse-cta-box">
      <div className="inhouse-copy">
        <span className="eyebrow-accent">LAYANAN KHUSUS KORPORASI & B2B</span>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <ul className="inhouse-perks">
          <li>Penghematan biaya per peserta hingga 40% untuk grup/rombongan</li>
          <li>Jadwal pelaksanaan fleksibel menyesuaikan jam operasional pabrik/proyek</li>
          <li>Studi kasus langsung membedah potensi bahaya fasilitas perusahaan</li>
          <li>Surat penawaran harga resmi (SPH) & invoice corporate tersedia</li>
        </ul>
      </div>
      <div className="inhouse-action-col">
        <div className="inhouse-action-card">
          <small>KONSULTASI GRATIS</small>
          <h3>Ajukan Proposal & Penawaran</h3>
          <p>Dapatkan estimasi biaya dan silabus in-house dalam 1x24 jam kerja.</p>
          <a
            className="button button-accent button-full"
            href={waIntentUrl('perusahaan', programName)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Konsultasi In-House via WA →
          </a>
          <a className="link-subtle" href={`mailto:${site.email}?subject=Permintaan%20Proposal%20In-House%20Training%20${encodeURIComponent(programName)}`}>
            atau kirim email ke {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}

export function ConsultationBanner({
  title = 'Masih Ragu Memilih Program yang Tepat?',
  text = 'Tim konsultan PT Kreasi Ultimate Berjaya siap membantu memetakan kebutuhan kepatuhan hukum, syarat dokumen, dan estimasi biaya tanpa komitmen.',
  ctaText = 'Konsultasi Gratis Sekarang',
  intent = 'jadwal',
  context,
}: {
  title?: string;
  text?: string;
  ctaText?: string;
  intent?: 'jadwal' | 'biaya' | 'syarat' | 'perusahaan' | 'daftar' | 'kemnaker_bnsp';
  context?: string;
}) {
  return (
    <div className="consultation-banner">
      <div className="consultation-banner-copy">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <a
        className="button button-primary"
        href={waIntentUrl(intent, context)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {ctaText} →
      </a>
    </div>
  );
}

export function ScheduleInquiryBox({
  programTitle = 'Ahli K3 Umum',
}: {
  programTitle?: string;
}) {
  return (
    <div className="schedule-inquiry-card">
      <div className="schedule-badge">INFO JADWAL BATCH</div>
      <h3>Konfirmasi Jadwal Terdekat & Kuota Kursi</h3>
      <p>Jadwal batch kelas publik diselenggarakan secara berkala setiap bulan. Hubungi tim admisi untuk konfirmasi sisa kuota dan tanggal pembukaan batch berikutnya.</p>
      <div className="schedule-cta-row">
        <a
          className="button button-primary"
          href={waIntentUrl('jadwal', programTitle)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tanya Jadwal {programTitle} →
        </a>
        <Link className="button button-secondary" href="/jadwal">
          Lihat Alur Jadwal
        </Link>
      </div>
    </div>
  );
}
