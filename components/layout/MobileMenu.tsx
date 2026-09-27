"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/data/nav";
import { SearchBar } from "./SearchBar";
import { WhatsappButton } from "@/components/ui/WhatsappButton";
import { whatsappUrlGeneral } from "@/services/whatsapp";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menú"
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-colfer-white md:hidden"
      >
        <Menu size={22} />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            aria-label="Cerrar menú"
            className="absolute inset-0 bg-black/70"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col gap-6 bg-colfer-black p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="font-display text-xl font-bold text-colfer-white">
                COLFER
              </span>
              <button
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md text-colfer-white hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>

            <SearchBar />

            <nav className="flex flex-col gap-1">
              {mainNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-colfer-white/90 hover:bg-white/5"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto">
              <WhatsappButton
                href={whatsappUrlGeneral()}
                label="Escribir por WhatsApp"
                className="w-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
