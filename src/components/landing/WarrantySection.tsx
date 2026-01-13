import { ShieldCheck, RotateCcw, Truck, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5492213146974&text&type=phone_number&app_absent=0";

const features = [
  {
    icon: ShieldCheck,
    title: "Garantía oficial",
    description: "Todos nuestros productos cuentan con garantía de fábrica.",
  },
  {
    icon: RotateCcw,
    title: "Reposición rápida",
    description: "Reponemos productos defectuosos en tus próximos pedidos.",
  },
  {
    icon: Truck,
    title: "Continuidad operativa",
    description: "Minimizamos tiempos de espera para que sigas vendiendo.",
  },
];

const WarrantySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-led-glow font-semibold text-sm uppercase tracking-wide mb-4 block">
              Tu tranquilidad
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Garantía y respaldo postventa
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ante productos defectuosos, realizamos reposición en pedidos posteriores, brindando 
              tranquilidad comercial y continuidad operativa a nuestros clientes.
            </p>
          </div>
          
          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl bg-card border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-led-glow/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-led-glow" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* --- NUEVO BOTÓN DE ACCIÓN --- */}
          <div className="flex justify-center">
            <Button 
              className="bg-led-glow text-industrial-dark hover:bg-led-glow-soft font-bold shadow-glow text-base px-8 py-6 h-auto w-auto rounded-full transform transition-transform hover:scale-105"
              asChild
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                CONTACTAR ASESOR
              </a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WarrantySection;
