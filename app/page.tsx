import { Hero } from "@/components/home/Hero";
import { ImportBanner } from "@/components/home/ImportBanner";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Offers } from "@/components/home/Offers";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { CatalogDownload } from "@/components/home/CatalogDownload";
import { BrandsStrip } from "@/components/home/BrandsStrip";
import { TrustSection } from "@/components/home/TrustSection";
import { ContactSection } from "@/components/home/ContactSection";
import { getFeaturedProducts, getDiscountedProducts } from "@/services/products";
import { getFeaturedServices } from "@/services/services";

export default async function HomePage() {
  const [featuredProducts, discountedProducts, featuredServices] =
    await Promise.all([
      getFeaturedProducts(8),
      getDiscountedProducts(4),
      getFeaturedServices(3),
    ]);

  return (
    <main className="flex-1">
      <Hero />
      <ImportBanner />
      <CategoryGrid />
      <FeaturedProducts products={featuredProducts} />
      <Offers products={discountedProducts} />
      <FeaturedServices services={featuredServices} />
      <CatalogDownload />
      <BrandsStrip />
      <TrustSection />
      <ContactSection />
    </main>
  );
}
