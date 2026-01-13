import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
// 1. IMPORTAMOS LA IMAGEN AQUÍ ARRIBA
import logo from "@/assets/logo.png"; 

const Footer = () => {
  return (
    <footer className="bg-industrial-dark pt-16 pb-8 border-t border-industrial-light/10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Logo y Descripción */}
          <div>
            {/* 2. USAMOS LA VARIABLE AQUÍ (entre llaves { }) */}
            <img 
              src={logo} 
              alt="La Plata LED" 
              className="h-12 w-auto mb-6 object-contain"
            />
            
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Distribuidora mayorista de materiales eléctricos, iluminación, ferretería y sanitarios para comercios de todo el país.
            </p>
          </div>
          
          {/* Columna 2: Contacto */}
          <div>
            <h3 className="font-display text-white font-bold mb-4 text-lg">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="p-2 rounded-full bg-industrial-medium group-hover:bg-led-glow/20 transition-colors">
                  <Phone className="w-4 h-4 text-led-glow" />
                </div>
                <span className="text-gray-300 text-sm self-center">221-314-6974</span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="p-2 rounded-full bg-industrial-medium group-hover:bg-led-glow/20 transition-colors">
                  <Mail className="w-4 h-4 text-led-glow" />
                </div>
                <span className="text-gray-300 text-sm self-center break-all">admi.laplataled@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="p-2 rounded-full bg-industrial-medium group-hover:bg-led-glow/20 transition-colors">
                  <MapPin className="w-4 h-4 text-led-glow" />
                </div>
                <span className="text-gray-300 text-sm self-center">Av. 122 esquina 84, Berisso, Buenos Aires</span>
              </li>
            </ul>
          </div>
          
          {/* Columna 3: Horarios */}
          <div>
            <h3 className="font-display text-white font-bold mb-4 text-lg">Horarios</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-1 h-full bg-led-glow/50 rounded-full" />
                <div className="text-gray-300 text-sm space-y-1">
                  <p className="font-medium text-white">Lunes a viernes</p>
                  <p>08:00 a 13:00 hs</p>
                  <p>14:00 a 17:00 hs</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Columna 4: Redes Sociales */}
          <div>
            <h3 className="font-display text-white font-bold mb-4 text-lg">Redes sociales</h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-industrial-medium border border-white/5 flex items-center justify-center text-gray-400 hover:bg-led-glow hover:text-industrial-dark hover:border-led-glow transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-industrial-medium border border-white/5 flex items-center justify-center text-gray-400 hover:bg-led-glow hover:text-industrial-dark hover:border-led-glow transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Barra inferior de Copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-xs uppercase tracking-wider">
            © {new Date().getFullYear()} Distribuidora La Plata LED. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
