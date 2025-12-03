import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";

export default function Vision() {
  return (
    <Layout>
      <PageMeta 
        title="Vision" 
        description="The future VSG is working toward: a world where verifiable, non-custodial, governed systems are the default rails for finance, identity, and AI."
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
              Studio · Vision
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-hero-heading">
              A world where verification is the default, not the exception.
            </h1>
            <p className="text-lg text-foreground leading-relaxed font-semibold mb-4" data-testid="text-core-vision">
              We envision a digital economy where critical systems are verifiable by default and custody stays where it belongs.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-hero-body">
              We imagine institutions, builders, and individuals relying on verifiable, non-custodial systems as readily as today's payment networks or cloud platforms. Regulators see live evidence instead of slideware. Experiments run under real governance, not "ship and hope."
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-five-ten-years">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="text-fiveten-heading">
              Five–ten years out: what changes if we succeed
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3" data-testid="text-fiveten-bullet-0">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">For institutions</strong> — Critical flows (capital, identity, AI decisions) run on auditable rails. Risk and compliance teams can query systems, not just policies.
                </span>
              </li>
              <li className="flex items-start gap-3" data-testid="text-fiveten-bullet-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">For builders</strong> — Designing for verifiability, non-custody, and governance is standard practice, not edge-case work for "regulated" projects.
                </span>
              </li>
              <li className="flex items-start gap-3" data-testid="text-fiveten-bullet-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">For individuals</strong> — People hold keys and gain verifiable assurances about how systems use their assets and data.
                </span>
              </li>
              <li className="flex items-start gap-3" data-testid="text-fiveten-bullet-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">For regulators and partners</strong> — Supervisory conversations are grounded in shared evidence and live telemetry, not static documents.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-different">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="text-different-heading">
              What will feel different day to day
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-different-body">
              A credible vision should eventually feel boring. If we succeed, the interesting part won't be whether systems are verifiable, but what new things become safe to build on top of them.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3" data-testid="text-different-bullet-0">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  "Is this verifiable?" becomes as routine a question as "Is this secure?".
                </span>
              </li>
              <li className="flex items-start gap-3" data-testid="text-different-bullet-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Non-custodial architectures qualify for serious partnerships and regulated use-cases, not just hobby scale.
                </span>
              </li>
              <li className="flex items-start gap-3" data-testid="text-different-bullet-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  New ventures inherit battle-tested governance patterns instead of reinventing control every time.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card" data-testid="section-crosslinks">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-crosslinks">
              Our <Link href="/studio/purpose" className="text-primary hover:underline" data-testid="link-purpose">purpose</Link> explains why this matters today. Our <Link href="/studio/mission" className="text-primary hover:underline" data-testid="link-mission">mission</Link> explains how we're pursuing it right now.
            </p>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Mission"
        description="See what we are actually doing today to move toward this vision."
        href="/studio/mission"
      />
    </Layout>
  );
}
