import { ShieldCheck, Truck, BadgeCheck, Clock } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Garantía en productos",
    description: "Repuestos y accesorios respaldados por garantía de fábrica.",
  },
  {
    icon: BadgeCheck,
    title: "Calidad verificada",
    description: "Trabajamos con marcas reconocidas en el rubro automotriz.",
  },
  {
    icon: Truck,
    title: "Entrega coordinada",
    description: "Coordinamos la entrega o retiro directamente por WhatsApp.",
  },
  {
    icon: Clock,
    title: "Atención rápida",
    description: "Respuesta ágil a tus consultas de productos y servicios.",
  },
];

export function TrustSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-start gap-3 rounded-xl border border-white/10 bg-colfer-dark p-5"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-colfer-accent/10 text-colfer-accent">
              <item.icon size={20} />
            </span>
            <h3 className="text-sm font-semibold text-colfer-white">
              {item.title}
            </h3>
            <p className="text-xs text-colfer-white/50">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
