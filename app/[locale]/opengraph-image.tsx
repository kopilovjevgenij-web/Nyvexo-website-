import { ImageResponse } from "next/og";
import { SITE, LOCALES } from "@/lib/constants";
import { getDictionary } from "@/lib/i18n/config";
import { resolveLocale } from "@/lib/i18n/resolve-locale";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const dictionary = await getDictionary(locale);
  const t = dictionary.hero;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#12141a",
          backgroundImage: "linear-gradient(135deg, #12141a 0%, #171a22 55%, #12141a 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#12141a",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            SF
          </div>
          <div style={{ fontSize: 30, fontWeight: 700 }}>{SITE.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 54, fontWeight: 700, lineHeight: 1.15, maxWidth: 950 }}>{t.titleMain}</div>
          <div style={{ fontSize: 30, color: "#6f9bff", fontWeight: 600, maxWidth: 900 }}>{t.titleAccent}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
