
import React, { useState } from 'react';
import { ExternalLink, Music, Play, Pause, Volume2, Share2 } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from './ui/alert';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Card, CardContent } from './ui/card';

const RadioAdvertisement: React.FC = () => {
  // SoundCloud URL
  const soundcloudUrl = "https://soundcloud.com/alberto-roman-garcia-893427995/anuncio-radio";
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Handle iframe load event
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // Handle iframe error
  const handleIframeError = () => {
    setError("No se pudo cargar el reproductor de SoundCloud");
    setIsLoading(false);
  };

  // Toggle play/pause (this is just for UI, actual control is in the iframe)
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="radio-ad" className="py-16 bg-gradient-to-br from-impacto-light to-white">
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

        <div className="max-w-3xl mx-auto">
          <Card className="shadow-lg border-0 overflow-hidden">
            <div className="bg-gradient-to-r from-impacto-red/90 to-impacto-red p-6 text-white flex items-center">
              <div className="p-3 rounded-full bg-white/20 mr-4">
                <Music className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Impacto Boxing - Spot Publicitario</h3>
                <p className="text-white/80">Escucha nuestro anuncio de radio</p>
              </div>
            </div>

            <CardContent className="p-0">
              {error ? (
                <Alert variant="destructive" className="m-4 border-0">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    {error}. Por favor, intente acceder directamente al enlace de abajo.
                  </AlertDescription>
                </Alert>
              ) : null}

              {/* Hidden real player */}
              <div className="hidden">
                <iframe 
                  width="100%" 
                  height="100%"
                  scrolling="no" 
                  frameBorder="no" 
                  allow="autoplay"
                  src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(soundcloudUrl)}&color=%23e63946&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false`}
                  onLoad={handleIframeLoad}
                  onError={handleIframeError}
                  id="soundcloud-player"
                ></iframe>
              </div>

              {/* Audio visualization area */}
              <div className="bg-gray-100 h-32 flex items-center justify-center relative overflow-hidden">
                {isLoading ? (
                  <div className="animate-pulse flex items-center justify-center h-full w-full">
                    <p className="text-gray-500">Cargando audio...</p>
                  </div>
                ) : (
                  <>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <iframe 
                        width="100%" 
                        height="100%" 
                        scrolling="no" 
                        frameBorder="no" 
                        allow="autoplay"
                        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(soundcloudUrl)}&color=%23e63946&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`}
                        onLoad={handleIframeLoad}
                        onError={handleIframeError}
                        className="absolute inset-0 w-full h-full"
                      ></iframe>
                    </div>
                  </>
                )}
              </div>

              {/* Controls */}
              <div className="p-6 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={togglePlayPause}
                      className="h-12 w-12 rounded-full border-impacto-red text-impacto-red hover:bg-impacto-red hover:text-white transition-colors"
                    >
                      {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
                    </Button>
                    <div>
                      <p className="font-medium">Impacto Boxing</p>
                      <p className="text-sm text-gray-500">Anuncio de Radio</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="text-gray-500 hover:text-impacto-red">
                      <Volume2 className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-gray-500 hover:text-impacto-red">
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* Direct link to SoundCloud */}
                <div className="text-center mt-6">
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RadioAdvertisement;
