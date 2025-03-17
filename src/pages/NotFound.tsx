
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-impacto-white py-20">
        <div className="text-center px-4">
          <h1 className="text-8xl font-bold text-impacto-red mb-6">404</h1>
          <p className="text-2xl text-impacto-dark mb-8">
            ¡Oops! Página no encontrada
          </p>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            La página que estás buscando no existe o ha sido movida a otra ubicación.
          </p>
          <a 
            href="/" 
            className="inline-block px-6 py-3 bg-impacto-red text-white font-medium rounded-md hover:bg-impacto-red/90 transition-all shadow-md"
          >
            Volver al Inicio
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
