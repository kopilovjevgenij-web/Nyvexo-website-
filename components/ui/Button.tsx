"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn, scrollToHash } from "@/lib/utils";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  showArrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

const variants = {
  primary:
    "bg-blue text-white hover:bg-blue-dark shadow-[0_1px_2px_rgba(18,20,26,0.08)]",
  secondary:
    "bg-white text-ink border border-line-strong hover:border-ink hover:bg-mist",
  ghost: "bg-transparent text-ink hover:bg-mist",
};

const sizes = {
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  showArrow = true,
  className,
  children,
  href,
  ...props
}: ButtonBaseProps &
  (
    | ({ href: string } & Omit<React.ComponentPropsWithoutRef<typeof Link>, "href" | "className">)
    | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  )) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 whitespace-nowrap",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight
          className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden
        />
      )}
    </>
  );

  if (href) {
    if (href.startsWith("#")) {
      // Same-page anchor: drive the scroll explicitly instead of relying on
      // native fragment navigation. next/link's client-side routing skips
      // the scroll entirely when location.hash already equals the target,
      // and even a plain <a> is unreliable on repeat clicks over a very
      // long distance (e.g. a footer link back up the page) — both real,
      // reproduced cases, not just a theoretical concern.
      const { onClick, ...anchorProps } = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
      return (
        <a
          href={href}
          className={classes}
          onClick={(e) => {
            onClick?.(e);
            scrollToHash(e, href);
          }}
          {...anchorProps}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={classes}
        {...(props as Omit<React.ComponentPropsWithoutRef<typeof Link>, "href" | "className">)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
