import { Button } from "@/components/ui/button";
import { FileText, Calendar, Users, Target } from "lucide-react";
import productsDisplay from "@/assets/products-display.jpg";

const WHATSAPP_CATALOG_LINK = "https://api.whatsapp.com/send/?phone=5492213146974&text=Hola!%20%C2%BF%C3%B3mo%20est%C3%A1s%3F%20Quiero%20solicitar%20el%20cat%C3%A1logo%20mayorista&type=phone_number&app_absent=0";

const stats = [
  { icon: Calendar, value: "2015", label: "Año de inicio" },
  { icon: Users, value: "2019", label: "Especialización mayorista" },
  { icon: Target, value: "100%", label: "Enfoque B2B" },
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 bg-concrete scroll-mt-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img 
                src={productsDisplay} 
                alt="Productos en stock - La Plata LED"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark/60 to-transparent" />
            </div>
            
            {/* Floating stats cards */}
            <div className="absolute -bottom-8 -right-8 bg-card rounded-2xl p-6 shadow-elevated">
              <div className="flex items-center gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className={`text-center ${index > 0 ? 'border-l border-border pl-4' : ''}`}>
                    <stat.icon className="w-5 h-5 mx-auto mb-2 text-led-glow" />
                    <div className="text-xl font-display font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Content side */}
          <div>
            <span className="text-led-glow font-semibold text-sm uppercase tracking-wide mb-4 block">
              Quiénes somos
            </span>
            
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Un proveedor mayorista pensado para crecer junto a sus clientes
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>
                Desde 2015 abastecemos comercios del rubro eléctrico y ferretero en todo el país. 
                Desde 2019 nos especializamos en distribución mayorista, priorizando relaciones 
                comerciales estables y duraderas.
              </p>
              <p className="text-foreground font-medium">
                Nuestro objetivo no es una venta aislada, sino convertirnos en un proveedor 
                confiable para cada cliente.
              </p>
            </div>
            
            <Button variant="catalog" size="lg" asChild>
              <a href={WHATSAPP_CATALOG_LINK} target="_blank" rel="noopener noreferrer">
                <FileText className="w-5 h-5" />
                SOLICITAR CATÁLOGO MAYORISTA
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
