"use client";

import { useState } from "react";
import { CalendarCheck } from "lucide-react";
import type { Service } from "@/types";
import { whatsappUrlForBooking } from "@/services/whatsapp";

export function BookingForm({
  services,
  initialServiceSlug,
}: {
  services: Service[];
  initialServiceSlug?: string;
}) {
  const [serviceSlug, setServiceSlug] = useState(
    initialServiceSlug && services.some((s) => s.slug === initialServiceSlug)
      ? initialServiceSlug
      : (services[0]?.slug ?? "")
  );
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  const selectedService = services.find((s) => s.slug === serviceSlug);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!selectedService || !date || !time || !customerName || !phone || !vehicle) {
      setError("Por favor completa todos los campos obligatorios.");
      return;
    }
    setError("");

    const url = whatsappUrlForBooking({
      serviceId: selectedService.id,
      serviceName: selectedService.name,
      date,
      time,
      customerName,
      phone,
      vehicle,
      notes: notes || undefined,
    });

    window.open(url, "_blank", "noopener,noreferrer");
  }

  const inputClasses =
    "w-full rounded-md border border-white/10 bg-colfer-black py-2.5 px-3 text-sm text-colfer-white placeholder:text-colfer-white/30 focus:border-colfer-accent focus:outline-none";
  const labelClasses = "mb-1.5 block text-xs font-medium text-colfer-white/60";

  return (
    <form
      onSubmit={handleSubmit}
      id="reservar"
      className="flex flex-col gap-4 rounded-xl border border-white/10 bg-colfer-dark p-6"
    >
      <div className="flex items-center gap-2">
        <CalendarCheck size={20} className="text-colfer-accent" />
        <h2 className="font-display text-lg font-bold text-colfer-white">
          Reservar servicio
        </h2>
      </div>

      <div>
        <label className={labelClasses} htmlFor="servicio">
          Servicio *
        </label>
        <select
          id="servicio"
          value={serviceSlug}
          onChange={(e) => setServiceSlug(e.target.value)}
          className={inputClasses}
        >
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelClasses} htmlFor="fecha">
            Fecha *
          </label>
          <input
            id="fecha"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={inputClasses}
          />
        </div>
        <div>
          <label className={labelClasses} htmlFor="hora">
            Hora *
          </label>
          <input
            id="hora"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label className={labelClasses} htmlFor="nombre">
          Nombre *
        </label>
        <input
          id="nombre"
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="Tu nombre completo"
          className={inputClasses}
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelClasses} htmlFor="telefono">
            Teléfono *
          </label>
          <input
            id="telefono"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Ej: 70123456"
            className={inputClasses}
          />
        </div>
        <div>
          <label className={labelClasses} htmlFor="vehiculo">
            Vehículo *
          </label>
          <input
            id="vehiculo"
            type="text"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            placeholder="Ej: Toyota Corolla 2020"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label className={labelClasses} htmlFor="observaciones">
          Observaciones
        </label>
        <textarea
          id="observaciones"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          placeholder="Detalles adicionales (opcional)"
          className={inputClasses}
        />
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1ebd5a]"
      >
        Enviar solicitud por WhatsApp
      </button>
    </form>
  );
}
