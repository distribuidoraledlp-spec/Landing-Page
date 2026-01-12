import { Button } from "@/components/ui/button";
import { MessageCircle, Building2, ShieldCheck } from "lucide-react";

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5492213146974&text&type=phone_number&app_absent=0";

const B2BFilterSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="relative rounded-3xl bg-industrial-dark overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-led-glow/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-led-glow/5 rounded-full blur-3xl" />
          
          <div className="relative px-8 py-16 md:px-16 md:py-20">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 mb-6">
                  <Building2 className="w-6 h-6 text-led-glow" />
                  <span className="text-led-glow font-semibold text-sm uppercase tracking-wide">
                    Solo comercios mayoristas
                  </span>
                </div>
                
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                  ¿Tenés un comercio del rubro?
                </h2>
                
                <p className="text-steel text-lg leading-relaxed mb-8 max-w-xl">
                  Trabajamos exclusivamente con clientes mayoristas que buscan un proveedor confiable para el largo plazo.
                </p>
                
                <div className="flex items-center gap-3 text-led-soft mb-8">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-sm font-medium">No realizamos ventas al consumidor final.</span>
                </div>
                
                <Button variant="whatsapp" size="lg" asChild>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    HABLAR CON UN ASESOR
                  </a>
                </Button>
              </div>
              
              {/* Right decorative element */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full border-4 border-led-glow/20 flex items-center justify-center">
                    <div className="w-36 h-36 rounded-full border-4 border-led-glow/40 flex items-center justify-center glow-animation">
                      <div className="w-24 h-24 rounded-full bg-led-glow/10 flex items-center justify-center">
                        <span className="text-5xl font-display font-bold text-led-glow">B2B</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BFilterSection;
