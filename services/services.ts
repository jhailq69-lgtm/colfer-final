import type { Service } from "@/types";
import { serviciosDemo } from "@/data/servicios-demo";

type ServiceCategorySlug = Service["categorySlug"];

/**
 * Capa de acceso a servicios. Misma idea que services/products.ts:
 * hoy lee de datos locales, en la fase 2 se conecta a Supabase.
 */

export async function getAllServices(): Promise<Service[]> {
  return serviciosDemo;
}

export async function getServiceBySlug(
  slug: string
): Promise<Service | undefined> {
  return serviciosDemo.find((s) => s.slug === slug);
}

export async function getFeaturedServices(limit = 4): Promise<Service[]> {
  return serviciosDemo.slice(0, limit);
}

export async function getServicesByCategory(
  categorySlug: ServiceCategorySlug
): Promise<Service[]> {
  return serviciosDemo.filter((s) => s.categorySlug === categorySlug);
}
