import type { Category } from "@/types";

export const categorias: Category[] = [
  {
    id: "cat-autopartes",
    slug: "autopartes",
    name: "Autopartes",
    description:
      "Filtros, pastillas y discos de freno, bujías, correas, amortiguadores, baterías y repuestos de motor.",
  },
  {
    id: "cat-limpieza-interior",
    slug: "limpieza-interior",
    name: "Limpieza de interiores",
    description:
      "Limpieza profunda de tapizados, alfombras, techo, tablero y cuero. Detailing interior.",
  },
  {
    id: "cat-multimedia",
    slug: "multimedia",
    name: "Multimedia",
    description:
      "Pantallas multimedia, radios, equipos Android, CarPlay, parlantes, subwoofers y amplificadores.",
  },
  {
    id: "cat-faroles",
    slug: "faroles",
    name: "Faroles e iluminación",
    description:
      "Faroles delanteros y traseros, luces LED, focos, antiniebla y barras LED.",
  },
  {
    id: "cat-estetica-exterior",
    slug: "estetica-exterior",
    name: "Estética exterior",
    description:
      "Pulido, encerado, tratamiento cerámico, restauración de plásticos y faroles, lavado premium.",
  },
  {
    id: "cat-accesorios",
    slug: "accesorios",
    name: "Accesorios",
    description:
      "Alfombras, fundas, soportes, cámaras de retroceso, sensores y organizadores.",
  },
];

export function getCategoria(slug: string) {
  return categorias.find((c) => c.slug === slug);
}
