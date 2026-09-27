"use client";

import { useSyncExternalStore } from "react";

/**
 * Indica si el componente ya se hidrató en el cliente.
 * Útil para evitar mismatches de hidratación al leer estado
 * persistido en localStorage (como el carrito), que no existe
 * durante el render en el servidor.
 */
export function useHasHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}
