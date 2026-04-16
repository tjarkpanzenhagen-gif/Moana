"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { MenuItem, DietaryTag } from "@/lib/menu-data";
import { cn } from "@/lib/utils";

const DIETARY_LABELS: Record<DietaryTag, { label: string; title: string }> = {
  V: { label: "V", title: "Vegetarisch" },
  VG: { label: "VG", title: "Vegan" },
  GF: { label: "GF", title: "Glutenfrei" },
};

const DIETARY_COLORS: Record<DietaryTag, string> = {
  V: "bg-sage-pale text-sage",
  VG: "bg-sage-pale text-sage",
  GF: "bg-terracotta-pale text-terracotta",
};

function DietaryBadge({ tag }: { tag: DietaryTag }) {
  const { label, title } = DIETARY_LABELS[tag];
  return (
    <span
      className={cn(
        "inline-block px-1.5 py-0.5 rounded-sm text-[10px] font-medium tracking-wide font-sans",
        DIETARY_COLORS[tag]
      )}
      title={title}
      aria-label={title}
    >
      {label}
    </span>
  );
}

function DishCard({ dish }: { dish: MenuItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative flex flex-col bg-cream rounded-sm overflow-hidden border border-cream-border hover:border-sand transition-colors duration-300"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        {dish.image ? (
          <Image
            src={`https://images.unsplash.com/${dish.image}?w=600&q=80&auto=format&fit=crop`}
            alt={`${dish.name} – Platzhalter, wird durch echtes Restaurantfoto ersetzt`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-cream-dark flex items-center justify-center">
            <span className="label-sm text-charcoal-muted">Kein Foto</span>
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
      </div>

      {/* Text */}
      <div className="p-5 flex flex-col gap-2 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif text-lg font-light text-charcoal leading-tight">
            {dish.name}
          </h3>
          <span className="font-sans text-sm font-medium text-charcoal-soft flex-shrink-0 mt-0.5">
            {dish.price} €
          </span>
        </div>
        <p className="text-sm text-charcoal-muted leading-relaxed flex-1">
          {dish.description}
        </p>
        {dish.tags.length > 0 && (
          <div className="flex gap-1.5 mt-1">
            {dish.tags.map((tag) => (
              <DietaryBadge key={tag} tag={tag} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

interface Props {
  dishes: MenuItem[];
}

export default function DishCards({ dishes }: Props) {
  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
      >
        <div>
          <p className="label-sm text-charcoal-muted mb-3">Diese Woche auf der Karte</p>
          <h2 className="headline-lg text-charcoal">
            Was uns gerade<br />
            <em className="not-italic text-terracotta">bewegt.</em>
          </h2>
        </div>
        <div className="flex flex-col items-start sm:items-end gap-1">
          <p className="text-sm text-charcoal-muted">
            Karte wechselt alle 2 Wochen
          </p>
          <Link
            href="/karte"
            className="label-sm text-charcoal border-b border-charcoal/30 pb-0.5 hover:border-charcoal transition-colors"
          >
            Komplette Karte →
          </Link>
        </div>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {dishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </section>
  );
}
