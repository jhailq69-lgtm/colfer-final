"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !message) {
      setError("Completa tu nombre y el mensaje.");
      return;
    }
    setError("");

    const base = siteConfig.whatsappNumber
      ? `https://wa.me/${siteConfig.whatsappNumber}`
      : "https://wa.me/";
    const text = `Hola COLFER, soy ${name}.\n\n${message}`;
    const url = `${base}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  const inputClasses =
    "w-full rounded-md border border-white/10 bg-colfer-black py-2.5 px-3 text-sm text-colfer-white placeholder:text-colfer-white/30 focus:border-colfer-accent focus:outline-none";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-xl border border-white/10 bg-colfer-dark p-6"
    >
      <div>
        <label htmlFor="contact-name" className="mb-1.5 block text-xs font-medium text-colfer-white/60">
          Nombre *
        </label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tu nombre"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-xs font-medium text-colfer-white/60">
          Mensaje *
        </label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder="Cuéntanos qué necesitas..."
          className={inputClasses}
        />
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-md bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1ebd5a]"
      >
        Enviar por WhatsApp
      </button>
    </form>
  );
}
