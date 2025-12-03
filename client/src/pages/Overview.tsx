import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import gridTexture from "@assets/grid_texture.png";

export default function Overview() {
  return (
    <Layout>
      <PageMeta 
        title="Verifiable Systems Group" 
        description="Verifiable Systems Group is a venture studio that builds verifiable autonomy infrastructure—systems where AI, capital, and identity flows are observable, governed, and non-custodial by design."
        preloadImage={gridTexture}
      />
      
      <section 
        className="relative min-h-[85vh] flex items-center overflow-hidden border-b border-border" 
        data-testid="section-hero"
      >
        <div className="absolute inset-0 bg-background" />
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
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-background from-20% via-background/50 to-background/30 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-background/30 pointer-events-none" aria-hidden="true" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-2xl">
            <p className="text-sm font-mono uppercase tracking-widest text-primary mb-6" data-testid="text-overline">
              Verifiable Systems Group · Venture Studio
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-[1.1] tracking-tight mb-6" data-testid="text-hero-heading">
              The infrastructure of verifiable autonomy.
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl" data-testid="text-hero-body">
              We fuse the speed of intelligence automation with the assurances of modern cryptography to build systems where truth is provable, capital works without leaving your control, and identity is protected by design.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/ventures">
                <Button 
                  size="lg" 
                  className="font-mono text-sm uppercase tracking-wider"
                  data-testid="button-explore-ventures"
                >
                  Explore our ventures
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </Button>
              </Link>
              <Link href="/approach">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="font-mono text-sm uppercase tracking-wider"
                  data-testid="button-how-we-work"
                >
                  How we work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-what-is-vsg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="text-whatis-heading">
              What is Verifiable Systems Group?
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-whatis-body">
              Verifiable Systems Group (VSG) is a venture studio for verifiable systems—where critical behaviours can be inspected instead of hidden inside black boxes. We combine AI, cryptography, and non-custodial rails to build infrastructure that shifts power from centralized gatekeepers to the edge. Our work spans information, capital, and identity, but the mandate is constant: engineer trust as a feature, not a gamble.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-three-ways">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="text-threeways-heading">
              Three ways we work
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical h-full" data-testid="card-way-ventures">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Ventures</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                  We incubate and operate a small, high-conviction portfolio of ventures that prove what verifiable systems can do in production—before we ever recommend an approach to anyone else.
                </p>
                <Link href="/ventures" className="text-sm text-primary hover:underline mt-auto" data-testid="link-way-ventures">
                  View ventures →
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical h-full" data-testid="card-way-approach">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Approach</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                  We apply a disciplined six-stage pipeline—from Define and Validate through Deploy, Evolve, and Recurse—grounded in clear standards, repeatable controls, and an explicit capital strategy.
                </p>
                <Link href="/approach" className="text-sm text-primary hover:underline mt-auto" data-testid="link-way-approach">
                  See how we work →
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical h-full" data-testid="card-way-studio">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Studio</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                  We work with a small number of aligned teams to architect verifiable systems, clarify mandates, and embed governance so the infrastructure can withstand both scale and scrutiny.
                </p>
                <Link href="/studio" className="text-sm text-primary hover:underline mt-auto" data-testid="link-way-studio">
                  Meet the studio →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-where-focus">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="text-focus-heading">
              Where we focus
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div data-testid="focus-signal">
              <h3 className="font-heading font-semibold text-foreground mb-2">Signal</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Verified intelligence and information flows. We design systems that force AI and data pipelines to be source-backed, inspectable, and resistant to synthetic noise.
              </p>
            </div>
            <div data-testid="focus-value">
              <h3 className="font-heading font-semibold text-foreground mb-2">Value</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Non-custodial capital and risk infrastructure. We build rails—proven first on our own balance sheet—where assets can work without leaving governed environments, and where risk limits are encoded instead of implied.
              </p>
            </div>
            <div data-testid="focus-human">
              <h3 className="font-heading font-semibold text-foreground mb-2">Human</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Identity and uniqueness without surveillance. We explore architectures like the Uniqueness Engine to prove that a person or asset is "one-of-one" without exposing who they are or how they live.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-current-ventures">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="text-ventures-heading">
              Current ventures
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical h-full" data-testid="card-venture-helios">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Helios</h3>
                <p className="text-sm text-primary italic mb-3">An internal execution engine for VSG's own digital asset treasury.</p>
                <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                  <li className="flex items-start gap-2" data-testid="text-helios-bullet-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Optimizes VSG's treasury across approved venues under strict, pre-defined risk limits.
                  </li>
                  <li className="flex items-start gap-2" data-testid="text-helios-bullet-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Uses governed automation with human oversight to respond to market volatility without acting as a broker, exchange, or fund manager for others.
                  </li>
                  <li className="flex items-start gap-2" data-testid="text-helios-bullet-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Designed to be auditable and policy-driven, not discretionary or opaque.
                  </li>
                </ul>
                <Link href="/ventures/helios" className="text-sm text-primary hover:underline mt-auto" data-testid="link-venture-helios">
                  Learn more →
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical h-full" data-testid="card-venture-lumina">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Lumina</h3>
                <p className="text-sm text-primary italic mb-3">Physics-aware grading infrastructure for the trading card ecosystem.</p>
                <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                  <li className="flex items-start gap-2" data-testid="text-lumina-bullet-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Turns raw card condition into instant, consistent pre-grading signals using mobile sensors and anomaly detection.
                  </li>
                  <li className="flex items-start gap-2" data-testid="text-lumina-bullet-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Helps collectors, marketplaces, and graders make better decisions before they ship or slab assets.
                  </li>
                  <li className="flex items-start gap-2" data-testid="text-lumina-bullet-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Built as software-first infrastructure, not hardware-locked kiosks.
                  </li>
                </ul>
                <Link href="/ventures/lumina" className="text-sm text-primary hover:underline mt-auto" data-testid="link-venture-lumina">
                  Learn more →
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical h-full" data-testid="card-venture-uniqueness">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Uniqueness Engine (VSP)</h3>
                <p className="text-sm text-primary italic mb-3">Digital scarcity infrastructure for the AI age.</p>
                <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                  <li className="flex items-start gap-2" data-testid="text-uniqueness-bullet-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Architects a "Global Uniqueness Layer" so critical events—like financing an asset—can be proven to have happened once without exposing underlying data.
                  </li>
                  <li className="flex items-start gap-2" data-testid="text-uniqueness-bullet-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Uses privacy-preserving cryptography to help institutions coordinate against fraud without pooling customer information.
                  </li>
                  <li className="flex items-start gap-2" data-testid="text-uniqueness-bullet-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Focuses first on high-impact domains: credit, democracy, and identity.
                  </li>
                </ul>
                <Link href="/ventures/uniqueness" className="text-sm text-primary hover:underline mt-auto" data-testid="link-venture-uniqueness">
                  Learn more →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-who-work-with">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="text-who-heading">
              Who we work with
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-who-intro">
              We partner with teams that need verifiable systems more than they need another dashboard.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3" data-testid="text-who-bullet-0">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Institutions and startups facing high stakes around capital, identity, or AI-driven decisions.
                </span>
              </li>
              <li className="flex items-start gap-3" data-testid="text-who-bullet-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Builders exploring non-custodial rails who need clear risk, governance, and regulatory narratives—not just code.
                </span>
              </li>
              <li className="flex items-start gap-3" data-testid="text-who-bullet-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Operators and policymakers who want to understand what verifiable infrastructure makes possible before it becomes mandatory.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-talk-studio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="text-talk-heading">
              Talk to the studio
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-talk-body">
              If you're building, regulating, or operating in any domain where verification, autonomy, and long-term resilience matter, we'd like to hear from you.
            </p>
            <Link href="/connect">
              <Button 
                size="lg" 
                className="font-mono text-sm uppercase tracking-wider"
                data-testid="button-start-conversation"
              >
                Start a conversation
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
