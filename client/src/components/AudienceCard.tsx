import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface AudienceCardProps {
  title: string;
  pain: string;
  outcome: string;
  href: string;
  icon: React.ReactNode;
  className?: string;
}

export function AudienceCard({
  title,
  pain,
  outcome,
  href,
  icon,
  className,
}: AudienceCardProps) {
  return (
    <Card
      className={cn(
        "group bg-card border-card-border hover-elevate transition-all duration-200",
        className
      )}
      data-testid={`audience-card-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <CardContent className="p-6">
        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary mb-4">
          {icon}
        </div>
        <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-2">{pain}</p>
        <p className="text-sm text-foreground mb-4">{outcome}</p>
        <Link
          href={href}
          className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all"
        >
          Start here
          <ArrowRight className="w-4 h-4" />
        </Link>
      </CardContent>
    </Card>
  );
}

export default AudienceCard;
