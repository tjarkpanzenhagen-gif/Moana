import Image from "next/image";
import Link from "next/link";
import OpenStatusBadge from "@/components/open-status-badge";

const HERO_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85&auto=format&fit=crop",
    alt: "Elegant angerichtetes Gericht – Platzhalter für Restaurantfoto",
  },
  {
    src: "https://images.unsplash.com/photo-1559056961-1f0ca4ca03e4?w=1920&q=85&auto=format&fit=crop",
    alt: "Fine Dining Gericht im Close-Up – Platzhalter für Restaurantfoto",
  },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "85svh", minHeight: "520px" }}
      aria-label="Willkommensbereich"
    >
      {/* Crossfading Images with Ken Burns */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((img, i) => (
          <div
            key={img.src}
            className="absolute inset-0 overflow-hidden"
            style={{ zIndex: i === 0 ? 1 : 0 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className={`object-cover object-center ${i === 0 ? "hero-img-1" : "hero-img-2"}`}
            />
          </div>
        ))}
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(28,26,24,0.35) 0%, rgba(28,26,24,0.1) 40%, rgba(28,26,24,0.65) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-end pb-16 sm:pb-20 px-5 sm:px-8 max-w-7xl mx-auto w-full">
        {/* Open Status — top right (on desktop via absolute) */}
        <div className="absolute top-20 right-5 sm:right-8 no-print">
          <OpenStatusBadge />
        </div>

        {/* Headline Block */}
        <div className="max-w-2xl">
          <p className="label-sm text-cream/60 mb-4">
            Creative Kitchen · Stralsund
          </p>
          <h1 className="headline-xl text-cream mb-6">
            Eine Karte<br />
            die wechselt.<br />
            <em className="not-italic opacity-70">Genuss der bleibt.</em>
          </h1>

          {/* CTAs */}
          <div className="flex flex-col xs:flex-row gap-3">
            <Link
              href="/reservierung"
              className="inline-flex items-center justify-center bg-terracotta text-cream label-sm px-7 py-3.5 hover:bg-terracotta-light transition-colors duration-200 rounded-sm"
            >
              Tisch reservieren
            </Link>
            <Link
              href="/karte"
              className="inline-flex items-center justify-center border border-cream/40 text-cream label-sm px-7 py-3.5 hover:border-cream/80 hover:bg-cream/10 transition-all duration-200 rounded-sm backdrop-blur-sm"
            >
              Aktuelle Karte
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 right-8 hidden sm:flex flex-col items-center gap-2 opacity-40">
          <span className="label-sm text-cream rotate-90 origin-center mb-2">Scroll</span>
          <div className="w-px h-10 bg-cream/50 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full bg-cream animate-scroll-line"
              style={{
                height: "40%",
                animation: "scrollLine 2s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
