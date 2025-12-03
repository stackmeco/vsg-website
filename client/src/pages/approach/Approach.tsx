import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const layers = [
  {
    title: "Pillars — what never changes",
    body: "The pillars are the bedrock: verifiable systems, non-custodial rails, and governed experiments. They define what 'acceptable' looks like and when we will say no, even if something looks commercially attractive.",
    link: { label: "Learn more", href: "/approach/pillars" },
  },
  {
    title: "Process — how ventures move",
    body: "Our six-stage venture process is how ideas earn their way into production. Ventures move from definition and validation through build and governed launch, then either evolve into durable infrastructure or exit cleanly.",
    link: { label: "See the venture process", href: "/approach/process" },
  },
  {
    title: "Standards — how we codify the bar",
    body: "Standards are where lessons become reusable: patterns, controls, and quality benchmarks that apply across ventures. They keep us from solving the same problem three times and give partners something concrete to evaluate.",
    link: { label: "Explore standards", href: "/approach/standards" },
  },
];

const partnerBullets = [
  {
    label: "Predictability",
    description: "You're not betting on one team's mood. Every venture goes through the same process and pattern library.",
  },
  {
    label: "Explainability",
    description: "Pillars, process, and standards are documented, so you can explain to your own stakeholders why something is safe enough to pilot.",
  },
  {
    label: "Bounded risk",
    description: "Experiments are constrained by explicit limits and exit criteria; we design for clean failure, not hidden blast radius.",
  },
];

export default function Approach() {
  return (
    <Layout>
      <PageMeta
        title="Approach"
        description="How Verifiable Systems Group applies its pillars, venture process, and standards to design governed, verifiable systems on non-custodial rails."
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
              Approach at VSG
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6">
              How we turn principles into governed systems.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Our work is not just defined by what we build, but how we build it. The VSG approach brings three layers together — pillars, process, and standards — so every venture is constrained by the same principles and quality bar, not ad-hoc judgement.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              This page is the map: what we believe, how ventures move, and how we keep the bar high.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-layers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Framework
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground">
              Three layers of our approach
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {layers.map((layer) => (
              <Card
                key={layer.title}
                className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                data-testid={`card-layer-${layer.title.toLowerCase().split("—")[0].trim().replace(/\s+/g, "-")}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">
                    {layer.title}
                  </h3>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed mb-4">
                    {layer.body}
                  </p>
                  <Link href={layer.link.href} className="mt-auto">
                    <span
                      className="text-xs font-mono uppercase tracking-widest text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                      data-testid={`link-layer-${layer.title.toLowerCase().split("—")[0].trim().replace(/\s+/g, "-")}`}
                    >
                      {layer.link.label} <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-partners">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Partner impact
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              What this approach means for partners
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              This stack matters most to the people who rely on us. It affects how predictable we are, how explainable our systems are, and how we handle risk.
            </p>
            <ul className="space-y-3">
              {partnerBullets.map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-3 text-foreground"
                  data-testid={`partner-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
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

      <section className="py-20 bg-card" data-testid="section-integration">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Integration
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              How it all fits together
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Pillars decide what kinds of systems we will build. Process decides how those systems move from idea to reality. Standards capture what we learn along the way so the next venture starts smarter, not from scratch. Together, they make our work repeatable, auditable, and explainable under stress.
            </p>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Process"
        description="See the six-stage venture process that every VSG venture follows."
        href="/approach/process"
      />
    </Layout>
  );
}
