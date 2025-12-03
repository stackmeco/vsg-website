import { useState, useEffect, useCallback } from "react";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { InsightCard, InsightCardSkeleton } from "@/components/InsightCard";
import { Badge } from "@/components/ui/badge";
import { articles, getAvailableCategories, type ContentType } from "@/data/articles";

const SKELETON_COUNT = 6;
const LOADING_DELAY_MS = 150;

export default function Library() {
  const [activeType, setActiveType] = useState<ContentType>("All");
  const [isLoading, setIsLoading] = useState(false);

  const filteredItems =
    activeType === "All"
      ? articles
      : articles.filter((item) => item.type === activeType);

  const handleFilterChange = useCallback((type: ContentType) => {
    if (type === activeType) return;
    setIsLoading(true);
    setActiveType(type);
  }, [activeType]);

  useEffect(() => {
    if (!isLoading) return;
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, LOADING_DELAY_MS);

    return () => clearTimeout(timer);
  }, [isLoading, activeType]);

  return (
    <Layout>
      <PageMeta 
        title="Insights" 
        description="Our research and analysis on AI, digital assets, and the future of verified systems. Published when we have something substantive to share." 
      />
      <section className="py-20 lg:py-28 relative overflow-hidden" data-testid="section-hero">
        <div className="absolute inset-0 bg-background" />
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `url(/hero-texture.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.35,
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-background from-20% via-background/50 to-background/30 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-background/30 pointer-events-none" aria-hidden="true" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-3xl sm:text-[2.5rem] text-foreground leading-tight tracking-tight mb-6">
              Insights
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our research and analysis on AI, finance, and verification. We publish when we have something meaningful to share—not on a schedule.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 pb-16 bg-card" data-testid="section-filters">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-12" data-testid="filter-controls">
            {getAvailableCategories(articles).map((type) => (
              <Badge
                key={type}
                variant={activeType === type ? "default" : "outline"}
                className="cursor-pointer px-4 py-1.5"
                onClick={() => handleFilterChange(type)}
                data-testid={`filter-${type.toLowerCase()}`}
              >
                {type}
              </Badge>
            ))}
          </div>
          
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="section-items-loading">
              {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                <InsightCardSkeleton key={`skeleton-${index}`} />
              ))}
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="text-center py-12" data-testid="section-items-empty">
              <p className="text-base text-muted-foreground">No items found for this filter.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="section-items">
              {filteredItems.map((item) => (
                <InsightCard
                  key={item.slug}
                  title={item.title}
                  excerpt={item.excerpt}
                  date={item.date}
                  category={item.type}
                  slug={item.slug}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <NextStepBlock
        nextPage="Connect"
        description="Start a conversation with our team."
        href="/connect"
      />
    </Layout>
  );
}
