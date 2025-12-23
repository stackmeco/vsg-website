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
      className={cn("relative bg-background border border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical rounded-[2px] p-5", className)}
      data-testid={`step-card-${number}`}
    >
      <div className="text-2xl font-mono font-bold text-primary/30 select-none mb-2">
        {String(number).padStart(2, "0")}
      </div>
      <h3 className="font-heading font-semibold text-base text-foreground mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default StepCard;
