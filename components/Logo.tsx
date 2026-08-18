import Image from "next/image";
import { cn } from "@/lib/utils";

// Real SmartFlow brand asset — public/brand/logo.png (unaltered colors and
// proportions, background removed for transparency). The wordmark's dark
// portion ("Smart") isn't legible directly on dark surfaces, so the "dark"
// variant places the exact same, unmodified artwork on a light chip instead
// of recoloring it.
const LOGO_RATIO = 1075 / 210;
const HEIGHT = 34;
const WIDTH = Math.round(HEIGHT * LOGO_RATIO);

export function Logo({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const image = (
    <Image
      src="/brand/logo.png"
      alt="SmartFlow"
      width={WIDTH}
      height={HEIGHT}
      priority
      className="h-[34px] w-auto"
    />
  );

  if (variant === "dark") {
    return (
      <span className={cn("inline-flex items-center rounded-xl bg-white px-3 py-2", className)}>
        {image}
      </span>
    );
  }

  return <span className={cn("inline-flex items-center", className)}>{image}</span>;
}
