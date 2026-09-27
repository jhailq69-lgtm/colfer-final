import type { Product } from "@/types";
import { ProductCard } from "./ProductCard";
import { PackageSearch } from "lucide-react";

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-white/10 py-20 text-center">
        <PackageSearch size={36} className="text-colfer-white/30" />
        <p className="text-sm text-colfer-white/50">
          No encontramos productos con esos filtros.
        </p>
      </div>
    );
  }

  return (
    <div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
