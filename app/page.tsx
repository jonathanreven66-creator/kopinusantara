import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { coffees } from "@/data/coffees";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow">Dari tanah Indonesia, untuk dunia</p>
          <h1>Setiap cangkir punya <span>cerita.</span></h1>
          <p className="hero-copy">Jelajahi cita rasa kopi Nusantara yang tumbuh dari alam, dirawat oleh petani, dan diseduh dengan sepenuh hati.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/kopi">Jelajahi Kopi</Link>
            <Link className="button button-outline" href="/tentang">Cerita Kami</Link>
          </div>
        </div>
        <div className="hero-note">100% biji kopi pilihan Indonesia</div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div><p className="eyebrow">Pilihan barista</p><h2>Kenali kopi favoritmu</h2></div>
          <Link className="text-link" href="/kopi">Lihat semua kopi ↗</Link>
        </div>
        <div className="coffee-grid">
          {coffees.slice(0, 3).map((coffee) => <ServiceCard key={coffee.slug} coffee={coffee} />)}
        </div>
      </section>

      <section className="story-band">
        <div className="container story-band-inner">
          <div><p className="eyebrow">Lebih dari sekadar kopi</p><h2>Merayakan asal, menjaga rasa.</h2></div>
          <p>Kami bekerja sama dengan petani lokal untuk membawa karakter unik setiap daerah ke dalam cangkirmu.</p>
          <Link className="button button-light" href="/tentang">Kenali Kopi Nusantara</Link>
        </div>
      </section>
    </>
  );
}