import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
    body: "Uniqueness Engine proves one person is present without forcing them to hand over their life story, enabling sybil-resistant participation while keeping dignity and control intact.",
    href: "/ventures/uniqueness",
    testId: "uniqueness",
  },
];

export default function Ventures() {
  return (
    <Layout>
      <PageMeta 
        title="Ventures — Helios, Lumina, Uniqueness Engine" 
        description="See how VSG proves Truth, Capital, and Dignity through Helios, Lumina, and Uniqueness Engine—ventures wired through our own balance sheet before patterns are shared."
        preloadImage="/hero-texture.png"
      />
      
      <section className="py-20 lg:py-28 relative overflow-hidden" data-testid="section-hero">
        <div className="absolute inset-0 bg-background" />
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `url(/hero-texture.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.35,
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-background from-20% via-background/50 to-background/30 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-background/30 pointer-events-none" aria-hidden="true" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4" data-testid="text-overline">
              Ventures
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              Where we prove the rails first.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground" data-testid="text-hero-body">
              Each venture is a concrete proof of what we believe about Truth, Capital, and Dignity. We run them on our own balance sheet and infrastructure first, then share the patterns only after they have survived real conditions.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button size="lg" variant="outline" data-testid="button-view-ventures" onClick={() => document.getElementById('ventures-grid')?.scrollIntoView({ behavior: 'smooth' })}>
                View all ventures
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Link href="/approach">
                <Button size="lg" variant="ghost" data-testid="button-how-we-work">
                  How we work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="ventures-grid" className="py-20 bg-card" data-testid="section-ventures-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <Link 
                    href={venture.href} 
                    className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:text-primary/80 transition-colors"
                    data-testid={`link-venture-${venture.testId}`}
                  >
                    Learn more
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-how-ventures-fit">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-how-ventures-fit">
              How ventures fit the studio
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-how-ventures-fit-body">
              VSG is a studio, not a product company. Helios, Lumina, and Uniqueness Engine are how we test ideas about Truth, Capital, and Dignity against real constraints. If a pattern does not survive in a venture, it does not graduate into our standards or advice.
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed mb-6" data-testid="text-how-ventures-fit-secondary">
              We use the same rails we would recommend to others, and we feel the consequences first.
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed" data-testid="text-ai-native-note">
              All of our ventures are AI-native: machine intelligence handles the scanning and simulation; people define the mandates, limits, and veto.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-criteria">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-criteria">
              How ventures earn a slot in the portfolio
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-criteria-body">
              We treat portfolio slots as scarce. New ventures compete with existing work for capital, attention, and risk budget. To earn a place here, a venture has to clear three gates:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-foreground" data-testid="list-criteria-strategic">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <span className="font-medium">Strategic fit</span>
                  <span className="text-muted-foreground"> — Does it reinforce our purpose of building verifiable systems and non-custodial rails?</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-foreground" data-testid="list-criteria-risk">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <span className="font-medium">Risk surface</span>
                  <span className="text-muted-foreground"> — Can we bound the regulatory, operational, and capital risk in a way we're willing to own?</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-foreground" data-testid="list-criteria-pull">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <span className="font-medium">Evidence of pull</span>
                  <span className="text-muted-foreground"> — Is there real demand from the institutions or ecosystems we serve, not just internal curiosity?</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Process"
        description="See the six-stage path every venture follows inside VSG."
        href="/approach/process"
      />
    </Layout>
  );
}
