"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Philosophie() {
  return (
    <section
      className="py-20 sm:py-28 px-5 sm:px-8"
      style={{ backgroundColor: "var(--color-cream-dark)" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative rounded-sm overflow-hidden"
          style={{ aspectRatio: "4/5" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80&auto=format&fit=crop"
            alt="Küche und Team – Platzhalter für echte Restaurantfotos"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
          {/* Decorative Line */}
          <div
            className="absolute bottom-6 left-6 right-6 h-px opacity-30"
            style={{ backgroundColor: "var(--color-cream)" }}
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
          className="flex flex-col gap-6"
        >
          <p className="label-sm text-charcoal-muted">Unsere Philosophie</p>
          <h2 className="headline-lg text-charcoal">
            Handwerk.<br />
            <em className="not-italic text-terracotta">Saison.</em><br />
            Kreativität.
          </h2>

          <div className="space-y-4 text-charcoal-soft leading-relaxed max-w-md">
            <p>
              Wir kochen, was der Moment hergibt. Unsere Karte wechselt alle zwei Wochen –
              nicht aus Prinzip, sondern weil Genuss dann am ehrlichsten ist, wenn er
              mit der Jahreszeit atmet.
            </p>
            <p>
              Regionale Landwirte, handverlesene Zutaten, kreative Kombinationen ohne
              Selbstzweck. Stilvoll, direkt, auf den Punkt –
              so wie Stralsund selbst.
            </p>
          </div>

          {/* Values Row */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-cream-border">
            {[
              { label: "Regional", sub: "Mecklenburg-Vorpommern" },
              { label: "Saisonal", sub: "Karte alle 2 Wochen neu" },
              { label: "Kreativ", sub: "Handwerkliche Küche" },
            ].map(({ label, sub }) => (
              <div key={label}>
                <p className="font-serif text-base font-light text-charcoal">{label}</p>
                <p className="text-xs text-charcoal-muted mt-0.5 leading-snug">{sub}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
