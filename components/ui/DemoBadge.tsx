import clsx from "clsx";

export function DemoBadge({ className }: { className?: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full bg-colfer-accent/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white",
        className
      )}
    >
      Demo
    </span>
  );
}
