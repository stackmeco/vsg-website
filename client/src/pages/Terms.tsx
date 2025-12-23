import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Terms() {
  return (
    <Layout>
      <PageMeta 
        title="Legal & Disclaimers — How to Read This Site Safely" 
        description="This site explains how Verifiable Systems Group thinks and operates. It does not offer investment, legal, or tax advice." 
      />
      
      <section className="py-20 lg:py-28 relative overflow-hidden" data-testid="section-legal-hero">
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
              Legal & Disclaimers
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-hero-heading">
              How to read this site safely.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-hero-body">
              This site explains how Verifiable Systems Group thinks and operates. It does not offer investment, legal, or tax advice, and it does not invite you to deposit assets, buy securities, or rely on us as a custodian or adviser.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link href="/">
                <Button size="lg" data-testid="button-back-to-studio">
                  Back to the studio
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-informational">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-informational">
            Informational only
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-informational-1">
            Everything on this site is for informational purposes only. It describes how we structure and operate our own systems and ventures at Verifiable Systems Group.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-informational-2">
            Nothing here is an offer to sell or a solicitation of an offer to buy any security or financial product, and nothing here should be used to make investment, legal, or tax decisions.
          </p>
        </div>
      </section>

      <section className="py-20" data-testid="section-no-advisory">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-no-advisory">
            No advisory relationship
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-no-advisory-1">
            Viewing this site does not create an advisory, fiduciary, client, or professional relationship between you and Verifiable Systems Group.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-no-advisory-2">
            Unless we have a separate, written agreement that says otherwise, we are not acting as your investment adviser, broker, lawyer, or tax professional.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-no-custody">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-no-custody">
            No custody, no yield products
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-no-custody-1">
            We do not operate an exchange, wallet, vault, pooled fund, or yield product for the public.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-no-custody-2">
            We build and run internal systems and ventures. When we talk about capital, treasuries, or balances, we are describing how we handle our own money and infrastructure—not inviting you to deposit assets with us.
          </p>
        </div>
      </section>

      <section className="py-20" data-testid="section-forward-looking">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-forward-looking">
            Forward-looking statements and changes
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-forward-looking-1">
            Some parts of this site describe goals, plans, or expectations. These are forward-looking and may change as we learn. They are not guarantees of future performance or outcomes.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-forward-looking-2">
            We may update or remove content without notice. You should not rely on any single page here as a permanent description of our systems or views.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-verification">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-verification">
            Do your own verification
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-verification-1">
            You should independently verify any information that matters to you. This includes technical claims, risk descriptions, and any statements about systems that move capital or govern participation.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-verification-2">
            If you have questions about how something is worded or what it means, contact us before acting on it.
          </p>
        </div>
      </section>

      <section className="py-16" data-testid="section-contact">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-contact">
            Contact
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-contact">
            <strong className="text-foreground">Verifiable Systems Group LLC</strong><br />
            State of Incorporation: Wyoming, USA<br />
            Email: legal@verifiablesystems.com
          </p>
          <p className="text-xs text-muted-foreground/80 leading-relaxed mt-8" data-testid="text-last-updated">
            Last updated: December 2024
          </p>
        </div>
      </section>
    </Layout>
  );
}
