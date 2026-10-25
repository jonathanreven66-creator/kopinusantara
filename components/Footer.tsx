import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div><Link className="brand footer-brand" href="/"><span className="brand-mark">KN</span><span className="brand-name">kopi<span>nusantara</span></span></Link><p>Menghubungkan cerita daerah Indonesia melalui secangkir kopi.</p></div>
        <div className="footer-nav"><Link href="/">Beranda</Link><Link href="/kopi">Koleksi Kopi</Link><Link href="/tentang">Tentang Kami</Link></div>
        <p className="copyright">© {new Date().getFullYear()} Kopi Nusantara. Dibuat dengan rasa bangga.</p>
      </div>
    </footer>
  );
}