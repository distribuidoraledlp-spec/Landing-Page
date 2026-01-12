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

const BRANDS_PER_PAGE = 12;

const BrandsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(brands.length / BRANDS_PER_PAGE);
  
  // Auto-rotate every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 4000);
    
    return () => clearInterval(timer);
  }, [totalPages]);
  
  const currentBrands = brands.slice(
    currentPage * BRANDS_PER_PAGE,
    (currentPage + 1) * BRANDS_PER_PAGE
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
        {/* Header */}
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
        
        {/* Brands Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-led-glow/50 hover:text-led-glow transition-all duration-300"
            aria-label="Marcas anteriores"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-led-glow/50 hover:text-led-glow transition-all duration-300"
            aria-label="Marcas siguientes"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          
          {/* Brands Grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3 min-h-[280px]">
            {currentBrands.map((brand, index) => (
              <div 
                key={`${currentPage}-${index}`}
                className="flex items-center gap-2 bg-card rounded-xl px-4 py-3 border border-border hover:border-led-glow/30 hover:shadow-card transition-all duration-300 animate-fade-in"
              >
                <CheckCircle className="w-4 h-4 text-led-glow flex-shrink-0" />
                <span className="font-medium text-foreground text-sm truncate">{brand}</span>
              </div>
            ))}
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentPage 
                    ? "bg-led-glow w-8" 
                    : "bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Página ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
