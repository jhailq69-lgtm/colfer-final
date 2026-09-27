import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/contacto/ContactForm";
import { WhatsappButton } from "@/components/ui/WhatsappButton";
import { whatsappUrlGeneral } from "@/services/whatsapp";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Escríbenos a ${siteConfig.name} por WhatsApp o revisa nuestros datos de contacto.`,
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-14 md:px-6">
      <div className="mb-10 text-center">
        <h1 className="font-display text-3xl font-bold text-colfer-white">
          Contacto
        </h1>
        <p className="mx-auto mt-2 max-w-xl text-sm text-colfer-white/60">
          ¿Tienes una consulta sobre un producto o servicio? Escríbenos, con
          gusto te ayudamos.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <ContactForm />

        <div className="flex flex-col gap-4">
          <div className="rounded-xl border border-white/10 bg-colfer-dark p-6">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-colfer-white/50">
              Datos de contacto
            </h2>
            <ul className="flex flex-col gap-4 text-sm text-colfer-white/70">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="shrink-0 text-colfer-accent" />
                {siteConfig.contact.address}
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-colfer-accent" />
                {siteConfig.contact.email}
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-colfer-accent" />
                {siteConfig.whatsappNumber || "Número por configurar"}
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-3 rounded-xl border border-white/10 bg-colfer-dark p-6">
            <p className="text-sm text-colfer-white/70">
              También puedes escribirnos directo por WhatsApp:
            </p>
            <WhatsappButton href={whatsappUrlGeneral()} />
          </div>
        </div>
      </div>
    </main>
  );
}
