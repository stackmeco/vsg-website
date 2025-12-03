import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { ValueCard } from "@/components/ValueCard";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Scale, Wallet, Cog, MessageSquare, Hash, Terminal, Layers } from "lucide-react";
import gearsTexture from "@assets/gears_texture.png";

const definitions = [
  {
    term: "Verifiable Systems",
    definition: "Infrastructure that is fully auditable. No black boxes. The rules are visible, the risk is defined, and the outcome is mathematically provable.",
  },
  {
    term: "Deterministic AI",
    definition: "Artificial Intelligence that follows rules instead of guessing. It anchors every output to a verified data source, eliminating hallucination.",
  },
  {
    term: "Digital Bearer Assets",
    definition: "Assets you truly own, not just IOUs. They can move freely across the internet instantly, without needing permission from a bank or platform.",
  },
];

const functions = [
  {
    title: "Risk Management",
    description: "We set strict limits on leverage and exposure. Defined solvency thresholds protect capital across all market conditions.",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    title: "Regulatory Alignment",
    description: "We operate within the law. All projects are designed for compliance in the jurisdictions where they may deploy.",
    icon: <Scale className="w-5 h-5" />,
  },
  {
    title: "Treasury Operations",
    description: "We track all capital movement with auditable precision—from loan positions to operational expenditures.",
    icon: <Wallet className="w-5 h-5" />,
  },
  {
    title: "Development Lifecycle",
    description: "Every project follows a structured path from specification through build and testing before deployment.",
    icon: <Cog className="w-5 h-5" />,
  },
  {
    title: "Public Accountability",
    description: "What we say externally matches what we do internally. Public documentation reflects actual system state.",
    icon: <MessageSquare className="w-5 h-5" />,
  },
];


export default function System() {
  return (
    <Layout>
      <PageMeta 
        title="Process" 
        description="How we operate: our Bitcoin treasury strategy, functional responsibilities, and the principles that govern our development lifecycle." 
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
            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-foreground leading-tight tracking-tight mb-6">
              How We Operate
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              A small, focused team backed by a Bitcoin treasury. We separate functions clearly: Risk Management defines limits, Treasury allocates capital, and Engineering verifies every build.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-definitions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
              System Primitives
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              Core Concepts
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {definitions.map((def, index) => {
              const icons = [Terminal, Layers, Hash];
              const Icon = icons[index % icons.length];
              return (
                <Card key={def.term} className="bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <Icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <h3 className="font-heading font-semibold text-foreground">{def.term}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{def.definition}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden" data-testid="section-treasury">
        {/* Gears Texture Background */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `url(${gearsTexture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
            filter: "grayscale(100%) contrast(120%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-background/90 to-background/70" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Capital strategy
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6">
              Our Bitcoin Treasury
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Our treasury is built on Bitcoin. When conditions are favorable, we borrow against a portion of our holdings using trusted, non-custodial lending venues. The proceeds either:
            </p>
            <ul className="space-y-3 mb-6 text-base">
              <li className="flex items-start gap-3 text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                Fund development and infrastructure for our ventures, or
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                Allow strategic Bitcoin accumulation during market downturns.
              </li>
            </ul>
            <p className="text-xs text-muted-foreground italic">
              This is an internal program. We do not manage external capital or offer yield products.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-functions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Functional responsibilities
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              How We're Organized
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              We are a small team, but we maintain clear functional separation. This clarity ensures accountability and reduces operational risk.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {functions.map((func) => (
              <ValueCard key={func.title} {...func} />
            ))}
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Ventures"
        description="See our active projects and their current development status."
        href="/ventures"
      />
    </Layout>
  );
}
