"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ReservationCta() {
  return (
    <section className="py-24 sm:py-32 px-5 sm:px-8 relative overflow-hidden">
      {/* Decorative Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, var(--color-terracotta-pale) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative max-w-2xl mx-auto text-center flex flex-col items-center gap-8"
      >
        <div>
          <p className="label-sm text-charcoal-muted mb-4">Jetzt buchen</p>
          <h2 className="headline-lg text-charcoal mb-4">
            Ihr Tisch wartet.
          </h2>
          <p className="text-charcoal-soft leading-relaxed max-w-md mx-auto">
            Dienstag bis Samstag, 16:00 – 21:30 Uhr. Heilgeiststraße 92, Stralsund.
            Für Gruppen ab 8 Personen bitten wir um direkten Anruf.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Link
            href="/reservierung"
            className="inline-flex items-center justify-center bg-charcoal text-cream label-sm px-8 py-4 hover:bg-charcoal-soft transition-colors duration-200 rounded-sm"
          >
            Tisch online reservieren
          </Link>
          <a
            href="tel:+49TELEFONNUMMER"
            className="inline-flex items-center justify-center border border-charcoal/30 text-charcoal label-sm px-8 py-4 hover:border-charcoal transition-colors duration-200 rounded-sm"
          >
            Direkt anrufen
          </a>
        </div>

        <div className="flex items-center gap-8 text-sm text-charcoal-muted">
          <div className="text-center">
            <p className="font-medium text-charcoal">Di – Sa</p>
            <p className="text-xs">Geöffnet</p>
          </div>
          <div className="w-px h-8 bg-cream-border" />
          <div className="text-center">
            <p className="font-medium text-charcoal">16:00 – 21:30</p>
            <p className="text-xs">Öffnungszeiten</p>
          </div>
          <div className="w-px h-8 bg-cream-border" />
          <div className="text-center">
            <p className="font-medium text-charcoal">Heilgeiststr. 92</p>
            <p className="text-xs">Stralsund</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
