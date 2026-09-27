import type { Metadata } from "next";
import { Suspense } from "react";
import { filterProducts } from "@/services/products";
import { ProductGrid } from "@/components/productos/ProductGrid";
import { ProductFilters } from "@/components/productos/ProductFilters";

export const metadata: Metadata = {
  title: "Catálogo de productos",
  description:
    "Explora autopartes, multimedia, faroles y accesorios para tu vehículo en COLFER.",
};

interface ProductsPageProps {
  searchParams: Promise<{
    marca?: string;
    precio?: string;
    disponible?: string;
    vMarca?: string;
    vModelo?: string;
    vAnio?: string;
    buscar?: string;
  }>;
}

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const sp = await searchParams;

  const products = await filterProducts({
    brand: sp.marca,
    maxPrice: sp.precio ? Number(sp.precio) : undefined,
    onlyAvailable: sp.disponible === "1",
    vehicleBrand: sp.vMarca,
    vehicleModel: sp.vModelo,
    vehicleYear: sp.vAnio ? Number(sp.vAnio) : undefined,
    query: sp.buscar,
  });

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 md:px-6">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-colfer-white">
          Catálogo de productos
        </h1>
        <p className="mt-1 text-sm text-colfer-white/50">
          {products.length} producto{products.length !== 1 && "s"} encontrado
          {products.length !== 1 && "s"}
          {sp.buscar && ` para "${sp.buscar}"`}
        </p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        <Suspense fallback={null}>
          <ProductFilters />
        </Suspense>
        <ProductGrid products={products} />
      </div>
    </main>
  );
}
