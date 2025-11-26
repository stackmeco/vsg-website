import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { ProjectTile } from "@/components/ProjectTile";
import { ValueCard } from "@/components/ValueCard";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Eye, Coins, Layers, BookOpen, Compass } from "lucide-react";
import heroImage from "@assets/generated_images/abstract_data_flow_hero.png";

const projects = [
  {
    name: "Helios",
    stage: "Early Development",
    stageVariant: "development" as const,
    description: "Internal BTC-backed strategy engine. We're designing Helios to automate a small portion of our borrowing into clearly bounded, rule-driven DeFi positions.",
    exploring: ["Yield strategies with strict limits", "Multi-venue execution", "Risk monitoring"],
    href: "/pipeline/helios",
  },
  {
    name: "stackme",
    stage: "Early Development",
    stageVariant: "development" as const,
    description: "A borrower-first concept for BTC-backed credit. Architecture and flows are being designed around clarity, conservative leverage, and plain-language risk.",
    exploring: ["User-friendly risk display", "Conservative LTV ladders", "Clear liquidation paths"],
    href: "/pipeline/stackme",
  },
  {
    name: "Lumina",
    stage: "Requirements",
    stageVariant: "requirements" as const,
    description: "Trading cards for real-world assets, with quality and scarcity encoded on-chain. Requirements are defined; we're exploring system design and grading pipelines.",
    exploring: ["Asset grading systems", "On-chain provenance", "Scarcity mechanics"],
    href: "/pipeline/lumina",
  },
  {
    name: "Uniqueness Engine",
    stage: "Research",
    stageVariant: "research" as const,
    description: "Early work on 'one-per-person' style signals that could help systems stay fair without sliding into surveillance.",
    exploring: ["Privacy-preserving signals", "Sybil resistance patterns", "Identity minimization"],
    href: "/pipeline/uniqueness-engine",
  },
];

const values = [
  {
    title: "Transparency over theater",
    description: "Messy truths over polished stories. We label things clearly: idea, exploration, prototype, internal only, or ready.",
    icon: <Eye className="w-5 h-5" />,
  },
  {
    title: "Capital first, narrative second",
    description: "Our own balance sheet is the first test. If we wouldn't run our own money through it, it doesn't graduate.",
    icon: <Coins className="w-5 h-5" />,
  },
  {
    title: "Small, sharp systems",
    description: "One small, understandable tool is better than a sprawling, half-finished platform.",
    icon: <Layers className="w-5 h-5" />,
  },
  {
    title: "Education as self-defense",
    description: "We publish what we learn so others can see through hype and understand the real trade-offs.",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    title: "Next-frontier mindset",
    description: "We care about what's coming next — AI agents, new asset forms, digital scarcity — but we describe them in today's terms.",
    icon: <Compass className="w-5 h-5" />,
  },
];

export default function Overview() {
  return (
    <Layout>
      <section
        className="relative min-h-[85vh] flex items-center"
        data-testid="section-hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-mono uppercase tracking-wider text-primary mb-4">
                AI, Bitcoin & digital scarcity
              </p>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[3.4rem] text-foreground leading-tight tracking-tight mb-6">
                We explore the edge of AI and digital assets — with our own capital on the line.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Verified Systems (VSG) is a two-founder studio working at the intersection of AI, Bitcoin, and digital scarcity. We run a Bitcoin treasury, borrow against it carefully, and use that fuel to design systems we'd trust with our own balance sheet.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/system">
                  <Button size="lg" data-testid="button-how-we-work">
                    How we work
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/library">
                  <Button variant="outline" size="lg" data-testid="button-read-thesis">
                    Read our thesis
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <Card className="bg-card/80 backdrop-blur-sm border-card-border">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <span className="font-mono text-sm text-foreground">AI</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full bg-accent" />
                      <span className="font-mono text-sm text-foreground">Bitcoin</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full bg-muted-foreground" />
                      <span className="font-mono text-sm text-foreground">Digital Scarcity</span>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="bg-secondary rounded-lg p-4 text-center">
                        <span className="font-heading font-semibold text-foreground">Studio</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-why">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-8">
            Why this exists
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <h3 className="text-sm font-mono uppercase tracking-wider text-primary mb-3">
                  Purpose
                </h3>
                <p className="text-foreground leading-relaxed">
                  To explore and build honest systems at the edge of AI, digital assets, and digital scarcity, so people can use new forms of value without losing ownership, clarity, or control.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <h3 className="text-sm font-mono uppercase tracking-wider text-primary mb-3">
                  Vision
                </h3>
                <p className="text-foreground leading-relaxed">
                  A world where people and AI agents can hold and use digital assets with the same clarity and durability as good money: ownership is real, risks are visible, and systems don't quietly erode what you've built.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <h3 className="text-sm font-mono uppercase tracking-wider text-primary mb-3">
                  Mission
                </h3>
                <p className="text-foreground leading-relaxed">
                  To explore the edge of AI and digital assets with our own capital on the line, learn out loud, and graduate only the systems we'd trust with our own balance sheet into Ventures.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-workbench">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
              What we're working on right now
            </p>
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
              What's on the workbench
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We're a lean studio with four projects in our Pipeline. All have requirements; Helios and stackme also have technical architecture. None are live products yet.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectTile key={project.name} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-bitcoin">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
              Bitcoin is our fuel, not our marketing
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We hold Bitcoin as our primary long-term asset. When it makes sense, we borrow stablecoins against it and use those funds for two things: building our Pipeline and sometimes accumulating more BTC.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We don't run a public yield product; this is how we fund our own work.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
              How we try to behave
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="System"
        description="See how Verified Systems actually works day to day."
        href="/system"
      />
    </Layout>
  );
}
