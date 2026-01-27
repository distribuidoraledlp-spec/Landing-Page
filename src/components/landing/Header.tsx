import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Importamos Link para navegar
import logo from "@/assets/logo.png";

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5492213146974&text&type=phone_number&app_absent=0";

// Configuración de URLs para multi-página (usamos / en vez de #)
const navItems = [
  { label: "Productos", href: "/productos" },
  { label: "Marcas", href: "/marcas" },
  { label: "Cómo comprar", href: "/como-comprar" },
  { label: "Nuestro Depósito", href: "/deposito" },
  { label: "Garantía", href: "/garantia" },
  { label: "Nosotros", href: "/nosotros" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Hook para saber en qué página estamos y pintarla de color activo

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0); // Al cambiar de página, subir el scroll arriba de todo
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-industrial-dark/95 backdrop-blur-md border-b border-industrial-light/20">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo con Link al Inicio */}
          <Link to="/" onClick={handleNavClick} className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="La Plata LED" 
              className="h-14 md:h-16 lg:h-18 w-auto"
            />
          </Link>
          
          {/* Navegación Escritorio (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`transition-colors font-medium text-sm whitespace-nowrap ${
                    isActive ? "text-led-glow font-bold" : "text-steel hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          
          {/* Lado Derecho (WhatsApp + Menú Móvil) */}
          <div className="flex items-center gap-4">
            {/* WhatsApp CTA */}
            <Button variant="whatsapp" size="sm" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline ml-2">WhatsApp</span>
              </a>
            </Button>
            
            {/* Botón Menú Hamburguesa */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Navegación Móvil (Desplegable) */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-industrial-light/20 max-h-[80vh] overflow-y-auto bg-industrial-dark">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={handleNavClick}
                    className={`transition-colors font-medium text-left py-2 px-4 border-l-2 ${
                      isActive 
                        ? "text-led-glow border-led-glow bg-white/5" 
                        : "text-steel border-transparent hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
