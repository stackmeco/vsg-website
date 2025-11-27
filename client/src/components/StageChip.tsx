import { cn } from "@/lib/utils";

export type StageVariant = "research" | "specification" | "architecture" | "prototype" | "internal" | "production";

interface StageChipProps {
  stage: string;
  variant?: StageVariant;
  className?: string;
}

const variantStyles: Record<StageVariant, string> = {
  research: "bg-[hsl(210_70%_50%/0.1)] text-[hsl(210_70%_60%)] border-[hsl(210_70%_50%/0.2)]",
  specification: "bg-[hsl(270_60%_50%/0.1)] text-[hsl(270_60%_60%)] border-[hsl(270_60%_50%/0.2)]",
  architecture: "bg-primary/10 text-primary border-primary/20",
  prototype: "bg-[hsl(35_90%_50%/0.1)] text-[hsl(35_90%_55%)] border-[hsl(35_90%_50%/0.2)]",
  internal: "bg-[hsl(45_90%_50%/0.1)] text-[hsl(45_90%_55%)] border-[hsl(45_90%_50%/0.2)]",
  production: "bg-[hsl(142_69%_48%/0.1)] text-[hsl(142_69%_55%)] border-[hsl(142_69%_48%/0.2)]",
};

export function StageChip({ stage, variant = "specification", className }: StageChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-sm text-xs font-mono font-semibold uppercase tracking-wider border",
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
