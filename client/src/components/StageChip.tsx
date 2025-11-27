import { cn } from "@/lib/utils";

export type StageVariant = "research" | "specification" | "architecture" | "prototype" | "internal" | "production";

interface StageChipProps {
  stage: string;
  variant?: StageVariant;
  className?: string;
}

// INDUSTRIAL PALETTE ONLY: Tungsten grays + Signal orange
// All stages use only Tungsten gray or Signal orange - no external colors
const variantStyles: Record<StageVariant, string> = {
  research: "bg-secondary text-muted-foreground border-border",
  specification: "bg-secondary text-muted-foreground border-border",
  architecture: "bg-primary/10 text-primary border-primary/20",
  prototype: "bg-primary/10 text-primary border-primary/20",
  internal: "bg-primary/15 text-primary border-primary/25",
  production: "bg-primary/20 text-primary border-primary/30",
};

export function StageChip({ stage, variant = "specification", className }: StageChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-[2px] text-[10px] font-mono font-medium uppercase tracking-widest border",
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
