import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Importaciones
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

// --- AQUÍ ESTÁ LA MAGIA ---
// Este componente renderiza TODO, pero revisa la URL para hacer scroll
const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // Detectamos la ruta actual (ej: "/marcas")
    const path = location.pathname;
    
    // Si es la home pura "/", subimos arriba de todo
    if (path === "/") {
      window.scrollTo(0, 0);
      return;
    }

    // Quitamos la barra "/" para obtener el ID (ej: "marcas")
    const sectionId = path.replace("/", "");
    
    // Buscamos la sección en el HTML
    const element = document.getElementById(sectionId);
    
    // Si existe, hacemos scroll hasta ella
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100); // Pequeño delay para asegurar que la página cargó
    }
  }, [location]); // Se ejecuta cada vez que cambia la URL

  return (
    <>
      <HeroSection />
      {/* Asegurate que tus secciones tengan los IDs correctos dentro de sus archivos */}
      <ProductLinesSection />
      <BrandsSection />
      <HowWeWorkSection />
      <WarehouseSection />
      <WarrantySection />
      <AboutSection />
    </>
  );
};

// Página de Error simple
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
        <Header />
        <FloatingWhatsApp />
        
        <main className="pt-20 min-h-screen bg-background">
          <Routes>
            {/* TRUCO: Todas las rutas cargan la MISMA HomePage que contiene TODO */}
            <Route path="/" element={<HomePage />} />
            <Route path="/productos" element={<HomePage />} />
            <Route path="/marcas" element={<HomePage />} />
            <Route path="/como-comprar" element={<HomePage />} />
            <Route path="/deposito" element={<HomePage />} />
            <Route path="/garantia" element={<HomePage />} />
            <Route path="/nosotros" element={<HomePage />} />
            
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
      
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
