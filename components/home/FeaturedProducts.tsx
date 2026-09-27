import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/types";
import { ProductCard } from "@/components/productos/ProductCard";

export function FeaturedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="font-display text-2xl font-bold text-colfer-white">
          Productos destacados
        </h2>
        <Link
          href="/productos"
          className="inline-flex items-center gap-1 text-sm font-medium text-colfer-accent hover:underline"
        >
          Ver todos
          <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
