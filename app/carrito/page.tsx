"use client";

import Link from "next/link";
import { ShoppingBag, Trash2, ArrowLeft } from "lucide-react";
import { useCartStore } from "@/hooks/useCartStore";
import { useHasHydrated } from "@/hooks/useHasHydrated";
import { CartItemRow } from "@/components/carrito/CartItemRow";
import { WhatsappButton } from "@/components/ui/WhatsappButton";
import { whatsappUrlForCart } from "@/services/whatsapp";
import { formatPrice } from "@/utils/format";

export default function CartPage() {
  const mounted = useHasHydrated();
  const items = useCartStore((s) => s.items);
  const clear = useCartStore((s) => s.clear);
  const totalPrice = useCartStore((s) => s.totalPrice());
  const totalItems = useCartStore((s) => s.totalItems());

  if (!mounted) {
    // Evita parpadeo mientras se lee el carrito guardado en el navegador.
    return <main className="flex-1 px-4 py-10" />;
  }

  if (items.length === 0) {
    return (
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-4 px-4 py-24 text-center">
        <ShoppingBag size={40} className="text-colfer-white/30" />
        <h1 className="font-display text-2xl font-bold text-colfer-white">
          Tu carrito está vacío
        </h1>
        <p className="text-sm text-colfer-white/50">
          Explora el catálogo y agrega productos para verlos aquí.
        </p>
        <Link
          href="/productos"
          className="mt-2 inline-flex items-center gap-2 rounded-md bg-colfer-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-colfer-accent-dark"
        >
          <ArrowLeft size={16} />
          Ver catálogo
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-10 md:px-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-display text-3xl font-bold text-colfer-white">
          Carrito
        </h1>
        <button
          type="button"
          onClick={clear}
          className="inline-flex items-center gap-1.5 text-sm text-colfer-white/50 hover:text-red-400"
        >
          <Trash2 size={14} />
          Vaciar carrito
        </button>
      </div>

      <div className="rounded-xl border border-white/10 bg-colfer-dark px-4">
        {items.map((item) => (
          <CartItemRow key={item.productId} item={item} />
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-4 rounded-xl border border-white/10 bg-colfer-dark p-5">
        <div className="flex items-center justify-between text-sm text-colfer-white/60">
          <span>
            Subtotal ({totalItems} producto{totalItems !== 1 && "s"})
          </span>
          <span>{formatPrice(totalPrice)}</span>
        </div>
        <div className="flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-base font-semibold text-colfer-white">
            Total
          </span>
          <span className="font-display text-xl font-bold text-colfer-white">
            {formatPrice(totalPrice)}
          </span>
        </div>

        <WhatsappButton
          href={whatsappUrlForCart(items, totalPrice)}
          label="COMPRAR POR WHATSAPP"
          className="w-full py-3.5 text-base"
        />

        <Link
          href="/productos"
          className="text-center text-sm text-colfer-white/50 hover:text-colfer-white"
        >
          Seguir comprando
        </Link>
      </div>
    </main>
  );
}
