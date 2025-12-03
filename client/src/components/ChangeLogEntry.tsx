import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ChangeLogEntryProps {
  date: string;
  version?: string;
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
      data-testid={`changelog-${date}`}
    >
      <div className="flex items-center gap-3 flex-shrink-0">
        <span className="text-xs font-mono text-muted-foreground w-24">
          {date}
        </span>
        {version && (
          <Badge variant="outline" className="font-mono text-2xs">
            {version}
          </Badge>
        )}
      </div>
      <p className="text-xs text-foreground">{description}</p>
    </div>
  );
}

export default ChangeLogEntry;
