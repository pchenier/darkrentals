import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Rejoignez-nous",
  description:
    "Contactez DarkRentals par téléphone, courriel ou en personne à nos succursales de Montréal et Québec.",
  alternates: {
    canonical: "https://darkrentals.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="border-b border-card-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            <span className="gradient-text">Contact</span>
          </h1>
          <p className="mt-4 max-w-2xl text-foreground/85">
            Une question ? Besoin d&apos;aide ? Nous sommes là pour vous.
          </p>
        </div>
      </section>

      {/* Contact methods */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "📞",
                title: "Téléphone",
                lines: [
                  "Réservations : (514) 555-0199",
                  "Service client : (514) 555-0200",
                  "Urgence routière : (514) 555-0299",
                ],
                accent: "neon-purple",
              },
              {
                icon: "✉️",
                title: "Courriel",
                lines: [
                  "Réservations : reservation@darkrentals.com",
                  "Info générale : info@darkrentals.com",
                  "Support : support@darkrentals.com",
                ],
                accent: "neon-cyan",
              },
              {
                icon: "💬",
                title: "Clavardage en direct",
                lines: [
                  "Disponible Lun-Ven : 8h-20h",
                  "Sam : 9h-18h | Dim : 10h-16h",
                  "Réponse en moins de 5 minutes",
                ],
                accent: "electric-blue",
              },
            ].map((method) => (
              <div
                key={method.title}
                className="neon-card rounded-xl bg-card-bg p-8"
              >
                <span className="text-4xl">{method.icon}</span>
                <h2
                  className={`mt-4 text-xl font-bold text-${method.accent}`}
                >
                  {method.title}
                </h2>
                <ul className="mt-3 space-y-2">
                  {method.lines.map((line) => (
                    <li key={line} className="text-sm text-foreground/85">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="border-t border-card-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Nos <span className="gradient-text">succursales</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Montréal — Centre-ville",
                address: "1234 Rue Sainte-Catherine Ouest",
                city: "Montréal, QC H3B 1B3",
                hours: "Lun-Ven : 8h-20h | Sam : 9h-18h | Dim : 10h-16h",
              },
              {
                name: "Montréal — Aéroport YUL",
                address: "975 Romeo-Vachon Nord",
                city: "Dorval, QC H4Y 1H1",
                hours: "Ouvert 24h/24, 7j/7",
              },
              {
                name: "Montréal — Berri-UQAM",
                address: "500 Rue Sainte-Catherine Est",
                city: "Montréal, QC H2L 2C6",
                hours: "Lun-Ven : 8h-20h | Sam : 9h-18h",
              },
              {
                name: "Québec — Centre-ville",
                address: "850 Boulevard René-Lévesque Ouest",
                city: "Québec, QC G1S 1S5",
                hours: "Lun-Ven : 8h-20h | Sam : 9h-18h | Dim : 10h-16h",
              },
              {
                name: "Québec — Aéroport YQB",
                address: "50 Rue Principale",
                city: "Sainte-Foy, QC G2G 1J4",
                hours: "Ouvert 24h/24, 7j/7",
              },
              {
                name: "Laval",
                address: "3030 Boulevard le Carrefour",
                city: "Laval, QC H7T 1C6",
                hours: "Lun-Ven : 8h-20h | Sam : 9h-18h",
              },
            ].map((loc) => (
              <div
                key={loc.name}
                className="neon-card rounded-xl bg-card-bg p-6"
              >
                <h3 className="text-lg font-bold text-foreground">
                  {loc.name}
                </h3>
                <p className="mt-2 text-sm text-foreground/85">{loc.address}</p>
                <p className="text-sm text-foreground/85">{loc.city}</p>
                <div className="mt-3 border-t border-card-border pt-3">
                  <p className="text-xs text-foreground/75">{loc.hours}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-card-border py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Questions <span className="gradient-text">fréquentes</span>
            </h2>
          </div>
          <div className="mt-12 space-y-4">
            {[
              {
                q: "Quels documents sont requis pour louer ?",
                a: "Permis de conduire valide, carte de crédit et pièce d'identité. Les résidents du Québec doivent avoir leur permis depuis au moins 1 an.",
              },
              {
                q: "Puis-je retourner le véhicule dans une autre succursale ?",
                a: "Oui ! Nous offrons le retour inter-succursales sans frais supplémentaires pour toutes les locations de 3 jours et plus.",
              },
              {
                q: "Y a-t-il une limite de kilométrage ?",
                a: "Toutes nos locations incluent un kilométrage illimité au Québec. Des frais s'appliquent pour les trajets hors province.",
              },
              {
                q: "Quel est l'âge minimum pour louer ?",
                a: "L'âge minimum est de 21 ans. Les conducteurs de 21-24 ans sont soumis à un supplément jeune conducteur de 10$/jour.",
              },
              {
                q: "L'assurance est-elle incluse ?",
                a: "L'assurance responsabilité de base est incluse. Des couverture supplémentaires (collision, vol) sont disponibles en option.",
              },
              {
                q: "Puis-je conduire hors du Québec ?",
                a: "Oui, vous pouvez conduire partout au Canada et aux États-Unis. Signalez-le simplement à la réservation pour que votre contrat soit ajusté gratuitement.",
              },
              {
                q: "Quelles sont les politiques d'annulation ?",
                a: "Annulation gratuite jusqu'à 24 heures avant la prise du véhicule. Après ce délai, une journée de location vous sera facturée.",
              },
              {
                q: "Que dois-je vérifier au retour du véhicule ?",
                a: "Le char doit être retourné avec le même niveau d'essence qu'au départ et en bon état. Un agent fait l'inspection avec vous en 5 minutes et vous recevez votre dépôt le jour même.",
              },
              {
                q: "Y a-t-il des frais cachés ?",
                a: "Non. Le prix affiché est le prix final : assurance de base, kilométrage illimité et taxes inclus. Seules les options que vous choisissez (GPS, siège d'enfant, deuxième conducteur) s'ajoutent au total.",
              },
              {
                q: "Offrez-vous des tarifs longue durée ?",
                a: "Oui. À partir de 7 jours, le tarif hebdomadaire s'applique automatiquement et vous économisez environ 20 % par rapport au tarif journalier. Pour un mois et plus, contactez-nous pour un prix sur mesure.",
              },
              {
                q: "Le véhicule est-il équipé pour l'hiver ?",
                a: "Toute la flotte est équipée de pneus d'hiver dès le 1er décembre, conformément à la loi québécoise. Balai à neige et grattoir sont aussi fournis sans frais pendant la saison.",
              },
              {
                q: "Puis-je ajouter un deuxième conducteur ?",
                a: "Oui, pour 5 $ par jour. Le conducteur additionnel doit présenter son permis valide au comptoir lors de la prise du véhicule.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="neon-card rounded-xl bg-card-bg p-6"
              >
                <h3 className="font-bold text-foreground">{faq.q}</h3>
                <p className="mt-2 text-sm text-foreground/85">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}