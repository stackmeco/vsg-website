import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";

export default function Purpose() {
  return (
    <Layout>
      <PageMeta 
        title="Purpose" 
        description="Why Verifiable Systems Group exists: to raise the trust floor of software-mediated financial and AI systems."
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
              Studio · Purpose
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-hero-heading">
              Why Verifiable Systems Group exists.
            </h1>
            <p className="text-lg text-foreground leading-relaxed font-semibold mb-4" data-testid="text-core-purpose">
              VSG exists to raise the trust floor of high-impact digital systems.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-hero-body">
              We believe financial, identity, and AI infrastructure should be as inspectable as any other critical system. Verifiability—not opacity—is what earns durable trust from institutions, regulators, and the people they serve.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-problem">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="text-problem-heading">
              The problem we wake up to solve
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-problem-body">
              Most critical digital systems still run on opaque code paths, implicit trust, and manual governance. The gap between how much power software has and how little of it can be inspected is where risk, mistrust, and regulatory friction live.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3" data-testid="text-problem-bullet-0">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Opaque infrastructure</strong> — Capital, identity, and AI decisions often move through systems that can't be meaningfully inspected by the people accountable for them.
                </span>
              </li>
              <li className="flex items-start gap-3" data-testid="text-problem-bullet-1">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Compliance as drag, not design input</strong> — Regulation is usually treated as an after-the-fact constraint, not a design requirement wired in from the start.
                </span>
              </li>
              <li className="flex items-start gap-3" data-testid="text-problem-bullet-2">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Experimentation without guardrails</strong> — New fintech and AI systems are launched as bets, not governed experiments, making it harder to contain failures or learn cleanly from them.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-change">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="text-change-heading">
              The change we are here to make
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-change-body">
              Our purpose is fulfilled when verification, non-custodial design, and real governance feel normal, not niche. When that happens, risk conversations get clearer—and good systems become easier to green-light.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3" data-testid="text-change-bullet-0">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Make <strong className="text-foreground">verifiable systems</strong> the default expectation for high-impact software, not an optional extra.
                </span>
              </li>
              <li className="flex items-start gap-3" data-testid="text-change-bullet-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Normalize <strong className="text-foreground">non-custodial rails</strong> so control stays with institutions and users, not hidden intermediaries.
                </span>
              </li>
              <li className="flex items-start gap-3" data-testid="text-change-bullet-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Turn <strong className="text-foreground">experiments into governed loops</strong> where failures are contained and lessons become shared standards.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card" data-testid="section-oneline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-oneline">
              <span className="font-medium text-foreground">In one line:</span> VSG exists to make high-impact digital systems verifiable, non-custodial, and governable by design.
            </p>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Vision"
        description="See the future state we're working toward if we do our job well."
        href="/studio/vision"
      />
    </Layout>
  );
}
