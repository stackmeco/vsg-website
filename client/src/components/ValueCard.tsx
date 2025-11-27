import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export function ValueCard({
  title,
  description,
  icon,
  className,
}: ValueCardProps) {
  return (
    <Card
      className={cn("bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical", className)}
      data-testid={`value-card-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <CardContent className="p-6">
        <div className="w-8 h-8 rounded-[2px] bg-primary/10 flex items-center justify-center text-primary mb-3">
          {icon}
        </div>
        <h3 className="font-heading font-semibold text-base text-foreground mb-2">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

export default ValueCard;
