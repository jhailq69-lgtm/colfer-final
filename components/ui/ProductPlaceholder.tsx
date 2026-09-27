import { Package, type LucideIcon } from "lucide-react";
import clsx from "clsx";
import { CategoryIcon } from "./CategoryIcon";
import type { CategorySlug } from "@/types";

/**
 * Bloque visual usado en lugar de una fotografía real de producto/servicio.
 * No depende de imágenes externas: se reemplaza fácilmente más adelante
 * por <Image src={...} /> cuando existan fotos reales.
 */
export function ProductPlaceholder({
  categorySlug,
  icon: IconOverride,
  className,
}: {
  categorySlug?: CategorySlug;
  icon?: LucideIcon;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center bg-gradient-to-br from-colfer-dark to-colfer-dark-2",
        className
      )}
    >
      {IconOverride ? (
        <IconOverride size={40} className="text-colfer-white/25" />
      ) : categorySlug ? (
        <CategoryIcon
          slug={categorySlug}
          size={40}
          className="text-colfer-white/25"
        />
      ) : (
        <Package size={40} className="text-colfer-white/25" />
      )}
    </div>
  );
}
