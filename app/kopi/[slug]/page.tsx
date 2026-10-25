import Link from "next/link";
import { notFound } from "next/navigation";
import { coffees } from "@/data/coffees";

export function generateStaticParams() {
  return coffees.map((coffee) => ({ slug: coffee.slug }));
}

export default async function CoffeeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const coffee = coffees.find((item) => item.slug === slug);
  if (!coffee) notFound();

  return (
    <div className="page-shell">
      <section className="container detail-page">
        <Link href="/kopi" className="back-link">← Kembali ke koleksi</Link>
        <div className="detail-layout">
          <div className={`detail-art coffee-art ${coffee.tone}`}><span className="coffee-bean">☕</span><span className="origin-stamp">{coffee.region}</span></div>
          <div className="detail-copy"><p className="eyebrow">Cerita dari {coffee.region}</p><h1>{coffee.name}</h1><p className="detail-flavor">{coffee.flavor}</p><p>{coffee.description}</p><div className="detail-facts"><div><span>Asal</span><strong>{coffee.region}</strong></div><div><span>Proses</span><strong>{coffee.process}</strong></div><div><span>Karakter</span><strong>{coffee.flavor}</strong></div></div><Link className="button button-primary" href="/kopi">Jelajahi kopi lainnya</Link></div>
        </div>
      </section>
    </div>
  );
}