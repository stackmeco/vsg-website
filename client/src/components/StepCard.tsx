import { cn } from "@/lib/utils";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  className?: string;
}

export function StepCard({
  number,
  title,
  description,
  className,
}: StepCardProps) {
  return (
    <div
      className={cn("relative", className)}
      data-testid={`step-card-${number}`}
    >
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-mono text-sm font-bold flex-shrink-0">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="font-heading font-semibold text-foreground mb-2">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default StepCard;
