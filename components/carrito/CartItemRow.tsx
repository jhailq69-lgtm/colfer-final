"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import type { CartItem } from "@/types";
import { useCartStore } from "@/hooks/useCartStore";
import { formatPrice } from "@/utils/format";
import { ProductPlaceholder } from "@/components/ui/ProductPlaceholder";

export function CartItemRow({ item }: { item: CartItem }) {
  const setQuantity = useCartStore((s) => s.setQuantity);
  const removeItem = useCartStore((s) => s.removeItem);

  return (
    <div className="flex items-center gap-4 border-b border-white/10 py-4 last:border-none">
      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md">
        <ProductPlaceholder className="h-full w-full" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-colfer-white">
          {item.name}
        </p>
        <p className="text-xs text-colfer-white/50">
          {formatPrice(item.price)} c/u
        </p>
      </div>

      <div className="flex items-center rounded-md border border-white/15">
        <button
          type="button"
          aria-label="Restar"
          onClick={() => setQuantity(item.productId, item.quantity - 1)}
          className="flex h-8 w-8 items-center justify-center text-colfer-white hover:bg-white/5"
        >
          <Minus size={13} />
        </button>
        <span className="w-8 text-center text-sm text-colfer-white">
          {item.quantity}
        </span>
        <button
          type="button"
          aria-label="Sumar"
          onClick={() => setQuantity(item.productId, item.quantity + 1)}
          className="flex h-8 w-8 items-center justify-center text-colfer-white hover:bg-white/5"
        >
          <Plus size={13} />
        </button>
      </div>

      <span className="w-20 shrink-0 text-right text-sm font-semibold text-colfer-white">
        {formatPrice(item.price * item.quantity)}
      </span>

      <button
        type="button"
        aria-label={`Eliminar ${item.name}`}
        onClick={() => removeItem(item.productId)}
        className="shrink-0 rounded-md p-2 text-colfer-white/40 hover:bg-white/5 hover:text-red-400"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}
