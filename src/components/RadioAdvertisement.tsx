
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Skeleton } from './ui/skeleton';
import { toast } from './ui/use-toast';

const RadioAdvertisement: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element when component mounts
    audioRef.current = new Audio();
    
    // Set the direct audio URL
    audioRef.current.src = "https://soundcloud.com/alberto-roman-garcia-893427995/anuncio-radio";
    
    // Add event listeners
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    audioRef.current.addEventListener('ended', handleEnded);
    audioRef.current.addEventListener('canplaythrough', handleCanPlayThrough);
    audioRef.current.addEventListener('error', handleError);
    
    // Preload the audio
    audioRef.current.load();
    
    // Log for debugging
    console.log("Audio element created with source:", audioRef.current.src);
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        audioRef.current.removeEventListener('ended', handleEnded);
        audioRef.current.removeEventListener('canplaythrough', handleCanPlayThrough);
        audioRef.current.removeEventListener('error', handleError);
      }
    };
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // Try to play and handle any errors
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("Audio playback started successfully");
              setIsPlaying(true);
            })
            .catch(error => {
              console.error("Audio playback error:", error);
              toast({
                title: "Error al reproducir",
                description: "No se pudo reproducir el audio. Intente nuevamente.",
                variant: "destructive"
              });
              setError("Error al reproducir el audio");
            });
        }
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const percentage = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(percentage);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  const handleCanPlayThrough = () => {
    console.log("Audio can play through");
    setIsLoading(false);
  };

  const handleError = (e: Event) => {
    console.error("Audio error:", e);
    setError("Error al cargar el audio");
    setIsLoading(false);
    toast({
      title: "Error",
      description: "No se pudo cargar el archivo de audio.",
      variant: "destructive"
    });
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
            <div className="text-center p-4 text-red-500">
              <p>{error}</p>
              <Button 
                onClick={() => window.location.reload()} 
                className="mt-2 bg-impacto-red hover:bg-impacto-red/90"
              >
                Reintentar
              </Button>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-4 mb-3">
                <Button 
                  onClick={togglePlayPause} 
                  variant="outline" 
                  size="icon" 
                  className="h-10 w-10 rounded-full bg-impacto-red hover:bg-impacto-red/90 border-none text-white"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Skeleton className="h-5 w-5 rounded-full" />
                  ) : isPlaying ? (
                    <Pause size={18} />
                  ) : (
                    <Play size={18} />
                  )}
                </Button>
                
                <div className="flex-1">
                  <h3 className="font-bold text-lg">Impacto Boxing - Anuncio Oficial</h3>
                  <p className="text-sm text-gray-500">Descubre el poder de Impacto</p>
                </div>
                
                <Button
                  onClick={toggleMute}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-gray-500"
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </Button>
              </div>

              <div className="w-full">
                <Progress value={progress} className="h-2 bg-gray-200" />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default RadioAdvertisement;
