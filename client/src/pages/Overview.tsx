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
    title: "Don't Trust, Verify",
    description: "We validate every assumption against market reality. If a system cannot survive the wild, we do not deploy it.",
    icon: <Eye className="w-5 h-5" />,
  },
  {
    title: "Backed by Value",
    description: "We reject empty hype. Every project is anchored by real resources and internal funding.",
    icon: <Coins className="w-5 h-5" />,
  },
  {
    title: "Bounded Execution",
    description: "Innovation requires constraints. We code strict limits into our software to prevent systemic failures.",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    title: "Open Intelligence",
    description: "A transparent market is a resilient market. We publish our research to help partners navigate the noise.",
    icon: <Search className="w-5 h-5" />,
  },
  {
    title: "Future Proof",
    description: "We architect for the next decade of autonomous agents, not just the manual tools of today.",
    icon: <Compass className="w-5 h-5" />,
  },
  {
    title: "Signal Integrity",
    description: "We protect our partners by focusing on technical reality rather than narrative cycles.",
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
        title="Mission" 
        description="The Trust Layer for AI and Finance. We engineer infrastructure that ensures Artificial Intelligence is accurate and digital assets are secure." 
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
            opacity: 0.12,
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
              <h1 className="font-heading font-bold text-3xl sm:text-4xl text-foreground leading-[1.1] tracking-tight mb-6">
                The Trust Layer for AI and Finance.
              </h1>
              
              <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-xl">
                We engineer infrastructure that ensures <span className="text-foreground font-medium">Artificial Intelligence is accurate</span> and <span className="text-foreground font-medium">digital assets are secure</span>. Every system is backed by our own capital—aligning our risk with yours.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/ventures">
                  <Button 
                    size="lg" 
                    className="font-mono text-xs uppercase tracking-wider"
                    data-testid="button-see-ventures"
                  >
                    See Our Ventures
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Button>
                </Link>
                <AudioModal />
              </div>

              {/* Project Chips - "Active Ventures" */}
              <div className="flex flex-wrap items-center gap-3 border-t border-border pt-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Active Ventures:</span>
                <div className="flex flex-wrap gap-2">
                  {["Axiom", "Helios", "Stackme", "Lumina"].map((name) => (
                    <Link key={name} href={`/ventures/${name.toLowerCase()}`} data-testid={`chip-project-${name.toLowerCase()}`}>
                      <span className="px-2.5 py-1 rounded-[2px] border border-border bg-secondary text-muted-foreground hover:text-primary hover:border-primary/30 text-[10px] font-mono uppercase tracking-widest transition-colors cursor-pointer">
                        {name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Studio Metrics */}
            <div className="hidden lg:block relative z-20">
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-[2px] p-6 space-y-6">
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
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
            Core objectives
          </p>
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-8">
            Why We Exist
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical">
              <CardContent className="p-6">
                <p className="text-[10px] font-mono uppercase tracking-widest text-primary mb-1">
                  Problem
                </p>
                <h3 className="font-heading font-semibold text-base text-foreground mb-3">Eroding Trust</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Digital markets are flooded with hallucinated data and unstable assets. In this environment, verifiable truth is the only scarce resource.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical">
              <CardContent className="p-6">
                <p className="text-[10px] font-mono uppercase tracking-widest text-primary mb-1">
                  Solution
                </p>
                <h3 className="font-heading font-semibold text-base text-foreground mb-3">Cryptographic Verification</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We replace human trust with mathematical proof. Our systems verify their own solvency, data lineage, and asset ownership.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical">
              <CardContent className="p-6">
                <p className="text-[10px] font-mono uppercase tracking-widest text-primary mb-1">
                  Method
                </p>
                <h3 className="font-heading font-semibold text-base text-foreground mb-3">Proof of Capital</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We do not rely on theory. We deploy our own Bitcoin treasury to validate our systems before opening them to external partners.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 relative" data-testid="section-ventures">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Venture portfolio
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              Active Ventures
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Five projects moving through our development process. Each venture is self-funded and stress-tested with our own capital before external deployment.
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
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Capital foundation
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6">
              Powered by Bitcoin
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Bitcoin serves as our reserve asset. Rather than liquidating capital to fund operations, we utilize responsible, over-collateralized borrowing. This sustains our long-term balance sheet while funding continuous innovation.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              We deploy our own capital first—aligning our incentives with every system we build.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 relative" data-testid="section-values">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
              System axioms
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              Our Principles
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
        nextPage="Process"
        description="Learn how we operate as a venture studio."
        href="/process"
      />
    </Layout>
  );
}
