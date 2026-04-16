# Moana – Creative Kitchen · Demo Website

Demo-Website für [Moana – Creative Kitchen](https://www.instagram.com/kitchen.moana), Stralsund.  
Gebaut als Pitch-Demo. Vor dem Launch müssen reale Inhalte eingesetzt werden.

---

## Setup & Entwicklung

```bash
npm install
npm run dev      # → http://localhost:3000
npm run build    # Produktions-Build
```

**Anforderungen:** Node.js 18+ | npm 9+

---

## Deployment (Vercel)

1. Repository auf GitHub pushen
2. Auf [vercel.com](https://vercel.com) importieren — Framework wird auto-erkannt
3. Optional: Umgebungsvariablen ergänzen

| Variable | Beschreibung |
|---|---|
| `RESEND_API_KEY` | Resend API-Key für E-Mail-Versand von Reservierungen |
| `SUPABASE_URL` | Supabase-Projekt-URL (Reservierungs-Backend) |
| `SUPABASE_ANON_KEY` | Supabase Anon Key |

---

## Seitenstruktur

| Route | Inhalt |
|---|---|
| `/` | Homepage: Hero, Dish Cards, Philosophie, Instagram, Testimonials, CTA |
| `/karte` | Speisekarte mit Filter + Druck-Funktion |
| `/reservierung` | Reservierungsformular (validiert, Di–Sa, 16–21 Uhr) |
| `/finden` | Adresse, Google Maps, Öffnungszeiten, Anfahrt |
| `/ueber-uns` | Philosophie, Werte, Team |
| `/impressum` | § 5 TMG Platzhalter |
| `/datenschutz` | DSGVO-Platzhalter |

---

## Was das Restaurant vor dem Launch liefern muss

### Pflicht
- [ ] **Telefonnummer** — alle `[Telefonnummer]` im Code ersetzen
- [ ] **Echte Restaurantfotos** — Unsplash-Platzhalter (Alt-Text markiert) ersetzen
- [ ] **Aktuelle Speisekarte** — in `lib/menu-data.ts` pflegen
- [ ] **Impressum-Daten** — vollständige Angaben gemäß § 5 TMG
- [ ] **Datenschutzerklärung** — anwaltlich geprüfte Version einsetzen
- [ ] **E-Mail** — `info@moana-kitchen.de` bestätigen oder anpassen

### Optional / Empfohlen
- [ ] **OG-Image** — `/public/og-image.jpg` (1200×630px) für WhatsApp/Social-Sharing
- [ ] **Favicon** — `/public/favicon.ico` + `/public/apple-touch-icon.png` anpassen
- [ ] **Instagram-Integration** — echte Posts via Instagram Basic Display API
- [ ] **E-Mail-Versand** — `app/api/reservierung/route.ts` → Resend oder SMTP
- [ ] **Google Maps** — korrekte Place-ID für Heilgeiststraße 92 eintragen
- [ ] **Domain** — `BASE_URL` in `app/layout.tsx` setzen

---

## Speisekarte pflegen (`lib/menu-data.ts`)

```typescript
{
  id: "h4",
  name: "Neues Gericht",
  description: "Kurze Beschreibung",
  price: "20,–",
  tags: ["VG", "GF"],   // V = Vegetarisch, VG = Vegan, GF = Glutenfrei
  category: "hauptgaenge",
}
```

Gültigkeitsdatum: `menuValidFrom` und `menuValidTo` am Ende der Datei anpassen.

---

## Features

- Ken-Burns-Hero mit Crossfade (CSS, kein JS)
- Live-Öffnungsstatus-Badge (Europe/Berlin Zeitzone)
- Animierter Menü-Filter (Framer Motion)
- Scroll-triggered Animationen (Framer Motion `whileInView`)
- Sticky Navigation (transparent → solid beim Scrollen)
- Reservierungsformular mit Validierung + API-Route
- Print-optimierte Speisekarte (PDF-Export)
- Schema.org JSON-LD + Open Graph
- Mobile-first (375px–1440px), WCAG AA Kontrast
- DSGVO Cookie-Banner
- TypeScript, Tailwind CSS v4, Next.js 16, Vercel-ready

---

*Alle Produktfotos: Unsplash-Platzhalter — werden durch echte Restaurantfotos ersetzt.*  
*Impressum & Datenschutz: Demo-Platzhalter — vor Launch durch anwaltlich geprüfte Texte ersetzen.*
