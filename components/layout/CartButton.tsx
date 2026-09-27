"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/hooks/useCartStore";
import { useHasHydrated } from "@/hooks/useHasHydrated";

export function CartButton() {
  const totalItems = useCartStore((s) => s.totalItems());
  const mounted = useHasHydrated();

  return (
    <Link
      href="/carrito"
      aria-label="Ver carrito"
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-md text-colfer-white transition-colors hover:bg-white/10"
    >
      <ShoppingCart size={20} />
      {mounted && totalItems > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-colfer-accent px-1 text-[11px] font-semibold text-white">
          {totalItems}
        </span>
      )}
    </Link>
  );
}
