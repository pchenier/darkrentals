import Image from "next/image";
import Link from "next/link";
import { cars } from "@/data/cars";
import type { Car } from "@/data/cars";

export function CarCard({ car }: { car: Car }) {
  return (
    <div className="neon-card rounded-xl bg-card-bg overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={car.image}
          alt={car.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card-bg/80 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-neon-purple/20 px-3 py-1 text-xs font-medium text-neon-purple backdrop-blur-sm border border-neon-purple/30">
          {car.categoryLabel}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-foreground">{car.name}</h3>
        <p className="mt-1 text-sm text-foreground/60">{car.description}</p>
        <div className="mt-4 flex items-center gap-4 text-xs text-foreground/50">
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {car.seats} places
          </span>
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {car.transmission}
          </span>
        </div>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <span className="text-2xl font-bold text-neon-purple">{car.pricePerDay}$</span>
            <span className="text-sm text-foreground/50">/jour</span>
          </div>
          <Link
            href={`/reservation?car=${car.id}`}
            className="neon-btn rounded-lg px-4 py-2 text-sm font-semibold text-white"
          >
            Réserver
          </Link>
        </div>
      </div>
    </div>
  );
}

export function FleetPreview() {
  const featured = cars.filter((_, i) => i < 4);
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Notre <span className="gradient-text">Flotte</span>
          </h2>
          <p className="mt-4 text-foreground/60">
            Des véhicules pour tous les besoins et tous les budgets.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/flotte"
            className="inline-block rounded-lg border border-neon-purple/30 px-8 py-3 text-sm font-semibold text-neon-purple transition-all hover:border-neon-purple hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          >
            Voir toute la flotte →
          </Link>
        </div>
      </div>
    </section>
  );
}