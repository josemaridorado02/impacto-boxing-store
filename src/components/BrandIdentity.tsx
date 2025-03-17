
import React from 'react';
import { Shield, Award, Target, Users } from 'lucide-react';

const BrandIdentity: React.FC = () => {
  return (
    <section id="brand" className="py-20 bg-impacto-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-impacto-red/20 text-impacto-red text-sm font-medium rounded-full mb-4">
            Nuestra Marca
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            La Identidad de <span className="text-impacto-red">Impacto</span>
          </h2>
        </div>
        
        {/* Logo */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-20">
          <div className="relative w-64 h-64 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-impacto-red via-impacto-yellow to-impacto-red rounded-full opacity-20 animate-spin-slow"></div>
            <div className="bg-impacto-dark rounded-full p-4 z-10 border-4 border-impacto-red shadow-lg">
              <div className="bg-impacto-dark rounded-full p-8 flex items-center justify-center relative">
                <div className="relative flex items-center justify-center">
                  <span className="font-display text-6xl font-bold tracking-tighter text-white">I</span>
                  <span className="absolute -right-4 -bottom-2 font-display text-4xl font-bold tracking-tighter text-impacto-yellow">B</span>
                  <div className="absolute -left-1 top-1 w-8 h-8 border-t-4 border-l-4 border-impacto-red rounded-tl-lg"></div>
                  <div className="absolute -right-1 bottom-1 w-8 h-8 border-b-4 border-r-4 border-impacto-yellow rounded-br-lg"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-lg text-center md:text-left">
            <h3 className="text-3xl font-bold font-display mb-4">
              IMPACTO <span className="text-impacto-yellow">BOXING</span>
            </h3>
            <p className="text-xl italic text-impacto-yellow mb-6">
              "Golpea tus límites, supera tus metas"
            </p>
            <p className="text-gray-300">
              Un diseño que representa fuerza, determinación y excelencia. 
              El contraste entre el negro, rojo y amarillo simboliza la intensidad 
              del boxeo y la pasión que ponemos en cada producto.
            </p>
          </div>
        </div>
        
        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-black/40 p-8 rounded-xl border border-impacto-red/20 hover:border-impacto-red transition-all duration-300">
            <div className="bg-gradient-to-br from-impacto-red to-impacto-yellow w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
              <Shield className="w-8 h-8 text-impacto-dark" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center md:text-left">Misión</h3>
            <p className="text-gray-300">
              Proporcionar equipamiento de boxeo de la más alta calidad que inspire 
              confianza y mejore el rendimiento de los atletas, desde principiantes 
              hasta profesionales, fomentando una comunidad apasionada por este deporte.
            </p>
          </div>
          
          <div className="bg-black/40 p-8 rounded-xl border border-impacto-red/20 hover:border-impacto-red transition-all duration-300">
            <div className="bg-gradient-to-br from-impacto-red to-impacto-yellow w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
              <Target className="w-8 h-8 text-impacto-dark" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center md:text-left">Visión</h3>
            <p className="text-gray-300">
              Ser reconocidos como la marca líder de equipamiento de boxeo en España 
              y expandirnos globalmente, innovando constantemente en tecnología y 
              diseño, y contribuyendo al crecimiento del boxeo como deporte inclusivo.
            </p>
          </div>
          
          <div className="bg-black/40 p-8 rounded-xl border border-impacto-red/20 hover:border-impacto-red transition-all duration-300">
            <div className="bg-gradient-to-br from-impacto-red to-impacto-yellow w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
              <Award className="w-8 h-8 text-impacto-dark" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center md:text-left">Valores</h3>
            <p className="text-gray-300">
              <span className="font-semibold">Excelencia:</span> Nos comprometemos con la más alta calidad en cada producto.<br/>
              <span className="font-semibold">Integridad:</span> Operamos con honestidad y transparencia.<br/>
              <span className="font-semibold">Innovación:</span> Buscamos constantemente mejorar nuestros productos.<br/>
              <span className="font-semibold">Pasión:</span> Amamos el boxeo y lo transmitimos en todo lo que hacemos.
            </p>
          </div>
        </div>
        
        {/* Target Audience */}
        <div className="bg-gradient-to-r from-impacto-red to-black p-8 rounded-xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="bg-black/60 rounded-full p-4 flex items-center justify-center">
              <Users className="w-12 h-12 text-impacto-yellow" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Nuestro Público</h3>
              <p className="text-gray-300">
                En Impacto Boxing nos dirigimos a boxeadores de todos los niveles, desde principiantes 
                entusiastas hasta atletas profesionales. Atendemos a gimnasios, entrenadores, 
                aficionados al fitness y personas que buscan equipamiento de alta calidad para 
                su entrenamiento personal. Nuestra marca conecta especialmente con quienes valoran 
                la calidad, durabilidad y el diseño distintivo en su equipamiento deportivo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIdentity;
