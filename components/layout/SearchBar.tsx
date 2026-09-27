"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SearchBar({ className = "" }: { className?: string }) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      router.push(`/productos?buscar=${encodeURIComponent(trimmed)}`);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative flex items-center ${className}`}
    >
      <Search
        size={16}
        className="pointer-events-none absolute left-3 text-colfer-gray"
      />
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar productos, marcas..."
        className="w-full rounded-md border border-white/10 bg-colfer-dark py-2 pl-9 pr-3 text-sm text-colfer-white placeholder:text-colfer-gray focus:border-colfer-accent focus:outline-none"
      />
    </form>
  );
}
