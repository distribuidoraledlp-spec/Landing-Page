import { Button } from "@/components/ui/button";
import { FileText, MessageSquare, Search, FileSpreadsheet, Package, Truck } from "lucide-react";

const WHATSAPP_CATALOG_LINK = "https://api.whatsapp.com/send/?phone=5492213146974&text=Hola!%20%C2%BF%C3%B3mo%20est%C3%A1s%3F%20Quiero%20solicitar%20el%20cat%C3%A1logo%20mayorista&type=phone_number&app_absent=0";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Nos escribís por WhatsApp",
    description: "Iniciá el contacto de forma simple y directa.",
  },
  {
    number: "02",
    icon: Search,
    title: "Analizamos tu tipo de comercio",
    description: "Evaluamos tus necesidades para ofrecerte la mejor atención.",
  },
  {
    number: "03",
    icon: FileSpreadsheet,
    title: "Te enviamos el catálogo mayorista",
    description: "Accedés a nuestra lista completa con precios mayoristas.",
  },
  {
    number: "04",
    icon: Package,
    title: "Armamos el pedido",
    description: "Preparamos tu orden con el stock disponible.",
  },
  {
    number: "05",
    icon: Truck,
    title: "Despachamos a tu localidad",
    description: "Enviamos a todo el país de manera segura.",
  },
];

const HowWeWorkSection = () => {
  return (
    <section id="como-comprar" className="py-24 bg-background scroll-mt-20 overflow-hidden">
      <div className="container px-4"> {/* Aseguramos padding lateral en el contenedor general */}
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-led-glow font-semibold text-sm uppercase tracking-wide mb-4 block">
            Proceso simple
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cómo empezamos a trabajar juntos
          </h2>
        </div>
        
        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-led-glow via-led-glow/50 to-led-glow -translate-x-1/2" />
          
          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative flex flex-col lg:flex-row items-center gap-6 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 w-full ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className={`bg-card rounded-2xl p-6 shadow-card border border-border relative z-10 hover:shadow-elevated transition-shadow duration-300 ${
                    index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                  }`}>
                    <div className={`flex items-center gap-4 mb-3 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <step.icon className="w-5 h-5 text-led-glow flex-shrink-0" />
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Step Number */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-led-glow flex items-center justify-center shadow-glow border-4 border-background">
                    <span className="font-display font-bold text-industrial-dark text-lg">{step.number}</span>
                  </div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA FINAL */}
        {/* FIX: Usamos 'w-full flex justify-center' para centrado absoluto.
            El botón tiene 'w-auto' para no ser un ladrillo largo y 'mx-auto' por seguridad. */}
        <div className="mt-16 w-full flex justify-center items-center">
          <Button 
            className="bg-led-glow text-industrial-dark hover:bg-led-glow-soft font-bold shadow-glow text-base px-8 py-6 h-auto w-auto rounded-full mx-auto transform transition-transform hover:scale-105"
            asChild
          >
            <a href={WHATSAPP_CATALOG_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              <FileText className="w-5 h-5" />
              <span>SOLICITAR CATÁLOGO MAYORISTA</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
