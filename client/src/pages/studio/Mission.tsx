import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";

export default function Mission() {
  return (
    <Layout>
      <PageMeta 
        title="Mission" 
        description="What Verifiable Systems Group does today: designing, building, and operating verification-first ventures on non-custodial rails with real governance."
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
              Studio · Mission
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-hero-heading">
              What we do, and for whom, right now.
            </h1>
            <p className="text-lg text-foreground leading-relaxed font-semibold mb-4" data-testid="text-core-mission">
              Our mission is to design, build, and operate verification-first ventures that let institutions and individuals use non-custodial rails with the governance and reliability they require.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-hero-body">
              We do this by running a focused venture studio, maintaining shared standards, and investing in the research, infrastructure, and capital strategy needed to keep experimentation safe and aligned with real-world constraints.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-how">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="text-how-heading">
              How we pursue this mission
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3" data-testid="text-how-bullet-0">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Studio model</strong> — We originate and co-build ventures where verifiable systems, non-custodial rails, and governed experiments are the starting point, not a retrofit.
                </span>
              </li>
              <li className="flex items-start gap-3" data-testid="text-how-bullet-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Shared standards</strong> — We maintain patterns, playbooks, and reference architectures so each new venture benefits from what the others have already learned.
                </span>
              </li>
              <li className="flex items-start gap-3" data-testid="text-how-bullet-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Conservative capital strategy</strong> — We use an internal, Bitcoin-anchored treasury program to fund R&D and infrastructure under conservative limits — without pooling client assets or offering yield products.
                </span>
              </li>
              <li className="flex items-start gap-3" data-testid="text-how-bullet-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Partnerships with serious counterparts</strong> — We work with institutions, infrastructure providers, and builders who care about governance as much as growth.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-who">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="text-who-heading">
              Who we serve
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-who-intro">
              We work best with teams who see governance and verification as enablers, not just constraints.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3" data-testid="text-who-bullet-0">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Regulated and regulation-adjacent institutions that need verifiable, non-custodial infrastructure they can stand behind.
                </span>
              </li>
              <li className="flex items-start gap-3" data-testid="text-who-bullet-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Infrastructure and protocol teams who want verification-first design and governance to be part of their adoption story.
                </span>
              </li>
              <li className="flex items-start gap-3" data-testid="text-who-bullet-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Experienced builders and operators who care more about durable systems than one-off launches.
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
              Our <Link href="/studio/vision" className="text-primary hover:underline" data-testid="link-vision">vision</Link> describes the future state we're aiming at. Our <Link href="/ventures" className="text-primary hover:underline" data-testid="link-ventures">venture portfolio</Link> shows where this mission is already at work.
            </p>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Ventures"
        description="Explore how the mission shows up in specific ventures inside VSG."
        href="/ventures"
      />
    </Layout>
  );
}
