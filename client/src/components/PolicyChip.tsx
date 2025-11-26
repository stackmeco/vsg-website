import { cn } from "@/lib/utils";

type ChipVariant = "limit" | "info" | "exception" | "breach";

interface PolicyChipProps {
  label: string;
  value: string;
  variant?: ChipVariant;
  meta?: string;
  className?: string;
}

const variantStyles: Record<ChipVariant, { dot: string }> = {
  limit: {
    dot: "bg-emerald-500",
  },
  info: {
    dot: "bg-primary",
  },
  exception: {
    dot: "bg-amber-500",
  },
  breach: {
    dot: "bg-destructive",
  },
};

export function PolicyChip({
  label,
  value,
  variant = "limit",
  meta,
  className,
}: PolicyChipProps) {
  const { dot } = variantStyles[variant];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full",
        "bg-secondary border border-border",
        "font-mono text-xs tracking-wide",
        className
      )}
      data-testid={`chip-${label.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <span
        className={cn("w-2 h-2 rounded-full flex-shrink-0", dot)}
        aria-hidden="true"
      />
      <span className="text-muted-foreground">{label}</span>
      <span className="text-foreground font-medium">{value}</span>
      {meta && <span className="text-muted-foreground/70">{meta}</span>}
    </div>
  );
}

export default PolicyChip;
