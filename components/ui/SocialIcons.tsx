/**
 * Íconos de redes sociales como SVG propios.
 * lucide-react ya no incluye íconos de marcas (Facebook, Instagram, etc.),
 * así que se implementan aquí como trazos simples y neutros.
 */

export function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.25-1.5 1.5-1.5H16.6V4.3C16.3 4.26 15.4 4.2 14.3 4.2c-2.3 0-3.8 1.4-3.8 3.9V10.5H8v3h2.5V21h3z" />
    </svg>
  );
}

export function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TiktokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.5 3c.4 2.2 1.8 3.6 4 3.9v2.6c-1.5 0-2.9-.4-4-1.2v6.4c0 3-2.4 5.3-5.4 5.3S5.7 17.7 5.7 14.7c0-3 2.4-5.3 5.4-5.3.4 0 .8 0 1.2.1v2.7a2.8 2.8 0 00-1.2-.3 2.8 2.8 0 100 5.6 2.8 2.8 0 002.8-2.8V3h2.6z" />
    </svg>
  );
}
