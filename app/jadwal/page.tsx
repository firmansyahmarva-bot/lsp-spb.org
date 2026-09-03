import type { Metadata } from 'next';
import { Breadcrumbs } from '@/src/components/SiteChrome';
import { RelatedProgramsSection } from '@/src/components/RelatedProgramsSection';
import { ConsultationBanner, InHouseCtaBox } from '@/src/components/ConversionCta';
import { JsonLd } from '@/src/components/JsonLd';
import { site, waIntentUrl } from '@/src/lib/site';

export const metadata: Metadata = {
  title: 'Jadwal Pelatihan K3 & Ahli K3 Umum | PT Kreasi Ultimate Berjaya',
  description: 'Informasi dan konfirmasi jadwal batch pelatihan K3: Ahli K3 Umum Kemnaker RI, spesialisasi teknis K3, skema BNSP, dan In-House Training K3 terdekat bersama PT Kreasi Ultimate Berjaya.',
  alternates: { canonical: '/jadwal' },
  openGraph: {
    title: 'Jadwal Pelatihan K3 & Ahli K3 Umum | PT Kreasi Ultimate Berjaya',
    description: 'Informasi jadwal batch pelatihan K3, Ahli K3 Umum Kemnaker RI, skema BNSP, dan jadwal In-House Training K3 perusahaan.',
    url: `${site.url}/jadwal`,
    siteName: site.name,
    locale: 'id_ID',
    type: 'website',
  },
};

