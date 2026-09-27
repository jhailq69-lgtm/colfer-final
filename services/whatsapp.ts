import { siteConfig } from "@/config/site";
import type { CartItem, BookingRequest } from "@/types";
import { formatPrice } from "@/utils/format";

/**
 * Construye una URL de wa.me con un mensaje pre-cargado.
 * Si el número aún no está configurado, igual devuelve un link a wa.me
 * (sin número) para que el flujo no rompa durante el desarrollo;
 * el número real se agrega en config/site.ts.
 */
function buildWhatsappUrl(message: string): string {
  const base = siteConfig.whatsappNumber
    ? `https://wa.me/${siteConfig.whatsappNumber}`
    : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function whatsappUrlForProduct(productName: string, price: number): string {
  const message = [
    `Hola COLFER, quisiera consultar sobre este producto:`,
    ``,
    `Producto: ${productName}`,
    `Precio: ${formatPrice(price)}`,
  ].join("\n");
  return buildWhatsappUrl(message);
}

export function whatsappUrlForService(serviceName: string, priceFrom: number): string {
  const message = [
    `Hola COLFER, quisiera consultar sobre este servicio:`,
    ``,
    `Servicio: ${serviceName}`,
    `Precio desde: ${formatPrice(priceFrom)}`,
  ].join("\n");
  return buildWhatsappUrl(message);
}

export function whatsappUrlForCart(items: CartItem[], total: number): string {
  const lines = [
    `Hola COLFER, quisiera comprar los siguientes productos:`,
    ``,
    ...items.map(
      (item) =>
        `• ${item.name} — Cantidad: ${item.quantity} — Precio: ${formatPrice(
          item.price
        )} — Subtotal: ${formatPrice(item.price * item.quantity)}`
    ),
    ``,
    `TOTAL: ${formatPrice(total)}`,
  ];
  return buildWhatsappUrl(lines.join("\n"));
}

export function whatsappUrlForBooking(booking: BookingRequest): string {
  const lines = [
    `Hola COLFER, quisiera reservar el siguiente servicio:`,
    ``,
    `Servicio: ${booking.serviceName}`,
    `Fecha: ${booking.date}`,
    `Hora: ${booking.time}`,
    `Nombre: ${booking.customerName}`,
    `Teléfono: ${booking.phone}`,
    `Vehículo: ${booking.vehicle}`,
    booking.notes ? `Observaciones: ${booking.notes}` : undefined,
  ].filter(Boolean);
  return buildWhatsappUrl(lines.join("\n"));
}

export function whatsappUrlGeneral(): string {
  return buildWhatsappUrl("Hola COLFER, quisiera hacer una consulta.");
}
