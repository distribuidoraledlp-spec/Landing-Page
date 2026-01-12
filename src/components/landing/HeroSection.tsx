import { Button } from "@/components/ui/button";
import { MessageCircle, FileText } from "lucide-react";
import heroWarehouse from "@/assets/hero-warehouse.jpg";

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5492213146974&text&type=phone_number&app_absent=0";
const WHATSAPP_CATALOG_LINK = "https://api.whatsapp.com/send/?phone=5492213146974&text=Hola!%20%C2%BFC%C3%B3mo%20est%C3%A1s%3F%20Quiero%20solicitar%20el%20cat%C3%A1logo%20mayorista&type=phone_number&app_absent=0";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroWarehouse} 
          alt="Depósito mayorista La Plata LED" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        {/* LED Glow Effect */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-led-glow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-led-glow/5 rounded-full blur-3xl" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-led-glow/10 border border-led-glow/30 mb-8">
            <div className="w-2 h-2 rounded-full bg-led-glow animate-pulse-glow" />
            <span className="text-led-glow text-sm font-medium">Distribuidora Mayorista</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Distribución mayorista pensada para{" "}
            <span className="text-gradient-glow">relaciones comerciales de largo plazo</span>
          </h1>
          
          <p className="text-lg md:text-xl text-steel leading-relaxed mb-10 max-w-2xl">
            Stock permanente, garantía y atención personalizada para comercios del rubro eléctrico, ferretero y sanitario.
            <span className="block mt-2 text-led-soft font-medium">Atendemos clientes en todo el país.</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                HABLAR CON UN ASESOR
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href={WHATSAPP_CATALOG_LINK} target="_blank" rel="noopener noreferrer">
                <FileText className="w-5 h-5" />
                SOLICITAR CATÁLOGO MAYORISTA
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
