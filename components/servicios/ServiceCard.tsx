import Link from "next/link";
import { Clock } from "lucide-react";
import type { Service } from "@/types";
import { formatPrice } from "@/utils/format";
import { DemoBadge } from "@/components/ui/DemoBadge";
import { ProductPlaceholder } from "@/components/ui/ProductPlaceholder";
import { WhatsappButton } from "@/components/ui/WhatsappButton";
import { whatsappUrlForService } from "@/services/whatsapp";
import { Sparkles } from "lucide-react";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-colfer-dark">
      <div className="relative aspect-[16/9] overflow-hidden">
        <ProductPlaceholder icon={Sparkles} className="h-full w-full" />
        {service.isDemo && (
          <div className="absolute left-2 top-2">
            <DemoBadge />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-base font-semibold text-colfer-white">
          {service.name}
        </h3>
        <p className="line-clamp-2 text-sm text-colfer-white/60">
          {service.description}
        </p>

        <div className="mt-1 flex items-center gap-4 text-xs text-colfer-white/50">
          <span className="font-display text-base font-bold text-colfer-white">
            Desde {formatPrice(service.priceFrom)}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={14} />
            {service.durationMinutes} min
          </span>
        </div>

        <div className="mt-auto flex gap-2 pt-3">
          <Link
            href={`/servicios/${service.categorySlug}?reservar=${service.slug}`}
            className="flex-1 rounded-md border border-white/15 px-3 py-2.5 text-center text-sm font-semibold text-colfer-white hover:bg-white/5"
          >
            Reservar
          </Link>
          <WhatsappButton
            href={whatsappUrlForService(service.name, service.priceFrom)}
            variant="icon"
          />
        </div>
      </div>
    </div>
  );
}
