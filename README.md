# Kopi Nusantara

Website company profile Kopi Nusantara dibuat menggunakan Next.js App Router, React, dan TypeScript.

## Fitur
- Multi-page company profile: Beranda, Koleksi Kopi, Tentang Kami.
- Dynamic routing untuk detail kopi melalui `/kopi/[slug]`.
- Reusable components: Navbar, Footer, dan ServiceCard.
- Navigasi menggunakan komponen `Link` dari Next.js.
- Active link pada navbar menggunakan `usePathname`.
- Layout responsif untuk desktop, tablet, dan ponsel.
- Struktur folder dipisahkan berdasarkan halaman, komponen, dan data.

## Menjalankan proyek
Pastikan Node.js terpasang, lalu jalankan:

```bash
npm install
npm run dev
```

Buka http://localhost:3000 di browser.

## Struktur folder
```
app/
  kopi/
    [slug]/
      page.tsx
    page.tsx
  tentang/
    page.tsx
  globals.css
  layout.tsx
  not-found.tsx
  page.tsx
components/
  Footer.tsx
  Navbar.tsx
  ServiceCard.tsx
data/
  coffees.ts
package.json
tsconfig.json
next.config.ts
eslint.config.mjs
```
