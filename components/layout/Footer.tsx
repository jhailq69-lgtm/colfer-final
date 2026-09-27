import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { mainNav } from "@/data/nav";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";

const categoryLinks = mainNav.slice(0, 4);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-colfer-dark text-colfer-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div>
          <span className="font-display text-2xl font-bold tracking-wide">
            COLFER
          </span>
          <p className="mt-3 max-w-xs text-sm text-colfer-white/60">
            {siteConfig.description}
          </p>
          <div className="mt-4 flex gap-3">
            <Link
              href={siteConfig.social.facebook || "#"}
              aria-label="Facebook"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-white/10"
            >
              <FacebookIcon size={16} />
            </Link>
            <Link
              href={siteConfig.social.instagram || "#"}
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-white/10"
            >
              <InstagramIcon size={16} />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-colfer-white/70">
            Categorías
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {categoryLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-colfer-white/60 hover:text-colfer-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-colfer-white/70">
            Empresa
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                href="/nosotros"
                className="text-colfer-white/60 hover:text-colfer-white"
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/servicios"
                className="text-colfer-white/60 hover:text-colfer-white"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                className="text-colfer-white/60 hover:text-colfer-white"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-colfer-white/70">
            Contacto
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-colfer-white/60">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>{siteConfig.contact.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0" />
              <span>{siteConfig.contact.email}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0" />
              <span>
                {siteConfig.whatsappNumber || "Número por configurar"}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="text-center text-xs text-colfer-white/40">
          © {year} {siteConfig.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
