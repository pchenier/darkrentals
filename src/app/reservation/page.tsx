import type { Metadata } from "next";
import { BookingClient } from "@/components/BookingClient";

export const metadata: Metadata = {
  title: "Réservation — Réservez votre véhicule",
  description:
    "Réservez votre voiture de location à Montréal en quelques minutes. Formulaire simple, confirmation rapide.",
  alternates: {
    canonical: "https://darkrentals.com/reservation",
  },
};

export default function BookingPage() {
  return <BookingClient />;
}