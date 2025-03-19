
import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from './ui/alert';

const RadioAdvertisement: React.FC = () => {
  // SoundCloud URL
  const soundcloudUrl = "https://soundcloud.com/alberto-roman-garcia-893427995/anuncio-radio";
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Handle iframe load event
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // Handle iframe error
  const handleIframeError = () => {
    setError("No se pudo cargar el reproductor de SoundCloud");
    setIsLoading(false);
  };

  return (
    <section id="radio-ad" className="py-16 bg-impacto-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 bg-impacto-red/10 text-impacto-red text-sm font-medium rounded-full mb-4">
            Escúchanos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Anuncio de <span className="text-impacto-red">Radio</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            Escucha nuestro anuncio de radio y descubre por qué Impacto Boxing es la elección de los campeones.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
          {error ? (
            <Alert variant="destructive" className="mb-4">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                {error}. Por favor, intente acceder directamente al enlace de abajo.
              </AlertDescription>
            </Alert>
          ) : null}

          {/* SoundCloud Embed */}
          <div className="relative aspect-[4/3] w-full mb-4">
            <iframe 
              width="100%" 
              height="100%" 
              scrolling="no" 
              frameBorder="no" 
              allow="autoplay"
              src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(soundcloudUrl)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              className="absolute inset-0 w-full h-full rounded-md"
            ></iframe>
          </div>

          {/* Direct link to SoundCloud */}
          <div className="text-center mt-4">
            <a 
              href={soundcloudUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-impacto-red hover:text-impacto-red/80 text-sm font-medium"
            >
              Escuchar directamente en SoundCloud
              <ExternalLink className="ml-1" size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RadioAdvertisement;
