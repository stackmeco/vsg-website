import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";

const columns = [
  {
    title: "The problem Stackme studies",
    body: "Many people interact with leverage through products they don't fully understand. Fees, risk bands, and liquidation paths are often buried in fine print or hidden in complex interfaces.",
  },
  {
    title: "What Stackme explores",
    body: "Stackme prototypes experiences where risk bands, constraints, and downside are front-loaded and machine-readable. The goal is to see whether clearer interfaces and verifiable rails can make hard decisions easier to understand.",
  },
  {
    title: "What Stackme is not",
    body: "Stackme is not a broker, bank, or credit issuer. It does not pool client assets, provide investment advice, or market yield. It is a research venture focused on interface patterns and system design.",
  },
];

const principles = [
  {
    label: "Clarity first",
    description: "Users should be able to describe, in plain language, what they are doing and what could go wrong.",
  },
  {
    label: "Visible constraints",
    description: "Limits, thresholds, and worst-case scenarios are shown, not implied.",
  },
  {
    label: "Non-custodial by default",
    description: "Wherever possible, rails are structured so users and institutions keep key control; the system orchestrates flows, it does not take custody.",
  },
  {
    label: "Reversible where it matters",
    description: "We bias toward flows that can be rolled back or unwound under clear conditions, rather than one-way bets.",
  },
];

export default function Stackme() {
  return (
    <Layout>
      <PageMeta
        title="Stackme"
        description="Stackme is a consumer venture in development that explores how everyday people could interact with leverage on verifiable, non-custodial rails—with clear constraints and real risk visibility."
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
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Consumer venture — leverage experience
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6">
              Stackme: exploring safer leverage for everyday people.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Stackme is an experimental venture inside VSG. It asks a simple question: if adults are going to use leverage anyway, what would it look like to design that experience with clear guardrails, real-time visibility, and non-custodial rails from day one?
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              Stackme is an internal venture in development. It is not a live product, does not accept deposits, and is not an offer of credit, investment, or financial services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-columns">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {columns.map((col) => (
              <Card key={col.title} className="flex flex-col h-full bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid={`card-${col.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <CardContent className="flex flex-col h-full p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{col.title}</h3>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{col.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-principles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Design Framework
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              Design principles behind Stackme
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Every prototype we run under the Stackme banner is evaluated against a short list of principles:
            </p>
            <ul className="space-y-3">
              {principles.map((item) => (
                <li key={item.label} className="flex items-start gap-3 text-foreground" data-testid={`principle-${item.label.toLowerCase().replace(/\s+/g, "-")}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>
                    <strong>{item.label}</strong> — {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-status">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Current Status
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              Where Stackme is today
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Today, Stackme lives as a collection of internal prototypes and research studies. We use them to test comprehension, risk perception, and behavioural responses to different leverage interfaces. Anything that moves beyond the lab will go through VSG's standard venture process before it touches production users.
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              Nothing described on this page should be interpreted as a live product, a public roadmap, or an invitation to transact.
            </p>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Ventures"
        description="See how Stackme fits alongside other ventures in the VSG portfolio."
        href="/ventures"
      />
    </Layout>
  );
}
