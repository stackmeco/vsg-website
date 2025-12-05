import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X } from "lucide-react";

const whyExistsBullets = [
  "Surface real risk early instead of discovering it in a crisis.",
  "Make position changes traceable, not opaque.",
  "Keep capital productive without losing governed control.",
];

const whatHeliosDoes = [
  {
    title: "Plans the routes",
    body: "Maps how capital can move between approved positions, keeping total exposure and concentration inside defined bounds.",
  },
  {
    title: "Monitors behaviour",
    body: "Tracks how positions behave over time, flagging drifts, breaches, and anomalies so stewards can act before risk compounds.",
  },
  {
    title: "Enforces limits",
    body: "Encodes guardrails around size, liquidity, and downside so changes are constrained by design, not left to chance.",
  },
];

const howHeliosOperates = [
  {
    title: "AI-native analysis",
    body: "Helios uses machine intelligence to simulate scenarios, check constraints, and surface patterns a human steward could miss in real time.",
  },
  {
    title: "Balance-sheet-first",
    body: "Every path Helios runs touches our own capital first, under conservative limits. We feel the consequences before anyone else could depend on the pattern.",
  },
  {
    title: "Human veto preserved",
    body: "Stewards retain authority over mandates, emergency stops, and structural changes. No critical path runs without clear human accountability.",
  },
];

const whatHeliosIsNot = [
  "Not an exchange.",
  "Not a wallet or vault provider for third parties.",
  "Not a pooled investment vehicle, fund, or yield product.",
  "Not an invitation to deposit assets, buy anything, or follow our positions.",
];

export default function Helios() {
  return (
    <Layout>
      <PageMeta
        title="Helios — Resilient Capital Engine"
        description="Helios routes VSG's own digital asset treasury under explicit limits, keeping capital working without surrendering keys or leaving governed control."
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
              Ventures · Capital
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              Helios — resilient capital engine.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-hero-body">
              Helios is the internal execution engine for VSG's own digital asset treasury. It exists to keep capital working without handing over the keys—routing positions under explicit limits so we can survive bad days, not just good ones.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button asChild size="lg" data-testid="button-back-to-ventures">
                <Link href="/ventures">
                  Back to all ventures
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" data-testid="button-see-how-we-work">
                <Link href="/approach">
                  See how we work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-why-helios-exists">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-why-helios-exists">
              Why Helios exists
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-why-helios-1">
              Treasuries get hurt when exposures creep, venues fail, or risk hides in the fine print. We've felt that pain ourselves. Helios exists to make our own treasury behaviour explicit—so we can see how capital moves, how limits are enforced, and what happens on the worst day, not just the best.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-why-helios-2">
              Instead of trusting a patchwork of dashboards and ad hoc checks, we treat treasury as infrastructure that must not fail silently.
            </p>
            <ul className="space-y-3">
              {whyExistsBullets.map((item, index) => (
                <li key={index} className="flex items-start gap-3" data-testid={`why-exists-bullet-${index}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-what-helios-does">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-what-helios-does">
              What Helios does
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-what-helios-does">
              Helios routes VSG's own digital asset treasury across approved venues and strategies under predefined limits. It does not chase raw yield—it enforces resilience: how much we can lose, how fast we can react, and which paths remain safe when markets move.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whatHeliosDoes.map((card, index) => (
              <Card 
                key={index} 
                className="flex flex-col h-full bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" 
                data-testid={`card-does-${index}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{card.title}</h3>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{card.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-how-helios-operates">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-how-helios-operates">
              How Helios operates
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-how-helios-operates">
              Helios is AI-native and human-governed. Machines handle the high-velocity mechanics—scanning data, simulating paths, and flagging stress—while people define mandates, set limits, and keep the veto.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {howHeliosOperates.map((card, index) => (
              <Card 
                key={index} 
                className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" 
                data-testid={`card-operates-${index}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{card.title}</h3>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{card.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-what-helios-is-not">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-what-helios-is-not">
              What Helios is not
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-what-helios-is-not-intro">
              Helios is built for VSG's own treasury. It is not a public product or a place to send assets.
            </p>
            <Card className="bg-card border-border" data-testid="card-helios-is-not">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {whatHeliosIsNot.map((item, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`is-not-${index}`}>
                      <X className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <p className="text-xs text-muted-foreground/80 leading-relaxed mt-6" data-testid="text-is-not-disclaimer">
              This page explains how we operate our own capital. It is not investment, legal, or tax advice.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-where-helios-fits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-where-helios-fits">
              Where Helios fits inside VSG
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-where-helios-fits">
              Helios sits in the Capital domain, alongside the work we do in Truth and Dignity. It gives us a resilient base to build on—so when we design new ventures or systems, we already know how our own capital behaves under stress.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/ventures" className="text-sm text-primary hover:underline" data-testid="link-all-ventures">
                See all ventures
              </Link>
              <Link href="/standards" className="text-sm text-primary hover:underline" data-testid="link-governance">
                Review governance
              </Link>
            </div>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Approach"
        description="Our approach and standards pages show how Helios inherits guardrails around Truth, Capital, and Dignity."
        href="/approach"
      />
    </Layout>
  );
}
