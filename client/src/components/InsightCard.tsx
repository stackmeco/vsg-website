import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface InsightCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  className?: string;
}

export function InsightCard({
  title,
  excerpt,
  date,
  category,
  slug,
  className,
}: InsightCardProps) {
  return (
    <Card
      className={cn(
        "group bg-card border-card-border hover:border-primary/50 hover:bg-card/80 transition-colors duration-150",
        className
      )}
      data-testid={`insight-card-${slug}`}
    >
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
        <h3 className="font-heading font-semibold text-foreground mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {excerpt}
        </p>
        <Link
          href={`/insights/${slug}`}
          className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all"
        >
          Read more
          <ArrowRight className="w-4 h-4" />
        </Link>
      </CardContent>
    </Card>
  );
}

export default InsightCard;
