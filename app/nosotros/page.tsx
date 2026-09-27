import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Wrench, Users, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsappButton } from "@/components/ui/WhatsappButton";
import { whatsappUrlGeneral } from "@/services/whatsapp";

export const metadata: Metadata = {
  title: "Nosotros",
  description: `Conoce ${siteConfig.name}, tu tienda de autopartes, accesorios y estética automotriz.`,
};

const values = [
  {
    icon: Wrench,
    title: "Especialistas en autopartes",
    description:
      "Trabajamos con repuestos, accesorios, iluminación y audio para todo tipo de vehículo.",
  },
  {
    icon: ShieldCheck,
    title: "Calidad respaldada",
    description:
      "Seleccionamos marcas confiables para ofrecerte productos duraderos y con garantía.",
  },
  {
    icon: Users,
    title: "Atención cercana",
    description:
      "Te asesoramos directamente por WhatsApp para encontrar lo que tu vehículo necesita.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-4xl px-4 py-16 text-center md:px-6">
        <span className="inline-flex items-center rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-colfer-white/60">
          Sobre nosotros
        </span>
        <h1 className="font-display mt-4 text-3xl font-bold text-colfer-white sm:text-4xl">
          Todo para tu vehículo, con la confianza de {siteConfig.name}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-colfer-white/60 md:text-base">
          {siteConfig.name} nace para ofrecer un solo lugar donde encontrar
          autopartes, accesorios, iluminación, audio y servicios de estética
          automotriz — con atención directa y personalizada por WhatsApp.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {values.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-start gap-3 rounded-xl border border-white/10 bg-colfer-dark p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-colfer-accent/10 text-colfer-accent">
                <item.icon size={22} />
              </span>
              <h2 className="text-base font-semibold text-colfer-white">
                {item.title}
              </h2>
              <p className="text-sm text-colfer-white/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-colfer-dark/40 py-14">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-4 text-center md:px-6">
          <span className="flex items-center gap-2 text-sm text-colfer-white/60">
            <MapPin size={16} />
            {siteConfig.contact.address}
          </span>
          <h2 className="font-display text-2xl font-bold text-colfer-white">
            ¿Buscas algo en particular?
          </h2>
          <p className="max-w-md text-sm text-colfer-white/60">
            Escríbenos por WhatsApp y te ayudamos a encontrarlo, o revisa
            nuestro catálogo completo.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <WhatsappButton href={whatsappUrlGeneral()} />
            <Link
              href="/productos"
              className="inline-flex items-center justify-center rounded-md border border-white/15 px-5 py-2.5 text-sm font-semibold text-colfer-white hover:bg-white/5"
            >
              Ver catálogo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
