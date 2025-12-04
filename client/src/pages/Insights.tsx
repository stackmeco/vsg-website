import { useState } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { InsightCard } from "@/components/InsightCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { articles, getAvailableCategories, type ContentType } from "@/data/articles";

const whatInsightsAre = [
  "Field notes from running our own systems.",
  "Post-mortems and design decisions we've actually implemented.",
  "A way to see how Truth, Capital, and Dignity show up under stress.",
];

const whatInsightsAreNot = [
  "Not marketing copy or product announcements.",
  "Not investment, legal, or tax advice.",
  "Not a complete description of any internal playbook.",
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
              Insights
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              From incidents to infrastructure.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-hero-body">
              When something breaks—or works better than expected—we write it down. Insights are where we turn experiments, incidents, and field notes into patterns that shape how we design for Truth, Capital, and Dignity.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button 
                size="lg" 
                data-testid="button-see-entries"
                onClick={() => document.getElementById('insights-list')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See all entries
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
              <Link href="/approach">
                <Button size="lg" variant="outline" data-testid="button-how-we-work">
                  How we work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="insights-list" className="py-20 bg-card" data-testid="section-insights-list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-notes-from-rails">
              Notes from running the rails
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-notes-from-rails">
              These entries come from running our own systems under real conditions. Some are post-mortems, some are design memos, all are grounded in work we've actually done.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8" data-testid="filter-controls">
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
              <p className="text-base text-muted-foreground">No entries found for this filter.</p>
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

      <section className="py-20" data-testid="section-what-insights-are">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-8" data-testid="heading-what-insights-are">
            What Insights are / are not
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-card border-border" data-testid="card-what-are">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-4">What Insights are</h3>
                <ul className="space-y-3">
                  {whatInsightsAre.map((item, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`list-what-are-${index}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card border-border" data-testid="card-what-are-not">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-4">What Insights are not</h3>
                <ul className="space-y-3">
                  {whatInsightsAreNot.map((item, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`list-what-are-not-${index}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="text-xs text-muted-foreground/80 leading-relaxed max-w-3xl" data-testid="text-insights-disclaimer">
            These entries describe how we operate and what we've learned. They are not investment, legal, or tax advice, and they omit sensitive operational details by design.
          </p>
        </div>
      </section>

      <NextStepBlock
        nextPage="See how we structure the work"
        description="Our approach and governance pages show how these lessons become standards."
        href="/approach"
      />
    </Layout>
  );
}
