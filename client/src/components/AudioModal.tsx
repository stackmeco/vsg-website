import { useEffect, useRef, useState, useCallback } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2 } from "lucide-react";

export function AudioModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState("00:00");
  const [currentTime, setCurrentTime] = useState("00:00");
  const [bars, setBars] = useState<number[]>(Array(24).fill(10));
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const animationRef = useRef<number | null>(null);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const animateBars = useCallback(() => {
    if (isPlaying) {
      setBars(prev => prev.map(() => Math.random() * 80 + 20));
      animationRef.current = requestAnimationFrame(animateBars);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/system_briefing.mp3");
      
      audioRef.current.addEventListener("loadedmetadata", () => {
        if (audioRef.current) {
          setDuration(formatTime(audioRef.current.duration));
        }
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
        setBars(Array(24).fill(10));
      });
    }
  }, []);

  useEffect(() => {
    if (isPlaying) {
      animationRef.current = requestAnimationFrame(animateBars);
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      setBars(Array(24).fill(10));
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, animateBars]);

  useEffect(() => {
    if (!isOpen && isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    }
  }, [isOpen, isPlaying]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
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
        <div className="p-4 border-b border-border flex justify-between items-center bg-muted/10">
          <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
            {isPlaying ? (
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Playing
              </span>
            ) : (
              "Executive Briefing"
            )}
          </span>
          <span className="font-mono text-[10px] text-muted-foreground">
            {currentTime} <span className="text-muted-foreground/50">of</span> {duration}
          </span>
        </div>

        <div className="h-36 bg-background relative flex items-end justify-center gap-[3px] px-6 py-4">
          {bars.map((height, i) => (
            <div 
              key={i}
              className="w-2 bg-primary rounded-[1px] transition-all duration-75"
              style={{
                height: `${height}%`,
                opacity: isPlaying ? 0.9 : 0.25,
              }}
            />
          ))}
          
          <button 
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center transition-colors"
            data-testid="button-play-pause"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center backdrop-blur-sm hover:bg-primary/20 transition-colors">
              {isPlaying ? 
                <Pause className="w-6 h-6 text-primary" /> : 
                <Play className="w-6 h-6 text-primary ml-1" />
              }
            </div>
          </button>
        </div>

        <div 
          className="h-1 w-full bg-secondary relative cursor-pointer group"
          onClick={handleSeek}
          data-testid="progress-bar"
        >
          <div 
            className="absolute top-0 left-0 h-full bg-primary transition-all duration-100" 
            style={{ width: `${progress}%` }} 
          />
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ left: `calc(${progress}% - 5px)` }}
          />
        </div>

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
