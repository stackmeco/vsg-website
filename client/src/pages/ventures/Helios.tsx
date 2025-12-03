import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";

const columns = [
  {
    title: "Mandate",
    body: "Fund long-horizon work that would be hard to finance on a quarter-to-quarter budget: deep research, security reviews, infrastructure, and shared tooling across ventures.",
  },
  {
    title: "What Helios is not",
    body: "Helios does not pool client funds, accept deposits, run a public fund, or market yield products. It exists solely to manage VSG's own capital under governed limits.",
  },
  {
    title: "Where it lives",
    body: "Helios sits inside VSG's internal stack alongside our treasury, risk, and engineering functions. It is designed to be explainable to auditors, banking partners, and regulators.",
  },
];

const capabilities = [
  {
    label: "Smoother funding",
    description: "Provide a buffer so high-value ventures are not shut down solely because external markets are noisy.",
  },
  {
    label: "Shared infrastructure",
    description: "Pay for common security, observability, and compliance work that benefits more than one venture.",
  },
  {
    label: "Real-world stress testing",
    description: "Let us run controlled, capital-backed experiments on new rails before they touch client-facing systems.",
  },
];

const governance = [
  {
    label: "Conservative by design",
    description: "Long-term reserve mindset, not high-frequency speculation.",
  },
  {
    label: "Non-custodial rails",
    description: "Where we use cryptographic rails, control stays with VSG; Helios never holds client keys.",
  },
  {
    label: "Audit-ready",
    description: "Every move is traceable so external reviewers can understand where risk sits and how it is controlled.",
  },
];

const stakeholders = [
  {
    label: "Banks & partners",
    description: "Clear separation between client flows and VSG's own capital.",
  },
  {
    label: "Auditors & regulators",
    description: "A single place to understand how balance-sheet risk is managed.",
  },
  {
    label: "Customers & ecosystems",
    description: "Ventures that are less likely to be yanked back or abandoned mid-stream.",
  },
];

export default function Helios() {
  return (
    <Layout>
      <PageMeta
        title="Helios"
        description="Helios is VSG's internal capital engine — a governed system for funding research, infrastructure, and resilience from our own balance sheet, not client deposits."
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
              Internal venture — capital systems
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6">
              Helios: VSG's internal capital engine.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Helios is how we put our own balance sheet to work. It allocates VSG's capital into long-term reserve assets and selective borrowing programs so we can fund research, infrastructure, and resilience without ever touching client deposits or offering yield products.
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

      <section className="py-20" data-testid="section-capabilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Capital Strategy
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              What Helios makes possible for VSG
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Helios is not about chasing short-term trades. Its job is to make the rest of the portfolio more resilient:
            </p>
            <ul className="space-y-3">
              {capabilities.map((item) => (
                <li key={item.label} className="flex items-start gap-3 text-foreground" data-testid={`capability-${item.label.toLowerCase().replace(/\s+/g, "-")}`}>
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

      <section className="py-20 bg-card" data-testid="section-governance">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Risk Framework
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              Governance & risk posture
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Helios operates under explicit limits set by VSG's governance framework. Capital allocation, reserve policies, and borrowing decisions are reviewed against predefined risk tolerances, with separation between those who propose positions and those who approve them.
            </p>
            <ul className="space-y-3">
              {governance.map((item) => (
                <li key={item.label} className="flex items-start gap-3 text-foreground" data-testid={`governance-${item.label.toLowerCase().replace(/\s+/g, "-")}`}>
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

      <section className="py-20" data-testid="section-stakeholders">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Audience
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              Who Helios matters for
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Most institutions will never interact with Helios directly. It matters because it underwrites the stability of everything else we build.
            </p>
            <ul className="space-y-3">
              {stakeholders.map((item) => (
                <li key={item.label} className="flex items-start gap-3 text-foreground" data-testid={`stakeholder-${item.label.toLowerCase().replace(/\s+/g, "-")}`}>
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

      <NextStepBlock
        nextPage="Standards"
        description="See the principles that govern how we design, test, and operate capital systems like Helios."
        href="/approach/standards"
      />
    </Layout>
  );
}