export default function JadwalPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Beranda', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Jadwal Pelatihan', item: `${site.url}/jadwal` },
    ],
  };

  return (
    <main className="content-main">
      <JsonLd data={breadcrumbSchema} />

      <Breadcrumbs items={[{ label: 'Beranda', href: '/' }, { label: 'Jadwal Pelatihan' }]} />

      <header className="hub-hero">
        <div className="eyebrow-pill">
          <span className="eyebrow-dot" />
          <span>INFORMASI & KONFIRMASI BATCH</span>
        </div>
        <h1>Jadwal Pelatihan K3 & Ahli K3 Umum Indonesia</h1>
        <p>
          Kami mengoordinasikan pembukaan batch kelas publik secara berkala setiap bulan (metode Blended Online maupun Offline Tatap Muka) serta melayani penjadwalan fleksibel untuk In-House Training khusus perusahaan di seluruh Indonesia.
        </p>
      </header>

      {/* Main Schedule Consultation Box */}
      <section className="schedule-inquiry-card" style={{ textAlign: 'left', padding: '36px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'center' }}>
          <div>
            <span className="schedule-badge">BATCH KELAS BERKALA</span>
            <h2 style={{ fontSize: '26px', margin: '10px 0 12px' }}>
              Informasi Jadwal & Ketersediaan Batch Pelatihan K3
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>
              Untuk memastikan rasio pembelajaran interaktif yang optimal dan kelancaran administrasi pendaftaran Kemnaker RI / BNSP, hubungi tim admisi kami guna mengonfirmasi tanggal pembukaan batch terdekat yang sesuai dengan agenda Anda.
            </p>
          </div>
          <div style={{ background: 'var(--bg-subtle)', padding: '24px', borderRadius: '12px', textAlign: 'center', border: '1px solid var(--border)' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--emerald-700)', letterSpacing: '0.08em' }}>LAYANAN ADMISI RESMI</span>
            <h3 style={{ fontSize: '18px', margin: '8px 0 14px' }}>Cek Tanggal Batch Terdekat</h3>
            <a
              className="button button-accent button-full btn-glow"
              href={waIntentUrl('jadwal', 'Pelatihan K3')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Tanya Jadwal via WA</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Schedule Categories */}
      <section style={{ margin: '48px 0' }}>
        <div className="section-heading">
          <span className="eyebrow">RITME PELAKSANAAN</span>
          <h2>Pilihan Format & Jadwal Pelatihan</h2>
        </div>

        <div className="program-grid-3">
          <div className="program-card-prominent">
            <span className="program-tag program-tag-highlight">KELAS PUBLIK REGULER</span>
            <h3>Batch Bulanan (Blended Online)</h3>
            <p>
              Dilaksanakan secara teratur setiap bulan dengan durasi 12 hari kerja efektif (Senin – Sabtu). Pembelajaran teori via Zoom tatap muka interaktif + PKL observasi industri terpandu + evaluasi Kemnaker RI.
            </p>
            <ul className="program-meta-list">
              <li>Durasi: 120 Jam Pelajaran (12 Hari)</li>
              <li>Waktu: 08.00 – 17.00 WIB</li>
              <li>Sertifikasi: Kemnaker RI (Sertifikat + SKP + Lisensi)</li>
            </ul>
            <a
              className="button button-accent button-full btn-glow"
              href={waIntentUrl('jadwal', 'Kelas Publik Ahli K3 Umum')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Cek Tanggal Batch Bulan Ini</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="program-card-prominent">
            <span className="program-tag">IN-HOUSE PERUSAHAAN</span>
            <h3>Jadwal Khusus Korporasi</h3>
            <p>
              Penetapan tanggal pelaksanaan disesuaikan sepenuhnya dengan kalender operasional dan shift kerja perusahaan Anda. Dapat diselenggarakan di kantor perusahaan atau venue pilihan.
            </p>
            <ul className="program-meta-list">
              <li>Jadwal: Fleksibel sesuai kesepakatan</li>
              <li>Lokasi: Di perusahaan / venue rekanan</li>
              <li>Peserta: Khusus internal perusahaan Anda</li>
            </ul>
            <a
              className="button button-secondary button-full"
              href={waIntentUrl('perusahaan', 'In-House Training')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Konsultasi Jadwal In-House</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="program-card-prominent">
            <span className="program-tag">PELATIHAN TEKNIS K3</span>
            <h3>Jadwal Program Spesialisasi</h3>
            <p>
              Jadwal pelaksanaan untuk program teknis seperti Auditor SMK3, Petugas P3K, K3 Kebakaran (Kelas D/C/B/A), K3 Listrik, K3 Ketinggian (TKBT/TKPK), dan K3 Ruang Terbatas.
            </p>
            <ul className="program-meta-list">
              <li>Durasi: 2 s.d. 6 hari (tergantung jenis program)</li>
              <li>Sertifikasi: Kemnaker RI / BNSP</li>
            </ul>
            <a
              className="button button-secondary button-full"
              href={waIntentUrl('jadwal', 'Program Teknis K3')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Tanya Jadwal Program Teknis</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Pre-Registration Steps */}
      <section className="section-container-alt" style={{ padding: '40px', borderRadius: '16px', margin: '40px 0' }}>
        <h2 style={{ fontSize: '26px', margin: '0 0 12px' }}>
          Tahapan Pendaftaran & Konfirmasi Batch
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '15px', marginBottom: '24px' }}>
          Ikuti langkah mudah berikut untuk mengonfirmasi keikutsertaan Anda pada batch yang diinginkan:
        </p>
        <div className="process-grid">
          <div className="process-step-card">
            <div className="step-number-glow">01</div>
            <h3>Pilih Jadwal</h3>
            <p>Hubungi admisi untuk konfirmasi tanggal batch yang sesuai dengan agenda kerja Anda.</p>
          </div>
          <div className="process-step-card">
            <div className="step-number-glow">02</div>
            <h3>Kirim Berkas</h3>
            <p>Kirimkan scan KTP, Ijazah minimal D3/S1, dan pas foto untuk verifikasi syarat administrasi.</p>
          </div>
          <div className="process-step-card">
            <div className="step-number-glow">03</div>
            <h3>Konfirmasi Registrasi</h3>
            <p>Lakukan penyelesaian administrasi pendaftaran untuk mengonfirmasi keikutsertaan batch.</p>
          </div>
          <div className="process-step-card">
            <div className="step-number-glow">04</div>
            <h3>Terima Undangan</h3>
            <p>Dapatkan surat panggilan pembinaan (invitation letter), panduan materi, dan jadwal harian.</p>
          </div>
        </div>
      </section>

      <RelatedProgramsSection />

      <InHouseCtaBox programName="Jadwal In-House K3" />

      <div style={{ marginTop: '48px' }}>
        <ConsultationBanner
          title="Butuh Jadwal Batch Cepat untuk Kebutuhan Tender Perusahaan?"
          text="Sampaikan target deadline sertifikasi perusahaan Anda. Tim konsultan kami akan membantu mencarikan opsi batch terdekat yang paling optimal."
          ctaText="Konsultasi Jadwal via WA"
          intent="jadwal"
          context="Kebutuhan Jadwal Tender"
        />
      </div>
    </main>
  );
}
