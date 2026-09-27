import Link from "next/link";
import { MessageCircle } from "lucide-react";
import clsx from "clsx";

interface WhatsappButtonProps {
  href: string;
  label?: string;
  variant?: "solid" | "outline" | "icon";
  className?: string;
}

export function WhatsappButton({
  href,
  label = "Consultar por WhatsApp",
  variant = "solid",
  className,
}: WhatsappButtonProps) {
  if (variant === "icon") {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={clsx(
          "inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#25D366] text-white transition-transform hover:scale-105",
          className
        )}
      >
        <MessageCircle size={20} strokeWidth={2} />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition-colors",
        variant === "solid" &&
          "bg-[#25D366] text-white hover:bg-[#1ebd5a]",
        variant === "outline" &&
          "border border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10",
        className
      )}
    >
      <MessageCircle size={18} strokeWidth={2} />
      {label}
    </Link>
  );
}
