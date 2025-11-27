import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Users, 
  ArrowRight,
  Lock,
  CheckCircle,
  XCircle,
  FileText,
  AlertTriangle,
  Scale
} from "lucide-react";

const capitalControls = [
  "Member loans, not mystery money — funds from members are documented loans, not hidden equity",
  "Distribution waterfall — creditors first, then loan repayment, then (if any) equity distributions",
  "No unsupervised on-chain moves — every treasury transaction requires a signed Transaction Authorization Record (TAR)",
];

const thingsWeWontDo = [
  "We do not offer or sell tokens as investments",
  "No opaque yield products where you can't inspect the mechanics",
  "No hidden rehypothecation of user assets",
  "No routing around sanctions, identity verification (KYC/AML), or geofencing obligations",
];

const projectGovernance = [
  {
    name: "Helios",
    status: "Internal Alpha",
    rules: [
      "Internal capital only — no external deposits; operates on VSG treasury exclusively",
      "Position limits — capped percentage of borrowed stablecoins at any time",
      "Drawdown triggers — pre-defined loss thresholds activate capital reduction",
      "Manual oversight — automated execution paired with alerts and human verification",
    ],
  },
  {
    name: "Stackme",
    status: "Architecture",
    rules: [
      "Non-custodial architecture — user retains key control; interface is guidance layer",
      "Solvency controls — graduated liquidation tranches reduce forced-sale risk",
      "Regulatory gate — full compliance review required before deployment",
    ],
  },
  {
    name: "Lumina",
    status: "Specification",
    rules: [
      "Verifiable provenance — metadata, grading, and chain-of-custody attestation",
      "No return guarantees — explicit disclosure of speculative nature",
      "Fee transparency — all costs and rights disclosed before instrument issuance",
    ],
  },
  {
    name: "Uniqueness Engine",
    status: "Research",
    rules: [
      "Privacy-first — no deployment without explicit privacy model",
      "Consent architecture — explicit opt-in mechanics required",
      "Regulatory clearance — KYC/AML impact assessment before any implementation",
    ],
  },
];

