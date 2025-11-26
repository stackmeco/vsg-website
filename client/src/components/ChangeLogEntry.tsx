import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ChangeLogEntryProps {
  date: string;
  version: string;
  description: string;
  className?: string;
}

export function ChangeLogEntry({
  date,
  version,
  description,
  className,
}: ChangeLogEntryProps) {
  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row sm:items-start gap-3 py-4 border-b border-border last:border-0",
        className
      )}
      data-testid={`changelog-${version}`}
    >
      <div className="flex items-center gap-3 flex-shrink-0">
        <span className="text-sm font-mono text-muted-foreground w-24">
          {date}
        </span>
        <Badge variant="outline" className="font-mono text-xs">
          {version}
        </Badge>
      </div>
      <p className="text-sm text-foreground">{description}</p>
    </div>
  );
}

export default ChangeLogEntry;
