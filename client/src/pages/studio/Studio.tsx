import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const whatWeDo = [
  {
    title: "Systems Architecture & Research",
    body: "We map the real-world constraints around capital, identity, and regulation, then design systems that make those constraints explicit. That includes verification flows, risk boundaries, and the rails needed for institutions to stay in control.",
  },
  {
    title: "Venture Studio & Incubation",
    body: "We run a repeatable process for turning hypotheses into ventures. Each venture enters with a clear thesis, moves through our six-stage pipeline, and is either graduated into shared infrastructure or archived with its lessons preserved.",
  },
  {
    title: "Standards, Playbooks & Governance",
    body: "We turn what we learn into reusable standards: patterns, controls, and playbooks that can be applied across ventures. This is how we avoid solving the same problem twice and how external partners can evaluate how we work.",
  },
];

const audienceBullets = [
  {
    label: "Financial institutions & fintechs",
    description: "who need non-custodial, audit-ready rails instead of opaque black boxes.",
  },
  {
    label: "Market and infrastructure providers",
    description: "building exchanges, marketplaces, and rails where authenticity, risk, or capital flows must be explainable.",
  },
  {
    label: "Ecosystems & protocols",
    description: "that want to see real-world use-cases built on top of their primitives under conservative, governed conditions.",
  },
];

const structureGrid = [
  {
    title: "The Studio",
    body: "A core team focused on thesis, architecture, standards, and governance. The Studio sets the bar for what we build and how risk is managed.",
  },
  {
    title: "Ventures",
    body: "Individual ventures like Helios, Stackme, and Lumina that explore specific opportunities. Each one competes for capital, attention, and risk budget.",
  },
  {
    title: "Standards & Library",
    body: "A growing set of standards, playbooks, and patterns that capture what works. This is how we avoid re-learning the same lesson in three different places.",
  },
];

const pillars = [
  {
    title: "Verifiable Systems",
    body: "Critical behaviours must be observable, testable, and, where it matters, provable. We optimise for systems you can reason about under stress.",
  },
  {
    title: "Non-custodial Rails",
    body: "Wherever possible, we keep key and asset control with institutions and users. Our systems orchestrate workflows; they do not take custody.",
  },
  {
    title: "Governed Experiments",
    body: "We treat ventures as governed experiments with explicit limits, not permanent products. Risk budgets, constraints, and exit criteria are part of the design.",
  },
];

export default function Studio() {
  return (
    <Layout>
      <PageMeta
        title="Studio"
        description="Verifiable Systems Group is a verification-first venture studio that designs, builds, and governs systems on non-custodial rails for institutions and ecosystems."
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
              Verifiable Systems Group
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6">
              A verification-first venture studio.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Verifiable Systems Group (VSG) is a small, focused studio that designs and operates systems where behaviour can be inspected, not guessed. We build on non-custodial rails, keep governance explicit, and treat every venture as an experiment that has to earn its place in the portfolio.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              The Studio is where we define our thesis, choose what to build, and decide how ventures like Helios, Stackme, and Lumina move from idea to governed infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-what-we-do">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Capabilities
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground">
              What we do
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whatWeDo.map((item) => (
              <Card
                key={item.title}
                className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                data-testid={`card-${item.title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed">
                    {item.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-who-were-for">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Audience
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              Who we're for
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              We exist for institutions and ecosystems that care about verification, not just velocity.
            </p>
            <ul className="space-y-3">
              {audienceBullets.map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-3 text-foreground"
                  data-testid={`audience-${item.label.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
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

      <section className="py-20 bg-card" data-testid="section-structure">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Organization
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              How the Studio is structured
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              We keep the Studio small and focused. Most of the complexity lives in the ventures and the systems they rely on.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {structureGrid.map((item) => (
              <Card
                key={item.title}
                className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                data-testid={`card-structure-${item.title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed">
                    {item.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/ventures"
              className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:text-primary/80 transition-colors"
              data-testid="link-venture-portfolio"
            >
              See the venture portfolio
              <ArrowRight className="w-3 h-3" />
            </Link>
            <Link
              href="/approach/process"
              className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:text-primary/80 transition-colors"
              data-testid="link-venture-process"
            >
              See the six-stage venture process
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-pillars">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Foundation
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              Our pillars
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Underneath the ventures and tooling, the Studio is anchored on a small number of pillars. They show up in everything we design and every venture we approve.
            </p>
            <ul className="space-y-4">
              {pillars.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-3 text-foreground"
                  data-testid={`pillar-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <strong>{item.title}</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              Our purpose, vision, and mission expand on these pillars and how we apply them over time.
            </p>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Ventures"
        description="See how the Studio's thesis shows up in specific ventures."
        href="/ventures"
      />
    </Layout>
  );
}
