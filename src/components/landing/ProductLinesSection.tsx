import { Button } from "@/components/ui/button";
import { Download, Zap, Lightbulb, Wrench, Droplets } from "lucide-react";

// Configuración del PDF
const PDF_URL = "/catalogo.pdf";

const productLines = [
  {
    icon: Zap,
    title: "Materiales eléctricos",
    description: "Cables, térmicas, llaves, cajas, conductores y accesorios.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Lightbulb,
    title: "Iluminación",
    description: "Lámparas LED, tubos y soluciones comerciales.",
    gradient: "from-amber-500/20 to-yellow-500/20",
    iconColor: "text-amber-400",
  },
  {
    icon: Wrench,
    title: "Ferretería",
    description: "Artículos de alta rotación para mostrador y depósito.",
    gradient: "from-slate-500/20 to-gray-500/20",
    iconColor: "text-slate-400",
  },
  {
    icon: Droplets,
    title: "Sanitarios",
    description: "Productos sanitarios para el canal mayorista.",
    gradient: "from-sky-500/20 to-blue-500/20",
    iconColor: "text-sky-400",
  },
];

const ProductLinesSection = () => {
  return (
    <section id="productos" className="py-24 bg-background scroll-mt-20">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-led-glow font-semibold text-sm uppercase tracking-wide mb-4 block">
            Nuestras líneas
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestras líneas de productos
          </h2>
          <p className="text-muted-foreground text-lg">
            Abastecimiento completo en un solo proveedor.
          </p>
        </div>
        
        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {productLines.map((product, index) => (
            <a
              key={index}
              href={PDF_URL}
              download="LaPlataLED_Catalogo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border block cursor-pointer"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-industrial-dark/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <product.icon className={`w-7 h-7 ${product.iconColor}`} />
                </div>
                
                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                {/* CTA - Texto cambiado a 'ver productos' */}
                <div className="inline-flex items-center text-sm font-medium text-led-glow hover:text-led-soft transition-colors uppercase tracking-wide font-bold">
                  <Download className="w-4 h-4 mr-2" />
                  ver productos
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Nuevo Botón Grande Abajo */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="w-full md:w-auto px-8 py-6 text-lg bg-led-glow hover:bg-led-glow-soft text-industrial-dark font-bold shadow-glow hover:shadow-glow-lg transition-all" 
            asChild
          >
            <a href={PDF_URL} download="LaPlataLED_Catalogo.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="w-6 h-6 mr-2" />
              Descargar Catálogo
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default ProductLinesSection;
