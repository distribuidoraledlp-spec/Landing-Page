import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// --- IMPORTACIONES CORREGIDAS (Todas apuntan a components/landing) ---
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer"; 
import FloatingWhatsApp from "@/components/landing/FloatingWhatsApp";
import HeroSection from "@/components/landing/HeroSection";
import ProductLinesSection from "@/components/landing/ProductLinesSection";
import BrandsSection from "@/components/landing/BrandsSection";
import HowWeWorkSection from "@/components/landing/HowWeWorkSection";
import WarehouseSection from "@/components/landing/WarehouseSection";
import WarrantySection from "@/components/landing/WarrantySection";
import AboutSection from "@/components/landing/AboutSection";

const queryClient = new QueryClient();

// 1. Componente de Página de Inicio (Home)
const HomePage = () => (
  <>
    <HeroSection />
    <ProductLinesSection />
    <BrandsSection />
    <HowWeWorkSection />
  </>
);

// 2. Componente Simple de Error 404 (Para que no falle si no tienes el archivo)
const NotFoundPage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-4">
    <h1 className="text-4xl font-bold text-led-glow mb-4">404</h1>
    <p className="text-xl text-muted-foreground mb-8">Página no encontrada</p>
    <Button asChild className="bg-led-glow text-industrial-dark font-bold">
      <Link to="/">Volver al Inicio</Link>
    </Button>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      
      <BrowserRouter>
        {/* Header y WhatsApp fijos */}
        <Header />
        <FloatingWhatsApp />
        
        <main className="pt-20 min-h-screen bg-background">
          <Routes>
            {/* RUTA PRINCIPAL */}
            <Route path="/" element={<HomePage />} />
            
            {/* RUTAS INDIVIDUALES (Páginas) */}
            <Route path="/productos" element={<ProductLinesSection />} />
            <Route path="/marcas" element={<BrandsSection />} />
            <Route path="/como-comprar" element={<HowWeWorkSection />} />
            <Route path="/deposito" element={<WarehouseSection />} />
            <Route path="/garantia" element={<WarrantySection />} />
            <Route path="/nosotros" element={<AboutSection />} />
            
            {/* RUTA DE ERROR */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Footer fijo */}
        <Footer />
      </BrowserRouter>
      
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