export default function Governance() {
  return (
    <Layout>
      <PageMeta 
        title="Governance" 
        description="How Verified Systems is governed: decision rights, BTC treasury policy, risk controls, and our regulatory stance. Transparency over theater." 
      />
      
      <section className="py-20 lg:py-28 relative" data-testid="section-hero">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-3xl sm:text-[2.5rem] text-foreground leading-tight tracking-tight mb-6">
              Governance, risk & compliance
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We work at the edge of AI, Digital Assets, and Verifiable Systems. That edge only matters if people can understand the risks and the rules.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              This page explains how Verified Systems (Verified Systems Group LLC, "VSG") is governed today: who decides what, how we treat our Bitcoin treasury, and how we approach regulation and compliance as we move projects from R&D to reality.
            </p>

            <nav className="bg-card border border-border rounded-lg p-5" aria-label="Table of contents" data-testid="nav-toc">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                On this page
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="#structure" className="text-sm text-foreground hover:text-primary transition-colors" data-testid="link-toc-structure">
                    Legal structure
                  </a>
                </li>
                <li>
                  <a href="#treasury" className="text-sm text-foreground hover:text-primary transition-colors" data-testid="link-toc-treasury">
                    BTC treasury policy
                  </a>
                </li>
                <li>
                  <a href="#risk" className="text-sm text-foreground hover:text-primary transition-colors" data-testid="link-toc-risk">
                    Risk governance
                  </a>
                </li>
                <li>
                  <a href="#regulatory" className="text-sm text-foreground hover:text-primary transition-colors" data-testid="link-toc-regulatory">
                    Regulatory stance
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section id="structure" className="py-16 bg-card scroll-mt-20" data-testid="section-structure">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
              Legal structure
            </p>
            <h2 className="font-heading font-semibold text-2xl sm:text-[2rem] text-foreground mb-4">
              How the company is governed
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Verified Systems Group LLC is a manager-managed Wyoming LLC, foreign-qualified in Massachusetts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">Manager</h3>
                    <p className="text-sm text-muted-foreground">Final authority</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Sole Manager with final authority over business affairs. Also acts as CEO and Controller. Has 100% voting power on operational matters.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <Users className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">COO</h3>
                    <p className="text-sm text-muted-foreground">Day-to-day operations</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Responsible for day-to-day operations as delegated. Cannot sign contracts, approve major expenditures, or authorize on-chain treasury moves without explicit written approval.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-background border-border">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Fundamental decisions</strong> (selling substantially all assets, admitting new members) require unanimous written consent of all members.
              </p>
            </CardContent>
          </Card>

        </div>
      </section>

      <section id="treasury" className="py-20 scroll-mt-20" data-testid="section-treasury">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
              Capital governance
            </p>
            <h2 className="font-heading font-semibold text-2xl sm:text-[2rem] text-foreground mb-4">
              BTC treasury: what it is (and isn't)
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our treasury is Bitcoin-first and policy-driven. It is not a DeFi "product" — it's our own balance sheet.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                How the collateral loop works
              </h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 text-sm font-mono">1</span>
                  <p className="text-foreground pt-1">Post a risk-managed portion of company BTC as collateral in approved, non-custodial lending protocols.</p>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 text-sm font-mono">2</span>
                  <p className="text-foreground pt-1">Borrow stablecoins at conservative loan-to-value ratio (LTV) (target ~35%, hard cap 50%).</p>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 text-sm font-mono">3</span>
                  <p className="text-foreground pt-1">Use borrowed funds for operating runway, internal R&D, or selectively accumulating more BTC.</p>
                </li>
              </ol>
            </div>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-destructive" />
                  What we are not doing
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                    Offering yield products to the public
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                    Running a pooled investment vehicle
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                    Promising returns or fixed income
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  This mirrors how some public companies use Bitcoin as a treasury reserve, but at far smaller scale and with more conservative leverage.
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
              Capital controls
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {capitalControls.map((control, index) => (
                <Card key={index} className="bg-card border-border" data-testid={`card-control-${index + 1}`}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Lock className="w-4 h-4 text-primary" />
                      <span className="text-xs font-mono text-muted-foreground">Control {index + 1}</span>
                    </div>
                    <p className="text-sm text-foreground">{control}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4 font-mono">
              No TAR, no transaction.
            </p>
          </div>
        </div>
      </section>

      <section id="risk" className="py-20 bg-card scroll-mt-20" data-testid="section-risk">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
              Risk governance
            </p>
            <h2 className="font-heading font-semibold text-2xl sm:text-[2rem] text-foreground mb-4">
              How we cap risk before anything touches capital or users
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We're pre-launch on every project. Governance here is about capping risk during development, not describing a fantasy future state.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-accent-warm" />
                  <h3 className="font-heading font-semibold text-foreground">Stage-gates</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Every project moves through defined stages: Idea → Prototype → Internal → Venture. Moving stages requires joint decision from both founders.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-primary" />
                  <h3 className="font-heading font-semibold text-foreground">Risk memo for each stage</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>What can go wrong?</li>
                  <li>Max loss we're willing to tolerate.</li>
                  <li>How we would shut it down safely.</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
            Project-specific governance
          </h3>
          <div className="space-y-4">
            {projectGovernance.map((project) => (
              <Card key={project.name} className="bg-background border-border" data-testid={`card-governance-${project.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <h4 className="font-heading font-semibold text-lg text-foreground">{project.name}</h4>
                    <span className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded" data-testid={`status-${project.name.toLowerCase().replace(/\s+/g, "-")}`}>
                      {project.status}
                    </span>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {project.rules.map((rule, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {rule}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="regulatory" className="py-20 scroll-mt-20" data-testid="section-regulatory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
              Regulatory stance
            </p>
            <h2 className="font-heading font-semibold text-2xl sm:text-[2rem] text-foreground mb-4">
              Regulatory Posture: Pre-Product
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Compliance architecture defined before deployment. No products are live; this documents the framework for when they are.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                Where we are today
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  US-based LLC with crypto-first accounting (books in Xero, digital asset sub-ledgers via Cryptoworth, specific-identification cost basis for tax reporting)
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Website and Library are informational only — no offers to invest, no live financial products
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Any BTC borrowing is on the company's own behalf, via non-custodial protocols, under internal risk limits
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                How we approach product regulation
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-foreground">
                  <Scale className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Jurisdiction-by-jurisdiction analysis</strong> — US (FinCEN, SEC/CFTC, state rules), EU/UK (MiCA and related frameworks)</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <Scale className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Non-custodial does not mean regulation-free</strong> — reduces some obligations but doesn't eliminate consumer-protection or financial-crime requirements</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <Scale className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>AI = high-risk by default</strong> — anywhere AI touches lending, identity, or risk classification, we treat it as high-risk (EU AI Act spirit)</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <Scale className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Licensing when required</strong> — get licenses, partner with regulated entities, or change the design</span>
                </li>
              </ul>
            </div>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-destructive" />
                Operational Prohibitions
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {thingsWeWontDo.map((item, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4 italic">
                These constraints are binding. Violations trigger immediate remediation.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-heading font-semibold text-2xl sm:text-[2rem] text-foreground mb-6">
              Want to discuss governance?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For regulators and compliance teams, we share deeper materials (business plans, architecture diagrams, draft policies) under NDA. For partners working in AI, digital assets, or risk/compliance who see alignment, reach out.
            </p>
            <Link href="/contact">
              <Button data-testid="button-contact-governance">
                Talk to us about governance
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Library"
        description="Read our notes, insights, and updates."
        href="/library"
      />
    </Layout>
  );
}
