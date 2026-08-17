import { cn } from "@/lib/utils";

/**
 * Inline SVG wordmark — swap the mark or wordmark here to rebrand the whole
 * site from a single place instead of managing raster logo files.
 */
export function Logo({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const isDark = variant === "dark";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <rect width="30" height="30" rx="8" fill={isDark ? "#ffffff" : "#12141a"} />
        <path
          d="M9 19.5C9 17.567 10.567 16 12.5 16H15C16.933 16 18.5 14.433 18.5 12.5C18.5 10.567 16.933 9 15 9H10"
          stroke={isDark ? "#12141a" : "#ffffff"}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="21" cy="19.5" r="1.9" fill="#2953ff" />
      </svg>
      <span
        className={cn(
          "font-display text-lg font-bold tracking-tight",
          isDark ? "text-white" : "text-ink"
        )}
      >
        SmartFlow
      </span>
    </span>
  );
}
