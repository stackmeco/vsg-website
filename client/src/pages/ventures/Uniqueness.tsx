import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";

const whatUniquenessDoes = [
  {
    title: "One person, one presence",
    body: "Uniqueness Engine focuses on presence, not surveillance. It lets a system know that one real person is behind an action, without exposing everything about who they are.",
  },
  {
    title: "Proofs, not profiles",
    body: "Instead of building central profiles, Uniqueness Engine uses privacy-preserving proofs so people can demonstrate eligibility or uniqueness without being turned into a product in someone else's database.",
  },
  {
    title: "Built for governed systems",
    body: "Uniqueness Engine is designed for systems that need rules and protections, not chaos. It slots into governed environments where access matters, but dignity and privacy must stay protected.",
  },
];

const possibilities = [
  {
    label: "Sybil resistance",
    description: "Networks can enforce fair participation without accumulating sensitive personal data.",
  },
  {
    label: "Privacy-first access",
    description: "People can prove eligibility for services without over-sharing their identity.",
  },
  {
    label: "Governed participation",
    description: "Systems can set rules for who participates while respecting the dignity of each participant.",
  },
];

export default function Uniqueness() {
  return (
    <Layout>
      <PageMeta
        title="Uniqueness Engine"
        description="Uniqueness Engine proves that one person is present without forcing them to hand over their life story. It enables sybil-resistant access using privacy-preserving proofs."
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
              Venture · Dignity
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              Uniqueness Engine — personhood without exposure.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base" data-testid="text-hero-body">
              Uniqueness Engine proves that one person is present without forcing them to hand over their life story. It enables sybil-resistant access and participation using privacy-preserving proofs, so people can move through systems with their dignity and control intact.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-what-uniqueness-does">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-8" data-testid="heading-what-uniqueness-does">
            What Uniqueness Engine does
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {whatUniquenessDoes.map((col) => (
              <Card key={col.title} className="flex flex-col h-full bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid={`card-${col.title.toLowerCase().replace(/\s+/g, "-").replace(/,/g, "")}`}>
                <CardContent className="flex flex-col h-full p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{col.title}</h3>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{col.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-dignity-domain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2" data-testid="text-dignity-eyebrow">
              Domain
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-dignity-domain">
              Uniqueness Engine in the Dignity domain
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-dignity-body">
              Dignity means people keep control over how they appear in systems. In the Dignity domain, Uniqueness Engine is our proof: it lets networks enforce "one person, one presence" and other rules of participation without demanding full exposure, keeping personhood ahead of profiling.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-possibilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2" data-testid="text-possibilities-eyebrow">
              Value Proposition
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-possibilities">
              What Uniqueness Engine makes possible
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-possibilities-body">
              When presence can be proven without profiling, new forms of fair participation become possible:
            </p>
            <ul className="space-y-3">
              {possibilities.map((item) => (
                <li key={item.label} className="flex items-start gap-3 text-foreground" data-testid={`possibility-${item.label.toLowerCase().replace(/\s+/g, "-")}`}>
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

      <section className="py-20" data-testid="section-status">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2" data-testid="text-status-eyebrow">
              Current Stage
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-status">
              Where Uniqueness Engine is in the process
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-status-body">
              Uniqueness Engine is in active research and early development. We are exploring privacy-preserving proof systems and defining the constraints that make sybil resistance practical without surveillance.
            </p>
            <p className="mt-3 text-xs text-muted-foreground" data-testid="text-status-disclaimer">
              Nothing on this page should be read as a commitment to support specific networks, identity providers, or partners. It describes a direction of research, not a live product.
            </p>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Standards"
        description="See the governance principles that guide how we build privacy-preserving systems."
        href="/approach/standards"
      />
    </Layout>
  );
}
