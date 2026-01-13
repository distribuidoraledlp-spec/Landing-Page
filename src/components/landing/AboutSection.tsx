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
    <section id="nosotros" className="py-20 bg-concrete scroll-mt-20 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LADO IMAGEN */}
          {/* TRUCO 1: En móvil damos margen abajo (mb-24) para que entre la tarjeta. 
              En Desktop (lg:mb-0) quitamos ese margen porque la tarjeta flota al lado. */}
          <div className="relative mb-24 lg:mb-0">
            
            {/* Contenedor de la foto */}
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img 
                src={productsDisplay} 
                alt="Productos en stock - La Plata LED"
                className="w-full h-[350px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark/60 to-transparent" />
            </div>
            
            {/* TARJETA FLOTANTE HÍBRIDA */}
            <div className="
              absolute z-20 bg-card rounded-2xl p-4 lg:p-6 shadow-elevated border border-border/50
              
              /* ESTILOS MÓVIL (Seguro y centrado) */
              left-1/2 -translate-x-1/2  /* Centrado horizontal */
              -bottom-20                 /* Empujado hacia abajo */
              w-[90%]                    /* Ancho controlado */
              
              /* ESTILOS DESKTOP (Vuelve al diseño original) */
              lg:w-auto                  /* Ancho automático */
              lg:left-auto lg:translate-x-0 /* Quitamos el centrado */
              lg:right-[-2rem]           /* Lo sacamos a la derecha (-8) */
              lg:bottom-[-2rem]          /* Lo subimos un poco respecto al móvil (-8) */
            ">
              <div className="grid grid-cols-3 gap-2 divide-x divide-border">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center px-2">
                    <stat.icon className="w-5 h-5 mx-auto mb-2 text-led-glow" />
                    <div className="text-lg lg:text-xl font-display font-bold text-foreground">{stat.value}</div>
                    {/* Texto pequeño en móvil, normal en desktop */}
                    <div className="text-[10px] lg:text-xs text-muted-foreground uppercase tracking-tight leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* LADO CONTENIDO (TEXTO) */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-4">
              <span className="text-led-glow font-semibold text-sm uppercase tracking-wide">
                Quiénes somos
              </span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight px-2 lg:px-0">
              Un proveedor mayorista pensado para crecer junto a sus clientes
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8 px-2 lg:px-0">
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
            
            <div className="flex justify-center lg:justify-start">
              <Button variant="default" size="lg" className="bg-led-glow text-industrial-dark hover:bg-led-glow-soft font-bold w-full sm:w-auto" asChild>
                <a href={WHATSAPP_CATALOG_LINK} target="_blank" rel="noopener noreferrer">
                  <FileText className="w-5 h-5 mr-2" />
                  SOLICITAR CATÁLOGO
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
