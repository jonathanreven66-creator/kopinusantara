"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/kopi", label: "Koleksi Kopi" },
  { href: "/tentang", label: "Tentang Kami" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Navigasi utama">
        <Link className="brand" href="/" aria-label="Kopi Nusantara beranda">
          <span className="brand-mark">KN</span>
          <span className="brand-name">kopi<span>nusantara</span></span>
        </Link>
        <div className="nav-links">
          {navLinks.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return <Link key={link.href} href={link.href} className={active ? "nav-link active" : "nav-link"} aria-current={active ? "page" : undefined}>{link.label}</Link>;
          })}
        </div>
        <Link className="nav-cta" href="/kopi">Temukan Kopimu <span>↗</span></Link>
      </nav>
    </header>
  );
}