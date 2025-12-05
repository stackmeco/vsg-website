import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import gridTexture from "@assets/grid_texture.png";

const domains = [
  {
    title: "Truth",
    body: "Does this system rest on evidence solid enough to depend on? Truth is about making key decisions inspectable instead of opaque.",
  },
  {
    title: "Capital",
    body: "Can capital move through this system without hidden downside? Capital is about making assets work without handing over the keys.",
  },
  {
    title: "Dignity",
    body: "Does this system protect people's personhood and time? Dignity is about proving presence and rights without forcing exposure.",
  },
];

const ventures = [
  {
    overline: "Helios · Capital",
    title: "Resilient capital engine.",
    body: "Routes VSG's own digital asset treasury under explicit limits so capital can work without surrendering control.",
    href: "/ventures/helios",
    testId: "helios",
  },
  {
    overline: "Lumina · Truth",
    title: "Physics-aware grading.",
    body: "Turns card condition into evidence-backed grading signals so decisions rest on measurable inputs, not guesswork.",
    href: "/ventures/lumina",
    testId: "lumina",
  },
  {
    overline: "Uniqueness Engine · Dignity",
    title: "Personhood without exposure.",
    body: "Proves one person is present without forcing them to hand over their life story, raising the cost of bots and duplicates.",
    href: "/ventures/uniqueness",
    testId: "uniqueness",
  },
];

const approachBullets = [
  "Start with boundary conditions and reasons not to build.",
  "Test assumptions in controlled experiments before scaling exposure.",
  "Treat every incident as a lesson fed back into our standards.",
];

export default function Overview() {
  return (
    <Layout>
      <PageMeta 
        title="Verifiable Systems Group — Infrastructure for Verifiable Autonomy" 
        description="AI-native, cryptography-grounded venture studio building systems for capital, identity, and intelligence—run on our own balance sheet first across Truth, Capital, and Dignity."
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
              Verifiable Systems Group
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-[1.1] tracking-tight mb-6" data-testid="text-hero-heading">
              Infrastructure for verifiable autonomy.
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl" data-testid="text-hero-body">
              You shouldn't have to surrender control for leverage. Verifiable Systems Group is an AI-native, cryptography-grounded venture studio that builds systems for capital, identity, and intelligence—run on our own balance sheet first across Truth, Capital, and Dignity.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/ventures">
                <Button 
                  size="lg" 
                  className="font-mono text-sm uppercase tracking-wider"
                  data-testid="button-explore-ventures"
                >
                  Explore our ventures
                  <ArrowRight className="w-3.5 h-3.5 ml-2" aria-hidden="true" />
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

      <section className="py-20 bg-card" data-testid="section-domains">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-domains">
              Three domains, one studio
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-domains-intro">
              Every venture we run is anchored in one of three domains—Truth, Capital, or Dignity. Together they describe what must hold, what must survive, and who must be protected.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {domains.map((domain) => {
              const slugTitle = domain.title.toLowerCase();
              return (
                <Card key={domain.title} className="bg-background border-border h-full" data-testid={`card-domain-${slugTitle}`}>
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-foreground mb-3" data-testid={`heading-domain-${slugTitle}`}>
                      {domain.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-domain-${slugTitle}`}>
                      {domain.body}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-ventures">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-ventures">
              Where we prove the rails
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-ventures-intro">
              We do not stop at slideware. Helios, Lumina, and Uniqueness Engine are where we run our ideas under real conditions, using our own balance sheet first.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ventures.map((venture) => (
              <Card 
                key={venture.testId} 
                className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical h-full" 
                data-testid={`card-venture-${venture.testId}`}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-2" data-testid={`text-${venture.testId}-overline`}>
                    {venture.overline}
                  </p>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-3" data-testid={`heading-${venture.testId}`}>
                    {venture.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4" data-testid={`text-${venture.testId}-body`}>
                    {venture.body}
                  </p>
                  <Link href={venture.href} className="text-sm text-primary hover:underline mt-auto" data-testid={`link-venture-${venture.testId}`}>
                    Learn more →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-approach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-approach">
              How we design and prove systems
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-approach-body">
              Before we call anything real, it moves through a six-stage path: Define, Validate, Build, Deploy, Evolve, and Learn. Each stage is designed to surface risk early, keep capital within guardrails, and make sure lessons compound instead of resetting.
            </p>
            <ul className="space-y-3 mb-8">
              {approachBullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3" data-testid={`list-approach-${index}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">{bullet}</span>
                </li>
              ))}
            </ul>
            <Link href="/process">
              <Button variant="outline" data-testid="button-six-stages">
                See the six stages
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-governance">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-governance">
              Governance baked in
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-governance-body">
              We treat serious launches as governed experiments, not one-off bets. That means defined scope, explicit limits, named stewards, and observability from day one.
            </p>
            <Link href="/standards">
              <Button variant="outline" data-testid="button-standards">
                Review our standards
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-insights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-insights">
              From post-mortems to patterns
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-insights-body">
              When something breaks—or works better than expected—we document it. Insights are where we turn incidents, experiments, and observations into patterns we can reuse and improve.
            </p>
            <Link href="/insights">
              <Button variant="outline" data-testid="button-insights">
                Read insights
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-talk-studio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-talk-studio">
              Talk to the studio
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-talk-studio-body">
              If you're building, regulating, or operating in any domain where verification, autonomy, and long-term resilience matter, we'd like to hear from you.
            </p>
            <Link href="/connect">
              <Button 
                size="lg" 
                className="font-mono text-sm uppercase tracking-wider"
                data-testid="button-start-conversation"
              >
                Start a conversation
                <ArrowRight className="w-3.5 h-3.5 ml-2" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
