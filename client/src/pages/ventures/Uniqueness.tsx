import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight } from "lucide-react";

const whatUniquenessIs = [
  {
    title: "Personhood, not profile",
    body: "The goal is to prove that a single person is present, not to build a detailed profile. The system should know 'one real participant, once'—and as little else as possible.",
  },
  {
    title: "Dignity by design",
    body: "Identity checks are treated as something owed respect, not a resource to extract. The default is minimal disclosure, reversible participation, and clear boundaries on what can be linked.",
  },
  {
    title: "Infrastructure under constraints",
    body: "Uniqueness Engine is built as rails that other systems can integrate, with strict rules on how signals are generated, held, and proved. It is not a free-form data lake.",
  },
];

const problemCards = [
  {
    title: "Sybil and bot abuse",
    body: "Without a way to enforce one-person-one-presence, a small number of actors can flood systems with fake accounts—distorting votes, incentives, and outcomes.",
  },
  {
    title: "Overexposed identities",
    body: "The common fix is to collect more data: IDs, financial histories, biometrics. Once captured, that data is hard to contain and easy to repurpose.",
  },
  {
    title: "Lock-in by design",
    body: "Central identity providers become gatekeepers. Leaving a platform can mean leaving behind verifications, reputation, and access—all tied up inside one company's database.",
  },
];

const howUniquenessWorks = [
  {
    title: "Gather minimal signals",
    body: "We start from the principle of sufficiency: collect only what is strictly needed to distinguish one presence from another, under clearly defined constraints.",
  },
  {
    title: "Derive privacy-preserving proofs",
    body: "Signals are transformed into proofs that answer specific questions—such as 'is this the same participant?' or 'has this participant already claimed a benefit?'—without exposing raw inputs.",
  },
  {
    title: "Reuse without rehousing",
    body: "Participants should be able to carry proofs between compatible systems without re-enrolling everywhere or handing new copies of sensitive data to each service.",
  },
];

const threeQuestions = [
  {
    label: "Truth",
    text: "Any uniqueness claim must be grounded in checks that can be inspected and challenged. We care not just that a proof exists, but that it comes from a process with clear limits and failure modes.",
  },
  {
    label: "Capital",
    text: "Who counts as 'one participant' shapes how resources, rewards, and protections are allocated. Uniqueness Engine is designed to prevent a small number of actors from quietly capturing outsized benefits.",
  },
  {
    label: "Dignity",
    text: "Dignity means letting people prove enough to participate without submitting to surveillance. Uniqueness Engine aims to separate 'Can you join?' from 'May we follow you everywhere?'",
  },
];

const useCases = [
  {
    title: "Sybil-resistant access",
    body: "Helping governed communities and applications enforce 'one person, one participation' in sensitive actions such as votes, allowlists, or gated discussions.",
  },
  {
    title: "Fair drops and incentives",
    body: "Reducing the impact of bots and duplicate accounts in reward programs and distributions, so a small group cannot quietly claim most of the value.",
  },
  {
    title: "Reusable eligibility proofs",
    body: "Letting people prove they meet a requirement—such as residency in a region or being a returning participant—without repeatedly disclosing full identity details.",
  },
];

const uniquenessIs = [
  "Infrastructure for proving personhood and presence without overexposure.",
  "A Dignity-domain venture that we run in internal experiments and pilots first.",
  "A way for systems to enforce one-person-one-presence under clear, inspectable constraints.",
];

const uniquenessIsNot = [
  "Not a generic KYC provider or data broker.",
  "Not a centralized identity platform that tracks people across every service.",
  "Not an offer of investment, yield, or securities.",
];

