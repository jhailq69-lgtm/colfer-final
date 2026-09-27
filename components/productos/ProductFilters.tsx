"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback, useMemo, useState, useTransition } from "react";
import { X, SlidersHorizontal } from "lucide-react";
import { categorias } from "@/data/categorias";
import { marcas } from "@/data/marcas";
import { VehicleSelector } from "@/components/buscador/VehicleSelector";
import type { CategorySlug } from "@/types";

const productCategories = categorias.filter(
  (c) => c.slug !== "limpieza-interior" && c.slug !== "estetica-exterior"
);

export function ProductFilters({
  lockedCategory,
}: {
  lockedCategory?: CategorySlug;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [mobileOpen, setMobileOpen] = useState(false);

  const current = useMemo(
    () => ({
      marca: searchParams.get("marca") ?? "",
      precio: searchParams.get("precio") ?? "",
      disponible: searchParams.get("disponible") === "1",
      vMarca: searchParams.get("vMarca") ?? "",
      vModelo: searchParams.get("vModelo") ?? "",
      vAnio: searchParams.get("vAnio") ?? "",
      buscar: searchParams.get("buscar") ?? "",
    }),
    [searchParams]
  );

  const updateParams = useCallback(
    (updates: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParams.toString());
      for (const [key, value] of Object.entries(updates)) {
        if (!value) params.delete(key);
        else params.set(key, value);
      }
      startTransition(() => {
        router.push(`${pathname}?${params.toString()}`);
      });
    },
    [pathname, router, searchParams]
  );

  const hasActiveFilters =
    current.marca ||
    current.precio ||
    current.disponible ||
    current.vMarca ||
    current.buscar;

  function clearAll() {
    startTransition(() => {
      router.push(pathname);
    });
  }

  const content = (
    <div className="flex flex-col gap-6">
      {!lockedCategory && (
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-colfer-white/50">
            Categoría
          </p>
          <div className="flex flex-col gap-1">
            {productCategories.map((cat) => (
              <a
                key={cat.slug}
                href={`/productos/${cat.slug}`}
                className="rounded-md px-2 py-1.5 text-sm text-colfer-white/70 hover:bg-white/5 hover:text-colfer-white"
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      )}

      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-colfer-white/50">
          Marca
        </p>
        <select
          value={current.marca}
          onChange={(e) => updateParams({ marca: e.target.value || null })}
          className="w-full rounded-md border border-white/10 bg-colfer-black py-2 px-3 text-sm text-colfer-white focus:border-colfer-accent focus:outline-none"
        >
          <option value="">Todas las marcas</option>
          {marcas.map((b) => (
            <option key={b.id} value={b.name}>
              {b.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-colfer-white/50">
          Precio máximo
        </p>
        <select
          value={current.precio}
          onChange={(e) => updateParams({ precio: e.target.value || null })}
          className="w-full rounded-md border border-white/10 bg-colfer-black py-2 px-3 text-sm text-colfer-white focus:border-colfer-accent focus:outline-none"
        >
          <option value="">Sin límite</option>
          <option value="100">Hasta Bs 100</option>
          <option value="300">Hasta Bs 300</option>
          <option value="600">Hasta Bs 600</option>
          <option value="1000">Hasta Bs 1.000</option>
        </select>
      </div>

      <label className="flex items-center gap-2 text-sm text-colfer-white/80">
        <input
          type="checkbox"
          checked={current.disponible}
          onChange={(e) =>
            updateParams({ disponible: e.target.checked ? "1" : null })
          }
          className="h-4 w-4 rounded border-white/20 bg-colfer-black accent-colfer-accent"
        />
        Solo disponibles
      </label>

      <VehicleSelector
        brand={current.vMarca}
        model={current.vModelo}
        year={current.vAnio}
        onBrandChange={(v) => updateParams({ vMarca: v || null, vModelo: null, vAnio: null })}
        onModelChange={(v) => updateParams({ vModelo: v || null, vAnio: null })}
        onYearChange={(v) => updateParams({ vAnio: v || null })}
      />

      {hasActiveFilters && (
        <button
          type="button"
          onClick={clearAll}
          className="inline-flex items-center justify-center gap-1.5 rounded-md border border-white/15 py-2 text-sm text-colfer-white/70 hover:bg-white/5"
        >
          <X size={14} />
          Limpiar filtros
        </button>
      )}
    </div>
  );

  return (
    <>
      {/* Botón para mostrar filtros en móvil */}
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="mb-4 inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm font-medium text-colfer-white lg:hidden"
      >
        <SlidersHorizontal size={16} />
        Filtros
      </button>

      {/* Sidebar desktop */}
      <aside
        className={`hidden w-64 shrink-0 lg:block ${isPending ? "opacity-60" : ""}`}
      >
        {content}
      </aside>

      {/* Drawer móvil */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Cerrar filtros"
            className="absolute inset-0 bg-black/70"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-xs overflow-y-auto bg-colfer-dark p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-base font-semibold text-colfer-white">
                Filtros
              </span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Cerrar"
                className="rounded-md p-1 text-colfer-white hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>
            {content}
          </div>
        </div>
      )}
    </>
  );
}
