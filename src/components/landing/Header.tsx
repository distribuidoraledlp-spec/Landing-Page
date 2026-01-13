import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5492213146974&text&type=phone_number&app_absent=0";

// --- AQUÍ ESTÁN LOS NUEVOS ÍTEMS DEL MENÚ ---
const navItems = [
  { label: "Productos", href: "#productos" },      // Requiere id="productos" en ProductLinesSection
  { label: "Marcas", href: "#marcas" },            // Ya lo configuramos
  { label: "Cómo comprar", href: "#como-comprar" }, // Ya lo configuramos
  { label: "Depósito", href: "#deposito" },        // Ya lo configuramos
  { label: "Garantía", href: "#garantia" },        // Ya lo configuramos
  { label: "Nosotros", href: "#nosotros" },        // Requiere id="nosotros" en AboutSection o Footer
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-industrial-dark/95 backdrop-blur-md border-b border-industrial-light/20 transition-all duration-300">
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
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-steel hover:text-white transition-colors font-medium text-sm uppercase tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* WhatsApp CTA */}
            <Button variant="whatsapp" size="sm" asChild className="hidden sm:flex font-bold">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>WhatsApp</span>
              </a>
            </Button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/5 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-industrial-light/20 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-steel hover:text-white hover:bg-white/5 transition-all font-medium text-left px-4 py-3 rounded-lg"
                >
                  {item.label}
                </button>
              ))}
              {/* Botón extra de WhatsApp en menú móvil */}
              <div className="mt-2 px-4">
                <Button className="w-full bg-led-glow text-industrial-dark font-bold hover:bg-led-glow-soft" asChild>
                   <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chatear por WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
