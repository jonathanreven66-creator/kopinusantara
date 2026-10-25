import Link from "next/link";

export default function TentangPage() {
  return (
    <div className="page-shell">
      <section className="page-hero container">
        <p className="eyebrow">Cerita kami</p>
        <h1>Indonesia punya banyak rasa.<br /><span>Kami ingin membagikannya.</span></h1>
        <p className="page-lead">Kopi Nusantara lahir dari kecintaan pada kopi lokal dan orang-orang di balik setiap panennya.</p>
      </section>
      <section className="container about-layout section">
        <div className="about-art"><span>ASAL<br />USUL</span><div className="about-circle">Dari kebun<br />ke cangkir</div></div>
        <div className="about-copy"><p className="eyebrow">Misi kami</p><h2>Rasa yang baik dimulai dari hubungan yang baik.</h2><p>Kami percaya secangkir kopi yang istimewa bukan hanya tentang biji dan teknik seduh. Ada tanah, iklim, pengetahuan petani, dan tradisi lokal yang membentuk karakter setiap panen.</p><p>Melalui Kopi Nusantara, kami memperkenalkan kekayaan kopi Indonesia dengan cerita yang jujur, pilihan yang bertanggung jawab, dan rasa yang selalu ingin dijelajahi.</p><Link className="button button-primary" href="/kopi">Jelajahi koleksi</Link></div>
      </section>
      <section className="values-section"><div className="container values-grid"><div><span>01</span><h3>Asal yang jelas</h3><p>Kami mengangkat daerah dan karakter asli di balik setiap kopi.</p></div><div><span>02</span><h3>Petani adalah mitra</h3><p>Menghargai pengetahuan lokal dan proses yang dilakukan dengan teliti.</p></div><div><span>03</span><h3>Selalu ingin tahu</h3><p>Mendorong siapa pun untuk mencoba, belajar, dan menemukan rasa baru.</p></div></div></section>
    </div>
  );
}