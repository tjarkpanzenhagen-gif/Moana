import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import CookieBanner from "@/components/cookie-banner";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const BASE_URL = "https://moana-kitchen.de";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Moana – Creative Kitchen | Stralsund",
    template: "%s | Moana Creative Kitchen",
  },
  description:
    "Casual Fine Dining in Stralsunds Altstadt. Saisonale Küche, wechselnde Karte alle 2 Wochen. Dienstag–Samstag, 16–21:30 Uhr. Heilgeiststraße 92.",
  keywords: [
    "Restaurant Stralsund",
    "Fine Dining Stralsund",
    "Creative Kitchen",
    "Veganes Restaurant Stralsund",
    "Saisonale Küche",
    "Moana Kitchen",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: BASE_URL,
    siteName: "Moana – Creative Kitchen",
    title: "Moana – Creative Kitchen | Stralsund",
    description:
      "Eine Karte die wechselt. Genuss der bleibt. Casual Fine Dining in Stralsunds Altstadt.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Moana Creative Kitchen – Stralsund",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moana – Creative Kitchen | Stralsund",
    description: "Eine Karte die wechselt. Genuss der bleibt.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const schemaOrgRestaurant = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Moana – Creative Kitchen",
  description:
    "Casual Fine Dining in Stralsund. Saisonale, kreative Küche mit regionalen Zutaten. Karte wechselt alle 2 Wochen.",
  url: BASE_URL,
  telephone: "+49-[TELEFONNUMMER]",
  email: "info@moana-kitchen.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Heilgeiststraße 92",
    addressLocality: "Stralsund",
    postalCode: "18439",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "54.3112",
    longitude: "13.0926",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "16:00",
      closes: "21:30",
    },
  ],
  servesCuisine: ["Creative Kitchen", "Modern European", "Vegetarian", "Vegan"],
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Credit Card",
  sameAs: ["https://www.instagram.com/kitchen.moana"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${fraunces.variable} ${dmSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgRestaurant) }}
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen flex flex-col bg-cream text-charcoal">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
