import Link from "next/link";
import { categorias } from "@/data/categorias";
import { CategoryIcon } from "@/components/ui/CategoryIcon";

const serviceCategorySlugs = new Set(["limpieza-interior", "estetica-exterior"]);

function categoryHref(slug: string) {
  return serviceCategorySlugs.has(slug)
    ? `/servicios/${slug}`
    : `/productos/${slug}`;
}

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="font-display text-2xl font-bold text-colfer-white">
          Categorías
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {categorias.map((cat) => (
          <Link
            key={cat.id}
            href={categoryHref(cat.slug)}
            className="group flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-colfer-dark p-5 text-center transition-colors hover:border-colfer-accent/50 hover:bg-colfer-dark-2"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-colfer-accent transition-colors group-hover:bg-colfer-accent/10">
              <CategoryIcon slug={cat.slug} size={22} />
            </span>
            <span className="text-sm font-medium text-colfer-white">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
