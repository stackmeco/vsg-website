import { useEffect } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { ProjectTile } from "@/components/ProjectTile";
import { ValueCard } from "@/components/ValueCard";
import { NextStepBlock } from "@/components/NextStepBlock";
import { StatBlock } from "@/components/StatBlock";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Eye, Coins, Layers, BookOpen, Compass } from "lucide-react";
import heroImage from "@assets/generated_images/abstract_data_flow_hero.png";
import { projects } from "@/data/projects";

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
        description="Engineering verifiable infrastructure for intelligence and value. Bitcoin verifies value; our AI verifies truth. A two-founder studio building deterministic systems." 
      />
      <section
        className="relative min-h-[90vh] flex items-center"
        data-testid="section-hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          role="img"
          aria-label="Abstract data flow visualization"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background from-40% via-background/90 via-60% to-background/50" />
          <div className="absolute inset-0 dot-grid opacity-60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="grid lg:grid-cols-[1fr,320px] gap-12 items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-mono uppercase tracking-wider text-primary mb-6">
                Two-founder studio
              </p>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[3.5rem] text-foreground leading-[1.1] tracking-tight mb-6">
                Engineering verifiable systems for intelligence and value.
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                We engineer deterministic systems for Value and Intelligence — with our own capital on the line. Bitcoin verifies value; our AI verifies truth. Nothing launches until we'd trust it with our own balance sheet.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/pipeline">
                  <Button 
                    size="lg" 
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
                    className="backdrop-blur-md bg-background/40"
                    data-testid="button-how-we-work"
                  >
                    How we work
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="text-foreground/60 font-mono">5 projects in flight:</span>
                <div className="flex flex-wrap gap-2">
                  {["Axiom", "Helios", "stackme", "Lumina", "Uniqueness Engine"].map((name) => (
                    <Link key={name} href={`/pipeline/${name.toLowerCase().replace(" ", "-")}`}>
                      <span className="px-2.5 py-1 rounded-md bg-secondary/80 text-foreground/90 text-xs font-mono hover:bg-secondary transition-colors cursor-pointer">
                        {name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 space-y-6">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Studio metrics
                </p>
                <div className="space-y-6">
                  <div data-testid="stat-projects">
                    <StatBlock
                      value="5"
                      label="Active projects"
                      subtext="In R&D pipeline"
                      variant="primary"
                    />
                  </div>
                  <div data-testid="stat-founders">
                    <StatBlock
                      value="2"
                      label="Founders"
                      subtext="Full ownership"
                    />
                  </div>
                  <div data-testid="stat-selffunded">
                    <StatBlock
                      value="100%"
                      label="Self-funded"
                      subtext="BTC treasury backed"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-directive">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-8">
            The VSG Directive
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <p className="text-xs font-mono uppercase tracking-wider text-primary mb-1">
                  Purpose
                </p>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Engineering Verifiable Systems</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To engineer verifiable systems at the frontier of AI and Digital Assets. We enable the use of new forms of value without compromising ownership or control—reclaiming human attention for higher-value work.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <p className="text-xs font-mono uppercase tracking-wider text-primary mb-1">
                  Vision
                </p>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Compounding Productivity</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A future where digital assets possess the clarity and durability of hard currency. We build for a reality where ownership is absolute, risks are visible, and systems compound human productivity rather than extract from it.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <p className="text-xs font-mono uppercase tracking-wider text-primary mb-1">
                  Mission
                </p>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Verification via Capital</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To navigate the frontier of AI and digital assets with our own capital as the first customer. We learn in the open and graduate only the systems we have verified with our own balance sheet.
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
              Five projects in our Pipeline. Axiom is in prototype; Helios and stackme have technical architecture. None are live products yet.
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
        description="See how Verified Systems operates day to day."
        href="/system"
      />
    </Layout>
  );
}
