import Image from "next/image";
import { cn } from "@/lib/utils";

// Flip to true once a real brand asset is added — see public/brand/README.md.
// Until then this intentionally keeps rendering a plain, undecorated
// wordmark rather than a generated/invented logo.
const HAS_REAL_LOGO = false;

export function Logo({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const isDark = variant === "dark";

  if (HAS_REAL_LOGO) {
    const src = isDark ? "/brand/logo-dark.svg" : "/brand/logo.svg";
    return (
      <span className={cn("inline-flex items-center", className)}>
        <Image src={src} alt="SmartFlow" width={140} height={36} priority className="h-8 w-auto sm:h-9" />
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden className="shrink-0">
        <rect width="30" height="30" rx="8" fill={isDark ? "#ffffff" : "#12141a"} />
        <path
          d="M9 19.5C9 17.567 10.567 16 12.5 16H15C16.933 16 18.5 14.433 18.5 12.5C18.5 10.567 16.933 9 15 9H10"
          stroke={isDark ? "#12141a" : "#ffffff"}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="21" cy="19.5" r="1.9" fill="#2953ff" />
      </svg>
      <span className={cn("font-display text-lg font-bold tracking-tight", isDark ? "text-white" : "text-ink")}>
        SmartFlow
      </span>
    </span>
  );
}
