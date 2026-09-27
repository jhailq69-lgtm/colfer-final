"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingCart, Check } from "lucide-react";
import type { Product } from "@/types";
import { useCartStore } from "@/hooks/useCartStore";
import { WhatsappButton } from "@/components/ui/WhatsappButton";
import { whatsappUrlForProduct } from "@/services/whatsapp";

export function ProductDetailActions({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    if (!product.available) return;
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-colfer-white/70">
          Cantidad
        </span>
        <div className="flex items-center rounded-md border border-white/15">
          <button
            type="button"
            aria-label="Restar"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="flex h-9 w-9 items-center justify-center text-colfer-white hover:bg-white/5"
          >
            <Minus size={14} />
          </button>
          <span className="w-10 text-center text-sm text-colfer-white">
            {quantity}
          </span>
          <button
            type="button"
            aria-label="Sumar"
            onClick={() => setQuantity((q) => q + 1)}
            className="flex h-9 w-9 items-center justify-center text-colfer-white hover:bg-white/5"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={handleAdd}
          disabled={!product.available}
          className={`inline-flex flex-1 items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-colors ${
            product.available
              ? added
                ? "bg-green-600 text-white"
                : "bg-colfer-accent text-white hover:bg-colfer-accent-dark"
              : "cursor-not-allowed bg-white/10 text-colfer-white/40"
          }`}
        >
          {added ? <Check size={18} /> : <ShoppingCart size={18} />}
          {added
            ? "Agregado al carrito"
            : product.available
              ? "Agregar al carrito"
              : "Sin stock"}
        </button>

        <WhatsappButton
          href={whatsappUrlForProduct(product.name, product.price)}
          label="Consultar por WhatsApp"
          variant="outline"
          className="flex-1"
        />
      </div>
    </div>
  );
}
