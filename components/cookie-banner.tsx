"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("moana-cookies-accepted");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("moana-cookies-accepted", "true");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("moana-cookies-accepted", "false");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6",
        "flex justify-center",
        "pointer-events-none"
      )}
      role="dialog"
      aria-label="Cookie-Einstellungen"
      aria-modal="false"
    >
      <div className="pointer-events-auto bg-charcoal text-cream max-w-2xl w-full rounded-sm shadow-2xl p-5 sm:p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="flex-1">
          <p className="label-sm text-cream/50 mb-1">Datenschutz</p>
          <p className="text-sm text-cream/80 leading-relaxed">
            Diese Website verwendet notwendige Cookies für eine optimale Nutzererfahrung.
            Mehr dazu in unserer{" "}
            <Link href="/datenschutz" className="underline hover:text-cream transition-colors">
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="label-sm px-4 py-2 border border-cream/20 text-cream/60 hover:border-cream/40 hover:text-cream transition-colors rounded-sm"
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="label-sm px-4 py-2 bg-terracotta text-cream hover:bg-terracotta-light transition-colors rounded-sm"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
