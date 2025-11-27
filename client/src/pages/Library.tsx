import { useState } from "react";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { InsightCard } from "@/components/InsightCard";
import { Badge } from "@/components/ui/badge";
import { articles, getAvailableCategories, type ContentType } from "@/data/articles";
import gridTexture from "@assets/grid_texture.png";

export default function Library() {
  const [activeType, setActiveType] = useState<ContentType>("All");

  const filteredItems =
    activeType === "All"
      ? articles
      : articles.filter((item) => item.type === activeType);

  return (
    <Layout>
      <PageMeta 
        title="Thesis" 
        description="The foundational thinking behind Verifiable Systems. Our manifesto on building verifiable, high-integrity systems." 
      />
      <section className="py-20 lg:py-28 relative overflow-hidden" data-testid="section-hero">
        <div className="absolute inset-0 bg-background" />
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `url(${gridTexture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.22,
            filter: "grayscale(100%) contrast(120%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-background/70 to-background/40 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-background/30 pointer-events-none" aria-hidden="true" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-3xl sm:text-[2.5rem] text-foreground leading-tight tracking-tight mb-6">
              Thesis
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The foundational thinking behind our work. We publish when we have something substantive to share — not on a schedule.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-card" data-testid="section-filters">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {getAvailableCategories(articles).map((type) => (
              <Badge
                key={type}
                variant={activeType === type ? "default" : "outline"}
                className="cursor-pointer px-4 py-1.5"
                onClick={() => setActiveType(type)}
                data-testid={`filter-${type.toLowerCase()}`}
              >
                {type}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" data-testid="section-items">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No items found for this filter.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        nextPage="Contact"
        description="Open communication channel."
        href="/contact"
      />
    </Layout>
  );
}
