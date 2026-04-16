import Link from "next/link";

const HOURS = [
  { days: "Dienstag – Samstag", time: "16:00 – 21:30 Uhr" },
  { days: "Sonntag & Montag", time: "Ruhetag" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80 mt-0">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <p className="font-serif text-2xl font-light text-cream mb-3">Moana</p>
          <p className="label-sm text-cream/50 mb-4">Creative Kitchen · Stralsund</p>
          <p className="text-sm text-cream/60 leading-relaxed">
            Eine Karte die wechselt.<br />
            Genuss der bleibt.
          </p>
          <a
            href="https://www.instagram.com/kitchen.moana"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 label-sm text-cream/50 hover:text-cream transition-colors"
            aria-label="Moana auf Instagram"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @kitchen.moana
          </a>
        </div>

        {/* Öffnungszeiten */}
        <div>
          <p className="label-sm text-cream/40 mb-4">Öffnungszeiten</p>
          <ul className="space-y-2">
            {HOURS.map(({ days, time }) => (
              <li key={days} className="text-sm">
                <span className="text-cream/50">{days}</span>
                <br />
                <span className="text-cream font-medium">{time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Adresse & Kontakt */}
        <div>
          <p className="label-sm text-cream/40 mb-4">Besuchen</p>
          <address className="not-italic text-sm text-cream/70 leading-relaxed space-y-1">
            <p className="text-cream font-medium">Moana – Creative Kitchen</p>
            <p>Heilgeiststraße 92</p>
            <p>18439 Stralsund</p>
          </address>
          <div className="mt-4 space-y-1 text-sm">
            <a
              href="tel:+4938314458726"
              className="block text-cream/60 hover:text-cream transition-colors"
            >
              +49 3831 4458726
            </a>
            <a
              href="mailto:Restaurant.Moana@web.de"
              className="block text-cream/60 hover:text-cream transition-colors"
            >
              Restaurant.Moana@web.de
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="label-sm text-cream/40 mb-4">Navigation</p>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/karte", label: "Speisekarte" },
              { href: "/reservierung", label: "Tisch reservieren" },
              { href: "/ueber-uns", label: "Über uns" },
              { href: "/finden", label: "Anfahrt & Kontakt" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-cream/60 hover:text-cream transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Maps Embed */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pb-8">
        <div className="rounded-sm overflow-hidden h-48 opacity-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.2!2d13.0926!3d54.3112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSGVpbGdlaXN0c3RyYcOfZSA5MiwgMTg0MzkgU3RyYWxzdW5k!5e0!3m2!1sde!2sde!4v1"
            width="100%"
            height="192"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Moana Creative Kitchen auf Google Maps"
          />
        </div>
      </div>

      {/* Legal Bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream/40">
          <p>© {new Date().getFullYear()} Moana – Creative Kitchen, Stralsund</p>
          <div className="flex gap-5">
            <Link href="/impressum" className="hover:text-cream/70 transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-cream/70 transition-colors">
              Datenschutz
            </Link>
          </div>
          <p className="text-cream/25 text-[10px]">
            Alle Produktfotos: Platzhalter (Unsplash) – werden durch echte Restaurantfotos ersetzt.
          </p>
        </div>
      </div>
    </footer>
  );
}
