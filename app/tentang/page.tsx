import type { Metadata } from 'next';
import { Breadcrumbs } from '@/src/components/SiteChrome';
import { ConsultationBanner, InHouseCtaBox } from '@/src/components/ConversionCta';
import { JsonLd } from '@/src/components/JsonLd';
import { site } from '@/src/lib/site';

export const metadata: Metadata = {
  title: 'Tentang PT Kreasi Ultimate Berjaya | Mitra Konsultasi Pelatihan K3',
  description: 'Profil PT Kreasi Ultimate Berjaya: Event Organizer & Business Consultant dengan fokus informasi, pembinaan, dan konsultasi resmi Pelatihan K3 di Indonesia.',
  alternates: { canonical: '/tentang' },
  openGraph: {
    title: 'Tentang PT Kreasi Ultimate Berjaya | Mitra Konsultasi Pelatihan K3',
    description: 'Profil PT Kreasi Ultimate Berjaya: Event Organizer & Business Consultant dengan fokus informasi, pembinaan, dan konsultasi resmi Pelatihan K3 di Indonesia.',
    url: `${site.url}/tentang`,
    siteName: site.name,
    locale: 'id_ID',
    type: 'website',
  },
};

export default function TentangPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Beranda', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Tentang Kami', item: `${site.url}/tentang` },
    ],
  };

  return (
    <main className="content-main">
      <JsonLd data={breadcrumbSchema} />

      <Breadcrumbs items={[{ label: 'Beranda', href: '/' }, { label: 'Tentang Kami' }]} />

      <header className="hub-hero">
        <div className="eyebrow-pill">
          <span className="eyebrow-dot" />
          <span>PROFIL PERUSAHAAN</span>
        </div>
        <h1>Mitra Terpercaya Informasi & Pelatihan K3 Indonesia</h1>
        <p>
          <strong>{site.name}</strong> adalah Event Organizer & Business Consultant yang mendedikasikan layanannya untuk memberikan edukasi jernih, bimbingan verifikasi berkas, dan konsultasi penyelenggaraan Pelatihan K3, sertifikasi Ahli K3 Umum Kemnaker RI, serta program keselamatan kerja bagi individu dan korporasi di seluruh Indonesia.
        </p>
      </header>

      {/* Core Values */}
      <section style={{ margin: '48px 0' }}>
        <div className="section-heading">
          <span className="eyebrow">PRINSIP & NILAI LAYANAN</span>
          <h2>Mengapa Berkonsultasi Bersama {site.name}?</h2>
        </div>

        <div className="program-grid-3">
          <div className="program-card-prominent">
            <span className="program-tag program-tag-highlight">TRANSPARANSI REGULASI</span>
            <h3>Informasi Faktual & Legalitas Sah</h3>
            <p>
              Kami membedakan secara jernih antara jalur pembinaan kepatuhan Kemnaker RI, skema uji kompetensi BNSP, dan pelatihan praktis internal agar peserta memperoleh sertifikat yang tepat guna sesuai kebutuhan hukumnya.
            </p>
          </div>

          <div className="program-card-prominent">
            <span className="program-tag">SCREENING GRATIS</span>
            <h3>Pre-Screening Berkas Pendaftaran</h3>
            <p>
              Kami memverifikasi kelayakan ijazah D3/S1 dan dokumen persyaratan sebelum proses pembayaran batch dilakukan guna menghindari risiko penolakan berkas oleh evaluator kementerian.
            </p>
          </div>

          <div className="program-card-prominent">
            <span className="program-tag">SOLUSI KORPORASI</span>
            <h3>Dukungan In-House Training B2B</h3>
            <p>
              Kami membantu perusahaan merancang program pelatihan internal dengan jadwal fleksibel, efisiensi biaya grup, serta studi kasus yang diselaraskan dengan profil bahaya fasilitas kerja Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Info */}
      <section className="section-container-alt" style={{ padding: '40px', borderRadius: '16px', margin: '48px 0' }}>
        <div className="section-heading" style={{ marginBottom: '28px' }}>
          <span className="eyebrow">IDENTITAS PERUSAHAAN</span>
          <h2>Legalitas & Kontak Perusahaan</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          <div className="checklist-card">
            <h4>Nama Badan Usaha</h4>
            <p style={{ margin: 0, fontWeight: 750, color: 'var(--ink-900)' }}>{site.name}</p>
            <small style={{ color: 'var(--muted)' }}>Brand: {site.brandName}</small>
          </div>

          <div className="checklist-card">
            <h4>Layanan Resmi</h4>
            <p style={{ margin: 0, fontWeight: 750, color: 'var(--emerald-700)' }}>Pelatihan K3 Indonesia</p>
            <small style={{ color: 'var(--muted)' }}>Pusat Edukasi & Konsultasi Pelatihan K3</small>
          </div>

          <div className="checklist-card">
            <h4>Kantor Operasional</h4>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--muted)' }}>
              Yogyakarta, Sleman, dan Semarang (Melayani In-House Training Se-Indonesia)
            </p>
          </div>
        </div>
      </section>

      <InHouseCtaBox programName="Pelatihan K3 Perusahaan" />

      <div style={{ marginTop: '48px' }}>
        <ConsultationBanner
          title="Ingin Berdiskusi Lebih Lanjut Mengenai Kebutuhan K3 Anda?"
          text="Tim konsultan kami siap memberikan asistensi profesional kapan saja."
          ctaText="Hubungi Kami via WhatsApp"
          intent="jadwal"
          context="Konsultasi Umum"
        />
      </div>
    </main>
  );
}
