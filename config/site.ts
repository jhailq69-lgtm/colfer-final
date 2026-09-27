/**
 * Configuración global del sitio COLFER.
 *
 * IMPORTANTE: WHATSAPP_NUMBER queda como placeholder hasta que
 * proporciones el número oficial de COLFER. Debe ir en formato
 * internacional SIN "+" ni espacios, ej: "59171234567".
 */
export const siteConfig = {
  name: "COLFER",
  shortName: "COLFER",
  description:
    "Autopartes, accesorios, iluminación, audio y estética automotriz.",
  url: "https://colfer.example.com", // TODO: reemplazar con el dominio real
  locale: "es-BO",

  // TODO: Reemplazar con el número oficial de WhatsApp de COLFER.
  // Formato: código de país + número, sin "+", sin espacios, sin guiones.
  // Ejemplo Bolivia: "59171234567"
  whatsappNumber: "",

  contact: {
    email: "contacto@colfer.example.com", // TODO: reemplazar
    address: "Cochabamba, Bolivia", // TODO: reemplazar con dirección real
  },

  social: {
    facebook: "", // TODO
    instagram: "", // TODO
    tiktok: "", // TODO
  },
} as const;

export type SiteConfig = typeof siteConfig;
