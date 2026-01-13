import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-industrial-dark border-t border-industrial-light/20">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* SECCIÓN MARCA (LOGO) */}
          <div>
            <div className="mb-6">
              {/* Usa el logo directo de la carpeta public */}
              <img 
                src="/logo.png" 
                alt="La Plata LED" 
                className="h-12 w-auto mb-3" 
              />
              <p className="text-steel text-sm mt-1">Distribuidora Mayorista</p>
            </div>
            <p className="text-steel text-sm leading-relaxed">
              Distribución mayorista de materiales eléctricos, iluminación, ferretería y sanitarios 
              para comercios de todo el país.
            </p>
          </div>
          
          {/* SECCIÓN CONTACTO */}
          <div>
            <h4 className="font-display font-bold text-white mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://wa.me/5492213146974" 
                  className="flex items-center gap-3 text-steel hover:text-led-glow transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">221-314-6974</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:admi.laplataled@gmail.com" 
                  className="flex items-center gap-3 text-steel hover:text-led-glow transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">admi.laplataled@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-steel">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Av. 122 esquina 84, Berisso</span>
                </div>
              </li>
            </ul>
          </div>
          
          {/* SECCIÓN HORARIOS */}
          <div>
            <h4 className="font-display font-bold text-white mb-6">Horarios</h4>
            <div className="flex items-start gap-3 text-steel">
              <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-white mb-1">Lunes a viernes</p>
                <p>08 a 13 hs</p>
                <p>14 a 17 hs</p>
              </div>
            </div>
          </div>
          
          {/* SECCIÓN REDES */}
          <div>
            <h4 className="font-display font-bold text-white mb-6">Redes sociales</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/DISTRIBUIDORALAPLATALED/" 
                target="_blank" 
                className="w-10 h-10 rounded-lg bg-industrial-medium flex items-center justify-center text-steel hover:bg-led-glow hover:text-industrial-dark transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/distribuidoralaplataled/" 
                target="_blank" 
                className="w-10 h-10 rounded-lg bg-industrial-medium flex items-center justify-center text-steel hover:bg-led-glow hover:text-industrial-dark transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* BARRA INFERIOR */}
      <div className="border-t border-industrial-light/20">
        <div className="container py-6">
          <p className="text-center text-steel text-sm">
            © {new Date().getFullYear()} Distribuidora La Plata LED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
