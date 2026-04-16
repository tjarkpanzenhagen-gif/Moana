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
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navBg =
    isHome && !scrolled
      ? "bg-transparent"
      : "bg-cream/95 backdrop-blur-sm border-b border-cream-border";

  const textColor =
    isHome && !scrolled
      ? "text-cream"
      : "text-charcoal";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        navBg
      )}
    >
      <nav
        className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between"
        aria-label="Hauptnavigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "font-serif text-lg font-light tracking-wide transition-colors duration-300",
            textColor
          )}
          aria-label="Moana Creative Kitchen – Startseite"
        >
          Moana
          <span className="opacity-50 font-sans text-xs font-normal ml-1.5 tracking-widest uppercase">
            Creative Kitchen
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <OpenStatusBadge compact />
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "label-sm transition-colors duration-200 hover:opacity-70",
                textColor,
                pathname === href && "border-b border-current pb-0.5"
              )}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/reservierung"
            className={cn(
              "label-sm px-5 py-2.5 rounded-sm transition-all duration-200",
              isHome && !scrolled
                ? "bg-cream text-charcoal hover:bg-cream-dark"
                : "bg-charcoal text-cream hover:bg-charcoal-soft"
            )}
          >
            Tisch reservieren
          </Link>
        </div>

        {/* Mobile: Reserve + Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <Link
            href="/reservierung"
            className={cn(
              "label-sm px-4 py-2 rounded-sm transition-all duration-200",
              isHome && !scrolled
                ? "bg-cream text-charcoal"
                : "bg-charcoal text-cream"
            )}
          >
            Reservieren
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn("p-1 transition-colors", textColor)}
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileOpen}
          >
            <span className="sr-only">{mobileOpen ? "Schließen" : "Menü"}</span>
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
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-cream border-b border-cream-border",
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-5 py-6 flex flex-col gap-4">
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
    </header>
  );
}
