
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      if (scrollPosition < window.innerHeight) {
        heroRef.current.style.transform = `translateY(${scrollPosition * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-impacto-red/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-impacto-yellow/5 to-transparent"></div>
      </div>

      {/* Background circles */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-impacto-red/5 animate-spin-slow"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-impacto-yellow/5 animate-pulse-slow"></div>

      <div 
        ref={heroRef}
        className="container mx-auto px-4 relative z-10 pt-16 md:pt-0"
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 animate-fade-up">
            <span className="inline-block px-3 py-1 bg-impacto-red/10 text-impacto-red text-sm font-medium rounded-full mb-6">
              La Marca De Boxeo #1 En España
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">
              Alcanza Tu Máximo <span className="text-gradient">IMPACTO</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Equipamiento y ropa deportiva de la más alta calidad para boxeadores que aspiran a la grandeza.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#gloves" 
                className="px-8 py-3 bg-impacto-red text-white font-medium rounded-md flex items-center hover:bg-impacto-red/90 transition-all shadow-md hover:shadow-lg btn-hover-effect"
              >
                Ver Productos
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#about" 
                className="px-8 py-3 border border-impacto-dark text-impacto-dark font-medium rounded-md hover:bg-impacto-dark hover:text-white transition-all"
              >
                Sobre Nosotros
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-12 md:mt-0 animate-fade-in flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 md:-inset-8 bg-gradient-to-br from-impacto-red/20 to-impacto-yellow/20 rounded-full blur-xl animate-pulse-slow"></div>
              <img 
                src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" 
                alt="Boxing equipment" 
                className="relative z-10 w-full max-w-md mx-auto rounded-xl shadow-lg object-cover aspect-[3/4]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-impacto-dark/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-impacto-dark/30 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
