
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import CartButton from './CartButton';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center"
        >
          <span className="font-display font-bold text-2xl text-impacto-red">
            IMPACTO
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-impacto-dark hover:text-impacto-red font-medium transition-colors">
            Inicio
          </a>
          <a href="#gloves" className="text-impacto-dark hover:text-impacto-red font-medium transition-colors">
            Guantes
          </a>
          <a href="#apparel" className="text-impacto-dark hover:text-impacto-red font-medium transition-colors">
            Ropa
          </a>
          <a href="#about" className="text-impacto-dark hover:text-impacto-red font-medium transition-colors">
            Nosotros
          </a>
        </nav>

        <div className="flex items-center">
          <CartButton />
          
          {/* Mobile menu toggle */}
          <button 
            className="ml-4 md:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-impacto-red" />
            ) : (
              <Menu className="w-6 h-6 text-impacto-dark" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="focus:outline-none"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-impacto-red" />
          </button>
        </div>
        <nav className="flex flex-col items-center text-center space-y-8 mt-12">
          <a 
            href="#" 
            className="text-xl font-medium text-impacto-dark"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Inicio
          </a>
          <a 
            href="#gloves" 
            className="text-xl font-medium text-impacto-dark"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Guantes
          </a>
          <a 
            href="#apparel" 
            className="text-xl font-medium text-impacto-dark"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Ropa
          </a>
          <a 
            href="#about" 
            className="text-xl font-medium text-impacto-dark"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Nosotros
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
