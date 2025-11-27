import { cn } from "@/lib/utils";

interface StatBlockProps {
  value: string;
  label: string;
  subtext?: string;
  className?: string;
  variant?: "default" | "primary" | "muted";
}

export function StatBlock({ 
  value, 
  label, 
  subtext,
  className,
  variant = "default"
}: StatBlockProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <p 
        className={cn(
          "text-4xl sm:text-5xl font-mono font-bold tracking-tight tabular-nums animate-data-tick",
          variant === "primary" && "text-primary",
          variant === "muted" && "text-muted-foreground",
          variant === "default" && "text-foreground"
        )}
      >
        {value}
      </p>
      <p className="text-sm font-medium text-foreground">
        {label}
      </p>
      {subtext && (
        <p className="text-xs text-muted-foreground animate-flash">
          {subtext}
        </p>
      )}
    </div>
  );
}

interface StatGridProps {
  children: React.ReactNode;
  className?: string;
  columns?: 2 | 3 | 4;
}

export function StatGrid({ children, className, columns = 3 }: StatGridProps) {
  return (
    <div 
      className={cn(
        "grid gap-6",
        columns === 2 && "grid-cols-2",
        columns === 3 && "grid-cols-2 md:grid-cols-3",
        columns === 4 && "grid-cols-2 md:grid-cols-4",
        className
      )}
    >
      {children}
    </div>
  );
}

export default StatBlock;
