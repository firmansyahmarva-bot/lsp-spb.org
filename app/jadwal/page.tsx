import type { Metadata } from 'next';
import { Breadcrumbs } from '@/src/components/SiteChrome';
import { waUrl } from '@/src/lib/site';
export const metadata:Metadata={title:'Jadwal Pelatihan K3',description:'Konfirmasi jadwal dan ketersediaan pelatihan K3 Kreasi Ultimate Berjaya.',robots:{index:false,follow:true},alternates:{canonical:'/jadwal'}};
export default function Jadwal(){return <main className="content-main"><Breadcrumbs items={[{label:'Beranda',href:'/'},{label:'Jadwal'}]}/><section className="empty-state"><p className="eyebrow">JADWAL TERKONFIRMASI</p><h1>Jadwal sedang dikurasi.</h1><p>Kami tidak menampilkan tanggal, harga, lokasi kelas, atau keluaran sertifikasi sebelum semuanya terkonfirmasi. Hubungi tim untuk pemeriksaan ketersediaan terbaru.</p><a className="button" href={waUrl('Halo, saya ingin memeriksa jadwal pelatihan K3 yang tersedia.')}>Tanyakan jadwal →</a></section></main>}
