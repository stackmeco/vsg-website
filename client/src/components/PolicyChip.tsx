import { cn } from "@/lib/utils";

type ChipVariant = "limit" | "info" | "exception" | "breach";

interface PolicyChipProps {
  label: string;
  value: string;
  variant?: ChipVariant;
  meta?: string;
  className?: string;
}

const variantStyles: Record<ChipVariant, { dot: string; glow: string }> = {
  limit: {
    dot: "bg-primary animate-glow-pulse",
    glow: "",
  },
  info: {
    dot: "bg-muted-foreground",
    glow: "",
  },
  exception: {
    dot: "bg-chart-4 animate-pulse",
    glow: "shadow-[0_0_8px_hsl(var(--chart-4)/0.5)]",
  },
  breach: {
    dot: "bg-destructive animate-pulse",
    glow: "shadow-[0_0_8px_hsl(var(--destructive)/0.7)]",
  },
};

export function PolicyChip({
  label,
  value,
  variant = "limit",
  meta,
  className,
}: PolicyChipProps) {
  const { dot, glow } = variantStyles[variant];
  const ariaLabel = meta ? `${label}: ${value} ${meta}` : `${label}: ${value}`;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-sm",
        "bg-secondary border border-border",
        "font-mono text-xs tracking-wide",
        className
      )}
      role="status"
      aria-label={ariaLabel}
      data-testid={`chip-${label.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <span
        className={cn("w-2 h-2 rounded-full flex-shrink-0", dot, glow)}
        aria-hidden="true"
      />
      <span className="text-muted-foreground">{label}</span>
      <span className="text-foreground font-medium">{value}</span>
      {meta && <span className="text-muted-foreground/70">{meta}</span>}
    </div>
  );
}

export default PolicyChip;
