import { Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsappButton } from "@/components/ui/WhatsappButton";
import { whatsappUrlGeneral } from "@/services/whatsapp";

export function ContactSection() {
  return (
    <section className="bg-colfer-dark/40 py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <h2 className="font-display text-2xl font-bold text-colfer-white">
            ¿Tienes una consulta?
          </h2>
          <p className="mt-2 max-w-md text-sm text-colfer-white/60">
            Escríbenos por WhatsApp y te ayudamos a encontrar el repuesto o
            servicio que tu vehículo necesita.
          </p>

          <div className="mt-4 flex flex-col gap-2 text-sm text-colfer-white/60">
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              {siteConfig.contact.address}
            </span>
            <span className="flex items-center gap-2">
              <Mail size={16} />
              {siteConfig.contact.email}
            </span>
          </div>
        </div>

        <WhatsappButton href={whatsappUrlGeneral()} />
      </div>
    </section>
  );
}
