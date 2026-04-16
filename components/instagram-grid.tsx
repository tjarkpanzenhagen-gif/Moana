"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Placeholder Instagram posts – replace with real Instagram Basic Display API integration
const PLACEHOLDER_POSTS = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80&auto=format&fit=crop",
    alt: "Gericht auf dem Teller – Instagram Platzhalter",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80&auto=format&fit=crop",
    alt: "Gemüsegericht – Instagram Platzhalter",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&q=80&auto=format&fit=crop",
    alt: "Angerichteter Teller – Instagram Platzhalter",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80&auto=format&fit=crop",
    alt: "Dessert – Instagram Platzhalter",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=400&q=80&auto=format&fit=crop",
    alt: "Fine Dining Atmosphäre – Instagram Platzhalter",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80&auto=format&fit=crop",
    alt: "Vegetarisches Gericht – Instagram Platzhalter",
  },
];

export default function InstagramGrid() {
  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-7xl mx-auto w-full">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
      >
        <div>
          <p className="label-sm text-charcoal-muted mb-3">Instagram</p>
          <h2 className="headline-md text-charcoal">
            Aktuell auf<br />
            <em className="not-italic text-terracotta">@kitchen.moana</em>
          </h2>
        </div>
        <a
          href="https://www.instagram.com/kitchen.moana"
          target="_blank"
          rel="noopener noreferrer"
          className="label-sm text-charcoal border-b border-charcoal/30 pb-0.5 hover:border-charcoal transition-colors"
        >
          Zum Instagram-Profil →
        </a>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
        {PLACEHOLDER_POSTS.map((post, i) => (
          <motion.a
            key={post.id}
            href="https://www.instagram.com/kitchen.moana"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
            className="group relative overflow-hidden rounded-sm bg-cream-dark"
            style={{ aspectRatio: "1" }}
            aria-label={post.alt}
          >
            <Image
              src={post.src}
              alt={post.alt}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Instagram overlay icon on hover */}
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-300 flex items-center justify-center">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="white"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
          </motion.a>
        ))}
      </div>

      <p className="mt-4 text-xs text-charcoal-muted text-center">
        Platzhalter-Fotos · Echte Instagram-Posts werden via API eingebunden
      </p>
    </section>
  );
}
