import Link from "next/link";
import { DEFAULT_LOCALE } from "@/lib/constants";
import "./globals.css";

export default function NotFound() {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col items-center justify-center gap-4 bg-white px-6 text-center text-ink">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-soft">404</p>
        <h1 className="text-2xl font-semibold">Page not found</h1>
        <Link href={`/${DEFAULT_LOCALE}`} className="text-sm font-medium text-blue underline underline-offset-2">
          Back to SmartFlow
        </Link>
      </body>
    </html>
  );
}
