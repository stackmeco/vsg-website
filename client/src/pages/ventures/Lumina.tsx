import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";

const columns = [
  {
    title: "The problem Lumina addresses",
    body: "Authenticity and grading are often slow, opaque, and dependent on a single opinion. For many markets, that creates delays, disputes, and pricing that feels more like guesswork than infrastructure.",
  },
  {
    title: "Lumina's focus",
    body: "Lumina focuses on building rails that can combine human expertise, imaging, and other data into structured signals. The aim is not to replace existing actors, but to give ecosystems better tools to see what they are trading.",
  },
  {
    title: "What Lumina is not",
    body: "Lumina is not a marketplace, escrow service, or grading company. It does not hold assets or execute trades. It is an infrastructure venture focused on how authenticity and condition data move between participants.",
  },
];

const possibilities = [
  {
    label: "Faster decisions",
    description: "Buyers and sellers can see the same structured view of risk without waiting weeks for manual back-and-forth.",
  },
  {
    label: "Better routing",
    description: "Markets, platforms, and services can route items and orders based on verified signals, not just free-text notes.",
  },
  {
    label: "Shared language",
    description: "Different participants can talk about the same item using consistent terms and states instead of bespoke spreadsheets.",
  },
];

export default function Lumina() {
  return (
    <Layout>
      <PageMeta
        title="Lumina"
        description="Lumina is a market-infrastructure venture exploring digital authenticity rails for unique items—so provenance, condition, and risk can be inspected instead of guessed."
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
              Market infrastructure — authenticity systems
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6">
              Lumina: digital authenticity rails for unique items.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Lumina explores how to turn fragmented signals about authenticity, condition, and risk into something markets can actually use. Instead of relying on screenshots and scattered opinions, we work toward verifiable, machine-readable views of high-value items.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-columns">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {columns.map((col) => (
              <Card key={col.title} className="flex flex-col h-full bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid={`card-${col.title.toLowerCase().replace(/\s+/g, "-").replace(/'/g, "")}`}>
                <CardContent className="flex flex-col h-full p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{col.title}</h3>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{col.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-possibilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Value Proposition
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              What Lumina makes possible
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              If we can make authenticity and condition more visible, we can improve more than just pricing:
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

      <section className="py-20 bg-card" data-testid="section-status">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Current Stage
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              Where Lumina is in the process
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Lumina is currently in the build and early-validation stages. We are focused on tightly scoped pilots and internal tooling rather than broad public launches. Any expansion into production environments will follow VSG's venture process and governance standards.
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              Nothing on this page should be read as a commitment to support specific assets, marketplaces, or partners. It describes a direction of research, not a live product catalogue.
            </p>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Process"
        description="See how ventures like Lumina move from early research into governed infrastructure."
        href="/approach/process"
      />
    </Layout>
  );
}
