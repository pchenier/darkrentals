import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — Qui sommes-nous",
  description:
    "Découvrez DarkRentals, votre partenaire de location de voitures à Montréal et au Québec. Service fiable, prix abordables, flotte variée.",
  alternates: {
    canonical: "https://darkrentals.com/a-propos",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="border-b border-card-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            À propos de <span className="gradient-text">DarkRentals</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground/60">
            Votre partenaire de confiance pour la location de voitures au Québec
            depuis 2020.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">
                Notre <span className="text-neon-purple">histoire</span>
              </h2>
              <div className="mt-4 space-y-4 text-foreground/70">
                <p>
                  DarkRentals est né d&apos;une idée simple : rendre la location
                  de voiture accessible, transparente et sans tracas pour tous
                  les Québécois. Fondée à Montréal en 2020, nous avons grandi
                  pour devenir l&apos;un des services de location les plus fiables
                  de la province.
                </p>
                <p>
                  Notre nom reflète notre style — audacieux, différent, et sans
                  prétention. Pas de frais cachés dans l&apos;ombre, pas de
                  surprises au comptoir. Juste des voitures fiables à des prix
                  honnêtes.
                </p>
                <p>
                  De la compacte économique pour vos déplacements urbains au VUS
                  familial pour vos vacances en Charlevoix, nous avons le
                  véhicule qu&apos;il vous faut.
                </p>
              </div>
            </div>
            <div className="neon-card rounded-xl bg-card-bg p-8">
              <h3 className="text-xl font-bold text-neon-cyan">
                DarkRentals en chiffres
              </h3>
              <div className="mt-6 space-y-6">
                {[
                  { value: "500+", label: "Véhicules dans la flotte" },
                  { value: "50K+", label: "Locations réalisées" },
                  { value: "8", label: "Points de service au Québec" },
                  { value: "99%", label: "Taux de satisfaction client" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between border-b border-card-border pb-4 last:border-0 last:pb-0"
                  >
                    <span className="text-2xl font-bold gradient-text">
                      {stat.value}
                    </span>
                    <span className="text-sm text-foreground/60">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="border-t border-card-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Zone de <span className="gradient-text">couverture</span>
            </h2>
            <p className="mt-4 text-foreground/60">
              Nous desservons Montréal et toutes les régions du Québec.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { city: "Montréal", desc: "Centre-ville, YUL, Berri-UQAM" },
              { city: "Québec", desc: "Centre-ville, YQB, Sainte-Foy" },
              { city: "Laval", desc: "Carrefour, Centropolis" },
              { city: "Gatineau", desc: "Centre-ville, Ottawa nearby" },
              { city: "Sherbrooke", desc: "Université, Centre-ville" },
              { city: "Trois-Rivières", desc: "Centre-ville, A40" },
              { city: "Saguenay", desc: "Chicoutimi, Jonquière" },
              { city: "Rimouski", desc: "Centre-ville, UQAR" },
            ].map((loc) => (
              <div
                key={loc.city}
                className="neon-card rounded-xl bg-card-bg p-5"
              >
                <h3 className="font-bold text-foreground">{loc.city}</h3>
                <p className="mt-1 text-sm text-foreground/50">{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-card-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Nos <span className="gradient-text">valeurs</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: "🖤",
                title: "Transparence totale",
                desc: "Pas de frais cachés, pas de surprises. Notre prix affiché est le prix final.",
              },
              {
                icon: "⚡",
                title: "Service rapide",
                desc: "Prise en charge en moins de 15 minutes. Réservation confirmée instantanément.",
              },
              {
                icon: "🛡️",
                title: "Fiabilité avant tout",
                desc: "Véhicules entretenus rigoureusement. Assistance routière 24/7 incluse.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="neon-card rounded-xl bg-card-bg p-8 text-center"
              >
                <span className="text-4xl">{value.icon}</span>
                <h3 className="mt-4 text-xl font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm text-foreground/60">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}