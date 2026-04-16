import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Moana – Creative Kitchen, Stralsund. Angaben gemäß § 5 TMG.",
};

export default function ImpressumPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <p className="label-sm text-charcoal-muted mb-4">Rechtliches</p>
        <h1 className="headline-lg text-charcoal mb-12">Impressum</h1>

        <div className="prose prose-sm max-w-none text-charcoal-soft space-y-8">
          <section>
            <h2 className="font-serif text-lg font-light text-charcoal mb-3">
              Angaben gemäß § 5 TMG
            </h2>
            <address className="not-italic space-y-1">
              <p className="font-medium text-charcoal">[Vollständiger Name / Firmenname]</p>
              <p>Heilgeiststraße 92</p>
              <p>18439 Stralsund</p>
              <p>Deutschland</p>
            </address>
          </section>

          <section>
            <h2 className="font-serif text-lg font-light text-charcoal mb-3">Kontakt</h2>
            <p>Telefon: +49 3831 4458726</p>
            <p>
              E-Mail:{" "}
              <a href="mailto:Restaurant.Moana@web.de" className="text-terracotta hover:underline">
                Restaurant.Moana@web.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-light text-charcoal mb-3">
              Umsatzsteuer-ID
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
              <br />
              DE [USt-IdNr. einfügen]
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-light text-charcoal mb-3">
              Verantwortlich für den Inhalt (§ 18 Abs. 2 MStV)
            </h2>
            <p>[Name der verantwortlichen Person]</p>
            <p>Heilgeiststraße 92, 18439 Stralsund</p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-light text-charcoal mb-3">
              Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
              (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-terracotta hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="mt-2">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
              vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <div className="p-4 bg-cream-dark rounded-sm border border-dashed border-cream-border">
            <p className="text-xs text-charcoal-muted">
              <strong className="text-charcoal">Hinweis (Demo):</strong> Dieses Impressum
              ist ein Platzhalter. Vor dem Launch muss es durch vollständige, rechtlich
              geprüfte Angaben gemäß § 5 TMG ersetzt werden. Bitte konsultieren Sie
              einen Rechtsanwalt für ein vollständiges Impressum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
