import { Button } from "@/components/ui/button";
import { MessageCircle, FileText, ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5492213146974&text&type=phone_number&app_absent=0";
const WHATSAPP_CATALOG_LINK = "https://api.whatsapp.com/send/?phone=5492213146974&text=Hola!%20%C2%BFC%C3%B3mo%20est%C3%A1s%3F%20Quiero%20solicitar%20el%20cat%C3%A1logo%20mayorista&type=phone_number&app_absent=0";

const FinalCTASection = () => {
  return (
    <section className="py-24 bg-industrial-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-led-glow/5 rounded-full blur-3xl" />
      </div>
      
      {/* Animated border */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-led-glow to-transparent" />
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-led-glow/10 border border-led-glow/30 mb-8">
            <ArrowRight className="w-4 h-4 text-led-glow" />
            <span className="text-led-glow text-sm font-medium">Da el siguiente paso</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Un proveedor confiable para{" "}
            <span className="text-gradient-glow">crecer a largo plazo</span>
          </h2>
          
          <p className="text-steel text-lg mb-10 max-w-xl mx-auto">
            Contactanos y empezá a trabajar con un mayorista que entiende tu negocio.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                HABLAR CON UN ASESOR
              </a>
              <Button variant="heroOutline" size="xl" asChild>
              <a
            href={WHATSAPP_CATALOG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base"
          >
          <FileText className="w-5 h-5" />
          SOLICITAR CATÁLOGO
  </a>
</Button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
