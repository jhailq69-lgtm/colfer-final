import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";
import { ServiceCard } from "@/components/servicios/ServiceCard";

export function FeaturedServices({ services }: { services: Service[] }) {
  if (services.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="font-display text-2xl font-bold text-colfer-white">
          Servicios destacados
        </h2>
        <Link
          href="/servicios"
          className="inline-flex items-center gap-1 text-sm font-medium text-colfer-accent hover:underline"
        >
          Ver todos
          <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
