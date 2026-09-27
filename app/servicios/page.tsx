import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllServices } from "@/services/services";
import { categorias } from "@/data/categorias";
import { ServiceCard } from "@/components/servicios/ServiceCard";
import { CategoryIcon } from "@/components/ui/CategoryIcon";

export const metadata: Metadata = {
  title: "Servicios de estética automotriz",
  description:
    "Limpieza interior, detailing, pulido, tratamiento cerámico y más servicios para tu vehículo en COLFER.",
};

const serviceCategories = categorias.filter(
  (c) => c.slug === "limpieza-interior" || c.slug === "estetica-exterior"
);

export default async function ServicesPage() {
  const services = await getAllServices();

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 md:px-6">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-colfer-white">
          Servicios
        </h1>
        <p className="mt-1 max-w-2xl text-sm text-colfer-white/50">
          Cuidamos tu vehículo por dentro y por fuera. Elige una categoría o
          revisa todos nuestros servicios.
        </p>
      </div>

      <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {serviceCategories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/servicios/${cat.slug}`}
            className="group flex items-center justify-between rounded-xl border border-white/10 bg-colfer-dark p-5 transition-colors hover:border-colfer-accent/50"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-colfer-accent/10 text-colfer-accent">
                <CategoryIcon slug={cat.slug} size={22} />
              </span>
              <div>
                <p className="font-medium text-colfer-white">{cat.name}</p>
                <p className="text-xs text-colfer-white/50">
                  {cat.description}
                </p>
              </div>
            </div>
            <ArrowRight
              size={18}
              className="shrink-0 text-colfer-white/30 transition-transform group-hover:translate-x-1 group-hover:text-colfer-accent"
            />
          </Link>
        ))}
      </div>

      <h2 className="font-display mb-6 text-xl font-bold text-colfer-white">
        Todos los servicios
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </main>
  );
}
