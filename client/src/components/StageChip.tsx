import { cn } from "@/lib/utils";

type StageVariant = "research" | "specification" | "architecture" | "prototype" | "internal" | "production";

interface StageChipProps {
  stage: string;
  variant?: StageVariant;
  className?: string;
}

const variantStyles: Record<StageVariant, string> = {
  research: "bg-[hsl(var(--accent-warm))]/15 text-[hsl(var(--accent-warm))]",
  specification: "bg-secondary text-foreground/80",
  architecture: "bg-primary/15 text-primary",
  prototype: "bg-[hsl(var(--accent-warm))]/20 text-[hsl(var(--accent-warm))]",
  internal: "bg-[hsl(var(--color-warning))]/20 text-[hsl(var(--color-warning))]",
  production: "bg-[hsl(var(--color-success))]/20 text-[hsl(var(--color-success))]",
};

export function StageChip({ stage, variant = "specification", className }: StageChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-md text-xs font-mono font-medium uppercase tracking-wider border",
        variantStyles[variant],
        variant === "research" && "border-[hsl(var(--accent-warm))]/30",
        variant === "specification" && "border-border",
        variant === "architecture" && "border-primary/30",
        variant === "prototype" && "border-[hsl(var(--accent-warm))]/30",
        variant === "internal" && "border-[hsl(var(--color-warning))]/30",
        variant === "production" && "border-[hsl(var(--color-success))]/30",
        className
      )}
      data-testid={`chip-stage-${stage.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {stage}
    </span>
  );
}

export default StageChip;
