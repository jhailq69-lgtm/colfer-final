import {
  Wrench,
  SprayCan,
  MonitorSmartphone,
  Lightbulb,
  Sparkles,
  Package,
  type LucideIcon,
} from "lucide-react";
import type { CategorySlug } from "@/types";

export const categoryIcons: Record<CategorySlug, LucideIcon> = {
  autopartes: Wrench,
  "limpieza-interior": SprayCan,
  multimedia: MonitorSmartphone,
  faroles: Lightbulb,
  "estetica-exterior": Sparkles,
  accesorios: Package,
};

export function CategoryIcon({
  slug,
  size = 24,
  className,
}: {
  slug: CategorySlug;
  size?: number;
  className?: string;
}) {
  const Icon = categoryIcons[slug] ?? Package;
  return <Icon size={size} className={className} />;
}
