import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight } from "lucide-react";

interface InsightCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  className?: string;
}

export function InsightCardSkeleton({ className }: { className?: string }) {
  return (
    <Card
      className={cn(
        "bg-card border-card-border",
        className
      )}
      data-testid="insight-card-skeleton"
    >
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Skeleton className="h-5 w-16 rounded-sm" />
          <Skeleton className="h-4 w-20" />
        </div>
        <Skeleton className="h-5 w-full mb-1.5" />
        <Skeleton className="h-5 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-5/6 mb-4" />
        <Skeleton className="h-4 w-24" />
      </CardContent>
    </Card>
  );
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
          <span className="text-sm font-mono text-muted-foreground">{date}</span>
        </div>
        <h3 className="font-heading font-semibold text-foreground mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-base text-muted-foreground mb-4 line-clamp-2">
          {excerpt}
        </p>
        <Link
          href={`/insights/${slug}`}
          className="inline-flex items-center gap-1 text-sm font-mono uppercase tracking-wide text-primary group-hover:gap-2 transition-all"
        >
          Read Analysis
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </CardContent>
    </Card>
  );
}

export default InsightCard;
