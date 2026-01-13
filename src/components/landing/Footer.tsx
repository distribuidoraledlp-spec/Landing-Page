import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-industrial-dark pt-16 pb-8 border-t border-industrial-light/10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Logo y Descripción */}
          <div>
            {/* AQUÍ ESTÁ EL CAMBIO: Se reemplazó el texto por el logo */}
            <img 
              src="/lovable-uploads/92815518-7872-46c2-a03e-06153969027e.png" 
              alt="La Plata LED" 
              className="h-12 w-auto mb-4" 
            />
            <p className="text-steel text-sm mb-6">
              Distribuidora mayorista de materiales eléctricos, iluminación, ferretería y sanitarios para comercios de todo el país.
            </p>
          </div>
          
          {/* Columna 2: Contacto */}
          <div>
            <h3 className="font-display text-white font-bold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-led-glow flex-shrink-0" />
                <span className="text-steel text-sm">221-314-6974</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-led-glow flex-shrink-0" />
                <span className="text-steel text-sm break-all">admi.laplataled@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-led-glow flex-shrink-0" />
                <span className="text-steel text-sm">Av. 122 esquina 84, Berisso, Buenos Aires</span>
              </li>
            </ul>
          </div>
          
          {/* Columna 3: Horarios */}
          <div>
            <h3 className="font-display text-white font-bold mb-4">Horarios</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex-shrink-0" />
                <div className="text-steel text-sm">
                  <p className="font-medium text-white mb-1">Lunes a viernes</p>
                  <p>08 a 13 hs</p>
                  <p>14 a 17 hs</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Columna 4: Redes Sociales */}
          <div>
            <h3 className="font-display text-white font-bold mb-4">Redes sociales</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-industrial-medium flex items-center justify-center text-steel hover:bg-led-glow hover:text-industrial-dark transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-industrial-medium flex items-center justify-center text-steel hover:bg-led-glow hover:text-industrial-dark transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Barra inferior de Copyright */}
        <div className="pt-8 border-t border-industrial-light/10 text-center">
          <p className="text-steel text-sm">
            © {new Date().getFullYear()} Distribuidora La Plata LED. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
