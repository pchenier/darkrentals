"use client";

import { useState } from "react";
import { cars, categories } from "@/data/cars";

export function BookingClient() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    carType: "",
    carId: "",
    pickupLocation: "montreal-centre",
    pickupDate: "",
    returnDate: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="neon-card rounded-xl bg-card-bg p-12 text-center max-w-md">
          <div className="text-5xl">✅</div>
          <h2 className="mt-4 text-2xl font-bold gradient-text">
            Réservation envoyée !
          </h2>
          <p className="mt-3 text-foreground/60">
            Merci, {formData.name} ! Nous vous contacterons sous peu pour
            confirmer votre réservation.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="neon-btn mt-6 rounded-lg px-6 py-3 text-sm font-semibold text-white"
          >
            Nouvelle réservation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="border-b border-card-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            <span className="gradient-text">Réservation</span>
          </h1>
          <p className="mt-4 max-w-2xl text-foreground/60">
            Remplissez le formulaire ci-dessous pour réserver votre véhicule.
            Confirmation rapide garantie.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal info */}
            <div className="neon-card rounded-xl bg-card-bg p-6">
              <h2 className="text-lg font-bold text-neon-purple">
                Informations personnelles
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium text-foreground/70"
                  >
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="neon-input w-full rounded-lg bg-input-bg px-4 py-3 text-sm text-foreground placeholder:text-foreground/30"
                    placeholder="Jean Tremblay"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1 block text-sm font-medium text-foreground/70"
                  >
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="neon-input w-full rounded-lg bg-input-bg px-4 py-3 text-sm text-foreground placeholder:text-foreground/30"
                    placeholder="(514) 555-0123"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-foreground/70"
                  >
                    Courriel
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="neon-input w-full rounded-lg bg-input-bg px-4 py-3 text-sm text-foreground placeholder:text-foreground/30"
                    placeholder="jean@exemple.com"
                  />
                </div>
              </div>
            </div>

            {/* Vehicle selection */}
            <div className="neon-card rounded-xl bg-card-bg p-6">
              <h2 className="text-lg font-bold text-neon-cyan">
                Choix du véhicule
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="carType"
                    className="mb-1 block text-sm font-medium text-foreground/70"
                  >
                    Catégorie *
                  </label>
                  <select
                    id="carType"
                    name="carType"
                    required
                    value={formData.carType}
                    onChange={handleChange}
                    className="neon-input w-full rounded-lg bg-input-bg px-4 py-3 text-sm text-foreground"
                  >
                    <option value="">Sélectionner une catégorie</option>
                    {categories
                      .filter((c) => c.key !== "all")
                      .map((cat) => (
                        <option key={cat.key} value={cat.key}>
                          {cat.label}
                        </option>
                      ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="carId"
                    className="mb-1 block text-sm font-medium text-foreground/70"
                  >
                    Véhicule préféré
                  </label>
                  <select
                    id="carId"
                    name="carId"
                    value={formData.carId}
                    onChange={handleChange}
                    className="neon-input w-full rounded-lg bg-input-bg px-4 py-3 text-sm text-foreground"
                  >
                    <option value="">Tous les véhicules disponibles</option>
                    {cars
                      .filter(
                        (c) =>
                          !formData.carType || c.category === formData.carType
                      )
                      .map((car) => (
                        <option key={car.id} value={car.id}>
                          {car.name} — {car.pricePerDay}$/jour
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Dates & Location */}
            <div className="neon-card rounded-xl bg-card-bg p-6">
              <h2 className="text-lg font-bold text-electric-blue">
                Dates et lieu de prise en charge
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="pickupDate"
                    className="mb-1 block text-sm font-medium text-foreground/70"
                  >
                    Date de début *
                  </label>
                  <input
                    type="date"
                    id="pickupDate"
                    name="pickupDate"
                    required
                    value={formData.pickupDate}
                    onChange={handleChange}
                    className="neon-input w-full rounded-lg bg-input-bg px-4 py-3 text-sm text-foreground"
                  />
                </div>
                <div>
                  <label
                    htmlFor="returnDate"
                    className="mb-1 block text-sm font-medium text-foreground/70"
                  >
                    Date de retour *
                  </label>
                  <input
                    type="date"
                    id="returnDate"
                    name="returnDate"
                    required
                    value={formData.returnDate}
                    onChange={handleChange}
                    className="neon-input w-full rounded-lg bg-input-bg px-4 py-3 text-sm text-foreground"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="pickupLocation"
                    className="mb-1 block text-sm font-medium text-foreground/70"
                  >
                    Lieu de prise en charge *
                  </label>
                  <select
                    id="pickupLocation"
                    name="pickupLocation"
                    required
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    className="neon-input w-full rounded-lg bg-input-bg px-4 py-3 text-sm text-foreground"
                  >
                    <option value="montreal-centre">Montréal — Centre-ville</option>
                    <option value="montreal-aeroport">
                      Montréal — Aéroport YUL
                    </option>
                    <option value="montreal-berri">Montréal — Berri-UQAM</option>
                    <option value="laval">Laval</option>
                    <option value="quebec-ville">Québec — Centre-ville</option>
                    <option value="quebec-aeroport">
                      Québec — Aéroport YQB
                    </option>
                    <option value="gatineau">Gatineau</option>
                    <option value="sherbrooke">Sherbrooke</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="neon-card rounded-xl bg-card-bg p-6">
              <label
                htmlFor="notes"
                className="mb-1 block text-sm font-medium text-foreground/70"
              >
                Notes supplémentaires
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                value={formData.notes}
                onChange={handleChange}
                className="neon-input w-full rounded-lg bg-input-bg px-4 py-3 text-sm text-foreground placeholder:text-foreground/30"
                placeholder="Sièges d'enfant, équipements spéciaux, etc."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="neon-btn w-full rounded-lg py-4 text-lg font-bold text-white"
            >
              Confirmer la réservation
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}