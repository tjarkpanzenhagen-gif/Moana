"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems, menuValidFrom, menuValidTo, type MenuItem, type DietaryTag } from "@/lib/menu-data";
import { cn } from "@/lib/utils";

type Filter = "alle" | "V" | "VG" | "GF";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "alle", label: "Alle" },
  { id: "VG", label: "Vegan" },
  { id: "V", label: "Vegetarisch" },
  { id: "GF", label: "Glutenfrei" },
];

const CATEGORY_LABELS = {
  vorspeisen: "Vorspeisen",
  hauptgaenge: "Hauptgänge",
  desserts: "Desserts",
  getraenke: "Getränke",
};

const DIETARY_LABELS: Record<DietaryTag, string> = {
  V: "Vegetarisch",
  VG: "Vegan",
  GF: "Glutenfrei",
};

const DIETARY_COLORS: Record<DietaryTag, string> = {
  V: "bg-sage-pale text-sage",
  VG: "bg-sage-pale text-sage",
  GF: "bg-terracotta-pale text-terracotta",
};

function DietaryTag({ tag }: { tag: DietaryTag }) {
  return (
    <span
      className={cn(
        "inline-block px-1.5 py-0.5 rounded-sm text-[10px] font-medium tracking-wide font-sans",
        DIETARY_COLORS[tag]
      )}
      title={DIETARY_LABELS[tag]}
    >
      {tag}
    </span>
  );
}

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 py-5 border-b border-cream-border last:border-0"
    >
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h3 className="font-serif text-lg font-light text-charcoal">{item.name}</h3>
          {item.tags.map((tag) => (
            <DietaryTag key={tag} tag={tag} />
          ))}
        </div>
        <p className="text-sm text-charcoal-muted leading-relaxed max-w-lg">
          {item.description}
        </p>
      </div>
      <p className="font-sans text-base font-medium text-charcoal flex-shrink-0 sm:text-right">
        {item.price} {!item.price.includes("Anfrage") && "€"}
      </p>
    </motion.div>
  );
}

export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("alle");

  const filtered = useMemo(() => {
    if (activeFilter === "alle") return menuItems;
    return menuItems.filter((item) => item.tags.includes(activeFilter as DietaryTag));
  }, [activeFilter]);

  const categories = useMemo(
    () =>
      (["vorspeisen", "hauptgaenge", "desserts", "getraenke"] as const).filter((cat) =>
        filtered.some((item) => item.category === cat)
      ),
    [filtered]
  );

  return (
    <div className="pt-24 pb-20 min-h-screen">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <p className="label-sm text-charcoal-muted mb-4">Speisekarte</p>
        <h1 className="headline-lg text-charcoal mb-3">
          Was uns diese<br />
          <em className="not-italic text-terracotta">Wochen bewegt.</em>
        </h1>
        <p className="text-charcoal-muted text-sm">
          Gültig vom {menuValidFrom} – {menuValidTo} · Karte wechselt alle 2 Wochen
        </p>
        <p className="text-charcoal-muted text-xs mt-1">
          Bitte informieren Sie unser Team über Allergien und Unverträglichkeiten.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 mb-10 no-print">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveFilter(id)}
              className={cn(
                "label-sm px-5 py-2.5 rounded-sm border transition-all duration-200",
                activeFilter === id
                  ? "bg-charcoal text-cream border-charcoal"
                  : "border-cream-border text-charcoal-muted hover:border-charcoal-muted hover:text-charcoal bg-cream"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Active filter note */}
        {activeFilter !== "alle" && (
          <p className="mt-3 text-xs text-charcoal-muted">
            {filtered.length} Gericht{filtered.length !== 1 ? "e" : ""} für:{" "}
            <span className="font-medium text-charcoal">{DIETARY_LABELS[activeFilter as DietaryTag]}</span>
          </p>
        )}
      </div>

      {/* Menu by Category */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 print-menu">
        <AnimatePresence mode="wait">
          {categories.map((cat) => {
            const items = filtered.filter((item) => item.category === cat);
            return (
              <motion.section
                key={cat + activeFilter}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-12"
                aria-labelledby={`cat-${cat}`}
              >
                <div className="flex items-center gap-4 mb-2">
                  <h2
                    id={`cat-${cat}`}
                    className="label-sm text-charcoal-muted"
                  >
                    {CATEGORY_LABELS[cat]}
                  </h2>
                  <div className="flex-1 h-px bg-cream-border" />
                </div>

                <div>
                  {items.map((item) => (
                    <MenuItemRow key={item.id} item={item} />
                  ))}
                </div>
              </motion.section>
            );
          })}
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-charcoal-muted">
            <p className="font-serif text-2xl font-light mb-2">Keine Gerichte gefunden.</p>
            <button
              onClick={() => setActiveFilter("alle")}
              className="label-sm text-charcoal border-b border-charcoal/30 pb-0.5 mt-4"
            >
              Alle anzeigen
            </button>
          </div>
        )}
      </div>

      {/* Print / Download CTA */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 mt-12 pt-8 border-t border-cream-border no-print">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-charcoal">Karte mitnehmen?</p>
            <p className="text-xs text-charcoal-muted mt-0.5">
              Drucken oder als PDF speichern – optimiert für A4.
            </p>
          </div>
          <button
            onClick={() => window.print()}
            className="label-sm px-6 py-3 border border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-cream transition-all duration-200 rounded-sm"
          >
            Als PDF speichern / Drucken
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 mt-8">
        <div className="flex flex-wrap gap-4 text-xs text-charcoal-muted">
          <span>
            <span className="inline-block bg-sage-pale text-sage px-1.5 py-0.5 rounded-sm font-medium mr-1.5">V</span>
            Vegetarisch
          </span>
          <span>
            <span className="inline-block bg-sage-pale text-sage px-1.5 py-0.5 rounded-sm font-medium mr-1.5">VG</span>
            Vegan
          </span>
          <span>
            <span className="inline-block bg-terracotta-pale text-terracotta px-1.5 py-0.5 rounded-sm font-medium mr-1.5">GF</span>
            Glutenfrei
          </span>
        </div>
        <p className="text-xs text-charcoal-muted mt-3">
          Alle Preise in Euro inkl. MwSt. · Servicegebühr nicht inbegriffen. · Änderungen vorbehalten.
        </p>
      </div>
    </div>
  );
}
