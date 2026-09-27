/**
 * Tipos principales de COLFER.
 * Modelados según las entidades previstas para la futura base de datos
 * (Supabase / Postgres): Users, Products, Categories, Brands, Vehicles,
 * Compatibility, Orders, OrderItems, Services, Bookings.
 */

export type CategorySlug =
  | "autopartes"
  | "limpieza-interior"
  | "multimedia"
  | "faroles"
  | "estetica-exterior"
  | "accesorios";

export interface Category {
  id: string;
  slug: CategorySlug;
  name: string;
  description: string;
}

export interface Brand {
  id: string;
  slug: string;
  name: string;
}

export interface Vehicle {
  id: string;
  brand: string; // Marca del vehículo (Toyota, Nissan, etc.)
  model: string; // Modelo (Corolla, Sentra, etc.)
  year: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  categorySlug: CategorySlug;
  brand: string; // Marca del producto (ej: Bosch), no confundir con Vehicle.brand
  price: number;
  previousPrice?: number;
  discountPercent?: number;
  available: boolean;
  stock?: number;
  description: string;
  features: string[];
  compatibleVehicles?: Pick<Vehicle, "brand" | "model" | "year">[];
  images: string[];
  isDemo: true; // todos los productos actuales son de demostración
}

export interface Service {
  id: string;
  slug: string;
  categorySlug: "limpieza-interior" | "estetica-exterior";
  name: string;
  description: string;
  priceFrom: number;
  durationMinutes: number;
  images: string[];
  isDemo: true;
}

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

export interface BookingRequest {
  serviceId: string;
  serviceName: string;
  date: string;
  time: string;
  customerName: string;
  phone: string;
  vehicle: string;
  notes?: string;
}

// Entidades previstas para la fase 2 (Supabase), aún no implementadas
// en el frontend: User, Order, OrderItem, Booking (persistida).
