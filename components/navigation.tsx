"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import OpenStatusBadge from "@/components/open-status-badge";

const links = [
  { href: "/karte", label: "Karte" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/finden", label: "Finden" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // On non-home pages always use the floating state
  const isFloating = scrolled || !isHome;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* ── Desktop Nav ─────────────────────────────────────────── */}
      <div
        className={cn(
          "hidden md:block transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          isFloating ? "pt-4 px-6" : "pt-0 px-0"
        )}
      >
        <nav
          className={cn(
            "flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
            isFloating
              ? "max-w-3xl mx-auto h-14 px-6 rounded-full bg-cream/95 backdrop-blur-md shadow-[0_4px_32px_rgba(28,26,24,0.12)] border border-cream-border"
              : "max-w-7xl mx-auto h-16 px-8"
          )}
          aria-label="Hauptnavigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "font-serif text-lg font-light tracking-wide transition-colors duration-300 flex-shrink-0",
              isFloating ? "text-charcoal" : "text-cream"
            )}
            aria-label="Moana Creative Kitchen – Startseite"
          >
            Moana
            <span className="opacity-40 font-sans text-xs font-normal ml-1.5 tracking-widest uppercase">
              CK
            </span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6">
            {!isFloating && <OpenStatusBadge compact />}
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "label-sm transition-colors duration-200 hover:opacity-60",
                  isFloating ? "text-charcoal" : "text-cream",
                  pathname === href && "border-b border-current pb-0.5"
                )}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/reservierung"
              className={cn(
                "label-sm px-5 py-2.5 transition-all duration-200",
                isFloating
                  ? "bg-charcoal text-cream hover:bg-charcoal-soft rounded-full"
                  : "bg-cream text-charcoal hover:bg-cream-dark rounded-sm"
              )}
            >
              Reservieren
            </Link>
          </div>
        </nav>
      </div>

      {/* ── Mobile Nav ──────────────────────────────────────────── */}
      <div
        className={cn(
          "md:hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          isFloating ? "pt-3 px-4" : "pt-0 px-0"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-500",
            isFloating
              ? "h-13 px-5 rounded-full bg-cream/95 backdrop-blur-md shadow-[0_4px_32px_rgba(28,26,24,0.12)] border border-cream-border"
              : "h-16 px-5 bg-transparent"
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "font-serif text-base font-light tracking-wide transition-colors duration-300",
              isFloating ? "text-charcoal" : "text-cream"
            )}
            aria-label="Moana Creative Kitchen"
          >
            Moana
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/reservierung"
              className={cn(
                "label-sm px-4 py-2 transition-all duration-200",
                isFloating
                  ? "bg-charcoal text-cream hover:bg-charcoal-soft rounded-full"
                  : "bg-cream text-charcoal rounded-sm"
              )}
            >
              Reservieren
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "p-1 transition-colors",
                isFloating ? "text-charcoal" : "text-cream"
              )}
              aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={mobileOpen}
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span
                  className={cn(
                    "block h-px bg-current transition-all duration-300 origin-center",
                    mobileOpen && "rotate-45 translate-y-[5px]"
                  )}
                />
                <span
                  className={cn(
                    "block h-px bg-current transition-all duration-300",
                    mobileOpen && "opacity-0 scale-x-0"
                  )}
                />
                <span
                  className={cn(
                    "block h-px bg-current transition-all duration-300 origin-center",
                    mobileOpen && "-rotate-45 -translate-y-[9px]"
                  )}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out mx-4 rounded-2xl mt-1",
            mobileOpen
              ? "max-h-80 opacity-100 bg-cream/95 backdrop-blur-md shadow-lg border border-cream-border"
              : "max-h-0 opacity-0"
          )}
        >
          <div className="px-5 py-5 flex flex-col gap-3">
            <OpenStatusBadge />
            <div className="h-px bg-cream-border" />
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "label-sm text-charcoal py-1 hover:text-terracotta transition-colors",
                  pathname === href && "text-terracotta"
                )}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
