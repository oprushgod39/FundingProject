import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/divisions",
  "/government-solutions",
  "/workforce-development",
  "/community-impact",
  "/technology",
  "/partnerships",
  "/investor-relations",
  "/case-studies",
  "/leadership",
  "/careers",
  "/media",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://academyventures.com";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
