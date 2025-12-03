import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";

export default function Pillars() {
  return (
    <Layout>
      <PageMeta
        title="Pillars"
        description="The three pillars that govern every venture at Verifiable Systems Group: verifiable systems, non-custodial rails, and governed experiments."
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
              Approach · Pillars
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-hero-heading">
              The constraints that govern what we build.
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg mb-4" data-testid="text-hero-body">
              Pillars are not slogans here. They are hard constraints on what we will build, how we will operate it, and when we will shut it down. Every VSG venture is evaluated against three pillars: verifiable systems, non-custodial rails, and governed experiments.
            </p>
            <p className="text-sm leading-relaxed text-foreground font-medium" data-testid="text-hero-support">
              If a venture can't hold these pillars, it doesn't ship — no matter how attractive the market looks.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-why-pillars">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="text-why-heading">
              Why pillars, not slogans
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-why-body">
              Most companies publish values that never touch their systems. We use pillars as design tools and governance levers. They describe what "acceptable" looks like, which trade-offs we will make, and which opportunities we will decline.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-foreground" data-testid="text-why-bullet-0">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="text-foreground">Design lever</strong> — If a design conflicts with a pillar, the design changes.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-foreground" data-testid="text-why-bullet-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="text-foreground">Decision check</strong> — Reviews start with "does this uphold the pillars?" before growth or UX.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-foreground" data-testid="text-why-bullet-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="text-foreground">External signal</strong> — Partners can use these pillars as a checklist for fit.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-pillar-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-mono uppercase tracking-widest text-primary mb-2" data-testid="text-pillar1-number">
              1 · Verifiable Systems
            </p>
            <p className="text-sm text-muted-foreground italic mb-4" data-testid="text-pillar1-tagline">
              Systems you can inspect under stress.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8" data-testid="text-pillar1-definition">
              A system is verifiable when its critical behaviours can be inspected, tested, and, where it matters, formally or empirically proven. Capital flows, access controls, and decision paths must be visible—not buried in opaque services or one-off scripts.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3" data-testid="text-pillar1-practice-label">What this means in practice</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground" data-testid="text-pillar1-practice-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    We favour architectures where risk-critical logic is explicit and auditable, not hidden inside black-box vendors.
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground" data-testid="text-pillar1-practice-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Instrumentation and logging are first-class features, designed up front, not bolted on after launch.
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground" data-testid="text-pillar1-practice-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    We design for post-incident reconstruction — it must be possible to understand what happened and why.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3" data-testid="text-pillar1-nogo-label">What we say no to</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground" data-testid="text-pillar1-nogo-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    Systems that rely on unobservable third-party decision engines for risk-critical outcomes.
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground" data-testid="text-pillar1-nogo-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    Designs where key controls exist only in policy docs, not enforced in code or configuration.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3" data-testid="text-pillar1-signals-label">Signals you'll notice</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground" data-testid="text-pillar1-signals-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Early questions like "how will we prove this works?" and "what does failure look like on the wire?".
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground" data-testid="text-pillar1-signals-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    You receive concrete artefacts — diagrams, invariants, and test and telemetry plans — not only slideware.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-pillar-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-mono uppercase tracking-widest text-primary mb-2" data-testid="text-pillar2-number">
              2 · Non-custodial Rails
            </p>
            <p className="text-sm text-muted-foreground italic mb-4" data-testid="text-pillar2-tagline">
              Control stays with institutions and users.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8" data-testid="text-pillar2-definition">
              Non-custodial rails are financial and identity rails where institutions and individuals retain control of keys and governance. Our systems orchestrate workflows, verification, and coordination; they do not take custody of client assets.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3" data-testid="text-pillar2-practice-label">What this means in practice</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground" data-testid="text-pillar2-practice-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    We design around self-custody or institution-custody, not VSG custody, for production systems.
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground" data-testid="text-pillar2-practice-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    We avoid flows where VSG would need to hold client keys, sweep balances, or intermediate order flow.
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground" data-testid="text-pillar2-practice-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    When a bank, custodian, or exchange is involved, their role is explicit in architecture and governance, not implied.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3" data-testid="text-pillar2-nogo-label">What we say no to</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground" data-testid="text-pillar2-nogo-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    Ventures that require VSG to pool client assets, run omnibus accounts, or custody funds as a core behaviour.
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground" data-testid="text-pillar2-nogo-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    Designs where risk-critical custody decisions depend on a single opaque platform we cannot audit.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3" data-testid="text-pillar2-signals-label">Signals you'll notice</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground" data-testid="text-pillar2-signals-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Architecture sessions focus on who holds what, where, and under which controls.
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground" data-testid="text-pillar2-signals-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Diagrams clearly separate orchestration from custody, so responsibilities are visible to legal and compliance teams.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-pillar-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-mono uppercase tracking-widest text-primary mb-2" data-testid="text-pillar3-number">
              3 · Governed Experiments
            </p>
            <p className="text-sm text-muted-foreground italic mb-4" data-testid="text-pillar3-tagline">
              Experiments with boundaries, not bets without brakes.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8" data-testid="text-pillar3-definition">
              We treat ventures as governed experiments. Each initiative has a thesis, a risk budget, clear constraints, and exit criteria. Launching something new is not a one-way bet; it is a structured test that can be paused, rolled back, or shut down.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3" data-testid="text-pillar3-practice-label">What this means in practice</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground" data-testid="text-pillar3-practice-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    We document theses, assumptions, and risk budgets before scaling or broad rollout.
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground" data-testid="text-pillar3-practice-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Experiments run with guardrails: scoped cohorts, controlled environments, and explicit rollback paths.
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground" data-testid="text-pillar3-practice-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Outcomes feed back into standards and process, so the organisation learns, not just the team.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3" data-testid="text-pillar3-nogo-label">What we say no to</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground" data-testid="text-pillar3-nogo-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    Launches that cannot be rolled back, contained, or monitored if something goes wrong.
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground" data-testid="text-pillar3-nogo-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    Ventures that cannot state a falsifiable thesis — where success and failure would look the same.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3" data-testid="text-pillar3-signals-label">Signals you'll notice</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground" data-testid="text-pillar3-signals-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Roadmaps include decision gates, kill switches, and review points, not just launch dates.
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground" data-testid="text-pillar3-signals-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    We are comfortable saying "not yet" or "this stays internal" when something isn't ready.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-crosslinks">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="text-crosslinks-heading">
              How the pillars show up across VSG
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-crosslinks-body">
              The pillars are not a side project. They are threaded through how we choose ventures, how we build them, and how we run them over time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid="card-crosslink-process">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-2">In the venture process</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  We use the pillars to decide which ideas enter the pipeline and which exit at each stage.
                </p>
                <Link href="/approach/process" className="text-sm text-primary hover:underline" data-testid="link-crosslink-process">
                  View venture process →
                </Link>
              </CardContent>
            </Card>
            
            <Card className="bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid="card-crosslink-standards">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-2">In standards</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  When a pattern or control repeatedly upholds a pillar, it becomes part of our standards library.
                </p>
                <Link href="/approach/standards" className="text-sm text-primary hover:underline" data-testid="link-crosslink-standards">
                  View standards →
                </Link>
              </CardContent>
            </Card>
            
            <Card className="bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid="card-crosslink-ventures">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-2">In ventures</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Ventures that remain in the portfolio are the ones that can express these pillars in their architecture and governance.
                </p>
                <Link href="/ventures" className="text-sm text-primary hover:underline" data-testid="link-crosslink-ventures">
                  View ventures →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Process"
        description="See how ventures move through our six-stage process under these pillars."
        href="/approach/process"
      />
    </Layout>
  );
}
