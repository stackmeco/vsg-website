import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const pillars = [
  {
    name: "Intelligence Augmented (IA)",
    mantra: "Let the machine compute. Let the human decide.",
    description: "We use machine intelligence for scale, patterning, and monitoring, and keep people responsible for mandates, ethics, and vetoes. No critical path runs without someone accountable for outcomes. AI is inside the mechanism, not in charge of the mission.",
  },
  {
    name: "Seek the Signal",
    mantra: "Make decisions rest on evidence, not stories.",
    description: "We treat narratives as hypotheses, not facts. Systems must anchor decisions to provenance, logs, and proofs that anyone affected can inspect. If we cannot show where a decision came from, we do not trust it—especially in our Truth work.",
  },
  {
    name: "Engineered Ambition",
    mantra: "Dream in decades, execute in milliseconds.",
    description: "We aim at structural, long-horizon change but move through tightly governed experiments. Every ambitious idea must be paired with constraints, telemetry, and rollback paths. Speed is allowed only where we can see, measure, and reverse the impact.",
  },
  {
    name: "Own the Engine",
    mantra: "Master the mechanics to rewrite the rules.",
    description: "We refuse to depend on black boxes we do not understand. If we rely on a flow for Truth, Capital, or Dignity, we must be able to describe its behaviour under normal conditions, under stress, and under failure—and we must be able to intervene.",
  },
  {
    name: "Value is a Mirror",
    mantra: "Serve first, succeed second.",
    description: "Our upside must mirror the value and safety we create for others. We avoid models that profit from confusion, lock-in, or surveillance. Incentives are aligned so that when users gain leverage and protection, we win by running better rails—not by extracting more.",
  },
  {
    name: "Force Multiplier",
    mantra: "Level the playing field.",
    description: "We build tools so smaller players can access institutional-grade leverage without becoming institutions. Systems should tilt power away from incumbents who rely on opacity, and toward individuals who insist on verifiable autonomy over their decisions, capital, and dignity.",
  },
];

const constraints = [
  "We do not treat AI as a black box that replaces judgment; people keep the veto on every critical path.",
  "We do not base critical decisions on information that cannot be inspected or traced back to evidence.",
  "We do not pursue speed or yield at the expense of clear limits, observability, and rollback.",
  "We do not profit from users' confusion, lock-in, or overexposure of their lives.",
  "We do not design systems where only one party can see the whole flow.",
];

export default function Pillars() {
  return (
    <Layout>
      <PageMeta
        title="Pillars"
        description="The non-negotiable principles that guide how Verifiable Systems Group designs and governs AI-native, non-custodial systems across Truth, Capital, and Dignity."
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
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4" data-testid="text-overline">
              What we will not trade away
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight tracking-tight mb-6" data-testid="text-hero-heading">
              Pillars that hold under stress.
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg mb-4" data-testid="text-hero-body-1">
              These pillars are the lines we do not cross, even when it would be easier or faster to look away. They decide which ventures we build, which we decline, and how systems must behave when no one is watching—across Truth, Capital, and Dignity.
            </p>
            <p className="text-sm leading-relaxed text-foreground font-medium mb-8" data-testid="text-hero-body-2">
              You shouldn't have to guess what we stand for once real stakes are involved. Each pillar is a concrete constraint on how we use AI, move capital, and handle people's lives—so trust rests on behaviour, not branding.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/approach">
                <Button data-testid="button-primary-cta">
                  See how we apply this
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="/process">
                <Button variant="outline" data-testid="button-secondary-cta">
                  View the six-stage process
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-explainer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="text-explainer-heading">
              How to read these pillars
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-explainer-body">
              Each pillar is a principle that must survive contact with real risk. They show up in how we design Truth systems for evidence, Capital systems for governed control, and Dignity systems for personhood. If a venture conflicts with a pillar, we change the venture or walk away.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-pillars">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {pillars.map((pillar, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                data-testid={`card-pillar-${index}`}
              >
                <CardContent className="p-6">
                  <h3 
                    className="font-heading font-semibold text-foreground mb-2"
                    data-testid={`text-pillar-name-${index}`}
                  >
                    {pillar.name}
                  </h3>
                  <p 
                    className="text-sm text-primary italic mb-4"
                    data-testid={`text-pillar-mantra-${index}`}
                  >
                    {pillar.mantra}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-domains">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="text-domains-heading">
              Where these pillars show up
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              These pillars are not a manifesto on a wall; they are constraints on design. They shape how Truth systems anchor decisions to evidence, how Capital systems protect balance-sheet risk under non-custodial control, and how Dignity systems protect personhood without surveillance.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12">
            <div className="flex items-start gap-3" data-testid="text-domain-truth">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-sm text-foreground">
                <strong>Truth</strong> – Evidence, provenance, and inspectable decisions.
              </p>
            </div>
            <div className="flex items-start gap-3" data-testid="text-domain-capital">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-sm text-foreground">
                <strong>Capital</strong> – Non-custodial control, limits, and rollback.
              </p>
            </div>
            <div className="flex items-start gap-3" data-testid="text-domain-dignity">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-sm text-foreground">
                <strong>Dignity</strong> – Personhood, eligibility, and privacy by design.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background border-y border-border" data-testid="section-constraints">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="text-constraints-heading">
              What these pillars rule out
            </h2>
            <ul className="space-y-4 mb-8">
              {constraints.map((constraint, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                  data-testid={`text-constraint-${index}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  {constraint}
                </li>
              ))}
            </ul>
            <p className="text-sm text-foreground font-medium leading-relaxed">
              If a venture, feature, or integration depends on any of these behaviours, the pillars require us to redesign it—or decline it—before it ever touches real people or real capital.
            </p>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Approach"
        description="See how we apply these pillars across our approach."
        href="/approach"
      />
    </Layout>
  );
}
