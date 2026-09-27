import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WhatsappButton } from "@/components/ui/WhatsappButton";
import { whatsappUrlGeneral } from "@/services/whatsapp";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-colfer-black">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(232,69,44,0.25), transparent 40%), radial-gradient(circle at 80% 60%, rgba(232,69,44,0.15), transparent 45%)",
        }}
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-20 md:px-6 md:py-28">
        <span className="inline-flex items-center rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-colfer-white/70">
          Autopartes · Multimedia · Estética automotriz
        </span>

        <h1 className="font-display max-w-2xl text-4xl font-bold leading-tight tracking-wide text-colfer-white sm:text-5xl md:text-6xl">
          Todo para tu vehículo,
          <span className="text-colfer-accent"> en un solo lugar</span>
        </h1>

        <p className="max-w-xl text-base text-colfer-white/60 md:text-lg">
          Repuestos, accesorios, iluminación, audio y servicios de estética
          automotriz. Encuentra lo que tu auto necesita y compra directo por
          WhatsApp.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/productos"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-colfer-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-colfer-accent-dark"
          >
            Ver catálogo
            <ArrowRight size={16} />
          </Link>
          <WhatsappButton href={whatsappUrlGeneral()} variant="outline" />
        </div>
      </div>
    </section>
  );
}
