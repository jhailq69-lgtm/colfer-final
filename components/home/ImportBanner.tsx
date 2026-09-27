import Image from "next/image";

export function ImportBanner() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14 md:px-6">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white">
        <Image
          src="/images/colfer-banner-importadora.jpg"
          alt="COLFER Importadora — Repuestos automotrices desde Japón, China y Bolivia"
          width={1254}
          height={1254}
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
