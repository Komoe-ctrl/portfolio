import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { routing } from "@/i18n/routing";
import { PROJECT_SLUGS } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const paths = [
    { path: "", priority: 1 },
    ...PROJECT_SLUGS.map((slug) => ({
      path: `/projets/${slug}`,
      priority: 0.8,
    })),
  ];

  return paths.flatMap(({ path, priority }) =>
    routing.locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((altLocale) => [
            altLocale,
            `${SITE_URL}/${altLocale}${path}`,
          ])
        ),
      },
    }))
  );
}
