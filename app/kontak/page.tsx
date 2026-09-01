import type { Metadata } from 'next';
import { Breadcrumbs } from '@/src/components/SiteChrome';
import { JsonLd } from '@/src/components/JsonLd';
import { site, waIntentUrl } from '@/src/lib/site';

export const metadata: Metadata = {
  title: 'Kontak PT Kreasi Ultimate Berjaya | Konsultasi Pelatihan K3',
  description: 'Hubungi PT Kreasi Ultimate Berjaya untuk konsultasi pendaftaran Pelatihan K3, Ahli K3 Umum, pre-screening berkas ijazah, jadwal batch, dan proposal In-House Training K3.',
  alternates: { canonical: '/kontak' },
  openGraph: {
    title: 'Kontak PT Kreasi Ultimate Berjaya | Konsultasi Pelatihan K3',
    description: 'Hubungi PT Kreasi Ultimate Berjaya untuk konsultasi pendaftaran Pelatihan K3, Ahli K3 Umum, pre-screening berkas ijazah, jadwal batch, dan proposal In-House Training K3.',
    url: `${site.url}/kontak`,
    siteName: site.name,
    locale: 'id_ID',
    type: 'website',
  },
};

export default function KontakPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Beranda', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Kontak', item: `${site.url}/kontak` },
    ],
  };

  return (
    <main className="content-main">
      <JsonLd data={breadcrumbSchema} />

      <Breadcrumbs items={[{ label: 'Beranda', href: '/' }, { label: 'Kontak' }]} />

      <header className="hub-hero">
        <div className="eyebrow-pill">
          <span className="eyebrow-dot" />
          <span>HUBUNGI KAMI</span>
        </div>
        <h1>Konsultasi Pelatihan K3 Bersama {site.name}</h1>
        <p>
          Tim konsultan kami siap memberikan panduan pemilihan program, verifikasi kelayakan berkas ijazah, konfirmasi jadwal batch terdekat, serta penyusunan proposal penawaran In-House Training untuk perusahaan Anda.
        </p>
      </header>

      {/* Quick Contact Cards */}
      <section style={{ margin: '40px 0' }}>
        <div className="program-grid-3">
          <div className="program-card-prominent" style={{ background: '#f5faf7', borderColor: 'var(--green)' }}>
            <span className="program-tag program-tag-highlight">KONSULTASI WHATSAPP</span>
            <h3>WhatsApp Resmi</h3>
            <p>Konsultasi langsung dengan tim admisi K3 kami via chat WhatsApp untuk respon praktis pada jam operasional.</p>
            <div style={{ margin: '16px 0', fontSize: '20px', fontWeight: 800, color: 'var(--green)' }}>
              {site.whatsappDisplay}
            </div>
            <a
              className="button button-primary button-full"
              href={waIntentUrl('jadwal', 'Konsultasi Pelatihan K3')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Chat WhatsApp Sekarang</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="program-card-prominent">
            <span className="program-tag">SURAT & PROPOSAL B2B</span>
            <h3>Email Resmi Perusahaan</h3>
            <p>Kirimkan surat permintaan penawaran harga (RFP), dokumen tender, atau berkas pendaftaran via email resmi.</p>
            <div style={{ margin: '16px 0', fontSize: '15px', fontWeight: 700, color: 'var(--ink)' }}>
              {site.email}
            </div>
            <a
              className="button button-secondary button-full"
              href={`mailto:${site.email}?subject=Konsultasi%20Pelatihan%20K3`}
            >
              <span>Kirim Email Resmi</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="program-card-prominent">
            <span className="program-tag">TELEPON KANTOR</span>
            <h3>Layanan Telepon Kantor</h3>
            <p>Hubungi sambungan telepon kantor kami pada hari dan jam operasional kerja resmi.</p>
            <div style={{ margin: '16px 0', fontSize: '20px', fontWeight: 800, color: 'var(--ink)' }}>
              {site.phone}
            </div>
            <span style={{ fontSize: '13px', color: 'var(--muted)', display: 'block', marginTop: 'auto' }}>
              {site.hours}
            </span>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-container-alt" style={{ padding: '40px', borderRadius: '16px', margin: '48px 0' }}>
        <div className="section-heading" style={{ marginBottom: '32px' }}>
          <span className="eyebrow">JARINGAN LAYANAN</span>
          <h2>Kantor & Pusat Layanan Pelatihan</h2>
          <p>Kunjungi atau hubungi pusat layanan operasional kami untuk konsultasi tatap muka:</p>
        </div>

        <div className="program-grid-3">
          {site.locations.map((loc) => (
            <div key={loc.slug} className="program-card-prominent">
              <span className={`program-tag ${loc.isHeadOffice ? 'program-tag-highlight' : ''}`}>
                {loc.isHeadOffice ? 'KANTOR PUSAT' : 'LAYANAN REGIONAL'}
              </span>
              <h3>{loc.name}</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.6 }}>{loc.address}</p>
              <span style={{ fontSize: '12px', color: 'var(--green)', fontWeight: 750, marginTop: 'auto' }}>
                Wilayah Layanan: {loc.city} & Sekitarnya
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Shortcuts */}
      <section style={{ margin: '48px 0' }}>
        <div className="section-heading" style={{ marginBottom: '28px' }}>
          <span className="eyebrow">TOPIK KONSULTASI</span>
          <h2>Pilih Layanan Konsultasi yang Dibutuhkan</h2>
        </div>
        <div className="program-grid-3">
          <div className="program-card-prominent">
            <h3>Pendaftaran Ahli K3 Umum</h3>
            <p>Tanyakan tanggal batch terdekat dan kirimkan scan ijazah D3/S1 untuk pre-screening kelayakan berkas gratis.</p>
            <a className="card-link" href={waIntentUrl('syarat', 'Ahli K3 Umum')} target="_blank" rel="noopener noreferrer">
              Konsultasi Syarat & Jadwal WA →
            </a>
          </div>

          <div className="program-card-prominent">
            <h3>Proposal In-House Training</h3>
            <p>Ajukan penawaran pelatihan khusus karyawan perusahaan di lokasi pabrik atau kantor Anda se-Indonesia.</p>
            <a className="card-link" href={waIntentUrl('perusahaan', 'Proposal Training')} target="_blank" rel="noopener noreferrer">
              Minta Proposal Perusahaan →
            </a>
          </div>

          <div className="program-card-prominent">
            <h3>Konsultasi Jalur Kemnaker vs BNSP</h3>
            <p>Diskusikan kebutuhan tender proyek atau jenjang karir untuk menentukan skema sertifikasi yang tepat.</p>
            <a className="card-link" href={waIntentUrl('kemnaker_bnsp', 'Konsultasi Jalur')} target="_blank" rel="noopener noreferrer">
              Tanya Perbedaan Jalur →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
