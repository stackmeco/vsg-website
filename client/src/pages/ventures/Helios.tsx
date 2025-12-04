import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const whatHeliosIs = [
  "An internal execution engine for VSG's own digital asset treasury.",
  "Part of the Capital domain: making assets work without leaving governed control.",
  "AI-native and human-governed: machines scan and simulate; people define mandates, limits, and vetoes.",
  "A way to turn conservative constraints into repeatable playbooks for our other ventures.",
];

const whatHeliosIsNot = [
  "Not a fund, exchange, or wallet product for customers.",
  "Not a pooled investment vehicle or yield product.",
  "Not a promise of returns, yield, or protection for anyone outside VSG.",
  "Not a place where we take custody of client assets or manage outside capital.",
];

const howItWorks = [
  {
    title: "Balance-sheet-first",
    body: "Every path Helios uses touches our own balance sheet first. If a flow fails, we feel it directly and retire that pattern before it ever becomes advice.",
  },
  {
    title: "AI-native, human-governed",
    body: "Machine intelligence scans markets, simulates paths, and flags anomalies. People set mandates, limits, and emergency stops. No fully autonomous loops, no unchecked exposure.",
  },
  {
    title: "Non-custodial by design",
    body: "Helios orchestrates how capital moves across non-custodial rails. It does not pool client funds, hold deposits, or control keys for anyone outside VSG.",
  },
];

const studioFitItems = [
  "Feeds our capital standards and playbooks.",
  "Provides stress data for risk and governance work.",
  "Keeps our advice grounded in systems we actually run.",
];

export default function Helios() {
  return (
    <Layout>
      <PageMeta
        title="Helios — Internal Engine for Resilient Capital"
        description="Helios routes VSG's own digital asset treasury under explicit limits, proving that capital can work without surrendering keys or leaving governed control."
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
              Helios · Capital
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              Helios — resilient capital engine.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base" data-testid="text-hero-body">
              Helios is the internal execution engine we use to route VSG's own digital asset treasury under explicit limits, so capital can work without surrendering control. It exists to make sure our own balance sheet experiences the real stress first—before any pattern leaves the studio.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-why-helios-exists">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-why-helios-exists">
              Why Helios exists
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-why-helios-body">
              Most treasuries are forced to choose between staying idle in the name of safety or chasing yield through opaque intermediaries. We built Helios so our own capital does neither. It routes VSG's digital asset treasury through approved venues under strict limits, giving us evidence about how the rails behave under stress—without handing the keys to anyone else.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-why-helios-scar">
              We've been liquidated by opaque custodians ourselves; Helios is how we make sure the systems we depend on now are governed, inspectable, and reversible when conditions change.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-what-helios-is-not">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border" data-testid="card-what-helios-is">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" aria-hidden="true" />
                  What Helios is
                </h3>
                <ul className="space-y-3">
                  {whatHeliosIs.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed" data-testid={`item-what-is-${index}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border" data-testid="card-what-helios-is-not">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
                  What Helios is not
                </h3>
                <ul className="space-y-3">
                  {whatHeliosIsNot.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed" data-testid={`item-what-is-not-${index}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-how-helios-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-how-helios-works">
              How Helios works (at a distance)
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-how-helios-lead">
              Helios treats our treasury as a governed system, not a trading account. It decides how capital moves based on a set of constraints we can describe, monitor, and roll back.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {howItWorks.map((col) => (
              <Card key={col.title} className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid={`card-${col.title.toLowerCase().replace(/\s+/g, "-").replace(/,/g, "")}`}>
                <CardContent className="flex flex-col h-full p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{col.title}</h3>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{col.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-studio-fit">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2" data-testid="text-studio-eyebrow">
              Studio Integration
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-studio-fit">
              Where Helios fits in VSG
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-studio-body">
              Helios is how we prove the Capital side of our work. It runs alongside Lumina in Truth and the Uniqueness Engine in Dignity, giving us a live view of how conservative, non-custodial treasury patterns behave under real conditions.
            </p>
            <ul className="space-y-3">
              {studioFitItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground" data-testid={`studio-fit-item-${index}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-border" data-testid="section-disclaimer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl" data-testid="text-disclaimer">
            Helios is an internal engine for VSG's own balance sheet. We do not pool client funds, manage outside capital, or market Helios as a yield product. Nothing on this page is investment, legal, or tax advice.
          </p>
        </div>
      </section>

      <NextStepBlock
        label="View All"
        nextPage="Ventures"
        description="See all VSG ventures and how they connect across Truth, Capital, and Dignity."
        href="/ventures"
      />
    </Layout>
  );
}
