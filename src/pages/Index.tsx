import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import B2BFilterSection from "@/components/landing/B2BFilterSection";
import AboutSection from "@/components/landing/AboutSection";
import ProductLinesSection from "@/components/landing/ProductLinesSection";
import WarehouseSection from "@/components/landing/WarehouseSection";
import DifferentialsSection from "@/components/landing/DifferentialsSection";
import HowWeWorkSection from "@/components/landing/HowWeWorkSection";
import BrandsSection from "@/components/landing/BrandsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import WarrantySection from "@/components/landing/WarrantySection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";
import FloatingWhatsApp from "@/components/landing/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 md:pt-20">
        <HeroSection />
        <B2BFilterSection />
        <AboutSection />
        <ProductLinesSection />
        <WarehouseSection />
        <DifferentialsSection />
        <HowWeWorkSection />
        <BrandsSection />
        <TestimonialsSection />
        <WarrantySection />
        <FinalCTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
