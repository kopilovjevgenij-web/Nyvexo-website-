import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  tone = "blue",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "blue" | "neutral" | "outline";
}) {
  const tones = {
    blue: "bg-blue-soft text-blue border border-blue-soft-line",
    neutral: "bg-mist text-ink-soft border border-line",
    outline: "bg-transparent text-white/80 border border-white/25",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
