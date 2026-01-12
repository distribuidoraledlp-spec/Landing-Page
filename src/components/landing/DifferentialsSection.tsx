import { Button } from "@/components/ui/button";
import { MessageCircle, Handshake, Package, Shield, HeadphonesIcon } from "lucide-react";

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5492213146974&text&type=phone_number&app_absent=0";

const differentials = [
  {
    icon: Handshake,
    title: "Relación comercial a largo plazo",
    description: "Construimos vínculos duraderos basados en la confianza y el compromiso mutuo.",
  },
  {
    icon: Package,
    title: "Stock real y variedad de productos",
    description: "Disponibilidad inmediata en nuestro depósito para abastecerte cuando lo necesites.",
  },
  {
    icon: Shield,
    title: "Garantía y reposición ante fallas",
    description: "Respaldo comercial con reposición de productos defectuosos en pedidos posteriores.",
  },
  {
    icon: HeadphonesIcon,
    title: "Atención comercial directa por WhatsApp",
    description: "Comunicación ágil y personalizada para resolver tus consultas al instante.",
  },
];

const DifferentialsSection = () => {
  return (
    <section className="py-24 bg-industrial-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-led-glow/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-led-glow/5 rounded-full blur-3xl" />
      
      <div className="container relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-led-glow font-semibold text-sm uppercase tracking-wide mb-4 block">
            Nuestros diferenciales
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Por qué nuestros clientes trabajan con nosotros
          </h2>
        </div>
        
        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {differentials.map((item, index) => (
            <div 
              key={index}
              className="group flex gap-5 p-6 rounded-2xl bg-industrial-medium/50 border border-industrial-light/30 hover:border-led-glow/40 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-led-glow/10 flex items-center justify-center group-hover:bg-led-glow/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-led-glow" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-steel text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              HABLAR CON UN ASESOR
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
