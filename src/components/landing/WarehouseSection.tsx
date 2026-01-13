import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import warehouse1 from "@/assets/warehouse-1.jpg";
import warehouse2 from "@/assets/warehouse-2.jpg";
import warehouse3 from "@/assets/warehouse-3.jpg";
import warehouse4 from "@/assets/warehouse-4.jpg";
import warehouse5 from "@/assets/warehouse-5.jpg";
import warehouse6 from "@/assets/warehouse-6.jpg";

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5492213146974&text&type=phone_number&app_absent=0";

const warehouseImages = [
  { src: warehouse1, alt: "Depósito La Plata LED - Productos en stock" },
  { src: warehouse2, alt: "Depósito La Plata LED - Racks con mercadería" },
  { src: warehouse3, alt: "Depósito La Plata LED - Almacenamiento" },
  { src: warehouse4, alt: "Depósito La Plata LED - Stock mayorista" },
  { src: warehouse5, alt: "Depósito La Plata LED - Pasillo principal" },
  { src: warehouse6, alt: "Depósito La Plata LED - Vista general" },
];

const WarehouseSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-led-glow font-semibold text-sm uppercase tracking-wide mb-4 block">
            Nuestro depósito
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stock permanente y listo para enviar
          </h2>
          <p className="text-muted-foreground text-lg">
            Contamos con un depósito propio con amplia capacidad de almacenamiento para garantizar disponibilidad inmediata.
          </p>
        </div>
        
        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {warehouseImages.map((image, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-xl group ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  index === 0 ? "aspect-square md:aspect-auto md:h-full" : "aspect-square"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* --- BOTÓN NUEVO AGREGADO AQUÍ --- */}
        <div className="flex justify-center mt-12">
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
    </section>
  );
};

export default WarehouseSection;