export default function Uniqueness() {
  return (
    <Layout>
      <PageMeta
        title="Uniqueness Engine — Personhood Without Exposure"
        description="Uniqueness Engine is infrastructure for proving that one person is present without forcing them to hand over their life story. It gives networks a way to resist bots and duplicates while protecting dignity and privacy."
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
              Dignity · Venture
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              Uniqueness Engine proves personhood without exposure.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-hero-body">
              Uniqueness Engine focuses on one question: how do you let a system know that one real person is present—once—without forcing them to hand over their life story? It is infrastructure for one-person-one-presence, not another database of identities.
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed" data-testid="text-hero-secondary">
              We run Uniqueness Engine in internal experiments first, so every pattern we share has been tested against real abuse attempts, edge cases, and privacy concerns.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button asChild size="lg" data-testid="button-back-to-ventures">
                <Link href="/ventures">
                  Back to ventures
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" data-testid="button-see-how-we-work">
                <Link href="/approach">
                  See how we work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-what-uniqueness-is">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-what-uniqueness-is">
              What Uniqueness Engine is
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-what-uniqueness-is">
              Uniqueness Engine is infrastructure for proving that one person is present without turning them into a permanent record. It uses privacy-preserving cryptography and controlled signals to help systems distinguish real participants from duplicates and automation—while letting people keep control over what they share, where, and when.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whatUniquenessIs.map((card, index) => (
              <Card 
                key={index} 
                className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" 
                data-testid={`card-what-is-${index}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{card.title}</h3>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{card.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-problem">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-problem">
              The problem Uniqueness Engine addresses
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-problem">
              Most systems that need to know 'who is here' reach for the same blunt tools: government IDs, centralized accounts, or surveillance-heavy scoring. That creates two kinds of harm at once: fake participation slips through, while real people are overexposed.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {problemCards.map((card, index) => (
              <Card 
                key={index} 
                className="flex flex-col h-full bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" 
                data-testid={`card-problem-${index}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{card.title}</h3>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{card.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-how-uniqueness-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-how-uniqueness-works">
              How Uniqueness Engine works (high-level)
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-how-uniqueness-works">
              Uniqueness Engine is built as a sequence of checks and proofs. It assembles just enough signal to distinguish one real person from duplicates and automation, then turns that into reusable proofs that reveal as little as possible about the person behind them.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {howUniquenessWorks.map((card, index) => (
              <Card 
                key={index} 
                className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" 
                data-testid={`card-how-works-${index}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{card.title}</h3>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{card.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-xs text-muted-foreground/80 leading-relaxed mt-6 max-w-3xl" data-testid="text-how-works-note">
            The target state is simple: systems get the assurance they need; people keep control over how they show up.
          </p>
        </div>
      </section>

      <section className="py-20" data-testid="section-three-questions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-three-questions">
              Uniqueness Engine and the three questions
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-three-questions">
              Uniqueness Engine lives primarily in Dignity, but any system that touches identity will affect Truth and Capital as well.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {threeQuestions.map((item, index) => (
              <Card 
                key={index} 
                className="flex flex-col h-full bg-card border-border" 
                data-testid={`card-question-${item.label.toLowerCase()}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{item.label}</h3>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-use-cases">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-use-cases">
              Use cases Uniqueness Engine is exploring
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-use-cases">
              Because Uniqueness Engine is infrastructure, it can sit underneath different systems that need one-person-one-presence guarantees. We focus first on uses where abuse and overexposure both carry real cost.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((card, index) => (
              <Card 
                key={index} 
                className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" 
                data-testid={`card-use-case-${index}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{card.title}</h3>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{card.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-is-is-not">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-8" data-testid="heading-is-is-not">
            What Uniqueness Engine is / is not
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-card border-border" data-testid="card-uniqueness-is">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" aria-hidden="true" />
                  Uniqueness Engine is
                </h3>
                <ul className="space-y-3">
                  {uniquenessIs.map((item, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`uniqueness-is-${index}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card border-border" data-testid="card-uniqueness-is-not">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
                  Uniqueness Engine is not
                </h3>
                <ul className="space-y-3">
                  {uniquenessIsNot.map((item, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`uniqueness-is-not-${index}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="text-xs text-muted-foreground/80 leading-relaxed max-w-3xl" data-testid="text-uniqueness-disclaimer">
            This page describes how we design and use Uniqueness Engine for our own needs. It is not investment, legal, tax, or compliance advice.
          </p>
        </div>
      </section>

      <section className="py-12 bg-card" data-testid="section-cross-links">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-6">
            <Button asChild variant="outline" size="sm" data-testid="link-all-ventures">
              <Link href="/ventures">
                Back to all ventures
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" data-testid="link-insights">
              <Link href="/insights">
                Read related insights
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" data-testid="link-approach">
              <Link href="/approach">
                Review our approach
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Approach"
        description="Our approach and standards describe how Truth, Capital, and Dignity shape systems that touch identity and access."
        href="/approach"
      />
    </Layout>
  );
}
