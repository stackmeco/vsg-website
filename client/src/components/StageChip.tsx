import { cn } from "@/lib/utils";

export type StageVariant = "definition" | "validation" | "build" | "deployment" | "evolution";

interface StageChipProps {
  stage: string;
  variant?: StageVariant;
  className?: string;
}

const variantStyles: Record<StageVariant, string> = {
  definition: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  validation: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  build: "bg-primary/15 text-primary border-primary/30",
  deployment: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  evolution: "bg-purple-500/15 text-purple-400 border-purple-500/30",
};

export function StageChip({ stage, variant = "definition", className }: StageChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-[2px] text-xs font-mono font-medium uppercase tracking-widest border",
        variantStyles[variant],
        className
      )}
      data-testid={`chip-stage-${stage.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {stage}
    </span>
  );
}

export default StageChip;
