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
    body: "Truth means decisions rest on evidence, not stories. We anchor key behaviours to provenance and tamper-evident logs so you can see how outcomes were formed instead of guessing.",
  },
  {
    title: "Capital",
    body: "Capital should be able to work without leaving governed control. In Capital, we run our own treasury through non-custodial rails with explicit limits, observability, and rollback paths.",
  },
  {
    title: "Dignity",
    body: "Dignity means people keep control over how they appear in systems. We enable proof of presence and eligibility without turning people into products in someone else's database.",
  },
];

const ventures = [
  {
    overline: "Capital",
    title: "Helios — resilient capital engine.",
    body: "Helios is the internal execution engine we use to route our own digital asset treasury under explicit limits, so capital can work without surrendering control.",
    href: "/ventures/helios",
    testId: "helios",
  },
  {
    overline: "Truth",
    title: "Lumina — physics-aware grading.",
    body: "Lumina turns raw card condition into evidence-backed grading signals instead of vibes, tying every result to verifiable inputs you can inspect.",
    href: "/ventures/lumina",
    testId: "lumina",
  },
  {
    overline: "Dignity",
    title: "Uniqueness Engine — personhood without exposure.",
    body: "Uniqueness Engine proves one person is present without forcing them to hand over their life story, enabling sybil-resistant participation while keeping dignity intact.",
    href: "/ventures/uniqueness",
    testId: "uniqueness",
  },
];

const howWeWork = [
  {
    title: "Balance-sheet-first",
    body: "We wire new rails through our own balance sheet and operations first, so we feel the stress and failure modes directly before anyone else adopts the pattern.",
  },
  {
    title: "AI-native, human-governed",
    body: "Machine intelligence scans, simulates, and flags anomalies; people define mandates, limits, and veto. AI is part of the mechanism, not the boss.",
  },
  {
    title: "Non-custodial by design",
    body: "Our systems orchestrate workflows, proofs, and controls. They do not pool client funds or seize keys.",
  },
];

export default function Overview() {
  return (
    <Layout>
      <PageMeta 
        title="Verifiable Systems Group — Infrastructure of Verifiable Autonomy" 
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
              The infrastructure of verifiable autonomy.
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl" data-testid="text-hero-body">
              You shouldn't have to surrender control just to get leverage. Verifiable Systems Group is an AI-native, cryptography-grounded venture studio that builds systems for capital, identity, and intelligence—run on our own balance sheet first so you can verify, not just trust.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/ventures">
                <Button 
                  size="lg" 
                  className="font-mono text-sm uppercase tracking-wider"
                  data-testid="button-explore-ventures"
                >
                  Explore the ventures
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

      <section className="py-20 bg-card" data-testid="section-why-we-exist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-why-we-exist">
              Why we exist
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-why-we-exist-body">
              Our purpose is to democratize institutional-grade leverage. We build infrastructure that moves power from centralized gatekeepers to the edge, so smaller actors can audit, control, and compound without handing the keys to strangers.
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed" data-testid="text-why-we-exist-secondary">
              We felt the pain of losing value to opaque custodians and unverified feeds ourselves—so we decided to wire systems that don't ask for blind trust.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-domains">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-domains">
              Three domains we build in
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {domains.map((domain) => {
              const slugTitle = domain.title.toLowerCase();
              return (
                <Card key={domain.title} className="bg-card border-border h-full" data-testid={`card-domain-${slugTitle}`}>
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

      <section className="py-20 bg-card" data-testid="section-ventures">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-ventures">
              Ventures at a glance
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ventures.map((venture) => (
              <Card 
                key={venture.testId} 
                className="bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical h-full" 
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

      <section className="py-20" data-testid="section-how-we-work">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground" data-testid="heading-how-we-work">
              How we work
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {howWeWork.map((item) => {
              const slugTitle = item.title.toLowerCase().replace(/\s+/g, "-").replace(/,/g, "");
              return (
                <Card
                  key={item.title}
                  className="flex flex-col h-full bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                  data-testid={`card-${slugTitle}`}
                >
                  <CardContent className="flex flex-col h-full p-6">
                    <h3 className="font-heading font-semibold text-foreground mb-3" data-testid={`heading-${slugTitle}`}>
                      {item.title}
                    </h3>
                    <p className="flex-1 text-sm text-muted-foreground leading-relaxed" data-testid={`text-${slugTitle}`}>
                      {item.body}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-who-serve">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-who-serve">
              Who we serve
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-background border-border h-full" data-testid="card-audience-individuals">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-2" data-testid="heading-audience-individuals">High-agency individuals with scar tissue</h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-audience-individuals">
                  People who have lost money, time, or privacy to opaque systems and now care about control, verifiability, and survivability.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-border h-full" data-testid="card-audience-stewards">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-2" data-testid="heading-audience-stewards">Institutional stewards</h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-audience-stewards">
                  CIOs, partners, and risk or compliance leads who must defend decisions and need clear mechanisms, limits, and governance.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-border h-full" data-testid="card-audience-collaborators">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-2" data-testid="heading-audience-collaborators">Technical collaborators</h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-audience-collaborators">
                  Engineers, protocol teams, and security practitioners who care about mechanics, stress paths, and constraints—not buzzwords.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-border h-full" data-testid="card-audience-policy">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-2" data-testid="heading-audience-policy">Policy and regulator-adjacent readers</h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-audience-policy">
                  People evaluating whether we are a responsible actor: non-custodial by design, conservative, and explicit about risk.
                </p>
              </CardContent>
            </Card>
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
