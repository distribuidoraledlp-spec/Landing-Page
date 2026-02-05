import { Button } from "@/components/ui/button";
import { Download, Zap, Lightbulb, Wrench, Droplets } from "lucide-react";

// RUTA DEL ARCHIVO PDF
// Asegúrate de que el archivo se llame 'catalogo.pdf' y esté en la carpeta 'public'
const PDF_URL = "/catalogo.pdf";
const PDF_FILENAME = "LaPlataLED_Catalogo.pdf";

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
