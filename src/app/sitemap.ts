import type { MetadataRoute } from "next";
import { site, truckPage, homeGallery, truckGallery } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: homeGallery.map((image) => `${site.url}${image.url}`),
    },
    {
      url: `${site.url}${truckPage.path}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      images: truckGallery.map((image) => `${site.url}${image.url}`),
    },
  ];
}
