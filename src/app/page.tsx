import Hero from "@/components/hero/Hero";
import ProductShowcase from "@/components/product/ProductShowcase";
import BeforeAfterSlider from "@/components/interactive/BeforeAfterSlider";
import CTAFinal from "@/components/cta/CTAFinal";

export default function HomePage() {
  return (
    <main className="bg-background text-white overflow-x-hidden">
      <Hero />
      <ProductShowcase />
      <BeforeAfterSlider />
      <CTAFinal />
    </main>
  );
}
