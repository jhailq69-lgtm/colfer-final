import type { CategorySlug, Product } from "@/types";
import { productosDemo } from "@/data/productos-demo";

/**
 * Capa de acceso a productos. Hoy lee de datos locales (`data/productos-demo.ts`).
 * En la fase 2, estas funciones se reemplazan por consultas a Supabase
 * sin tener que tocar los componentes que las usan.
 */

export async function getAllProducts(): Promise<Product[]> {
  return productosDemo;
}

export async function getProductBySlug(
  slug: string
): Promise<Product | undefined> {
  return productosDemo.find((p) => p.slug === slug);
}

export async function getProductsByCategory(
  categorySlug: CategorySlug
): Promise<Product[]> {
  return productosDemo.filter((p) => p.categorySlug === categorySlug);
}

export async function getFeaturedProducts(limit = 4): Promise<Product[]> {
  return productosDemo.filter((p) => p.available).slice(0, limit);
}

export async function getDiscountedProducts(limit = 4): Promise<Product[]> {
  return productosDemo
    .filter((p) => !!p.discountPercent)
    .slice(0, limit);
}

export interface ProductFilters {
  categorySlug?: CategorySlug;
  brand?: string;
  onlyAvailable?: boolean;
  maxPrice?: number;
  vehicleBrand?: string;
  vehicleModel?: string;
  vehicleYear?: number;
  query?: string;
}

export async function filterProducts(
  filters: ProductFilters
): Promise<Product[]> {
  return productosDemo.filter((p) => {
    if (filters.categorySlug && p.categorySlug !== filters.categorySlug)
      return false;
    if (filters.brand && p.brand !== filters.brand) return false;
    if (filters.onlyAvailable && !p.available) return false;
    if (filters.maxPrice !== undefined && p.price > filters.maxPrice)
      return false;
    if (filters.query) {
      const q = filters.query.toLowerCase();
      if (
        !p.name.toLowerCase().includes(q) &&
        !p.brand.toLowerCase().includes(q)
      )
        return false;
    }
    if (filters.vehicleBrand || filters.vehicleModel || filters.vehicleYear) {
      const match = p.compatibleVehicles?.some(
        (v) =>
          (!filters.vehicleBrand || v.brand === filters.vehicleBrand) &&
          (!filters.vehicleModel || v.model === filters.vehicleModel) &&
          (!filters.vehicleYear || v.year === filters.vehicleYear)
      );
      if (!match) return false;
    }
    return true;
  });
}
