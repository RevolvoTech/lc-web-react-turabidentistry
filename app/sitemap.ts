import type { MetadataRoute } from "next";
import { siteUrl } from "./config";
import { localSeoPages } from "./site-pages";

const lastModified = new Date("2026-06-06");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...localSeoPages.map((page) => ({
      url: `${siteUrl}/${page.slug}`,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.sitemapPriority,
    })),
  ];
}
