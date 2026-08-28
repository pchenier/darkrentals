import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold gradient-text">404</h1>
        <p className="mt-4 text-lg text-foreground/60">
          Page introuvable. Ce véhicule a peut-être quitté le stationnement.
        </p>
        <Link
          href="/"
          className="neon-btn mt-8 inline-block rounded-lg px-8 py-3 text-sm font-semibold text-white"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}