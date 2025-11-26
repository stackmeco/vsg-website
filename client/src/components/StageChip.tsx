import { cn } from "@/lib/utils";

type StageVariant = "research" | "requirements" | "architecture" | "development" | "prototype" | "testing";

interface StageChipProps {
  stage: string;
  variant?: StageVariant;
  className?: string;
}

const variantStyles: Record<StageVariant, string> = {
  research: "bg-secondary text-secondary-foreground",
  requirements: "bg-secondary text-secondary-foreground",
  architecture: "bg-primary/10 text-primary",
  development: "bg-primary/20 text-primary",
  prototype: "bg-accent/20 text-accent-foreground",
  testing: "bg-accent/30 text-accent-foreground",
};

export function StageChip({ stage, variant = "requirements", className }: StageChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider",
        variantStyles[variant],
        className
      )}
      data-testid={`chip-stage-${stage.toLowerCase().replace(/\s+/g, "-")}`}
    >
      Stage: {stage}
    </span>
  );
}

export default StageChip;
