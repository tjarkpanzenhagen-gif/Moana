import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von Moana – Creative Kitchen, Stralsund.",
};

export default function DatenschutzPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <p className="label-sm text-charcoal-muted mb-4">Rechtliches</p>
        <h1 className="headline-lg text-charcoal mb-12">Datenschutzerklärung</h1>

        <div className="space-y-8 text-sm text-charcoal-soft leading-relaxed">
          <section>
            <h2 className="font-serif text-lg font-light text-charcoal mb-3">
              1. Verantwortlicher
            </h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website:
              <br />
              [Name / Firmenname], Heilgeiststraße 92, 18439 Stralsund
              <br />
              E-Mail:{" "}
              <a href="mailto:info@moana-kitchen.de" className="text-terracotta hover:underline">
                info@moana-kitchen.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-light text-charcoal mb-3">
              2. Erhebung und Speicherung personenbezogener Daten
            </h2>
            <p>
              Beim Besuch unserer Website werden durch den Hosting-Provider automatisch
              Informationen gespeichert (Server-Log-Dateien), die Ihr Browser übermittelt.
              Diese umfassen IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL,
              Hostname und Uhrzeit der Anfrage. Diese Daten sind nicht bestimmten
              Personen zuordenbar.
            </p>
            <p className="mt-2">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
              der sicheren und störungsfreien Bereitstellung der Website).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-light text-charcoal mb-3">
              3. Reservierungsanfragen
            </h2>
            <p>
              Wenn Sie über unser Reservierungsformular eine Anfrage stellen, werden
              die von Ihnen eingegebenen Daten (Name, E-Mail, Telefon, Datum, Uhrzeit,
              Personenzahl, optionale Nachricht) zur Bearbeitung Ihrer Anfrage
              verarbeitet und gespeichert.
            </p>
            <p className="mt-2">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung).
              Die Daten werden nicht an Dritte weitergegeben und nach Abwicklung
              der Anfrage gelöscht, sofern keine gesetzlichen Aufbewahrungsfristen
              entgegenstehen.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-light text-charcoal mb-3">
              4. Cookies
            </h2>
            <p>
              Diese Website verwendet ausschließlich technisch notwendige Cookies
              (z.B. Speicherung Ihrer Cookie-Einwilligung). Es werden keine
              Tracking- oder Marketing-Cookies eingesetzt.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-light text-charcoal mb-3">
              5. Externe Dienste
            </h2>
            <p>
              <strong className="text-charcoal">Google Maps:</strong> Diese Website
              bindet Karten von Google Maps ein. Anbieter: Google LLC, 1600 Amphitheatre
              Parkway, Mountain View, CA 94043, USA. Durch die Nutzung kann Google
              Informationen über Ihren Besuch erheben. Datenschutzerklärung von Google:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-terracotta hover:underline"
              >
                policies.google.com/privacy
              </a>
            </p>
            <p className="mt-2">
              <strong className="text-charcoal">Instagram:</strong> Verlinkungen zu
              Instagram (Meta Platforms Ireland Ltd.). Wenn Sie dem Link folgen,
              gelten die Datenschutzrichtlinien von Meta.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-light text-charcoal mb-3">
              6. Ihre Rechte
            </h2>
            <p>
              Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16),
              Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18),
              Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21 DSGVO).
            </p>
            <p className="mt-2">
              Zur Geltendmachung Ihrer Rechte wenden Sie sich an:{" "}
              <a href="mailto:info@moana-kitchen.de" className="text-terracotta hover:underline">
                info@moana-kitchen.de
              </a>
            </p>
            <p className="mt-2">
              Außerdem steht Ihnen ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde zu (Landesbeauftragter für Datenschutz
              Mecklenburg-Vorpommern).
            </p>
          </section>

          <div className="p-4 bg-cream-dark rounded-sm border border-dashed border-cream-border">
            <p className="text-xs text-charcoal-muted">
              <strong className="text-charcoal">Hinweis (Demo):</strong> Diese
              Datenschutzerklärung ist ein Platzhalter für Demo-Zwecke. Vor dem Launch
              muss sie durch eine vollständige, anwaltlich geprüfte Erklärung ersetzt werden.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
