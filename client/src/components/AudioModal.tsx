import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, AlertCircle } from "lucide-react";

export function AudioModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState("02:00");
  const [currentTime, setCurrentTime] = useState("00:00");
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/system_briefing.mp3");
      
      audioRef.current.addEventListener("loadedmetadata", () => {
        if (audioRef.current) {
          setDuration(formatTime(audioRef.current.duration));
          setHasError(false);
        }
      });
      
      audioRef.current.addEventListener("error", () => {
        setHasError(true);
      });
      
      audioRef.current.addEventListener("timeupdate", () => {
        if (audioRef.current) {
          const pct = (audioRef.current.currentTime / audioRef.current.duration) * 100;
          setProgress(isNaN(pct) ? 0 : pct);
          setCurrentTime(formatTime(audioRef.current.currentTime));
        }
      });
      
      audioRef.current.addEventListener("ended", () => {
        setIsPlaying(false);
        setProgress(0);
        setCurrentTime("00:00");
      });
    }
  }, []);

  useEffect(() => {
    if (!isOpen && isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    }
  }, [isOpen, isPlaying]);

  const togglePlay = () => {
    if (hasError) return;
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hasError) return;
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = clickX / rect.width;
      audioRef.current.currentTime = percentage * audioRef.current.duration;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="lg" 
          className="font-mono text-xs uppercase tracking-wider bg-background/50 backdrop-blur-md border-primary/20 group"
          data-testid="button-audio-briefing"
        >
          <Volume2 className="w-3.5 h-3.5 mr-2 group-hover:text-primary transition-colors" />
          Audio Briefing
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-card border border-border max-w-md p-0 overflow-hidden gap-0">
        <DialogTitle className="sr-only">Executive Briefing Audio Player</DialogTitle>
        <DialogDescription className="sr-only">
          Listen to the VSG operational briefing audio. Use the play button to start playback.
        </DialogDescription>
        
        <div className="p-4 pr-12 border-b border-border flex justify-between items-center bg-muted/10">
          <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
            {hasError ? (
              "Coming Soon"
            ) : isPlaying ? (
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Playing
              </span>
            ) : (
              "Executive Briefing"
            )}
          </span>
          <span className="font-mono text-[10px] text-muted-foreground">
            {hasError ? "~02:00" : `${currentTime} / ${duration}`}
          </span>
        </div>

        <div className="h-40 bg-background relative flex items-center justify-center">
          {hasError ? (
            <div className="flex flex-col items-center justify-center gap-3">
              <AlertCircle className="w-8 h-8 text-muted-foreground/50" />
              <p className="text-xs text-muted-foreground font-mono text-center px-4">
                Audio briefing is being prepared.<br />Check back soon.
              </p>
            </div>
          ) : (
            <button 
              onClick={togglePlay}
              className="relative flex items-center justify-center group"
              data-testid="button-play-pause"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {/* Outer pulse ring - only visible when playing */}
              <div 
                className={`absolute w-28 h-28 rounded-full border border-primary/20 transition-all duration-700 ${
                  isPlaying ? 'animate-ping opacity-30' : 'opacity-0'
                }`}
                style={{ animationDuration: '2s' }}
              />
              
              {/* Middle ring */}
              <div 
                className={`absolute w-24 h-24 rounded-full border border-primary/30 transition-all duration-500 ${
                  isPlaying ? 'scale-100 opacity-100' : 'scale-90 opacity-50'
                }`}
              />
              
              {/* Progress ring */}
              <svg className="absolute w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                <circle 
                  cx="40" 
                  cy="40" 
                  r="36" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className="text-muted/30"
                />
                <circle 
                  cx="40" 
                  cy="40" 
                  r="36" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="text-primary transition-all duration-300"
                  strokeDasharray={`${2 * Math.PI * 36}`}
                  strokeDashoffset={`${2 * Math.PI * 36 * (1 - progress / 100)}`}
                />
              </svg>
              
              {/* Center button */}
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center backdrop-blur-sm group-hover:bg-primary/20 group-hover:border-primary/60 transition-all duration-200">
                {isPlaying ? 
                  <Pause className="w-6 h-6 text-primary" /> : 
                  <Play className="w-6 h-6 text-primary ml-1" />
                }
              </div>
            </button>
          )}
        </div>

        {!hasError && (
          <div 
            className="h-1.5 w-full bg-muted relative cursor-pointer group"
            onClick={handleSeek}
            data-testid="progress-bar"
          >
            <div 
              className="absolute top-0 left-0 h-full bg-primary/80 transition-all duration-100" 
              style={{ width: `${progress}%` }} 
            />
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ left: `calc(${progress}% - 6px)` }}
            />
          </div>
        )}

        <div className="p-5 space-y-4">
          <h3 className="font-heading text-base text-foreground">Operational Briefing</h3>
          <p className="text-xs text-muted-foreground font-mono leading-relaxed border-l-2 border-primary/30 pl-3">
            "We are an engineering lab focused on a single structural problem: The incompatibility between autonomous software and legacy infrastructure..."
          </p>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsOpen(false)} 
            className="w-full text-xs font-mono text-muted-foreground hover:text-foreground uppercase tracking-wider"
            data-testid="button-close-briefing"
          >
            Close Briefing
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
