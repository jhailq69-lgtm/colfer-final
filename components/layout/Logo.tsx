import Link from "next/link";
import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label="COLFER — Inicio"
    >
      <Image
        src="/images/colfer-logo.png"
        alt="COLFER"
        width={520}
        height={82}
        priority
        className="h-8 w-auto sm:h-9"
      />
    </Link>
  );
}
