import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import type { Product } from "@/types";
import { formatPrice } from "@/utils/format";
import { DemoBadge } from "@/components/ui/DemoBadge";
import { ProductPlaceholder } from "@/components/ui/ProductPlaceholder";
import { WhatsappButton } from "@/components/ui/WhatsappButton";
import { whatsappUrlForProduct } from "@/services/whatsapp";
import { AddToCartButton } from "@/components/carrito/AddToCartButton";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-colfer-dark transition-colors hover:border-white/20">
      <Link
        href={`/producto/${product.slug}`}
        className="relative block aspect-[4/3] overflow-hidden bg-white"
      >
        {product.images[0] ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <ProductPlaceholder
            categorySlug={product.categorySlug}
            className="h-full w-full transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <div className="absolute left-2 top-2 flex gap-1.5">
          {product.isDemo && <DemoBadge />}
          {product.discountPercent && (
            <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-bold text-colfer-black">
              -{product.discountPercent}%
            </span>
          )}
        </div>
        {!product.available && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60">
            <span className="rounded-md bg-colfer-black px-3 py-1 text-xs font-semibold text-white">
              Sin stock
            </span>
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-xs uppercase tracking-wide text-colfer-white/40">
          {product.brand}
        </span>
        <Link
          href={`/producto/${product.slug}`}
          className="line-clamp-2 text-sm font-medium text-colfer-white hover:text-colfer-accent"
        >
          {product.name}
        </Link>

        <div className="mt-1 flex items-baseline gap-2">
          <span className="font-display text-lg font-bold text-colfer-white">
            {formatPrice(product.price)}
          </span>
          {product.previousPrice && (
            <span className="text-xs text-colfer-white/40 line-through">
              {formatPrice(product.previousPrice)}
            </span>
          )}
        </div>

        <div className="mt-auto flex gap-2 pt-3">
          <AddToCartButton product={product} className="flex-1" />
          <WhatsappButton
            href={whatsappUrlForProduct(product.name, product.price)}
            variant="icon"
          />
        </div>
      </div>
    </div>
  );
}

export function ProductCardSkeletonIcon() {
  return <ShoppingCart size={16} />;
}
