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
    dot: "bg-emerald-500",
    glow: "shadow-[0_0_8px_rgba(34,197,94,0.5)]",
  },
  info: {
    dot: "bg-teal-400",
    glow: "shadow-[0_0_8px_rgba(20,184,166,0.5)]",
  },
  exception: {
    dot: "bg-amber-500 animate-pulse",
    glow: "shadow-[0_0_8px_rgba(245,158,11,0.5)]",
  },
  breach: {
    dot: "bg-red-500",
    glow: "shadow-[0_0_8px_rgba(239,68,68,0.7)]",
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

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full",
        "bg-slate-900/90 border border-slate-700/50",
        "font-mono text-xs tracking-wide",
        className
      )}
      data-testid={`chip-${label.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <span
        className={cn("w-2 h-2 rounded-full flex-shrink-0", dot, glow)}
        aria-hidden="true"
      />
      <span className="text-slate-400">{label}</span>
      <span className="text-slate-200 font-medium">{value}</span>
      {meta && <span className="text-slate-500">{meta}</span>}
    </div>
  );
}

export default PolicyChip;
