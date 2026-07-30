import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routing.locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 1,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((altLocale) => [
          altLocale,
          `${SITE_URL}/${altLocale}`,
        ])
      ),
    },
  }));
}