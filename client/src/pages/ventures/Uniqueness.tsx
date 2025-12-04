import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const whatUniquenessIs = [
  "Infrastructure for proving one person's presence without exposing their full identity.",
  "A Dignity-domain venture: protecting personhood and time while enabling sybil resistance.",
  "AI-native and human-governed: machine intelligence helps detect patterns and anomalies; people define rules, thresholds, and recourse.",
  "A way to give communities and systems a stronger sense of 'who is here' without collecting more than they need.",
];

const whatUniquenessIsNot = [
  "Not a KYC provider or government ID system.",
  "Not a social credit score or surveillance feed.",
  "Not a centralized biometric database or data broker.",
  "Not a promise to eliminate all abuse—its job is to raise the cost of faking presence, not to rank people.",
];

const howItWorks = [
  {
    title: "Proofs, not dossiers",
    body: "Instead of collecting and storing rich identity records, Uniqueness Engine focuses on generating proofs that a single participant is present or eligible, which can be checked by the system without revealing everything about the person.",
  },
  {
    title: "AI-native, human-governed",
    body: "Machine intelligence helps spot suspicious patterns and attempt clusters; people define what counts as abuse, what thresholds to apply, and how to handle edge cases and appeals.",
  },
  {
    title: "Dignity by design",
    body: "The design favours minimal disclosure and clear limits. People keep control over what they share, and systems get just enough assurance to function without resorting to blanket surveillance.",
  },
];

const whoUniquenessIsFor = [
  {
    label: "Communities and networks",
    description: "Communities that want to limit bots, duplicate accounts, or spam without forcing people through intrusive checks.",
  },
  {
    label: "Protocols and platforms",
    description: "Protocols and platforms that need stronger sybil resistance for voting, access, or rewards, but want to avoid becoming custodians of sensitive identity data.",
  },
  {
    label: "Ecosystem builders",
    description: "Builders who want personhood to be something you can prove on your own terms, not something held in someone else's database.",
  },
];

const studioFitItems = [
  "Feeds our standards for privacy-preserving participation.",
  "Informs how we design access controls and rate limits in other ventures.",
  "Demonstrates that stronger defences do not have to mean more exposure.",
];

export default function Uniqueness() {
  return (
    <Layout>
      <PageMeta
        title="Uniqueness Engine — Personhood Without Exposure"
        description="Uniqueness Engine proves one person is present without forcing full exposure, enabling sybil-resistant participation while keeping dignity and control intact."
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
              Uniqueness Engine · Dignity
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              Uniqueness Engine — personhood without exposure.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base" data-testid="text-hero-body">
              Uniqueness Engine proves that one person is present without forcing them to hand over their life story. It helps communities and systems resist bots and duplicates while letting people keep control over how they appear and what they reveal.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-why-uniqueness-exists">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-why-uniqueness-exists">
              Why Uniqueness Engine exists
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-why-uniqueness-body-1">
              Most systems that try to stop bots and duplicates do it by collecting more data: IDs, selfies, device fingerprints, social graphs. That pushes people toward a choice between being excluded or being over-exposed. Uniqueness Engine exists to break that trade-off.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-why-uniqueness-body-2">
              Instead of building another database of identities, we focus on proving that one real person is present at a time, in a way that can be checked by the system but controlled by the person. The goal is simple: make it harder for attackers to fake presence, without turning participants into products.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-what-uniqueness-is-not">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border" data-testid="card-what-uniqueness-is">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" aria-hidden="true" />
                  What Uniqueness Engine is
                </h3>
                <ul className="space-y-3">
                  {whatUniquenessIs.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed" data-testid={`item-what-is-${index}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border" data-testid="card-what-uniqueness-is-not">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
                  What Uniqueness Engine is not
                </h3>
                <ul className="space-y-3">
                  {whatUniquenessIsNot.map((item, index) => (
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

      <section className="py-20 bg-card" data-testid="section-how-uniqueness-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-how-uniqueness-works">
              How Uniqueness Engine works (at a distance)
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-how-uniqueness-lead">
              Uniqueness Engine treats participation as a proof problem: can this system be confident that one real person is present, without learning more than it needs to?
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

      <section className="py-20" data-testid="section-who-uniqueness-is-for">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2" data-testid="text-audience-eyebrow">
              Audience
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-who-uniqueness-is-for">
              Who Uniqueness Engine is for
            </h2>
            <ul className="space-y-4">
              {whoUniquenessIsFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground" data-testid={`audience-${item.label.toLowerCase().replace(/\s+/g, "-")}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                  <span>
                    <strong>{item.label}</strong> — {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-studio-fit">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2" data-testid="text-studio-eyebrow">
              Studio Integration
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-studio-fit">
              Where Uniqueness Engine fits in VSG
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-studio-body">
              Uniqueness Engine is how we prove the Dignity side of our work. It runs alongside Lumina in Truth and Helios in Capital, showing how AI-native systems can protect personhood and time while still giving systems what they need to function.
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
            Uniqueness Engine is infrastructure for presence and personhood, not a government ID, KYC provider, or social credit system. Nothing on this page is legal, regulatory, or compliance advice.
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
