import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X } from "lucide-react";

const whatVsgIs = [
  "We design architectures that embed verifiability from the foundation.",
  "We prove them in our own ventures and internal systems before sharing patterns.",
  "We operate under explicit constraints, governance, and rollback mechanisms.",
];

const whatVsgIsNot = [
  "Not a generic AI startup chasing trends or scale without safeguards.",
  "Not a consultancy selling advice without ownership of the outcomes.",
  "Not a custodial platform, yield product, or DeFi protocol pooling external funds.",
];

const domains = [
  {
    title: "Truth",
    body: "Truth means decisions rest on evidence, not stories. We anchor key behaviours to provenance and tamper-evident logs so you can inspect how an outcome was formed instead of guessing.",
  },
  {
    title: "Capital",
    body: "Capital should be able to work without leaving governed control. In Capital, we run our own treasury through non-custodial rails with explicit limits, observability, and rollback paths.",
  },
  {
    title: "Dignity",
    body: "Dignity means people keep control over how they appear in systems. We enable proof of presence and eligibility without turning people into products in someone else's database.",
  },
];

const purposeVisionMission = [
  {
    title: "Purpose — why we exist",
    shortLine: "To democratize institutional-grade leverage.",
    supportingText: "We exist to dismantle the barriers between individuals and elite financial tools, moving power from centralized gatekeepers to the edge so smaller actors can audit, control, and compound without extraction.",
  },
  {
    title: "Vision — the world we want",
    shortLine: "A future where trust is an engineered feature, not a gamble.",
    supportingText: "We are working toward a world where systems are auditable by default, intelligence is anchored to facts, and financial assets work for you without leaving your control.",
  },
  {
    title: "Mission — what we do",
    shortLine: "We engineer the infrastructure of verifiable autonomy.",
    supportingText: "We combine cryptography and machine intelligence to validate evidence, preserve capital under non-custodial control, and protect personhood without surveillance.",
  },
];

const howWeWork = [
  {
    title: "Balance-sheet-first",
    body: "We wire new rails through our own balance sheet and operations first so we feel the stress and failure modes directly before anyone else adopts the pattern.",
  },
  {
    title: "AI-native, human-governed",
    body: "Machine intelligence scans, simulates, and flags anomalies; people define mandates, limits, and veto. AI is part of the mechanism, not the boss.",
  },
  {
    title: "Non-custodial by design",
    body: "Our systems orchestrate workflows, proofs, and controls. They do not pool client funds or seize keys.",
  },
];

export default function Studio() {
  return (
    <Layout>
      <PageMeta
        title="VSG Studio — AI-Native, Non-Custodial Venture Studio"
        description="Verifiable Systems Group designs and proves verifiable systems for capital, identity, and intelligence on its own balance sheet first, under explicit limits and non-custodial control."
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
              AI-native venture studio
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              We engineer the infrastructure of verifiable autonomy.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground" data-testid="text-hero-body">
              Verifiable Systems Group is an AI-native, cryptography-grounded venture studio. We build systems for capital, identity, and intelligence, run them on our own balance sheet first, and only share patterns once they have survived real stress.
            </p>
            <div className="mt-8">
              <Link href="/ventures">
                <Button size="lg" data-testid="button-explore-ventures">
                  Explore the ventures
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-what-vsg-is">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-what-vsg-is">
                What VSG is
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-what-vsg-is">
                Verifiable Systems Group (VSG) is an AI-native, cryptography-grounded venture studio that builds verifiable systems for capital, identity, and intelligence — on our own balance sheet first.
              </p>
              <ul className="space-y-3">
                {whatVsgIs.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-foreground"
                    data-testid={`list-what-vsg-is-${index}`}
                  >
                    <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-what-vsg-is-not">
                What VSG is not
              </h2>
              <ul className="space-y-3">
                {whatVsgIsNot.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-foreground"
                    data-testid={`list-what-vsg-is-not-${index}`}
                  >
                    <X className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-domains">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground" data-testid="heading-domains">
              Three domains we operate in
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {domains.map((item) => {
              const slugTitle = item.title.toLowerCase();
              return (
                <Card
                  key={item.title}
                  className="flex flex-col h-full bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                  data-testid={`card-domain-${slugTitle}`}
                >
                  <CardContent className="flex flex-col h-full p-6">
                    <h3 className="font-heading font-semibold text-foreground mb-3" data-testid={`heading-domain-${slugTitle}`}>
                      {item.title}
                    </h3>
                    <p className="flex-1 text-sm text-muted-foreground leading-relaxed" data-testid={`text-domain-${slugTitle}`}>
                      {item.body}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-purpose-vision-mission">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground" data-testid="heading-purpose-vision-mission">
              Purpose, vision, and mission
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {purposeVisionMission.map((item) => {
              const slugTitle = item.title.split(" — ")[0].toLowerCase();
              return (
                <Card
                  key={item.title}
                  className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                  data-testid={`card-${slugTitle}`}
                >
                  <CardContent className="flex flex-col h-full p-6">
                    <h3 className="font-heading font-semibold text-foreground mb-3" data-testid={`heading-${slugTitle}`}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-foreground font-medium mb-2" data-testid={`text-${slugTitle}-short`}>
                      {item.shortLine}
                    </p>
                    <p className="flex-1 text-sm text-muted-foreground leading-relaxed" data-testid={`text-${slugTitle}-body`}>
                      {item.supportingText}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-how-we-work">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground" data-testid="heading-how-we-work">
              How we work
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {howWeWork.map((item) => {
              const slugTitle = item.title.toLowerCase().replace(/\s+/g, "-").replace(/,/g, "");
              return (
                <Card
                  key={item.title}
                  className="flex flex-col h-full bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                  data-testid={`card-${slugTitle}`}
                >
                  <CardContent className="flex flex-col h-full p-6">
                    <h3 className="font-heading font-semibold text-foreground mb-3" data-testid={`heading-${slugTitle}`}>
                      {item.title}
                    </h3>
                    <p className="flex-1 text-sm text-muted-foreground leading-relaxed" data-testid={`text-${slugTitle}`}>
                      {item.body}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
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
