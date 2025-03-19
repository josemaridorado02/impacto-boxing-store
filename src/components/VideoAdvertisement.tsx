
import React from 'react';

const VideoAdvertisement: React.FC = () => {
  return (
    <section id="video-ad" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 bg-impacto-red/10 text-impacto-red text-sm font-medium rounded-full mb-4">
            Mírate esto
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Anuncio de <span className="text-impacto-red">Video</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            Observa la calidad y potencia de los productos Impacto Boxing en acción.
          </p>
        </div>

        <div className="max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <div className="aspect-w-9 aspect-h-16 sm:aspect-w-16 sm:aspect-h-9">
            <iframe 
              src="https://www.youtube.com/embed/AJ3ZRbl9_3Q" 
              title="Impacto Boxing Anuncio"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoAdvertisement;
