import { Download, FileText } from "lucide-react";

const catalogos = [
  { nombre: "Corolla 90 / AE91", archivo: "catalogo-corolla-90.pdf" },
  { nombre: "Corolla 94-98", archivo: "catalogo-corolla-94-98.pdf" },
  {
    nombre: "Starlet / Ceres / Marino",
    archivo: "catalogo-starlet-ceres-marino.pdf",
  },
  { nombre: "Ipsum / Probox", archivo: "catalogo-ipsum-probox.pdf" },
  { nombre: "Noah", archivo: "catalogo-noah.pdf" },
  { nombre: "Caldina", archivo: "catalogo-caldina.pdf" },
];

export function CatalogDownload() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <div className="mb-8 flex items-center gap-2">
        <FileText size={20} className="text-colfer-accent" />
        <h2 className="font-display text-2xl font-bold text-colfer-white">
          Catálogos de repuestos
        </h2>
      </div>
      <p className="-mt-6 mb-8 max-w-2xl text-sm text-colfer-white/50">
        Descarga el catálogo en PDF de faroles, stops y guiñadores para tu
        modelo Toyota, con precios actualizados.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {catalogos.map((cat) => (
          <a
            key={cat.archivo}
            href={`/catalogos/${cat.archivo}`}
            download
            className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-colfer-dark p-5 transition-colors hover:border-white/20"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-colfer-accent/10 text-colfer-accent">
                <FileText size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-colfer-white">
                  {cat.nombre}
                </p>
                <p className="text-xs text-colfer-white/50">Catálogo PDF</p>
              </div>
            </div>
            <Download
              size={18}
              className="shrink-0 text-colfer-white/40 transition-colors group-hover:text-colfer-accent"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
