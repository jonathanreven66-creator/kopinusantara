import Link from "next/link";

export default function NotFound() {
  return <section className="container not-found"><p className="eyebrow">404 · Halaman tidak ditemukan</p><h1>Sepertinya kopinya<br /><span>belum diseduh.</span></h1><p>Halaman yang kamu cari tidak tersedia atau sudah berpindah.</p><Link className="button button-primary" href="/">Kembali ke beranda</Link></section>;
}