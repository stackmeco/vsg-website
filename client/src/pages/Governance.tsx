import { useState } from "react";
import { Layout } from "@/components/Layout";
import { ChangeLogEntry } from "@/components/ChangeLogEntry";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

const principles = [
  {
    title: "Explicit policies",
    description:
      "Every rail we ship ties back to explicit policies—who can do what, under which limits, and what counts as an exception.",
  },
  {
    title: "Human-defined, system-enforced",
    description:
      "Your risk, treasury, and governance teams define the rules. Our rails enforce them in code and route exceptions down your chosen paths.",
  },
  {
    title: "Traceable and reversible where it matters",
    description:
      "We design so that critical actions can be traced back and, where appropriate, reversed or unwound through defined procedures.",
  },
  {
    title: "Least necessary data",
    description:
      "We minimize the data we collect and store. Where possible, we use non-identifying signals instead of full identity.",
  },
  {
    title: "Transparent change",
    description:
      "Material changes to how rails enforce policy are documented and time-stamped. There are no silent rule changes.",
  },
];

const changeLog = [
  {
    date: "2025-11-01",
    version: "v1.0",
    description: "Initial publication of governance principles, simulator, and change log.",
  },
  {
    date: "2025-10-15",
    version: "v0.9",
    description: "Added exception path documentation and audit trail requirements.",
  },
  {
    date: "2025-10-01",
    version: "v0.8",
    description: "Formalized LTV ceiling policies and liquidation ladder procedures.",
  },
];

const disclaimers = [
  "VSG does not provide investment, legal, or tax advice.",
  "VSG does not take discretionary control of client funds.",
  "VSG provides rails and governance mechanisms; partners provide policies and human decision-makers.",
];

const ltvDescriptions: Record<number, string> = {
  30: "Conservative. Fewer exceptions, low liquidation risk, lower available liquidity.",
  50: "Balanced. Some exceptions in stress, controlled liquidation risk.",
  70: "Aggressive. Higher exception volume and increased chance of forced liquidations in stress.",
};

export default function Governance() {
  const [ltvValue, setLtvValue] = useState([50]);

  const getLtvDescription = () => {
    const value = ltvValue[0];
    if (value <= 35) return ltvDescriptions[30];
    if (value <= 55) return ltvDescriptions[50];
    return ltvDescriptions[70];
  };

  return (
    <Layout>
      <section className="py-20" data-testid="section-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary mb-4 tracking-wide">
              Governance
            </p>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground leading-tight tracking-tight mb-6">
              Governance as code, not a checkbox.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We encode policies, limits, and exception paths into the rails
              themselves—or we don't ship. This page explains how that works and
              how we change it.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card" data-testid="section-why">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
              Why governance matters
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              AI-native finance raises the stakes. Agents can move value at
              millisecond speed. Without clear limits and veto paths, mistakes
              scale faster than humans can react. VSG exists to make those
              limits explicit, enforceable, and inspectable.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-principles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl text-foreground mb-8">
            Principles
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {principles.map((principle, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-mono text-sm font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-simulator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
              See how limits change the risk profile
            </h2>
            <p className="text-muted-foreground mb-8">
              This simple simulator helps illustrate how policy choices—like LTV
              ceilings—affect exception volume and liquidation risk. It's not a
              predictor; it's a way to reason about trade-offs.
            </p>

            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-sm font-medium text-foreground">
                      LTV ceiling
                    </label>
                    <span className="text-sm font-mono text-primary">
                      {ltvValue[0]}%
                    </span>
                  </div>
                  <Slider
                    value={ltvValue}
                    onValueChange={setLtvValue}
                    min={20}
                    max={80}
                    step={5}
                    className="w-full"
                    data-testid="slider-ltv"
                  />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>Conservative</span>
                    <span>Aggressive</span>
                  </div>
                </div>

                <div className="p-4 bg-card rounded-lg border border-card-border">
                  <p className="text-sm text-foreground">{getLtvDescription()}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-changelog">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
              Governance change log
            </h2>
            <p className="text-muted-foreground mb-2">
              We maintain a public summary of material updates to the policies
              and mechanisms that govern our rails. This is a human-readable
              record of changes that matter to partners and stakeholders.
            </p>
            <p className="text-xs text-muted-foreground mb-8 italic">
              Note: This public change log summarizes material updates for
              awareness. It is not an exhaustive legal record of every
              operational commit or minor policy tweak. Formal audit logs are
              maintained internally.
            </p>

            <div className="bg-card border border-card-border rounded-xl p-6">
              {changeLog.map((entry) => (
                <ChangeLogEntry key={entry.version} {...entry} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card" data-testid="section-disclaimers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl text-foreground mb-6">
              Legal & Disclaimers
            </h2>
            <ul className="space-y-3">
              {disclaimers.map((disclaimer, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    {disclaimer}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
