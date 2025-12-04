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
        description="Verifiable Systems Group is an AI-native, cryptography-grounded venture studio. We build verifiable systems for capital, identity, and intelligence, running every serious pattern on our own balance sheet first across Truth, Capital, and Dignity."
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
              AI-native venture studio for verifiable systems.
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-[1.1] tracking-tight mb-6" data-testid="text-hero-heading">
              We engineer the infrastructure of verifiable autonomy.
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl" data-testid="text-hero-body">
              You shouldn't have to surrender control for leverage. Verifiable Systems Group is an AI-native, cryptography-grounded venture studio that builds verifiable systems for capital, identity, and intelligence. We run every serious pattern on our own balance sheet first across Truth, Capital, and Dignity.
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

      <section className="py-20 bg-card" data-testid="section-domains">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="text-domains-heading">
              Our three domains
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background border-border h-full" data-testid="domain-truth">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-3">Truth — Evidence you can inspect.</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Truth means decisions stop resting on stories and start resting on evidence. We anchor grades, approvals, and AI outputs to provenance and tamper-evident logs so you can see why something happened—not guess. Lumina and Axiom prove it.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-border h-full" data-testid="domain-capital">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-3">Capital — Leverage without surrender.</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Capital should work without leaving your control. In our Capital domain, we design non-custodial engines that route assets under explicit, stress-tested limits—always on our own balance sheet first. Helios proves it.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-border h-full" data-testid="domain-dignity">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-3">Dignity — Personhood without exposure.</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Dignity means you stay a person, not a product. We prove uniqueness and eligibility with privacy-preserving proofs so you can move through systems without handing over your life story. Uniqueness Engine proves it.
                </p>
              </CardContent>
            </Card>
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

      <section className="py-20 bg-card" data-testid="section-who-serve">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="text-who-heading">
              Who we serve
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-background border-border h-full" data-testid="audience-individuals">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-2">High-agency individuals with scar tissue</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  People who have lost money, time, or privacy to opaque systems and now care about control, verifiability, and survivability.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-border h-full" data-testid="audience-stewards">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-2">Institutional stewards</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  CIOs, partners, and risk or compliance leads who must defend decisions and need clear mechanisms, limits, and governance.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-border h-full" data-testid="audience-collaborators">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-2">Technical collaborators</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Engineers, protocol teams, and security practitioners who care about mechanics, stress paths, and constraints—not buzzwords.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-border h-full" data-testid="audience-policy">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-2">Policy and regulator-adjacent readers</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  People evaluating whether we are a responsible actor: non-custodial by design, conservative, and explicit about risk.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-bridge">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-bridge-body">
              Across Truth, Capital, and Dignity, we build and run ventures on our own balance sheet first so you don't have to take our word for it. You can inspect how the rails behave, how risk is constrained, and how personhood is protected—then decide what to trust.
            </p>
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
