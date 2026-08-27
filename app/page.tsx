import Link from 'next/link';

const pathways = [
  { title: 'Jalur Kemnaker', text: 'Pahami pembinaan, evaluasi, serta keluaran program sesuai ketentuan yang berlaku.', href: '/panduan/memeriksa-legalitas-penyelenggara-k3' },
  { title: 'Skema BNSP', text: 'Temukan skema kompetensi dan proses asesmen melalui LSP berlisensi.', href: '/perbandingan/bnsp-vs-kemnaker' },
  { title: 'Pelatihan Praktis', text: 'Tingkatkan kemampuan penerapan K3 tanpa klaim sertifikasi yang tidak tepat.', href: '/pelatihan/hiradc' },
];

const topics = ['Ahli K3 Umum', 'Keselamatan Kerja', 'SMK3', 'Pertolongan Pertama', 'K3 Konstruksi', 'K3 Listrik'];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">PELATIHAN K3 · YOGYAKARTA & SEMARANG</p>
          <h1>Temukan jalur pelatihan K3 yang <em>tepat dan terverifikasi.</em></h1>
          <p className="hero-lead">Pusat informasi pelatihan, kompetensi, profesi, dan regulasi keselamatan kerja untuk individu maupun perusahaan.</p>
          <div className="hero-actions"><Link className="button" href="/pelatihan">Jelajahi program <span>→</span></Link><a className="text-link" href="https://wa.me/628891754596">Diskusikan kebutuhan Anda</a></div>
          <div className="topic-row" aria-label="Topik populer">{topics.map((topic) => <span key={topic}>{topic}</span>)}</div>
        </div>
        <aside className="finder-card" aria-label="Pencari program">
          <div className="finder-top"><span>Mulai dari kebutuhan Anda</span><b>01</b></div><h2>Saya ingin mempelajari…</h2>
          <div className="finder-options"><Link href="/profesi/ahli-k3-umum">Jalur profesi K3 <span>→</span></Link><Link href="/regulasi-k3">Kepatuhan perusahaan <span>→</span></Link><Link href="/perbandingan/bnsp-vs-kemnaker">Sertifikasi kompetensi <span>→</span></Link></div>
          <p>Belum yakin? Tim kami membantu memetakan kebutuhan tanpa menjanjikan keluaran yang belum terverifikasi.</p>
        </aside>
      </section>
      <section className="pathway-section">
        <div className="section-heading"><p className="eyebrow">PILIH JALUR YANG SESUAI</p><h2>Satu tujuan K3, jalur yang berbeda.</h2><p>Kami membedakan otoritas, proses, dan keluaran agar Anda dapat mengambil keputusan dengan informasi yang jernih.</p></div>
        <div className="pathway-grid">{pathways.map((item, i) => <Link className="pathway-card" href={item.href} key={item.title}><span>0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p><b>Pelajari jalur →</b></Link>)}</div>
      </section>
    </main>
  );
}
