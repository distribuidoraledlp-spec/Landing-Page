import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5492213146974&text&type=phone_number&app_absent=0";

// --- CAMBIO AQUÍ: Lista de navegación expandida y ordenada ---
const navItems = [
  { label: "Productos", href: "#productos" },      // Debe coincidir con id="productos"
  { label: "Marcas", href: "#marcas" },            // Coincide con id="marcas" en BrandsSection
  { label: "Cómo comprar", href: "#como-comprar" }, // Coincide con id="como-comprar" en HowWeWorkSection
  { label: "Nuestro Depósito", href: "#deposito" }, // Coincide con id="deposito" en WarehouseSection
  { label: "Garantía", href: "#garantia" },        // Coincide con id="garantia" en WarrantySection
  { label: "Nosotros", href: "#nosotros" },        // Debe coincidir con id="nosotros"
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-industrial-dark/95 backdrop-blur-md border-b border-industrial-light/20">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="La Plata LED" 
              className="h-14 md:h-16 lg:h-18 w-auto"
            />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-steel hover:text-white transition-colors font-medium text-sm whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* WhatsApp CTA */}
            <Button variant="whatsapp" size="sm" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline ml-2">WhatsApp</span>
              </a>
            </Button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-industrial-light/20 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-steel hover:text-white transition-colors font-medium text-left py-2 px-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
