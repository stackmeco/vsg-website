import { useEffect, useRef, useState, useCallback } from "react";
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
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogContentRef = useRef<HTMLDivElement>(null);

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

  const handleOpenChange = useCallback((open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setTimeout(() => {
        triggerRef.current?.focus();
      }, 0);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab" && dialogContentRef.current) {
        const focusableElements = dialogContentRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

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
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button 
          ref={triggerRef}
          variant="outline" 
          size="lg" 
          className="font-mono text-xs uppercase tracking-wider bg-background/50 backdrop-blur-md border-primary/20 group"
          data-testid="button-audio-briefing"
        >
          <Volume2 className="w-3.5 h-3.5 mr-2 group-hover:text-primary transition-colors" />
          Audio Briefing
        </Button>
      </DialogTrigger>

      <DialogContent 
        ref={dialogContentRef}
        className="bg-card border border-border max-w-md p-0 overflow-hidden gap-0"
        aria-modal="true"
      >
        <DialogTitle className="sr-only">Executive Briefing Audio Player</DialogTitle>
        <DialogDescription className="sr-only">
          Listen to the VSG operational briefing audio. Use the play button to start playback.
        </DialogDescription>
        
        <div className="p-4 pr-12 border-b border-border flex justify-between items-center bg-muted/10">
          <span className="font-mono text-2xs uppercase tracking-widest text-primary">
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
          <span className="font-mono text-2xs text-muted-foreground">
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
              <div 
                className={`absolute w-28 h-28 rounded-sm border border-primary/20 transition-opacity duration-150 ${
                  isPlaying ? 'opacity-60 animate-[heartbeat_2s_ease-in-out_infinite]' : 'opacity-0'
                }`}
              />
              
              <div 
                className={`absolute w-24 h-24 rounded-sm border border-primary/30 transition-opacity duration-150 ${
                  isPlaying ? 'opacity-100' : 'opacity-50'
                }`}
              />
              
              <svg className="absolute w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                <rect 
                  x="4" y="4" width="72" height="72" rx="2"
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className="text-muted/30"
                />
                <rect 
                  x="4" y="4" width="72" height="72" rx="2"
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className="text-primary transition-all duration-150"
                  strokeDasharray={`${72 * 4}`}
                  strokeDashoffset={`${72 * 4 * (1 - progress / 100)}`}
                />
              </svg>
              
              <div className="w-16 h-16 rounded-sm bg-primary/10 border border-primary/40 flex items-center justify-center backdrop-blur-sm group-hover:bg-primary/20 group-hover:border-primary/60 transition-all duration-150">
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
            role="slider"
            aria-label="Audio progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress)}
          >
            <div 
              className="absolute top-0 left-0 h-full bg-primary/80 transition-all duration-150" 
              style={{ width: `${progress}%` }} 
            />
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-sm bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-150"
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
