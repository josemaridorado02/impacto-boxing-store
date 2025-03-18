
import React from 'react';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-impacto-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-display">IMPACTO</h3>
            <p className="text-gray-300">
              La marca de boxeo creada por boxeadores para boxeadores. Nuestro compromiso es ofrecer productos de la más alta calidad para ayudarte a alcanzar tu máximo potencial.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/impa.ctoboxing/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-impacto-red transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://x.com/ImpactoBoxing" target="_blank" rel="noopener noreferrer" className="text-white hover:text-impacto-red transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-impacto-red transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#gloves" className="text-gray-300 hover:text-white transition-colors">Guantes</a>
              </li>
              <li>
                <a href="#apparel" className="text-gray-300 hover:text-white transition-colors">Ropa</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">Sobre Nosotros</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Ayuda</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Envíos</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Devoluciones</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Preguntas Frecuentes</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Términos y Condiciones</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-impacto-red mr-2 flex-shrink-0" />
                <span className="text-gray-300">Calle Principal 123, Madrid, España</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-impacto-red mr-2 flex-shrink-0" />
                <span className="text-gray-300">+34 912 345 678</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-impacto-red mr-2 flex-shrink-0" />
                <a href="mailto:impactoboxing100@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  impactoboxing100@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8">
          <h4 className="text-lg font-bold mb-4 text-center">Síguenos en Redes Sociales</h4>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://www.instagram.com/impa.ctoboxing/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-impacto-red to-impacto-yellow rounded-full flex items-center justify-center mb-2 transform transition-transform group-hover:scale-110">
                <Instagram className="w-6 h-6 text-impacto-dark" />
              </div>
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Instagram</span>
            </a>
            <a href="https://x.com/ImpactoBoxing" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-impacto-red to-impacto-yellow rounded-full flex items-center justify-center mb-2 transform transition-transform group-hover:scale-110">
                <Twitter className="w-6 h-6 text-impacto-dark" />
              </div>
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Twitter</span>
            </a>
            <a href="#" className="flex flex-col items-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-impacto-red to-impacto-yellow rounded-full flex items-center justify-center mb-2 transform transition-transform group-hover:scale-110">
                <Facebook className="w-6 h-6 text-impacto-dark" />
              </div>
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Facebook</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Impacto Boxing. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Privacidad</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Cookies</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
