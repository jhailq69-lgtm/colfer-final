import type { Service } from "@/types";

/**
 * Servicios de DEMOSTRACIÓN. No representan precios ni catálogo real
 * de COLFER. Reemplazar en la fase 2.
 */
export const serviciosDemo: Service[] = [
  {
    id: "s-001",
    slug: "limpieza-profunda-interior",
    categorySlug: "limpieza-interior",
    name: "Limpieza profunda de interior",
    description:
      "Limpieza completa de tapizados, alfombras, techo y tablero, con productos especializados para eliminar manchas y olores.",
    priceFrom: 120,
    durationMinutes: 120,
    images: [],
    isDemo: true,
  },
  {
    id: "s-002",
    slug: "detailing-interior-premium",
    categorySlug: "limpieza-interior",
    name: "Detailing interior premium",
    description:
      "Tratamiento integral: limpieza de cuero, eliminación de malos olores, desinfección y protección de superficies plásticas.",
    priceFrom: 220,
    durationMinutes: 180,
    images: [],
    isDemo: true,
  },
  {
    id: "s-003",
    slug: "pulido-encerado",
    categorySlug: "estetica-exterior",
    name: "Pulido y encerado",
    description:
      "Pulido de pintura para eliminar rayones finos y opacidad, seguido de encerado protector con acabado brillante.",
    priceFrom: 180,
    durationMinutes: 150,
    images: [],
    isDemo: true,
  },
  {
    id: "s-004",
    slug: "tratamiento-ceramico",
    categorySlug: "estetica-exterior",
    name: "Tratamiento cerámico",
    description:
      "Protección cerámica de larga duración: repele agua y suciedad, y realza el brillo de la pintura hasta por 12 meses.",
    priceFrom: 650,
    durationMinutes: 300,
    images: [],
    isDemo: true,
  },
  {
    id: "s-005",
    slug: "restauracion-faroles",
    categorySlug: "estetica-exterior",
    name: "Restauración de faroles",
    description:
      "Pulido y sellado de faroles opacos o amarillentos, recuperando transparencia y visibilidad nocturna.",
    priceFrom: 90,
    durationMinutes: 60,
    images: [],
    isDemo: true,
  },
  {
    id: "s-006",
    slug: "lavado-premium",
    categorySlug: "estetica-exterior",
    name: "Lavado premium",
    description:
      "Lavado exterior e interior con productos de alta calidad, secado a mano y aspirado completo.",
    priceFrom: 60,
    durationMinutes: 45,
    images: [],
    isDemo: true,
  },
];
