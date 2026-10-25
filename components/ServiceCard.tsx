import Link from "next/link";
import type { Coffee } from "@/data/coffees";

export default function ServiceCard({ coffee }: { coffee: Coffee }) {
  return (
    <article className="coffee-card">
      <div className={`coffee-art ${coffee.tone}`} aria-hidden="true"><span className="coffee-bean">☕</span><span className="origin-stamp">{coffee.region}</span></div>
      <div className="coffee-card-body">
        <p className="card-origin">{coffee.region} · {coffee.process}</p>
        <h3>{coffee.name}</h3>
        <p>{coffee.shortDescription}</p>
        <div className="card-bottom"><span className="flavor">{coffee.flavor}</span><Link href={`/kopi/${coffee.slug}`} className="round-link" aria-label={`Lihat ${coffee.name}`}>↗</Link></div>
      </div>
    </article>
  );
}