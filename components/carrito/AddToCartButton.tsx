"use client";

import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";
import clsx from "clsx";
import type { Product } from "@/types";
import { useCartStore } from "@/hooks/useCartStore";

export function AddToCartButton({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const addItem = useCartStore((s) => s.addItem);
  const [added, setAdded] = useState(false);

  function handleClick() {
    if (!product.available) return;
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={!product.available}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-md px-3 py-2.5 text-sm font-semibold transition-colors",
        product.available
          ? added
            ? "bg-green-600 text-white"
            : "bg-colfer-accent text-white hover:bg-colfer-accent-dark"
          : "cursor-not-allowed bg-white/10 text-colfer-white/40",
        className
      )}
    >
      {added ? <Check size={16} /> : <ShoppingCart size={16} />}
      {added ? "Agregado" : "Agregar"}
    </button>
  );
}
