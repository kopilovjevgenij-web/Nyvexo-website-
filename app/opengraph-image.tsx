import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          backgroundImage:
            "linear-gradient(135deg, #12141a 0%, #171a22 55%, #12141a 100%)",
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
          <div style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.15, maxWidth: 950 }}>
            Ваш бизнес. Ваши процессы. Теперь — умнее.
          </div>
          <div style={{ fontSize: 26, color: "#9aa0ad", maxWidth: 850 }}>
            {`${SITE.tagline} — сайты, автоматизация и AI для малого и среднего бизнеса.`}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
