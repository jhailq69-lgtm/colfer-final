import { marcas } from "@/data/marcas";

export function BrandsStrip() {
  return (
    <section className="border-y border-white/10 bg-colfer-dark/30 py-10">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-colfer-white/40">
          Trabajamos con marcas como
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {marcas.map((brand) => (
            <span
              key={brand.id}
              className="font-display text-lg font-semibold tracking-wide text-colfer-white/50"
            >
              {brand.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
