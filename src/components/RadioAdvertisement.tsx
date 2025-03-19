
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

const RadioAdvertisement: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Create audio element when component mounts
    audioRef.current = new Audio();
    // Use the new SoundCloud audio
    audioRef.current.src = "https://soundcloud.com/alberto-roman-garcia-893427995/anuncio-radio";
    
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    audioRef.current.addEventListener('ended', handleEnded);
    audioRef.current.addEventListener('canplaythrough', handleCanPlayThrough);
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        audioRef.current.removeEventListener('ended', handleEnded);
        audioRef.current.removeEventListener('canplaythrough', handleCanPlayThrough);
      }
    };
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error("Audio playback error:", error);
          });
        }
      }
      setIsPlaying(!isPlaying);
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
          <div className="flex items-center gap-4 mb-3">
            <Button 
              onClick={togglePlayPause} 
              variant="outline" 
              size="icon" 
              className="h-10 w-10 rounded-full bg-impacto-red hover:bg-impacto-red/90 border-none text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="animate-pulse">...</span>
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
        </div>
      </div>
    </section>
  );
};

export default RadioAdvertisement;
