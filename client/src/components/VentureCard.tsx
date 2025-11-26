import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface VentureCardProps {
  name: string;
  tagline: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  className?: string;
}

export function VentureCard({
  name,
  tagline,
  description,
  href,
  icon,
  className,
}: VentureCardProps) {
  return (
    <Card
      className={cn(
        "group bg-card border-card-border hover-elevate transition-all duration-200",
        className
      )}
      data-testid={`venture-card-${name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <CardHeader className="pb-2 flex flex-row gap-3 items-start space-y-0">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-heading font-semibold text-lg text-foreground">
            {name}
          </h3>
          <p className="text-sm text-primary font-medium">{tagline}</p>
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        <Link href={href}>
          <Button
            variant="ghost"
            size="sm"
            className="p-0 h-auto text-primary group-hover:gap-2 transition-all"
          >
            View {name}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VentureCard;
