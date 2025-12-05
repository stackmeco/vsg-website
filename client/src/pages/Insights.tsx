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

const whatYoullFind = [
  "Field notes from running ventures inside the studio.",
  "Memos on architecture, governance, and risk decisions.",
  "Post-incident reflections and what changed as a result.",
  "Patterns we think are ready to reuse across Truth, Capital, and Dignity.",
];

const insightsEntries = [
  {
    title: "Designing systems that can admit failure",
    category: "Standards \u00b7 Truth",
    summary:
      "Why we require every system to define what must never happen, how we would detect it, and what we do next\u2014before a single user relies on it.",
    href: "#",
  },
  {
    title: "Running treasury drills without external promises",
    category: "Standards \u00b7 Capital",
    summary:
      "How we run internal exercises on our own balance sheet to see how capital would behave under stress, without offering products or pooling outside funds.",
    href: "#",
  },
  {
    title: "Proving personhood without overexposure",
    category: "Standards \u00b7 Dignity",
    summary:
      "Why we treat participation and personhood as design constraints, and how we avoid collecting more about someone's life than a system actually needs.",
    href: "#",
  },
];

const studioLinks = [
  {
    label: "Pillars",
    text: "The principles that constrain which systems we build in the first place.",
  },
  {
    label: "Process",
    text: "The six-stage path every venture follows before it becomes infrastructure.",
  },
  {
    label: "Standards",
    text: "The quality and risk bar systems must clear before they carry real stakes.",
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
        title="Insights"
        description="Notes, memos, and logs from Verifiable Systems Group on how we design, govern, and operate AI-native systems across Truth, Capital, and Dignity."
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
              Notes from the studio
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              Insights from systems that have to hold up.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-hero-body">
              Insights is where we share memos, notes, and logs from running AI-native systems under real constraints. Expect field reports, architectural patterns, and lessons from stress tests\u2014not slogans.
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed" data-testid="text-hero-secondary">
              You shouldn't have to guess how we think once real Truth, Capital, and Dignity are on the line. These pieces show how our standards and approach behave in practice.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button asChild size="lg" data-testid="button-see-how-we-build">
                <Link href="/approach">
                  See how we build
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" data-testid="button-read-standards">
                <Link href="/standards">
                  Read our standards
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What you'll find here */}
      <section className="py-20 bg-card" data-testid="section-what-youll-find">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-what-youll-find">
              What you'll find here
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-what-youll-find-body">
              This is not a generic blog. It's a working notebook for systems that must not fail silently. Each piece should map back to our pillars, process, and standards.
            </p>
            <ul className="space-y-3">
              {whatYoullFind.map((item, index) => (
                <li key={index} className="flex items-start gap-3" data-testid={`list-what-youll-find-${index}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Static entries grid */}
      <section className="py-20" data-testid="section-entries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-entries">
              Recent notes
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {insightsEntries.map((entry, index) => (
              <article
                key={entry.title}
                className="flex flex-col justify-between rounded-xl border bg-card/60 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                data-testid={`card-entry-${index}`}
              >
                <div className="space-y-2">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {entry.category}
                  </p>
                  <h3 className="text-sm font-semibold tracking-tight sm:text-base text-foreground">
                    {entry.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {entry.summary}
                  </p>
                </div>
                <div className="mt-4">
                  <a
                    href={entry.href}
                    className="text-xs font-medium uppercase tracking-[0.18em] text-primary"
                  >
                    Read note
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic insights list */}
      <section id="insights-list" className="py-20 bg-card" data-testid="section-insights-list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-all-notes">
              All notes
            </h2>
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
              <p className="text-sm text-muted-foreground mb-6">We publish insights once they have survived real experiments on our own systems\u2014no placeholders, no generic content. Check back soon, or start with our approach and standards in the meantime.</p>
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

      {/* How we choose what to publish */}
      <section className="py-20" data-testid="section-how-we-choose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-how-we-choose">
              How we choose what to publish
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-how-we-choose-body-1">
              We only publish when something has changed how we design or operate. That might be an incident, a stress test, or a pattern that has survived enough contact with reality to be worth sharing.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-how-we-choose-body-2">
              Each piece should map back to our pillars, process, and standards. If we cannot explain what changed in the studio because of it, it belongs in an internal log\u2014not on this page.
            </p>
          </div>
        </div>
      </section>

      {/* Tying back to the rest of the studio */}
      <section className="py-20 bg-card" data-testid="section-tying-back">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-tying-back">
              Tying back to the rest of the studio
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {studioLinks.map((item, index) => (
              <Card key={index} className="bg-background border-border" data-testid={`card-studio-link-${index}`}>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{item.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12" data-testid="section-disclaimer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-muted-foreground/80 leading-relaxed max-w-3xl" data-testid="text-disclaimer">
            Insights are records of how we run our own systems. They are not investment, legal, tax, or compliance advice, and should not be used as the sole basis for any decision.
          </p>
        </div>
      </section>

      <NextStepBlock
        nextPage="Studio"
        description="See how these notes connect back to the studio's purpose, vision, and mission."
        href="/studio"
      />
    </Layout>
  );
}
