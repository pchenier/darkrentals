import Link from "next/link";
import { FleetPreview } from "@/components/Fleet";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DarkRentals — Location de voitures à Montréal | Québec",
  description:
    "Location de voitures abordables à Montréal et partout au Québec. Compactes, berlines, VUS, minibus et camions. Réservez en ligne dès maintenant.",
  alternates: {
    canonical: "https://darkrentals.com",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "DarkRentals",
    description:
      "Location de voitures abordables à Montréal et partout au Québec.",
    url: "https://darkrentals.com",
    telephone: "+1-514-555-0199",
    email: "info@darkrentals.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1234 Rue Sainte-Catherine",
      addressLocality: "Montréal",
      addressRegion: "QC",
      postalCode: "H3B 1B3",
      addressCountry: "CA",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    areaServed: {
      "@type": "State",
      name: "Québec",
    },
    priceRange: "$$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden grid-bg">
        {/* Gradient orbs */}
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-neon-purple/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-neon-cyan/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-purple via-electric-blue to-neon-cyan" />

        <div className="scanlines absolute inset-0" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-block rounded-full border border-neon-purple/30 bg-neon-purple/10 px-4 py-1 text-xs font-medium text-neon-purple">
              🚗 Montréal • Québec
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Louez. <span className="gradient-text">Conduisez.</span>
              <br />
              Dominez la route.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/60 sm:text-xl">
              Des voitures abordables pour Montréal et tout le Québec.
              Compactes, berlines, VUS — votre prochaine voiture vous attend
              dans l&apos;ombre.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/reservation"
                className="neon-btn rounded-lg px-8 py-4 text-center text-base font-bold text-white"
              >
                Réserver maintenant
              </Link>
              <Link
                href="/flotte"
                className="inline-flex items-center justify-center rounded-lg border border-foreground/20 px-8 py-4 text-base font-medium text-foreground transition-colors hover:border-neon-cyan/50 hover:text-neon-cyan"
              >
                Voir la flotte →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Preview */}
      <FleetPreview />

      {/* Features */}
      <section className="border-t border-card-border py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Pourquoi <span className="gradient-text">DarkRentals</span> ?
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "💰",
                title: "Prix imbattables",
                desc: "Des tarifs compétitifs sans frais cachés. Ce que vous voyez est ce que vous payez.",
              },
              {
                icon: "🗺️",
                title: "Couverture Québec",
                desc: "Disponible à Montréal, Québec, Laval, Gatineau et partout au Québec.",
              },
              {
                icon: "⚡",
                title: "Réservation rapide",
                desc: "Réservez en ligne en quelques minutes. Confirmation instantanée.",
              },
              {
                icon: "🛡️",
                title: "Assurance incluse",
                desc: "Assurance responsabilité incluse dans tous nos forfaits de location.",
              },
              {
                icon: "🔄",
                title: "Flexibilité totale",
                desc: "Location journalière, hebdomadaire ou mensuelle. Annulation gratuite 24h.",
              },
              {
                icon: "🚗",
                title: "Flotte variée",
                desc: "Compactes, berlines, VUS, minibus et camions — on a ce qu'il vous faut.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="neon-card rounded-xl bg-card-bg p-6"
              >
                <span className="text-3xl">{feature.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-foreground/60">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-card-border py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Prêt à <span className="gradient-text">prendre la route</span> ?
          </h2>
          <p className="mt-4 text-foreground/60">
            Réservez votre voiture en quelques clics et profitez de nos tarifs
            exclusifs.
          </p>
          <div className="mt-8">
            <Link
              href="/reservation"
              className="neon-btn inline-block rounded-lg px-10 py-4 text-lg font-bold text-white"
            >
              Réserver maintenant
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}