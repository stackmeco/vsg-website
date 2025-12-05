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

const whatYoullFindHere = [
  {
    domain: "Capital",
    text: "Helios: treasury drills, stress paths, exposure patterns.",
  },
  {
    domain: "Truth",
    text: "Lumina: grading flows, provenance issues, sensor behavior.",
  },
  {
    domain: "Dignity",
    text: "Uniqueness Engine: personhood trade-offs, friction, revocation.",
  },
];

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
        title="Insights" 
        description="Field notes from Verifiable Systems Group—observations from running AI-native, cryptography-grounded systems on our own balance sheet under Truth, Capital, and Dignity."
        preloadImage="/hero-texture.png"
      />
      
      {/* Hero Section */}
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
              Field notes from verifiable systems.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-hero-body">
              These are observations from running AI-native, cryptography-grounded systems on our own balance sheet and infrastructure. We document what held up under pressure, what failed, and what we changed—so you can see the mechanics, not just the outcomes.
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed" data-testid="text-hero-secondary">
              You shouldn't need hype to understand how a system behaves. You should be able to inspect the path it took.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button asChild size="lg" data-testid="button-explore-ventures">
                <Link href="/ventures">
                  Explore ventures
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" data-testid="button-review-approach">
                <Link href="/approach">
                  Review our approach
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What you'll find here */}
      <section className="py-20 bg-card" data-testid="section-what-youll-find">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-what-youll-find">
              What you'll find here
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-what-youll-find-body">
              Short, concrete memos from inside our systems and ventures: drills that went right and wrong in Helios, design decisions in Lumina, and trade-offs from Uniqueness Engine. We focus on the mechanics—constraints, failures, standards—not just polished outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whatYoullFindHere.map((item, index) => (
              <Card key={index} className="bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid={`card-find-here-${index}`}>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">{item.domain}</Badge>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What counts as an insight */}
      <section className="py-20" data-testid="section-what-counts">
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
              <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid={`card-what-counts-${index}`}>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notes from running the rails */}
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
            <div className="text-center py-12 bg-background rounded-lg" data-testid="section-items-empty">
              <h3 className="font-heading font-semibold text-foreground mb-2">Field notes are still being written.</h3>
              <p className="text-sm text-muted-foreground mb-6">We publish insights once they have survived real experiments on our own systems—no placeholders, no generic content. Check back soon, or start with our approach and standards in the meantime.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm" data-testid="button-empty-approach">
                  <Link href="/approach">
                    Review our approach
                    <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" data-testid="button-empty-standards">
                  <Link href="/standards">
                    Review our standards
                    <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
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

      {/* How to read these */}
      <section className="py-20" data-testid="section-how-to-read">
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
              <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid={`card-how-to-read-${index}`}>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Insights are / are not */}
      <section className="py-20 bg-card" data-testid="section-what-insights-are">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-8" data-testid="heading-what-insights-are">
            What Insights are / are not
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-background border-border" data-testid="card-what-are">
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
            <Card className="bg-background border-border" data-testid="card-what-are-not">
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

      {/* Cross-links */}
      <section className="py-20" data-testid="section-cross-links">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid="card-cross-link-ventures">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-3">Explore ventures</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">See the ventures these field notes come from—treasury, grading, and personhood experiments run on our own balance sheet first.</p>
                <Button asChild variant="outline" size="sm" data-testid="button-cross-ventures">
                  <Link href="/ventures">
                    View ventures
                    <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid="card-cross-link-approach">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-3">Review our approach</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">See how we design inside constraints, prove patterns on ourselves first, and keep AI in the loop without handing it the mandate.</p>
                <Button asChild variant="outline" size="sm" data-testid="button-cross-approach">
                  <Link href="/approach">
                    View approach
                    <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid="card-cross-link-standards">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-3">Review our standards</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">See how Truth, Capital, and Dignity are turned into concrete guardrails for ventures, internal tools, and experiments.</p>
                <Button asChild variant="outline" size="sm" data-testid="button-cross-standards">
                  <Link href="/standards">
                    View standards
                    <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Ventures"
        description="See the ventures these field notes come from—treasury, grading, and personhood experiments run on our own balance sheet first."
        href="/ventures"
      />
    </Layout>
  );
}
