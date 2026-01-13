import { Star, Quote, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5492213146974&text&type=phone_number&app_absent=0";

const testimonials = [
  {
    name: "Blas Monelos",
    review: "Excelentes precios y amable atención",
    stars: 5,
  },
  {
    name: "Sergio Piñero",
    review: "Muy buen servicio y calidad",
    stars: 5,
  },
  {
    name: "Martin Frazer",
    review: "Muy buenos precios",
    stars: 5,
  },
  {
    name: "Natalia Vásquez",
    review: "Excelente calidad de producto y atención",
    stars: 5,
  },
  {
    name: "Gonzalo Andrés Vázquez",
    review: "Excelentes en todo los chicos. Grosos",
    stars: 5,
  },
  {
    name: "Mario Eiriz",
    review: "Muy buena atención y precios",
    stars: 5,
  },
  {
    name: "Damián Lima",
    review: "La mejor atención, buenos precios y gran variedad de productos",
    stars: 5,
  },
  {
    name: "Leonardo Emilio Peralta",
    review: "Excelente precio y los pibes son cracks",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-industrial-dark">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-led-glow font-semibold text-sm uppercase tracking-wide mb-4 block">
            Opiniones reales
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-steel text-lg">
            Reseñas verificadas de Google My Business.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-industrial-light/30 backdrop-blur-sm rounded-xl p-6 border border-industrial-light/20 hover:border-led-glow/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-led-glow/40 mb-4" />
              
              {/* Review */}
              <p className="text-steel mb-4 leading-relaxed italic">
                "{testimonial.review}"
              </p>
              
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-led-glow text-led-glow" />
                ))}
              </div>
              
              {/* Name */}
              <p className="font-semibold text-white text-sm">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
        
        {/* Google Attribution */}
        <div className="text-center mt-8 mb-12">
          <p className="text-steel/60 text-sm">
            Fuente: Google My Business
          </p>
        </div>

        {/* --- NUEVO BOTÓN DE ACCIÓN --- */}
        <div className="flex justify-center">
            <Button 
              className="bg-led-glow text-industrial-dark hover:bg-led-glow-soft font-bold shadow-glow text-base px-8 py-6 h-auto w-auto rounded-full transform transition-transform hover:scale-105"
              asChild
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                CONTACTAR ASESOR
              </a>
            </Button>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
