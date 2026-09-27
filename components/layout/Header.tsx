import Link from "next/link";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";
import { CartButton } from "./CartButton";
import { MobileMenu } from "./MobileMenu";
import { WhatsappButton } from "@/components/ui/WhatsappButton";
import { mainNav } from "@/data/nav";
import { whatsappUrlGeneral } from "@/services/whatsapp";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-colfer-black/95 backdrop-blur supports-[backdrop-filter]:bg-colfer-black/80">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 md:px-6">
        <MobileMenu />

        <Logo />

        <nav className="ml-4 hidden items-center gap-1 md:flex">
          {mainNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-colfer-white/80 transition-colors hover:bg-white/5 hover:text-colfer-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <SearchBar className="hidden w-56 lg:flex" />
          <WhatsappButton
            href={whatsappUrlGeneral()}
            variant="icon"
            className="hidden sm:inline-flex"
          />
          <CartButton />
        </div>
      </div>
    </header>
  );
}
