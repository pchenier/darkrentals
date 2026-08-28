"use client";

import { useState } from "react";
import { cars, categories } from "@/data/cars";
import { CarCard } from "@/components/Fleet";

export function FleetClient() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCars =
    activeCategory === "all"
      ? cars
      : cars.filter((car) => car.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="border-b border-card-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Notre <span className="gradient-text">Flotte</span>
          </h1>
          <p className="mt-4 max-w-2xl text-foreground/60">
            Explorez notre gamme complète de véhicules. Des compactes
            économiques aux VUS spacieux, trouvez la voiture parfaite pour votre
            prochain voyage.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="border-b border-card-border py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat.key
                    ? "bg-neon-purple/20 text-neon-purple border border-neon-purple/50 neon-glow-purple"
                    : "border border-card-border text-foreground/60 hover:border-neon-purple/30 hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Car grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
          {filteredCars.length === 0 && (
            <p className="py-20 text-center text-foreground/40">
              Aucun véhicule trouvé dans cette catégorie.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}