import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gianluca-donato.vercel.app";
  const locales = ["en", "es"];

  const homeRoutes = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: locale === "en" ? 1 : 0.9,
  }));

  const projectSlugs = ["stock-manager"];
  const projectRoutes = locales.flatMap((locale) =>
    projectSlugs.map((slug) => ({
      url: `${baseUrl}/${locale}/projects/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  const galleryRoutes = locales.map((locale) => ({
    url: `${baseUrl}/${locale}/gallery`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...homeRoutes, ...galleryRoutes, ...projectRoutes];
}
