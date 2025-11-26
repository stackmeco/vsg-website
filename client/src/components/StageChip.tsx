import { cn } from "@/lib/utils";

type StageVariant = "research" | "requirements" | "architecture" | "development" | "prototype" | "testing";

interface StageChipProps {
  stage: string;
  variant?: StageVariant;
  className?: string;
}

const variantStyles: Record<StageVariant, string> = {
  research: "bg-[hsl(var(--accent-warm))]/15 text-[hsl(var(--accent-warm))]",
  requirements: "bg-secondary text-foreground/80",
  architecture: "bg-primary/15 text-primary",
  development: "bg-primary/25 text-primary",
  prototype: "bg-[hsl(var(--accent-warm))]/20 text-[hsl(var(--accent-warm))]",
  testing: "bg-[hsl(var(--color-success))]/20 text-[hsl(var(--color-success))]",
};

export function StageChip({ stage, variant = "requirements", className }: StageChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-md text-xs font-mono font-medium uppercase tracking-wider border",
        variantStyles[variant],
        variant === "research" && "border-[hsl(var(--accent-warm))]/30",
        variant === "requirements" && "border-border",
        variant === "architecture" && "border-primary/30",
        variant === "development" && "border-primary/40",
        variant === "prototype" && "border-[hsl(var(--accent-warm))]/30",
        variant === "testing" && "border-[hsl(var(--color-success))]/30",
        className
      )}
      data-testid={`chip-stage-${stage.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {stage}
    </span>
  );
}

export default StageChip;
