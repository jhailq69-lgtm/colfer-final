import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { filterProducts } from "@/services/products";
import { getCategoria } from "@/data/categorias";
import { ProductGrid } from "@/components/productos/ProductGrid";
import { ProductFilters } from "@/components/productos/ProductFilters";
import type { CategorySlug } from "@/types";

const productCategorySlugs: CategorySlug[] = [
  "autopartes",
  "multimedia",
  "faroles",
  "accesorios",
];

export function generateStaticParams() {
  return productCategorySlugs.map((categoria) => ({ categoria }));
}

interface CategoryPageProps {
  params: Promise<{ categoria: string }>;
  searchParams: Promise<{
    marca?: string;
    precio?: string;
    disponible?: string;
    vMarca?: string;
    vModelo?: string;
    vAnio?: string;
  }>;
}

function isProductCategory(slug: string): slug is CategorySlug {
  return (productCategorySlugs as string[]).includes(slug);
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { categoria } = await params;
  const cat = isProductCategory(categoria) ? getCategoria(categoria) : undefined;
  if (!cat) return {};
  return {
    title: cat.name,
    description: cat.description,
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { categoria } = await params;
  if (!isProductCategory(categoria)) notFound();

  const cat = getCategoria(categoria);
  if (!cat) notFound();

  const sp = await searchParams;

  const products = await filterProducts({
    categorySlug: categoria,
    brand: sp.marca,
    maxPrice: sp.precio ? Number(sp.precio) : undefined,
    onlyAvailable: sp.disponible === "1",
    vehicleBrand: sp.vMarca,
    vehicleModel: sp.vModelo,
    vehicleYear: sp.vAnio ? Number(sp.vAnio) : undefined,
  });

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 md:px-6">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-colfer-white">
          {cat.name}
        </h1>
        <p className="mt-1 max-w-2xl text-sm text-colfer-white/50">
          {cat.description}
        </p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        <Suspense fallback={null}>
          <ProductFilters lockedCategory={categoria} />
        </Suspense>
        <ProductGrid products={products} />
      </div>
    </main>
  );
}
