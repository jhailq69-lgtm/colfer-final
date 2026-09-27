/**
 * Configuración global del sitio COLFER.
 */
export const siteConfig = {
  name: "COLFER",
  shortName: "COLFER",
  description:
    "Autopartes, accesorios, iluminación, audio y estética automotriz.",
  url: "https://colfer.example.com", // TODO: reemplazar con el dominio real
  locale: "es-BO",

  // Número oficial de WhatsApp de COLFER (Central Cochabamba).
  whatsappNumber: "71719941",

  contact: {
    email: "contacto@colfer.example.com", // TODO: reemplazar
    address: "Av. Aroma #987 esq. Tiahuanaco, Cochabamba, Bolivia",
  },

  // Sucursales adicionales de COLFER.
  branches: [
    {
      name: "Central Cochabamba",
      address: "Av. Aroma #987 esq. Tiahuanaco",
      whatsappNumber: "71719941",
    },
    {
      name: "Sucursal 1 Cochabamba",
      address: "Calle Huáscar y Av. Aroma",
      whatsappNumber: "71742699",
    },
    {
      name: "Sucursal Santa Cruz",
      address: "Doble Vía La Guardia esq. Yotaú",
      whatsappNumber: "68524203",
    },
  ],

  social: {
    facebook: "", // TODO
    instagram: "", // TODO
    tiktok: "", // TODO
  },
} as const;

export type SiteConfig = typeof siteConfig;
