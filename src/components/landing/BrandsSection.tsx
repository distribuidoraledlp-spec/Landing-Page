import { useEffect, useState } from "react";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const brands = [
  "ZELTA", "YAAR", "WIRE FLEX", "VR PLAST", "Viyilant", "VALCAR",
  "Tecnocom", "TBCIN", "Tacsa", "TAAD", "STARLIGHT", "SMARTFIX",
  "Sin par", "SILVER SHADOW", "Sica", "SERENA", "SCHAFER", "SANTORO",
  "SAN JUSTO", "SAMET", "ROMAX", "Richi", "REFLEX", "RAPIFIX",
  "Psf", "POLINAM", "PHILIPS", "PERCANPLAST", "NITANYL", "Mota",
  "Mig", "MH", "LUXOM", "LUMILAGRO", "LORENZETTI", "Light Tronic",
  "Kalop", "Jeluz", "ILUMINAR", "Igmaplast", "IGMA", "HELATODO",
  "Grilon", "Giny plast", "GINY PLAS", "GENROD", "GENESIS", "Gen rod",
  "GAMISOL", "FIBOSA", "FERROLUX", "F.S", "Eveready", "Energizer",
  "CORILUX", "CONOMETAL", "Candela", "BONOMINI", "BMB", "BLUMT",
  "ASC", "ARGENJAB", "ANTHAY", "ABB", "9 DE JULIO", "3M", "180° ILUMINACION"
];

const BrandsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  // Iniciamos con 12 por defecto, luego el useEffect ajusta según pantalla
  const [itemsPerPage, setItemsPerPage] = useState(12);

  // LÓGICA INTELIGENTE:
  // Si la pantalla es menor a 768px (celular), usa 6 marcas por página.
  // Si es mayor, usa 12.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(6);
      } else {
        setItemsPerPage(12);
      }
    };

    // Detectar tamaño al cargar y al cambiar tamaño de ventana
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(brands.length / itemsPerPage);
  
  // Rotación automática cada 4 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 4000);
    
    return () => clearInterval(timer);
  }, [totalPages]);
  
  const currentBrands = brands.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  
  const goToPrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  const goToNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  return (
    <section className="py-20 bg-concrete">
      <div className="container">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-led-glow font-semibold text-sm uppercase tracking-wide mb-4 block">
            Marcas de confianza
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            +65 marcas reconocidas del rubro
          </h2>
          <p className="text-muted-foreground text-lg">
            Solo productos originales, con garantía y respaldo comercial.
          </p>
        </div>
        
        {/* Carrusel de Marcas */}
        <div className="relative max-w-4xl mx-auto">
          {/* Botón Izquierda */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-led-glow/50 hover:text-led-glow transition-all duration-300 shadow-md"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {/* Botón Derecha */}
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-led-glow/50 hover:text-led-glow transition-all duration-300 shadow-md"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          
          {/* GRILLA DE MARCAS */}
          <div className="min-h-[280px]">
             {/* AQUÍ ESTÁ EL CAMBIO CLAVE: grid-cols-2 para celular */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {currentBrands.map((brand, index) => (
                <div 
                  key={`${currentPage}-${index}`}
                  className="flex items-center gap-2 bg-card rounded-xl px-3 md:px-4 py-3 border border-border hover:border-led-glow/30 hover:shadow-card transition-all duration-300 animate-fade-in"
                >
                  <CheckCircle className="w-4 h-4 text-led-glow flex-shrink-0" />
                  <span className="font-medium text-foreground text-sm truncate">{brand}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Puntos de paginación */}
          <div className="flex justify-center gap-2 mt-8 flex-wrap px-4">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 flex-shrink-0 ${
                  index === currentPage 
                    ? "bg-led-glow w-8" 
                    : "bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Ir a página ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
