import ServiceCard from "@/components/ServiceCard";
import { coffees } from "@/data/coffees";

export default function KopiPage() {
  return (
    <div className="page-shell">
      <section className="page-hero container">
        <p className="eyebrow">Koleksi pilihan</p>
        <h1>Temukan rasa dari<br /><span>berbagai penjuru Indonesia.</span></h1>
        <p className="page-lead">Setiap daerah punya karakter unik. Temukan kopi yang paling sesuai dengan seleramu.</p>
      </section>
      <section className="container section collection-section">
        <div className="collection-intro"><span>{coffees.length} pilihan kopi</span><span>Dipilih dengan sepenuh hati</span></div>
        <div className="coffee-grid">{coffees.map((coffee) => <ServiceCard key={coffee.slug} coffee={coffee} />)}</div>
      </section>
    </div>
  );
}