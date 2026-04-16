import type { Metadata } from "next";
import MenuPage from "./menu-page";

export const metadata: Metadata = {
  title: "Speisekarte",
  description:
    "Aktuelle Speisekarte von Moana Creative Kitchen, Stralsund. Saisonale Gerichte, vegetarisch, vegan, glutenfrei. Karte wechselt alle 2 Wochen.",
};

export default function KartePage() {
  return <MenuPage />;
}
