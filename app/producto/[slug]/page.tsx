import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import {
  getProductBySlug,
  getProductsByCategory,
} from "@/services/products";
import { getCategoria } from "@/data/categorias";
import { formatPrice } from "@/utils/format";
import { DemoBadge } from "@/components/ui/DemoBadge";
import { ProductPlaceholder } from "@/components/ui/ProductPlaceholder";
import { ProductDetailActions } from "@/components/productos/ProductDetailActions";
import { ProductCard } from "@/components/productos/ProductCard";
import { productosDemo } from "@/data/productos-demo";
import { productosReales } from "@/data/productos-reales";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [...productosReales, ...productosDemo].map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoria(product.categorySlug);
  const related = (await getProductsByCategory(product.categorySlug))
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 md:px-6">
      {/* Breadcrumb */}
      <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-colfer-white/50">
        <Link href="/" className="hover:text-colfer-white">
          Inicio
        </Link>
        <ChevronRight size={12} />
        <Link href="/productos" className="hover:text-colfer-white">
          Productos
        </Link>
        {category && (
          <>
            <ChevronRight size={12} />
            <Link
              href={`/productos/${category.slug}`}
              className="hover:text-colfer-white"
            >
              {category.name}
            </Link>
          </>
        )}
        <ChevronRight size={12} />
        <span className="text-colfer-white/80">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Imagen */}
        <div className="relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-white">
          {product.images[0] ? (
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain p-4"
              priority
            />
          ) : (
            <ProductPlaceholder
              categorySlug={product.categorySlug}
              className="h-full w-full"
            />
          )}
          <div className="absolute left-3 top-3 flex gap-2">
            {product.isDemo && <DemoBadge />}
            {product.discountPercent && (
              <span className="rounded-full bg-white px-2.5 py-1 text-xs font-bold text-colfer-black">
                -{product.discountPercent}%
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-5">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-colfer-accent">
              {product.brand}
            </span>
            <h1 className="font-display mt-1 text-2xl font-bold text-colfer-white sm:text-3xl">
              {product.name}
            </h1>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="font-display text-3xl font-bold text-colfer-white">
              {formatPrice(product.price)}
            </span>
            {product.previousPrice && (
              <span className="text-base text-colfer-white/40 line-through">
                {formatPrice(product.previousPrice)}
              </span>
            )}
          </div>

          <p className="text-sm leading-relaxed text-colfer-white/70">
            {product.description}
          </p>

          {product.features.length > 0 && (
            <ul className="flex flex-col gap-2">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-colfer-white/70"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-colfer-accent"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          )}

          {product.compatibleVehicles && product.compatibleVehicles.length > 0 && (
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-colfer-white/50">
                Compatibilidad
              </p>
              <div className="flex flex-wrap gap-2">
                {product.compatibleVehicles.map((v) => (
                  <span
                    key={`${v.brand}-${v.model}-${v.year}`}
                    className="rounded-full border border-white/15 px-3 py-1 text-xs text-colfer-white/70"
                  >
                    {v.brand} {v.model} {v.year}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 text-sm">
            <span
              className={`h-2 w-2 rounded-full ${
                product.available ? "bg-green-500" : "bg-red-500"
              }`}
            />
            <span className="text-colfer-white/70">
              {product.available
                ? `Disponible${product.stock ? ` (${product.stock} en stock)` : ""}`
                : "Sin stock por el momento"}
            </span>
          </div>

          <ProductDetailActions product={product} />
        </div>
      </div>

      {/* Relacionados */}
      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display mb-6 text-xl font-bold text-colfer-white">
            Productos relacionados
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
