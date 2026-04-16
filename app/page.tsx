import type { Metadata } from "next";
import Hero from "@/components/hero";
import DishCards from "@/components/dish-cards";
import Philosophie from "@/components/philosophie";
import InstagramGrid from "@/components/instagram-grid";
import Testimonials from "@/components/testimonials";
import ReservationCta from "@/components/reservation-cta";
import { featuredDishes } from "@/lib/menu-data";

export const metadata: Metadata = {
  title: "Moana – Creative Kitchen | Stralsund",
  description:
    "Casual Fine Dining in Stralsunds Altstadt. Saisonale, kreative Küche mit wechselnder Karte alle 2 Wochen. Dienstag–Samstag, 16–21:30 Uhr.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <DishCards dishes={featuredDishes} />
      <Philosophie />
      <InstagramGrid />
      <Testimonials />
      <ReservationCta />
    </>
  );
}
