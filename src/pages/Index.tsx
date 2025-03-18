
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import BrandIdentity from '@/components/BrandIdentity';
import RadioAdvertisement from '@/components/RadioAdvertisement';
import { products, getProductsByCategory } from '@/data/products';
import { Hand, Award, Shield, Zap } from 'lucide-react';

const Index = () => {
  // Get products by category
  const gloves = getProductsByCategory('gloves');
  const apparel = getProductsByCategory('apparel');

  // Scroll animation for about section
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        if (isVisible) {
          element.classList.add('animate-fade-up');
          element.classList.remove('opacity-0');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-impacto-white">
      <Navbar />
      <Hero />

      {/* Brand Identity Section */}
      <BrandIdentity />

      {/* Gloves Section */}
      <ProductGrid 
        products={gloves} 
        title="Guantes de Boxeo" 
        id="gloves" 
      />

      {/* Radio Advertisement Section */}
      <RadioAdvertisement />

      {/* About Section */}
      <section id="about" className="py-20 bg-impacto-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-impacto-red/10 text-impacto-red text-sm font-medium rounded-full mb-4">
              Nuestra Historia
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Sobre <span className="text-impacto-red">Impacto</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Fundada por cinco apasionados del boxeo, nuestra misión es crear equipamiento de la más alta calidad para boxeadores de todos los niveles.
            </p>
          </div>

          {/* Founders */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10 mb-20">
            {[
              { name: "Alberto Roman", role: "Fundador & CEO" },
              { name: "Jose Maria Oteo", role: "Director de Producto" },
              { name: "Jose Manuel Sierra", role: "Director de Operaciones" },
              { name: "Ruben Rincon", role: "Director de Marketing" },
              { name: "Roberto Martin", role: "Director Financiero" }
            ].map((founder, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md text-center opacity-0 animate-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-impacto-red to-impacto-yellow mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{founder.name.split(' ')[0][0]}{founder.name.split(' ')[1][0]}</span>
                </div>
                <h3 className="font-bold text-lg">{founder.name}</h3>
                <p className="text-sm text-gray-500">{founder.role}</p>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Hand className="w-10 h-10 text-impacto-red" />,
                title: "Calidad Superior",
                description: "Utilizamos materiales de primera calidad y procesos de fabricación rigurosos para garantizar productos duraderos."
              },
              {
                icon: <Award className="w-10 h-10 text-impacto-red" />,
                title: "Experiencia Profesional",
                description: "Diseñado por boxeadores con años de experiencia en el ring y en el entrenamiento de alto nivel."
              },
              {
                icon: <Shield className="w-10 h-10 text-impacto-red" />,
                title: "Seguridad Garantizada",
                description: "La protección es nuestra prioridad, todos nuestros productos están diseñados para maximizar la seguridad."
              },
              {
                icon: <Zap className="w-10 h-10 text-impacto-red" />,
                title: "Rendimiento Óptimo",
                description: "Cada producto está optimizado para ayudarte a alcanzar tu máximo potencial en el ring."
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all opacity-0 animate-on-scroll"
                style={{ transitionDelay: `${index * 100 + 400}ms` }}
              >
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apparel Section */}
      <ProductGrid 
        products={apparel} 
        title="Ropa Deportiva" 
        id="apparel" 
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-impacto-red to-impacto-red/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            ¡Prepárate para Triunfar en el Ring!
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Equípate con lo mejor y alcanza tu máximo potencial. Nuestros productos están diseñados para ayudarte a destacar.
          </p>
          <a
            href="#gloves"
            className="inline-block px-8 py-4 bg-white text-impacto-red font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            Ver Productos
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
