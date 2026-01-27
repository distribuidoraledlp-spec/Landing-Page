import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importamos tus secciones (que ahora actúan como páginas)
import Header from "@/components/landing/Header";
import Footer from "@/components/layout/Footer"; // Asegurate que la ruta sea correcta (layout o landing)
import FloatingWhatsApp from "@/components/landing/FloatingWhatsApp"; // Si tienes este componente
import HeroSection from "@/components/landing/HeroSection";
import ProductLinesSection from "@/components/landing/ProductLinesSection";
import BrandsSection from "@/components/landing/BrandsSection";
import HowWeWorkSection from "@/components/landing/HowWeWorkSection";
import WarehouseSection from "@/components/landing/WarehouseSection";
import WarrantySection from "@/components/landing/WarrantySection";
import AboutSection from "@/components/landing/AboutSection";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Esta es la "Página de Inicio" que muestra todo junto (como antes)
const HomePage = () => (
  <>
    <HeroSection />
    <ProductLinesSection />
    <BrandsSection />
    <HowWeWorkSection />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      
      <BrowserRouter>
        {/* Header fijo en todas las páginas */}
        <Header />
        
        <main className="pt-20 min-h-screen bg-background">
          <Routes>
            {/* 1. RUTA INICIO (www.laplataled.com/) */}
            <Route path="/" element={<HomePage />} />
            
            {/* 2. RUTAS INDIVIDUALES (Aquí es donde creamos las "páginas" nuevas) */}
            <Route path="/productos" element={<ProductLinesSection />} />
            <Route path="/marcas" element={<BrandsSection />} />
            <Route path="/como-comprar" element={<HowWeWorkSection />} />
            <Route path="/deposito" element={<WarehouseSection />} />
            <Route path="/garantia" element={<WarrantySection />} />
            <Route path="/nosotros" element={<AboutSection />} />
            
            {/* 3. RUTA ERROR (Si escriben cualquier otra cosa) */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
      
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
