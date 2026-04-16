"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    id: "1",
    quote: "Eine echte Bereicherung für Stralsund. Endlich Fine Dining, das nicht steif ist – kreativ, herzlich, auf den Punkt.",
    author: "Gast aus Stralsund",
    source: "Google",
    rating: 5,
  },
  {
    id: "2",
    quote: "Modernes Konzept, stilvoll ohne übertrieben zu sein. Die Karte überrascht jedes Mal aufs Neue. Warmer, aufmerksamer Service.",
    author: "Tripadvisor-Gast",
    source: "Tripadvisor",
    rating: 5,
  },
  {
    id: "3",
    quote: "Kreativ, frisch, auf den Punkt. Selten so ein stimmiges Gesamtkonzept erlebt – Teller, Atmosphäre, Team. Komme sehr gern wieder.",
    author: "Google-Bewertung",
    source: "Google",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} von 5 Sternen`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-terracotta"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      className="py-20 sm:py-28 px-5 sm:px-8"
      style={{ backgroundColor: "var(--color-charcoal)" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="label-sm text-cream/40 mb-3">Was Gäste sagen</p>
          <h2 className="headline-md text-cream">
            Echte Stimmen,<br />
            <em className="not-italic" style={{ color: "var(--color-terracotta-light)" }}>
              echte Erlebnisse.
            </em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col gap-4 p-7 rounded-sm"
              style={{
                backgroundColor: "rgba(250, 247, 240, 0.05)",
                border: "1px solid rgba(250, 247, 240, 0.08)",
              }}
            >
              <Stars count={t.rating} />
              <blockquote className="font-serif text-lg font-light text-cream/85 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer className="flex items-center justify-between mt-auto">
                <p className="text-sm text-cream/40">{t.author}</p>
                <span className="label-sm text-cream/25">{t.source}</span>
              </footer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
