import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { productosDemo } from "@/data/productos-demo";

const productCategories = ["autopartes", "multimedia", "faroles", "accesorios"];
const serviceCategories = ["limpieza-interior", "estetica-exterior"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/productos`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/servicios`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/nosotros`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/contacto`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  const productCategoryRoutes: MetadataRoute.Sitemap = productCategories.map(
    (slug) => ({
      url: `${base}/productos/${slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );

  const serviceCategoryRoutes: MetadataRoute.Sitemap = serviceCategories.map(
    (slug) => ({
      url: `${base}/servicios/${slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );

  const productRoutes: MetadataRoute.Sitemap = productosDemo.map((p) => ({
    url: `${base}/producto/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...productCategoryRoutes,
    ...serviceCategoryRoutes,
    ...productRoutes,
  ];
}
