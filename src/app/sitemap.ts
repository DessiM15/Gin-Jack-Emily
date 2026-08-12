import type { MetadataRoute } from "next";
import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site";

const routes = [
  { path: "", priority: 1 },
  { path: "/services", priority: 0.9 },
  { path: "/contact", priority: 0.9 },
  { path: "/about", priority: 0.8 },
  { path: "/gallery", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: CONTENT_LAST_UPDATED,
    changeFrequency: "monthly",
    priority,
  }));
}
