import type { MetadataRoute } from "next";
import { SITE, LOCALES } from "@/lib/constants";

const PAGES = ["", "/privacy-policy", "/terms", "/cookie-policy"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return PAGES.flatMap((page) =>
    LOCALES.map((locale) => ({
      url: `${SITE.url}/${locale}${page}`,
      lastModified,
      changeFrequency: page === "" ? ("weekly" as const) : ("yearly" as const),
      priority: page === "" ? 1 : 0.3,
      alternates: {
        languages: {
          ...Object.fromEntries(LOCALES.map((loc) => [loc, `${SITE.url}/${loc}${page}`])),
          "x-default": `${SITE.url}/lv${page}`,
        },
      },
    }))
  );
}
