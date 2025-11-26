import { useState } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { articles, changelog, getAvailableCategories, type ContentType } from "@/data/articles";

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
        description="The foundational thinking behind Verified Systems. Our manifesto on building verifiable, high-integrity systems." 
      />
      <section className="py-20 lg:py-28 relative" data-testid="section-hero">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground leading-tight tracking-tight mb-6">
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
                <Card
                  key={item.slug}
                  className="bg-card border-card-border hover:border-primary/50 hover:bg-card/80 transition-colors duration-150"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {item.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {item.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/thesis/${item.slug}`}
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      Read more
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-changelog">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
              Changelog
            </h2>
            <div className="space-y-4">
              {changelog.map((entry, index) => (
                <div key={index} className="flex gap-4">
                  <span className="text-sm font-mono text-muted-foreground w-20 flex-shrink-0">
                    {entry.date}
                  </span>
                  <p className="text-sm text-foreground">{entry.entry}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Contact"
        description="Reach out if you'd like to connect."
        href="/contact"
      />
    </Layout>
  );
}
