export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: "Autopartes", href: "/productos/autopartes" },
  { label: "Multimedia", href: "/productos/multimedia" },
  { label: "Faroles", href: "/productos/faroles" },
  { label: "Accesorios", href: "/productos/accesorios" },
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];
