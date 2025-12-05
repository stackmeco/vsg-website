import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { values } from "@/data/studio";

export default function Values() {
  return (
    <Layout>
      <PageMeta
        title="Values & Operating Code"
        description="The values that guide how Verifiable Systems Group designs, ships, and governs verifiable systems—how we decide what to build, what to decline, and how we respond when things break."
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
              Values · Operating Code
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              How we operate when it actually matters.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-hero-body">
              Values here are not slogans. They describe how we behave when systems are under stress, when incentives are misaligned, or when something fails. They shape how we design, what we refuse to ship, and how we decide whether a venture should exist at all.
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed" data-testid="text-hero-secondary">
              These six values keep us honest to our core questions about Truth, Capital, and Dignity. They are written so you can hold us to them.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Button asChild data-testid="button-see-approach">
                <Link href="/approach">
                  See how we work
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="outline" asChild data-testid="button-explore-ventures">
                <Link href="/ventures">Explore ventures</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-card" data-testid="section-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-values">
              Six values that govern how we work
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-values-intro">
              Each value is a constraint. They describe what we commit to when things are hard, not just when everything is working.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <Card
                key={value.id}
                className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                data-testid={`card-value-${value.id}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-2" data-testid={`heading-value-${value.id}`}>
                    {value.name}
                  </h3>
                  <p className="text-xs font-medium text-primary mb-3 italic" data-testid={`quote-value-${value.id}`}>
                    {value.quote}
                  </p>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed" data-testid={`text-value-${value.id}`}>
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How values show up in decisions */}
      <section className="py-20" data-testid="section-decisions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-decisions">
              How these values show up in decisions
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-decisions-body">
              These values are not wall art. They show up when we decide whether to launch a venture, how we respond to a near miss, and when we choose to shut something down. Intelligence Augmented and Seek the Signal govern how we use AI and data. Engineered Ambition and Own the Engine shape our architecture. Value is a Mirror and Force Multiplier guide who benefits—and who we're building for.
            </p>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-12 bg-card border-t border-border" data-testid="section-cross-links">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" asChild data-testid="link-approach">
              <Link href="/approach">
                See how we work
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="outline" asChild data-testid="link-ventures">
              <Link href="/ventures">
                Explore ventures
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="outline" asChild data-testid="link-standards">
              <Link href="/standards">
                Review standards
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Approach"
        description="See how these values turn into concrete decisions in our six-stage runway from concept to governed systems."
        href="/approach"
      />
    </Layout>
  );
}
