export interface Car {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  seats: number;
  transmission: string;
  pricePerDay: number;
  pricePerWeek: number;
  image: string;
  description: string;
}

export const cars: Car[] = [
  {
    id: "chevrolet-spark",
    name: "Chevrolet Spark",
    category: "compact",
    categoryLabel: "Compacte",
    seats: 4,
    transmission: "Automatique",
    pricePerDay: 29,
    pricePerWeek: 169,
    image: "/images/cars/fleet-econ/chevrolet-spark.jpg",
    description:
      "La moins chère de la flotte. Petite, facile à stationner, parfaite pour la ville.",
  },
  {
    id: "hyundai-accent",
    name: "Hyundai Accent",
    category: "compact",
    categoryLabel: "Compacte",
    seats: 5,
    transmission: "Automatique",
    pricePerDay: 35,
    pricePerWeek: 199,
    image: "/images/cars/fleet-econ/hyundai-accent.jpg",
    description:
      "Économique et fiable. Le char parfait pour aller travailler toute la semaine sans te ruiner.",
  },
  {
    id: "kia-rio",
    name: "Kia Rio",
    category: "compact",
    categoryLabel: "Compacte",
    seats: 5,
    transmission: "Automatique",
    pricePerDay: 37,
    pricePerWeek: 209,
    image: "/images/cars/fleet-econ/kia-rio.jpg",
    description:
      "Petite berline agile, consommation ridicule. Idéale pour les déplacements urbains.",
  },
  {
    id: "nissan-versa",
    name: "Nissan Versa",
    category: "compact",
    categoryLabel: "Compacte",
    seats: 5,
    transmission: "Automatique",
    pricePerDay: 39,
    pricePerWeek: 229,
    image: "/images/cars/fleet-econ/nissan-versa.jpg",
    description:
      "Étonnamment spacieuse pour sa catégorie. Climatisation froide l'été, chaude l'hiver.",
  },
  {
    id: "honda-civic",
    name: "Honda Civic",
    category: "compact",
    categoryLabel: "Compacte",
    seats: 5,
    transmission: "Automatique",
    pricePerDay: 45,
    pricePerWeek: 259,
    image: "/images/cars/fleet-econ/honda-civic.jpg",
    description:
      "La valeur résiduelle du Québec en personne. Fiable, confortable, jamais de mauvaise surprise.",
  },
];

export const categories = [
  { key: "all", label: "Tous" },
  { key: "compact", label: "Compactes" },
];