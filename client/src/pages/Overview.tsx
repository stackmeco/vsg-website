import { useEffect } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { ProjectTile } from "@/components/ProjectTile";
import { ValueCard } from "@/components/ValueCard";
import { StageChip } from "@/components/StageChip";
import { NextStepBlock } from "@/components/NextStepBlock";
import { StatBlock } from "@/components/StatBlock";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Eye, Coins, Shield, Search, Compass, ShieldCheck } from "lucide-react";
import { AudioModal } from "@/components/AudioModal";
import gridTexture from "@assets/grid_texture.png";
import { projects, getProjectHref } from "@/data/projects";

const values = [
  {
    title: "Empirical Verification",
    description: "We prioritize raw system telemetry over narrative. Experiments are labeled as experiments; assumptions are labeled as assumptions.",
    icon: <Eye className="w-5 h-5" />,
  },
  {
    title: "Proof of Capital",
    description: "Development is gated by internal solvency. We do not deploy code we are not willing to capitalize with our own balance sheet.",
    icon: <Coins className="w-5 h-5" />,
  },
  {
    title: "Bounded Execution",
    description: "Innovation requires explicit guardrails. Every system has defined failure states, liquidity caps, and safe shutdown sequences.",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    title: "Open Source Intelligence",
    description: "Information asymmetry is a market inefficiency. We publish risk memos and post-mortems to reduce noise and signal-boost truth.",
    icon: <Search className="w-5 h-5" />,
  },
  {
    title: "Horizon Scanning",
    description: "Architecting for the autonomous economy. We build for a future where AI agents require deterministic settlement, not human interfaces.",
    icon: <Compass className="w-5 h-5" />,
  },
  {
    title: "Information Integrity",
    description: "We arm our partners with technical analysis to neutralize hype cycles and preserve decision quality.",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
];

export default function Overview() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = gridTexture;
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
        className="relative min-h-[85vh] flex items-center overflow-hidden border-b border-border" 
        data-testid="section-hero"
      >
        {/* LAYER 1: The Tungsten Base (Fallback) */}
        <div className="absolute inset-0 bg-background" />

        {/* LAYER 2: The "Structure" (Infrastructure Grid) */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `url(${gridTexture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.22,
            filter: "grayscale(100%) contrast(120%)",
          }}
          aria-hidden="true"
        />

        {/* LAYER 3: The "Void" Gradients (Vignette) */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-background from-20% via-background/50 to-background/30 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-background/30 pointer-events-none" aria-hidden="true" />

        {/* LAYER 4: The Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="grid lg:grid-cols-[1fr,320px] gap-12 items-center">
            <div className="max-w-2xl">
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[3.5rem] text-foreground leading-[1.1] tracking-tight mb-6">
                Engineering verifiable systems for intelligence and value.
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                We engineer deterministic systems for <span className="text-foreground font-medium">Value, Intelligence, and Physical Reality</span>. Bitcoin verifies value; Axiom verifies truth. Deployment is gated by internal capital verification.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/pipeline">
                  <Button 
                    size="lg" 
                    className="font-mono text-xs uppercase tracking-wider"
                    data-testid="button-see-pipeline"
                  >
                    View Pipeline
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Button>
                </Link>
                <Link href="/system">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="font-mono text-xs uppercase tracking-wider bg-background/50 backdrop-blur-md border-primary/20"
                    data-testid="button-how-we-work"
                  >
                    Operational Specs
                  </Button>
                </Link>
                <AudioModal />
              </div>

              {/* Project Chips - "Active Cycles" */}
              <div className="flex flex-wrap items-center gap-3 text-sm border-t border-border pt-6">
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Active Cycles:</span>
                <div className="flex flex-wrap gap-2">
                  {["Axiom", "Helios", "Stackme", "Lumina"].map((name) => (
                    <Link key={name} href={`/pipeline/${name.toLowerCase()}`} data-testid={`chip-project-${name.toLowerCase()}`}>
                      <span className="px-2 py-1 rounded-[2px] border border-border bg-card/50 text-muted-foreground hover:text-primary text-[10px] font-mono uppercase tracking-wide transition-colors cursor-pointer hover-elevate">
                        {name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Studio Metrics */}
            <div className="hidden lg:block relative z-20">
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-md p-6 space-y-6">
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
                      subtext="Equity: Undiluted"
                    />
                  </div>
                  <div data-testid="stat-selffunded">
                    <StatBlock
                      value="100%"
                      label="Capitalization"
                      subtext="Proprietary"
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
          <h2 className="font-heading font-semibold text-2xl sm:text-[2rem] text-foreground mb-8">
            The VSG Directive
          </h2>
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

      <section className="py-20 relative" data-testid="section-pipeline">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-heading font-semibold text-2xl sm:text-[2rem] text-foreground mb-4">
              Active Development Cycles
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Five projects in our Pipeline. Axiom is in research; Helios is in internal alpha; Stackme is in architecture. None are currently accepting external capital or users.
            </p>
          </div>
          <div className="border border-border rounded-[2px] bg-card divide-y divide-border">
            {projects.map((project) => (
              <Link 
                key={project.name} 
                href={getProjectHref(project)}
                className="group flex items-center justify-between p-4 hover:bg-primary/5 transition-colors duration-150"
              >
                {/* LEFT: Project Name (The Signal) */}
                <div className="flex items-center gap-3">
                  <span className="font-heading font-semibold text-sm text-foreground tracking-tight group-hover:text-primary transition-colors">
                    {project.name}
                  </span>
                </div>

                {/* RIGHT: Stage + Indicator (The Context) */}
                <div className="flex items-center gap-4">
                  <StageChip stage={project.stage} variant={project.stageVariant} />
                  
                  <ArrowRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-bitcoin">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-2xl sm:text-[2rem] text-foreground mb-6">
              Bitcoin is Reserve, Not Product
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We hold Bitcoin as our primary long-term reserve asset. We utilize conservative, over-collateralized borrowing to fund R&D, treating liquidity as an operational tool rather than a yield product.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This is internal treasury management. We do not offer external yield products or manage third-party capital.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 relative" data-testid="section-values">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-heading font-semibold text-2xl sm:text-[2rem] text-foreground mb-4">
              Operating Principles
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
        description="See how Verifiable Systems operates day to day."
        href="/system"
      />
    </Layout>
  );
}
