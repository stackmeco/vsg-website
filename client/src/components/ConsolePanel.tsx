import { cn } from "@/lib/utils";
import { PolicyChip } from "./PolicyChip";

interface Metric {
  label: string;
  value: string;
}

interface ChipData {
  label: string;
  value: string;
  variant?: "limit" | "info" | "exception" | "breach";
  meta?: string;
}

interface ConsolePanelProps {
  title?: string;
  chips: ChipData[];
  metrics?: Metric[];
  className?: string;
}

export function ConsolePanel({
  title,
  chips,
  metrics,
  className,
}: ConsolePanelProps) {
  return (
    <div
      className={cn(
        "bg-card/90 backdrop-blur-sm rounded-sm border border-border",
        "p-4 flex flex-col gap-3",
        className
      )}
      style={{ boxShadow: "0 0 30px -10px rgba(242, 109, 33, 0.15)" }}
      data-testid="console-panel"
    >
      {title && (
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
            {title}
          </span>
          <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {chips.map((chip, index) => (
          <PolicyChip key={index} {...chip} />
        ))}
      </div>
      {metrics && metrics.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2 border-t border-border">
          {metrics.map((metric, index) => (
            <div key={index} className="font-mono text-xs">
              <span className="text-muted-foreground">{metric.label}: </span>
              <span className="text-primary tabular-nums tracking-tight">{metric.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ConsolePanel;
