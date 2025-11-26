import { useEffect } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
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
    description: "Internal BTC-backed strategy engine. Helios automates a portion of our borrowing into bounded, rule-driven DeFi positions with real-time monitoring.",
    exploring: ["Yield strategies with strict limits", "Multi-venue execution", "Risk monitoring"],
    href: "/pipeline/helios",
  },
  {
    name: "stackme",
    stage: "Early Development",
    stageVariant: "development" as const,
    description: "A borrower-first BTC credit app. Architecture and flows center on clarity, conservative leverage, and plain-language risk disclosure.",
    exploring: ["User-friendly risk display", "Conservative LTV ladders", "Clear liquidation paths"],
    href: "/pipeline/stackme",
  },
  {
    name: "Lumina",
    stage: "Requirements",
    stageVariant: "requirements" as const,
    description: "Trading cards for real-world assets, with quality and scarcity encoded on-chain. Requirements defined; system design and grading pipelines in progress.",
    exploring: ["Asset grading systems", "On-chain provenance", "Scarcity mechanics"],
    href: "/pipeline/lumina",
  },
  {
    name: "Uniqueness Engine",
    stage: "Research",
    stageVariant: "research" as const,
    description: "Research into 'one-per-person' signals that help systems stay fair without sliding into surveillance.",
    exploring: ["Privacy-preserving signals", "Sybil resistance patterns", "Identity minimization"],
    href: "/pipeline/uniqueness-engine",
  },
];

const values = [
  {
    title: "Transparency over theater",
    description: "Messy truths over polished stories. We label things clearly: idea, prototype, internal only, or ready.",
    icon: <Eye className="w-5 h-5" />,
  },
  {
    title: "Capital first, narrative second",
    description: "Our balance sheet is the first test. If we wouldn't run our own money through it, it doesn't graduate.",
    icon: <Coins className="w-5 h-5" />,
  },
  {
    title: "Small, sharp systems",
    description: "One small, understandable tool beats a sprawling, half-finished platform.",
    icon: <Layers className="w-5 h-5" />,
  },
  {
    title: "Education as self-defense",
    description: "We publish what we learn so others can see through hype and understand real trade-offs.",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    title: "Next-frontier mindset",
    description: "We care about what's coming — AI agents, new asset forms, digital scarcity — described in today's terms.",
    icon: <Compass className="w-5 h-5" />,
  },
];

export default function Overview() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = heroImage;
    link.setAttribute("fetchpriority", "high");
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <Layout>
      <PageMeta 
        title="Overview" 
        description="Verified Systems is a two-founder studio exploring AI, Bitcoin, and digital scarcity. We build honest systems for an AI-powered economy, funded by our own BTC treasury." 
      />
      <section
        className="relative min-h-[90vh] flex items-center"
        data-testid="section-hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background from-40% via-background/90 via-60% to-background/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-mono uppercase tracking-wider text-primary mb-6">
              Two-founder studio
            </p>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[3.5rem] text-foreground leading-[1.1] tracking-tight mb-6">
              Honest systems for an AI-powered economy.
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              We explore AI, Bitcoin, and digital scarcity — with our own capital on the line. BTC treasury funds the work. Nothing launches until we'd trust it with our own balance sheet.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link href="/pipeline">
                <Button 
                  size="lg" 
                  className="backdrop-blur-sm bg-primary/90 border border-primary/50 shadow-lg"
                  data-testid="button-see-pipeline"
                >
                  See the Pipeline
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/system">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="backdrop-blur-md bg-background/30 border-foreground/20"
                  data-testid="button-how-we-work"
                >
                  How we work
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="text-foreground/60 font-mono">4 projects in flight:</span>
              <div className="flex flex-wrap gap-2">
                {["Helios", "stackme", "Lumina", "Uniqueness Engine"].map((name) => (
                  <Link key={name} href={`/pipeline/${name.toLowerCase().replace(" ", "-")}`}>
                    <span className="px-2.5 py-1 rounded-md bg-secondary/80 text-foreground/90 text-xs font-mono hover:bg-secondary transition-colors cursor-pointer">
                      {name}
                    </span>
                  </Link>
                ))}
              </div>
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
                  To explore the edge of AI and digital assets with our own capital on the line, learn out loud, and ship only the systems we'd trust with our own balance sheet.
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
              Current work
            </p>
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
              What's on the workbench
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Four projects in our Pipeline. All have requirements; Helios and stackme have technical architecture. None are live products yet.
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
              How we operate
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
