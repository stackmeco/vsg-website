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
      className={cn("bg-card border-card-border hover:border-primary/50 hover:bg-card/80 transition-colors duration-150 ease-mechanical", className)}
      data-testid={`value-card-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <CardContent className="p-6">
        <div className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center text-primary mb-4">
          {icon}
        </div>
        <h3 className="font-heading font-semibold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

export default ValueCard;
