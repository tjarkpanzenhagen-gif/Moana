import type { Metadata } from "next";
import ReservationForm from "./reservation-form";

export const metadata: Metadata = {
  title: "Tisch reservieren",
  description:
    "Tisch online reservieren bei Moana Creative Kitchen, Stralsund. Dienstag–Samstag, 16–21:30 Uhr.",
};

export default function ReservierungPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <p className="label-sm text-charcoal-muted mb-4">Reservierung</p>
        <h1 className="headline-lg text-charcoal mb-3">
          Ihr Tisch<br />
          <em className="not-italic text-terracotta">wartet.</em>
        </h1>
        <p className="text-charcoal-muted text-sm mb-10 leading-relaxed">
          Dienstag bis Samstag, 16:00 – 21:30 Uhr. Wir bestätigen Ihre Reservierung
          innerhalb von 2 Stunden per Telefon oder E-Mail.
        </p>

        {/* Group hint */}
        <div className="mb-8 p-4 bg-cream-dark rounded-sm border border-cream-border">
          <p className="text-sm text-charcoal-soft">
            <span className="font-medium text-charcoal">Gruppen ab 8 Personen</span> bitten
            wir um direkten Anruf:{" "}
            <a
              href="tel:+4938314458726"
              className="text-terracotta hover:text-terracotta-light transition-colors"
            >
              +49 3831 4458726
            </a>
          </p>
        </div>

        <ReservationForm />
      </div>
    </div>
  );
}
