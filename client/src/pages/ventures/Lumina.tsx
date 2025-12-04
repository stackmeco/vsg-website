import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const whatLuminaIs = [
  "Infrastructure for physics-aware grading signals in the trading card ecosystem.",
  "A Truth-domain venture: anchoring condition to evidence, not to guesswork.",
  "AI-native and human-governed: machine intelligence reads sensor data; people define thresholds, policies, and dispute paths.",
  "A way to make grading behaviours inspectable so different parties can understand and audit them.",
];

const whatLuminaIsNot = [
  "Not a retail grading queue or standalone grading brand.",
  "Not a marketplace or vault for holding customer cards.",
  "Not a guarantee of prices, returns, or investment outcomes.",
  "Not a black-box model that hides how it reached a result.",
];

const howItWorks = [
  {
    title: "Evidence first",
    body: "Lumina starts from measurable properties—surface, edges, corners, centering—and records the observations and transformations used to score them.",
  },
  {
    title: "AI-native, governed outputs",
    body: "Machine intelligence detects patterns and anomalies in the data; people define which signals matter, how they are weighted, and what happens when something looks off.",
  },
  {
    title: "Inspectable by design",
    body: "Each output is tied back to the inputs and model decisions that created it, so participants can review the path instead of debating a single number in isolation.",
  },
];

const whoLuminaIsFor = [
  {
    label: "Collectors",
    description: "Collectors who want more confidence about condition before they decide what to ship, insure, or trade.",
  },
  {
    label: "Marketplaces and platforms",
    description: "Marketplaces that need consistent, evidence-backed signals to reduce disputes and price more fairly.",
  },
  {
    label: "Ecosystem builders",
    description: "Ecosystem builders who want grading to behave like infrastructure—documented, repeatable, and auditable.",
  },
];

const studioFitItems = [
  "Feeds our standards for evidence-backed decisions.",
  "Provides live data for governance and dispute models.",
  "Demonstrates how AI can support, not replace, human judgment.",
];

export default function Lumina() {
  return (
    <Layout>
      <PageMeta
        title="Lumina — Physics-Aware Grading You Can Inspect"
        description="Lumina turns raw card condition into evidence-backed grading signals, anchoring each result to verifiable inputs so decisions rest on evidence, not vibes."
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
              Lumina · Truth
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              Lumina — physics-aware grading.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base" data-testid="text-hero-body">
              Lumina turns raw card condition into evidence-backed grading signals instead of vibes. It ties each result to measurable inputs so collectors, marketplaces, and insurers can see how a decision was formed instead of guessing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-why-lumina-exists">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-why-lumina-exists">
              Why Lumina exists
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-why-lumina-body-1">
              Grading a card often means shipping it away, waiting, and hoping that a human eye sees what you see. Results can drift between graders, queues get clogged, and decisions are hard to audit later. Lumina exists to turn that process into something inspectable.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-why-lumina-body-2">
              Instead of relying on a single opaque score, we start from measurable properties—surface, corners, centering, edges—and anchor each output to the data and models that produced it. The goal is simple: if a grade matters, you should be able to see how it was built.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-what-lumina-is-not">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border" data-testid="card-what-lumina-is">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" aria-hidden="true" />
                  What Lumina is
                </h3>
                <ul className="space-y-3">
                  {whatLuminaIs.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed" data-testid={`item-what-is-${index}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border" data-testid="card-what-lumina-is-not">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
                  What Lumina is not
                </h3>
                <ul className="space-y-3">
                  {whatLuminaIsNot.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed" data-testid={`item-what-is-not-${index}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-how-lumina-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-how-lumina-works">
              How Lumina works (at a distance)
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-how-lumina-lead">
              Lumina treats card grading as a measurement and provenance problem, not just an opinion. It builds a chain from how a card was observed to how its condition was scored.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {howItWorks.map((col) => (
              <Card key={col.title} className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid={`card-${col.title.toLowerCase().replace(/\s+/g, "-").replace(/,/g, "")}`}>
                <CardContent className="flex flex-col h-full p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{col.title}</h3>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{col.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-who-lumina-is-for">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2" data-testid="text-audience-eyebrow">
              Audience
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-who-lumina-is-for">
              Who Lumina is for
            </h2>
            <ul className="space-y-4">
              {whoLuminaIsFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground" data-testid={`audience-${item.label.toLowerCase().replace(/\s+/g, "-")}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                  <span>
                    <strong>{item.label}</strong> — {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-studio-fit">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2" data-testid="text-studio-eyebrow">
              Studio Integration
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-studio-fit">
              Where Lumina fits in VSG
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-studio-body">
              Lumina is how we prove the Truth side of our work. It runs alongside Helios in Capital and the Uniqueness Engine in Dignity, showing how AI-native systems can make key decisions inspectable instead of opaque.
            </p>
            <ul className="space-y-3">
              {studioFitItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground" data-testid={`studio-fit-item-${index}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-border" data-testid="section-disclaimer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl" data-testid="text-disclaimer">
            Lumina is grading infrastructure, not an investment or pricing guarantee. Nothing on this page is investment, legal, or tax advice, and we do not hold or custody customer cards.
          </p>
        </div>
      </section>

      <NextStepBlock
        label="View All"
        nextPage="Ventures"
        description="See all VSG ventures and how they connect across Truth, Capital, and Dignity."
        href="/ventures"
      />
    </Layout>
  );
}
