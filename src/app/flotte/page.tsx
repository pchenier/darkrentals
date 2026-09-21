import type { Metadata } from "next";
import { FleetClient } from "@/components/FleetClient";

export const metadata: Metadata = {
  title: "Flotte — Nos véhicules disponibles",
  description:
    "Explorez notre flotte de véhicules de location à Montréal. Des compactes économiques à prix abordables.",
  alternates: {
    canonical: "https://darkrentals.com/flotte",
  },
};

export default function FleetPage() {
  return <FleetClient />;
}