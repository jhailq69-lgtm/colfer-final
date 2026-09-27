"use client";

import { marcasVehiculo, getModelosPorMarca, getAniosPorModelo } from "@/data/vehiculos";

interface VehicleSelectorProps {
  brand: string;
  model: string;
  year: string;
  onBrandChange: (brand: string) => void;
  onModelChange: (model: string) => void;
  onYearChange: (year: string) => void;
  className?: string;
}

const selectClasses =
  "w-full rounded-md border border-white/10 bg-colfer-black py-2 px-3 text-sm text-colfer-white focus:border-colfer-accent focus:outline-none disabled:opacity-40";

export function VehicleSelector({
  brand,
  model,
  year,
  onBrandChange,
  onModelChange,
  onYearChange,
  className,
}: VehicleSelectorProps) {
  const modelos = brand ? getModelosPorMarca(brand) : [];
  const anios = brand && model ? getAniosPorModelo(brand, model) : [];

  return (
    <div className={className}>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-colfer-white/50">
        Buscar por vehículo
      </p>
      <div className="grid grid-cols-3 gap-2">
        <select
          value={brand}
          onChange={(e) => {
            onBrandChange(e.target.value);
            onModelChange("");
            onYearChange("");
          }}
          className={selectClasses}
        >
          <option value="">Marca</option>
          {marcasVehiculo.map((m) => (
            <option key={m.marca} value={m.marca}>
              {m.marca}
            </option>
          ))}
        </select>

        <select
          value={model}
          onChange={(e) => {
            onModelChange(e.target.value);
            onYearChange("");
          }}
          disabled={!brand}
          className={selectClasses}
        >
          <option value="">Modelo</option>
          {modelos.map((m) => (
            <option key={m.modelo} value={m.modelo}>
              {m.modelo}
            </option>
          ))}
        </select>

        <select
          value={year}
          onChange={(e) => onYearChange(e.target.value)}
          disabled={!model}
          className={selectClasses}
        >
          <option value="">Año</option>
          {anios.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
