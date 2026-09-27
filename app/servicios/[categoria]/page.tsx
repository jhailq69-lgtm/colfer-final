import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getServicesByCategory } from "@/services/services";
import { getCategoria } from "@/data/categorias";
import { ServiceCard } from "@/components/servicios/ServiceCard";
import { BookingForm } from "@/components/servicios/BookingForm";
import type { Service } from "@/types";

type ServiceCategorySlug = Service["categorySlug"];

const serviceCategorySlugs: ServiceCategorySlug[] = [
  "limpieza-interior",
  "estetica-exterior",
];

function isServiceCategory(slug: string): slug is ServiceCategorySlug {
  return (serviceCategorySlugs as string[]).includes(slug);
}

export function generateStaticParams() {
  return serviceCategorySlugs.map((categoria) => ({ categoria }));
}

interface ServiceCategoryPageProps {
  params: Promise<{ categoria: string }>;
  searchParams: Promise<{ reservar?: string }>;
}

export async function generateMetadata({
  params,
}: ServiceCategoryPageProps): Promise<Metadata> {
  const { categoria } = await params;
  const cat = isServiceCategory(categoria) ? getCategoria(categoria) : undefined;
  if (!cat) return {};
  return { title: cat.name, description: cat.description };
}

export default async function ServiceCategoryPage({
  params,
  searchParams,
}: ServiceCategoryPageProps) {
  const { categoria } = await params;
  if (!isServiceCategory(categoria)) notFound();

  const cat = getCategoria(categoria);
  if (!cat) notFound();

  const sp = await searchParams;
  const services = await getServicesByCategory(categoria);

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 md:px-6">
      <nav className="mb-6 flex items-center gap-1.5 text-xs text-colfer-white/50">
        <Link href="/" className="hover:text-colfer-white">
          Inicio
        </Link>
        <ChevronRight size={12} />
        <Link href="/servicios" className="hover:text-colfer-white">
          Servicios
        </Link>
        <ChevronRight size={12} />
        <span className="text-colfer-white/80">{cat.name}</span>
      </nav>

      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-colfer-white">
          {cat.name}
        </h1>
        <p className="mt-1 max-w-2xl text-sm text-colfer-white/50">
          {cat.description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="lg:col-span-1">
          {services.length > 0 && (
            <BookingForm
              services={services}
              initialServiceSlug={sp.reservar}
            />
          )}
        </div>
      </div>
    </main>
  );
}
