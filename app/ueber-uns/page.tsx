import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Die Geschichte hinter Moana Creative Kitchen: Leidenschaft für saisonale, kreative Küche in Stralsunds Altstadt.",
};

export default function UeberUnsPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden" style={{ height: "50vh", minHeight: "320px" }}>
        <Image
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=80&auto=format&fit=crop"
          alt="Restaurantküche – Platzhalter für echte Teamfotos"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(28,26,24,0.2) 0%, rgba(28,26,24,0.6) 100%)",
          }}
        />
        <div className="absolute bottom-8 left-5 sm:left-8 right-5 sm:right-8 max-w-7xl mx-auto">
          <p className="label-sm text-cream/60 mb-2">Über uns</p>
          <h1 className="headline-lg text-cream">
            Wer hinter der<br />
            <em className="not-italic" style={{ color: "var(--color-terracotta-light)" }}>
              Karte steckt.
            </em>
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-16 space-y-16">
        {/* Philosophie */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="label-sm text-charcoal-muted mb-4">Philosophie</p>
            <h2 className="headline-md text-charcoal mb-6">
              Küche als<br />ehrliches Handwerk.
            </h2>
            <div className="space-y-4 text-charcoal-soft leading-relaxed">
              <p>
                Moana ist kein Konzeptrestaurant von der Stange. Es ist ein Ort,
                der aus der Überzeugung entstand, dass gutes Essen weder
                spektakulär sein muss noch teuer – aber es muss aufrichtig sein.
              </p>
              <p>
                Wir kochen mit dem, was die Region bietet. Unsere Lieferanten kennen
                wir beim Namen. Die Karte wechselt alle zwei Wochen,
                weil die Jahreszeit keine starren Menüs kennt.
              </p>
              <p>
                „Kreativ" bedeutet für uns nicht Molekularküche. Es bedeutet:
                Zutaten mit Respekt behandeln, überraschende Kombinationen wagen,
                und am Ende etwas auf den Tisch bringen, das einen Sinn ergibt.
              </p>
            </div>
          </div>
          <div className="relative rounded-sm overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <Image
              src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=700&q=80&auto=format&fit=crop"
              alt="Fine Dining Detail – Platzhalter für Restaurantfoto"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-cream-border" />

        {/* Werte */}
        <div>
          <p className="label-sm text-charcoal-muted mb-8">Werte</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                title: "Regional",
                text: "Wir beziehen unsere Zutaten aus Mecklenburg-Vorpommern und der direkten Umgebung. Kurze Wege, voller Geschmack.",
              },
              {
                title: "Saisonal",
                text: "Keine Tiefkühlware, keine Globalisierung auf dem Teller. Was nicht in der Saison ist, landet nicht auf der Karte.",
              },
              {
                title: "Inklusiv",
                text: "Vegane Gerichte sind bei uns keine Kompromisse – sie sind Hauptrollen. Die Karte denkt an alle Gäste.",
              },
            ].map(({ title, text }) => (
              <div key={title} className="flex flex-col gap-3">
                <div className="w-8 h-px bg-terracotta" />
                <h3 className="font-serif text-xl font-light text-charcoal">{title}</h3>
                <p className="text-sm text-charcoal-soft leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-cream-border" />

        {/* Team Placeholder */}
        <div>
          <p className="label-sm text-charcoal-muted mb-6">Das Team</p>
          <div
            className="rounded-sm p-8 border border-dashed border-cream-border text-center"
            style={{ backgroundColor: "var(--color-cream-dark)" }}
          >
            <p className="font-serif text-lg font-light text-charcoal mb-2">
              Team-Vorstellung folgt
            </p>
            <p className="text-sm text-charcoal-muted">
              Hier erscheinen nach Absprache Fotos und kurze Portraits des Moana-Teams.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            href="/reservierung"
            className="inline-flex items-center justify-center bg-charcoal text-cream label-sm px-7 py-3.5 hover:bg-charcoal-soft transition-colors rounded-sm"
          >
            Tisch reservieren
          </Link>
          <Link
            href="/karte"
            className="inline-flex items-center justify-center border border-charcoal/30 text-charcoal label-sm px-7 py-3.5 hover:border-charcoal transition-colors rounded-sm"
          >
            Aktuelle Karte ansehen
          </Link>
        </div>
      </div>
    </div>
  );
}
