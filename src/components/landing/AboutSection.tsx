import { Button } from "@/components/ui/button";
import { FileText, Calendar, Users, Target } from "lucide-react";
// Asegúrate de que esta imagen exista, si no, cambia esto por una ruta "/imagen.jpg"
import productsDisplay from "@/assets/products-display.jpg"; 

const WHATSAPP_CATALOG_LINK = "https://api.whatsapp.com/send/?phone=5492213146974&text=Hola!%20%C2%BF%C3%B3mo%20est%C3%A1s%3F%20Quiero%20solicitar%20el%20cat%C3%A1logo%20mayorista&type=phone_number&app_absent=0";

const stats = [
  { icon: Calendar, value: "2015", label: "Año de inicio" },
  { icon: Users, value: "2019", label: "Especialización mayorista" },
  { icon: Target, value: "100%", label: "Enfoque B2B" },
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 bg-concrete scroll-mt-20 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LADO IMAGEN */}
          {/* Agregamos mb-16 en mobile para dar espacio a la tarjeta flotante */}
          <div className="relative mb-16 lg:mb-0">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img 
                src={productsDisplay} 
                alt="Productos en stock - La Plata LED"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark/60 to-transparent" />
            </div>
            
            {/* Tarjeta flotante de estadísticas */}
            {/* FIX: En mobile se centra abajo. En Desktop (lg) se va a la derecha */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] lg:w-auto lg:left-auto lg:translate-x-0 lg:-bottom-8 lg:-right-8 bg-card rounded-2xl p-6 shadow-elevated z-10">
              <div className="flex items-center justify-center gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className={`text-center ${index > 0 ? 'border-l border-border pl-4' : ''}`}>
                    <stat.icon className="w-5 h-5 mx-auto mb-2 text-led-glow" />
                    <div className="text-xl font-display font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground whitespace-nowrap">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* LADO CONTENIDO (TEXTO) */}
          {/* FIX: Centrado en mobile (text-center), Izquierda en PC (lg:text-left) */}
          <div className="text-center lg:text-left">
            <span className="text-led-glow font-semibold text-sm uppercase tracking-wide mb-4 inline-block lg:block">
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
            
            {/* FIX: Botón centrado en mobile */}
            <div className="flex justify-center lg:justify-start">
              <Button variant="default" size="lg" className="bg-led-glow text-industrial-dark hover:bg-led-glow-soft font-bold" asChild>
                <a href={WHATSAPP_CATALOG_LINK} target="_blank" rel="noopener noreferrer">
                  <FileText className="w-5 h-5 mr-2" />
                  SOLICITAR CATÁLOGO MAYORISTA
                </a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
