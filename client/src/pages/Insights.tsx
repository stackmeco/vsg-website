import { useState } from "react";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { InsightCard } from "@/components/InsightCard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { articles, getAvailableCategories, type ContentType } from "@/data/articles";

const whatToExpect = [
  {
    title: "From live systems",
    text: "We write from systems we run ourselves, not hypotheticals. If we describe a pattern, it has touched our balance sheet or operations.",
  },
  {
    title: "Structured, not sensational",
    text: "Each piece starts from a real failure mode or asymmetry, then walks through the mechanics and the fix. No drama, just structure.",
  },
  {
    title: "Actionable verification",
    text: "Where possible, we include ways to inspect behaviours—logs, specs, or checklists—so you can adapt the pattern without copying our stack.",
  },
];

export default function Library() {
  const [activeType, setActiveType] = useState<ContentType>("All");

  const filteredItems =
    activeType === "All"
      ? articles
      : articles.filter((item) => item.type === activeType);

  return (
    <Layout>
      <PageMeta 
        title="Insights — Notes on Building Verifiable Autonomy" 
        description="Working notes, post-mortems, and pattern write-ups from VSG's own systems across Truth, Capital, and Dignity—what worked, what broke, and how we rewired the rails."
        preloadImage="/hero-texture.png"
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
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4" data-testid="text-overline">
              Insights from the field
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-[2.5rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              Notes on building verifiable autonomy.
            </h1>
            <p className="text-lg text-foreground leading-relaxed" data-testid="text-hero-body">
              We share what we learn as we run Truth, Capital, and Dignity on our own balance sheet first: what worked, what broke, and how we rewired the rails so you don't have to repeat the same failures.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-card" data-testid="section-intro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-intro">
              These aren't press releases. They are working notes, post-mortems, and pattern write-ups from the systems we depend on ourselves. Expect structure, constraints, and evidence—not hype.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12" data-testid="section-what-to-expect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-8" data-testid="heading-what-to-expect">
            What to expect
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {whatToExpect.map((item) => {
              const slugTitle = item.title.toLowerCase().replace(/\s+/g, "-").replace(/,/g, "");
              return (
                <Card key={item.title} className="flex flex-col h-full bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid={`card-${slugTitle}`}>
                  <CardContent className="flex flex-col h-full p-6">
                    <h3 className="font-heading font-semibold text-foreground mb-3" data-testid={`heading-${slugTitle}`}>{item.title}</h3>
                    <p className="flex-1 text-sm text-muted-foreground leading-relaxed" data-testid={`text-${slugTitle}`}>{item.text}</p>
                  </CardContent>
                </Card>
              );
            })}
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
                onClick={() => setActiveType(type)}
                data-testid={`filter-${type.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {type}
              </Badge>
            ))}
          </div>
          
          {filteredItems.length === 0 ? (
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
