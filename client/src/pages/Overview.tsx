import { useEffect } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { StageChip } from "@/components/StageChip";
import { NextStepBlock } from "@/components/NextStepBlock";
import { StatBlock } from "@/components/StatBlock";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Eye, Shield, Cog, Users, Scale } from "lucide-react";
import { AudioModal } from "@/components/AudioModal";
import gridTexture from "@assets/grid_texture.png";
import { projects, getProjectHref } from "@/data/projects";

const principles = [
  {
    title: "Intelligence Augmented (IA)",
    quote: "Let the machine compute. Let the human connect.",
    body: "We use AI to amplify human capability. By offloading high-velocity data processing to our Helios engine, we free our team to focus on the things machines cannot do: strategy, empathy, and judgment.",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    title: "Seek the Signal",
    quote: "Verify, then trust.",
    body: "We recognize that narratives are often engineered to obscure reality. We don't rely on blind faith or centralized perception; we engineer clarity through cryptographic proof.",
    icon: <Eye className="w-5 h-5" />,
  },
  {
    title: "Engineered Ambition",
    quote: "Dream in decades, execute in milliseconds.",
    body: "We are building generational technology—from automated capital engines to optical surface scanning—with extreme precision. We embrace big risks by managing them with rigorous, automated safety rails.",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    title: "Own the Engine",
    quote: "Master the mechanics to rewrite the rules.",
    body: "We are a team of architects, not passengers. We require deep financial fluency and a first-principles understanding of how value is created, stored, and protected within our treasury.",
    icon: <Cog className="w-5 h-5" />,
  },
  {
    title: "Value is a Mirror",
    quote: "Serve first, succeed second.",
    body: "We succeed only when our users thrive. We build non-custodial tools that restore power to the user—providing liquidity without selling assets—knowing that true value flows from service, not extraction.",
    icon: <Users className="w-5 h-5" />,
  },
  {
    title: "Force Multiplier",
    quote: "Level the playing field.",
    body: "Structural asymmetries favor the incumbent. We build leverage for the underdog. We arm individuals with the tools to bypass gatekeepers and access the capabilities usually reserved for massive institutions.",
    icon: <Scale className="w-5 h-5" />,
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
        description="The Infrastructure of Autonomy. We are an innovation engine fusing the speed of AI with the security of Blockchain to verify truth, preserve wealth, and protect identity." 
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
              <p className="text-xs font-mono uppercase tracking-widest text-primary mb-6">
                Two-founder studio
              </p>
              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-[1.1] tracking-tight mb-6">
                The Infrastructure of Autonomy.
              </h1>
              
              <p className="text-base text-foreground/80 leading-relaxed mb-8 max-w-xl">
                We are an innovation engine fusing the speed of AI with the security of Blockchain. 
                We build the tools that verify truth, preserve wealth, and protect identity.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/ventures">
                  <Button 
                    size="lg" 
                    className="font-mono text-xs uppercase tracking-wider"
                    data-testid="button-see-ventures"
                  >
                    See the Pipeline
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Button>
                </Link>
                <AudioModal />
              </div>

              {/* Project Chips - "Active Ventures" */}
              <div className="flex flex-wrap items-center gap-3 border-t border-border pt-6">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Active Ventures:</span>
                <div className="flex flex-wrap gap-2">
                  {["Axiom", "Helios", "Stackme", "Lumina"].map((name) => (
                    <Link key={name} href={`/ventures/${name.toLowerCase()}`} data-testid={`chip-project-${name.toLowerCase()}`}>
                      <span className="px-2.5 py-1 rounded-[2px] border border-border bg-secondary text-muted-foreground hover:text-primary hover:border-primary/30 text-xs font-mono uppercase tracking-widest transition-colors cursor-pointer">
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
          <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-8">
            The VSG Directive
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-background border-border h-full">
              <CardContent className="p-8 flex flex-col justify-center h-full">
                <p className="text-xs font-mono uppercase tracking-wider text-primary mb-2">Purpose</p>
                <h3 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  Democratize Leverage
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  To democratize institutional-grade leverage. We build tools that give individuals the same financial power as banks, without the intermediaries.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border h-full">
              <CardContent className="p-8 flex flex-col justify-center h-full">
                <p className="text-xs font-mono uppercase tracking-wider text-primary mb-2">Vision</p>
                <h3 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  Engineered Trust
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  A future where "Trust" is an engineered feature, not a gamble. We replace blind faith with cryptographic proof and open code.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border md:col-span-2">
              <CardContent className="p-8 md:p-10">
                <div className="max-w-3xl">
                  <p className="text-xs font-mono uppercase tracking-wider text-primary mb-2">The Mission</p>
                  <h3 className="font-heading font-semibold text-2xl text-foreground mb-6">
                    Verifiable Autonomy
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    We engineer the infrastructure of autonomy across three critical pillars, ensuring that every system we build is transparent, solvent, and secure.
                  </p>
                  
                  <div className="grid sm:grid-cols-3 gap-8 pt-4 border-t border-border/50">
                    <div>
                      <h4 className="text-foreground font-semibold mb-2">Validate Signal</h4>
                      <p className="text-sm text-muted-foreground">Forcing AI to be deterministic and source-backed (Axiom).</p>
                    </div>
                    <div>
                      <h4 className="text-foreground font-semibold mb-2">Preserve Value</h4>
                      <p className="text-sm text-muted-foreground">Merging DeFi safety with HFT speed (Stackme & Helios).</p>
                    </div>
                    <div>
                      <h4 className="text-foreground font-semibold mb-2">Protect Identity</h4>
                      <p className="text-sm text-muted-foreground">Proving personhood without surveillance (Uniqueness Engine).</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 relative" data-testid="section-ventures">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
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
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
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
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Operating principles
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              How We Work
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle) => (
              <Card 
                key={principle.title} 
                className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                data-testid={`principle-card-${principle.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <CardContent className="p-8">
                  <div className="w-10 h-10 rounded-[2px] bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {principle.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-base text-primary italic mb-3">
                    "{principle.quote}"
                  </p>
                  <p className="text-base text-foreground leading-relaxed">
                    {principle.body}
                  </p>
                </CardContent>
              </Card>
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
