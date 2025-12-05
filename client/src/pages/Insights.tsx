import { useState } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { InsightCard } from "@/components/InsightCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X, ArrowRight } from "lucide-react";
import { articles, getAvailableCategories, type ContentType } from "@/data/articles";

const whatCountsAsInsight = [
  {
    title: "Post-mortems",
    text: "Structured reviews of incidents and near-misses, with what we changed as a result.",
  },
  {
    title: "Patterns and frameworks",
    text: "Reusable ways of thinking about risk, architecture, or incentives that survived contact with reality.",
  },
  {
    title: "Field notes",
    text: "Observations from experiments or small changes that surfaced something non-obvious.",
  },
];

const howToRead = [
  {
    title: "Look for what changed.",
    text: "Every post should make clear what we did differently after the observation or incident.",
  },
  {
    title: "Watch for patterns.",
    text: "We call out frameworks or patterns that might be reusable, along with where they could break.",
  },
  {
    title: "Treat them as input, not instruction.",
    text: "These are records of how we chose to operate. They are not blueprints you should follow without your own context and constraints.",
  },
];

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
              Field notes from running our own rails.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-hero-body">
              Insights are working notes, post-mortems, and architectural reflections from running our own systems under Truth, Capital, and Dignity. They capture what broke, what held, and what changed as a result—so lessons do not stay trapped in a single incident.
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed" data-testid="text-hero-secondary">
              These are not announcements or marketing posts. They exist so other serious operators can see how we think, where we were wrong, and how we adjusted.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button asChild size="lg" data-testid="button-see-approach">
                <Link href="/approach">
                  See how we work
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" data-testid="button-explore-ventures">
                <Link href="/ventures">
                  Explore ventures
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-what-counts">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-what-counts">
              What counts as an insight
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-what-counts-body">
              We only publish pieces that capture real work: incidents, rewires, experiments, and patterns from running our own systems. If it does not change how we operate—or how we think about Truth, Capital, or Dignity—it does not belong here.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whatCountsAsInsight.map((item, index) => (
              <Card key={index} className="bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid={`card-what-counts-${index}`}>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="insights-list" className="py-20" data-testid="section-insights-list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-notes-from-rails">
              Notes from running the rails
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-notes-from-rails">
              These entries come from running our own systems under real conditions. Some are post-mortems, some are design memos, all are grounded in work we've actually done.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-4" data-testid="filter-controls">
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
          <p className="text-xs text-muted-foreground/80 mb-8" data-testid="text-domain-legend">
            Truth covers evidence and provenance. Capital covers resilience and risk. Dignity covers how systems treat people's time and personhood.
          </p>
          
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 bg-card rounded-lg" data-testid="section-items-empty">
              <h3 className="font-heading font-semibold text-foreground mb-2">Nothing matches these filters yet.</h3>
              <p className="text-sm text-muted-foreground">Try adjusting your filters, or check back after we publish more post-mortems and notes.</p>
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

      <section className="py-20 bg-card" data-testid="section-how-to-read">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-how-to-read">
              How to read these
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-how-to-read-body">
              These pieces are written for operators, stewards, and technical leaders who care more about mechanisms than messaging. They assume a basic familiarity with risk, systems, and incentives—but they are grounded in plain language wherever possible.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {howToRead.map((item, index) => (
              <Card key={index} className="bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid={`card-how-to-read-${index}`}>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" aria-hidden="true" />
                  What Insights are
                </h3>
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
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
                  What Insights are not
                </h3>
                <ul className="space-y-3">
                  {whatInsightsAreNot.map((item, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`list-what-are-not-${index}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="text-xs text-muted-foreground/80 leading-relaxed max-w-3xl" data-testid="text-insights-disclaimer">
            Insights are records of how we run our own systems. They are not investment, legal, tax, or compliance advice, and should not be used as the sole basis for any decision.
          </p>
        </div>
      </section>

      <NextStepBlock
        nextPage="Standards"
        description="Our standards and approach pages show how Truth, Capital, and Dignity shape the systems these insights come from."
        href="/standards"
      />
    </Layout>
  );
}
