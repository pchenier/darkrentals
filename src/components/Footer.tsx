import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-card-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="text-xl font-bold gradient-text">DarkRentals</span>
            <p className="mt-3 text-sm text-foreground/60">
              Location de voitures abordables à Montréal et partout au Québec.
              Conduisez le style, pas le prix.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neon-purple">
              Navigation
            </h3>
            <ul className="mt-3 space-y-2">
              {[
                { href: "/", label: "Accueil" },
                { href: "/flotte", label: "Flotte" },
                { href: "/reservation", label: "Réservation" },
                { href: "/a-propos", label: "À propos" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/60 transition-colors hover:text-neon-cyan"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neon-purple">
              Contact
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-foreground/60">
              <li>📞 (514) 555-0199</li>
              <li>✉️ info@darkrentals.com</li>
              <li>📍 1234 Rue Sainte-Catherine, Montréal, QC</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neon-purple">
              Heures d&apos;ouverture
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-foreground/60">
              <li>Lun – Ven : 8h – 20h</li>
              <li>Samedi : 9h – 18h</li>
              <li>Dimanche : 10h – 16h</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-card-border pt-8 text-center text-xs text-foreground/40">
          © {new Date().getFullYear()} DarkRentals. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}