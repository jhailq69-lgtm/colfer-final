import type { Product } from "@/types";
import { ProductCard } from "@/components/productos/ProductCard";
import { Tag } from "lucide-react";

export function Offers({ products }: { products: Product[] }) {
  if (products.length === 0) return null;

  return (
    <section className="bg-colfer-dark/40 py-14">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8 flex items-center gap-2">
          <Tag size={20} className="text-colfer-accent" />
          <h2 className="font-display text-2xl font-bold text-colfer-white">
            Ofertas
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
