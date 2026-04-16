import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anfahrt & Kontakt",
  description:
    "Moana Creative Kitchen finden: Heilgeiststraße 92, 18439 Stralsund. Öffnungszeiten, Anfahrt, Parken, Kontakt.",
};

const HOURS = [
  { days: "Dienstag", time: "16:00 – 21:30 Uhr" },
  { days: "Mittwoch", time: "16:00 – 21:30 Uhr" },
  { days: "Donnerstag", time: "16:00 – 21:30 Uhr" },
  { days: "Freitag", time: "16:00 – 21:30 Uhr" },
  { days: "Samstag", time: "16:00 – 21:30 Uhr" },
  { days: "Sonntag", time: "Ruhetag" },
  { days: "Montag", time: "Ruhetag" },
];

export default function FindenPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <p className="label-sm text-charcoal-muted mb-4">Anfahrt & Kontakt</p>
        <h1 className="headline-lg text-charcoal mb-12">
          Finden Sie<br />
          <em className="not-italic text-terracotta">uns.</em>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Info */}
          <div className="space-y-10">
            {/* Address */}
            <div>
              <p className="label-sm text-charcoal-muted mb-4">Adresse</p>
              <address className="not-italic">
                <p className="font-serif text-xl font-light text-charcoal mb-1">
                  Moana – Creative Kitchen
                </p>
                <p className="text-charcoal-soft">Heilgeiststraße 92</p>
                <p className="text-charcoal-soft">18439 Stralsund</p>
              </address>
            </div>

            {/* Öffnungszeiten */}
            <div>
              <p className="label-sm text-charcoal-muted mb-4">Öffnungszeiten</p>
              <table className="w-full text-sm" aria-label="Öffnungszeiten">
                <tbody>
                  {HOURS.map(({ days, time }) => (
                    <tr
                      key={days}
                      className="border-b border-cream-border last:border-0"
                    >
                      <td className="py-2.5 pr-4 text-charcoal-muted w-36">{days}</td>
                      <td
                        className={`py-2.5 font-medium ${
                          time === "Ruhetag" ? "text-charcoal-muted" : "text-charcoal"
                        }`}
                      >
                        {time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Kontakt */}
            <div>
              <p className="label-sm text-charcoal-muted mb-4">Kontakt</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-charcoal-muted w-16">Telefon</span>
                  <a
                    href="tel:+4938314458726"
                    className="text-charcoal hover:text-terracotta transition-colors"
                  >
                    +49 3831 4458726
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-charcoal-muted w-16">E-Mail</span>
                  <a
                    href="mailto:Restaurant.Moana@web.de"
                    className="text-charcoal hover:text-terracotta transition-colors"
                  >
                    Restaurant.Moana@web.de
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-charcoal-muted w-16">Instagram</span>
                  <a
                    href="https://www.instagram.com/kitchen.moana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charcoal hover:text-terracotta transition-colors"
                  >
                    @kitchen.moana
                  </a>
                </div>
              </div>
            </div>

            {/* Anfahrt Tips */}
            <div>
              <p className="label-sm text-charcoal-muted mb-4">Anfahrt & Parken</p>
              <div className="space-y-3 text-sm text-charcoal-soft leading-relaxed">
                <div className="flex gap-3">
                  <span className="text-terracotta font-medium flex-shrink-0 mt-0.5">→</span>
                  <p>
                    <span className="font-medium text-charcoal">Mit dem Zug:</span>{" "}
                    Stralsund Hauptbahnhof – ca. 15 Minuten Fußweg durch die Altstadt
                    (Heilgeiststraße liegt im Herzen der Altstadt).
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-terracotta font-medium flex-shrink-0 mt-0.5">→</span>
                  <p>
                    <span className="font-medium text-charcoal">Parken:</span>{" "}
                    Nächste Parkmöglichkeiten: Parkplatz Tribseer Damm oder
                    Parkhaus Am Querkanal (ca. 5–7 Minuten zu Fuß).
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-terracotta font-medium flex-shrink-0 mt-0.5">→</span>
                  <p>
                    <span className="font-medium text-charcoal">Tipp für Touristen:</span>{" "}
                    Die Heilgeiststraße liegt direkt in der UNESCO-Welterbe-Altstadt –
                    ideal für einen Spaziergang vor oder nach dem Essen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="flex flex-col gap-4">
            <div className="rounded-sm overflow-hidden border border-cream-border flex-1" style={{ minHeight: "400px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.2!2d13.0926!3d54.3112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSGVpbGdlaXN0c3RyYcOfZSA5MiwgMTg0MzkgU3RyYWxzdW5k!5e0!3m2!1sde!2sde!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Moana Creative Kitchen auf Google Maps"
              />
            </div>
            <a
              href="https://maps.google.com/?q=Heilgeiststraße+92+18439+Stralsund"
              target="_blank"
              rel="noopener noreferrer"
              className="label-sm text-center py-3 border border-cream-border text-charcoal hover:bg-cream-dark transition-colors rounded-sm"
            >
              In Google Maps öffnen →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
