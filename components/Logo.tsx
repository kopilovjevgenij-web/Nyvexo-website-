import Image from "next/image";
import { cn } from "@/lib/utils";

// Real Nyvexo brand assets (public/brand/), unaltered:
// - nyvexo-icon.png: the square gradient "N" mark — used everywhere.
// - nyvexo-full-white.png: the client's white-on-dark full lockup — used
//   as-is on dark surfaces (footer).
// No dark-on-light full lockup was supplied, so light surfaces (header,
// mobile nav) pair the real icon image with the brand name set as live
// text in the site's own type, rather than a flattened image — the icon
// artwork itself is never redrawn.
export function Logo({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  if (variant === "dark") {
    return (
      <span className={cn("inline-flex items-center", className)}>
        <Image
          src="/brand/nyvexo-full-white.png"
          alt="Nyvexo"
          width={987}
          height={305}
          priority
          className="h-8 w-auto sm:h-9"
        />
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image src="/brand/nyvexo-icon.png" alt="" width={512} height={512} priority className="size-8 shrink-0" />
      <span className="font-display text-lg font-bold tracking-tight text-ink">Nyvexo</span>
    </span>
  );
}
