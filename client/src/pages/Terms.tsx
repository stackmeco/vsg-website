import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";

export default function Terms() {
  return (
    <Layout>
      <PageMeta 
        title="Terms of Use" 
        description="Terms governing your use of the Verified Systems website. This is an informational site, not a financial service." 
      />
      <section className="py-20 lg:py-28" data-testid="section-terms">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-3xl sm:text-[2.5rem] text-foreground leading-tight tracking-tight mb-8">
            Terms of Use
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            Last updated: November 26, 2025
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="font-mono text-xs uppercase tracking-wider text-primary mb-4">
                About this site
              </h2>
              <p className="text-foreground leading-relaxed">
                This website is operated by Verified Systems Group LLC ("VSG," "we," "us"). It provides general information about our company, our research, and our pipeline projects. Nothing on this site constitutes financial advice, an offer to invest, or a solicitation of any kind.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-xs uppercase tracking-wider text-primary mb-4">
                No financial advice
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                The content on this website, including our Library articles, is for informational purposes only. It should not be construed as:
              </p>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Investment advice or recommendations
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  An offer to sell or solicitation to buy any securities
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Tax, legal, or accounting advice
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-mono text-xs uppercase tracking-wider text-primary mb-4">
                Forward-looking statements
              </h2>
              <p className="text-foreground leading-relaxed">
                Our pipeline and roadmap descriptions contain forward-looking statements about products and services that are in development. These are subject to change and may never launch. We make no guarantees about timelines, features, or outcomes.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-xs uppercase tracking-wider text-primary mb-4">
                Intellectual property
              </h2>
              <p className="text-foreground leading-relaxed">
                All content on this site, including text, graphics, and code, is the property of Verified Systems Group LLC unless otherwise noted. You may not reproduce, distribute, or create derivative works without our written permission.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-xs uppercase tracking-wider text-primary mb-4">
                Limitation of liability
              </h2>
              <p className="text-foreground leading-relaxed">
                This site is provided "as is" without warranties of any kind. VSG shall not be liable for any damages arising from your use of this site or reliance on any information provided here.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-xs uppercase tracking-wider text-primary mb-4">
                Governing law
              </h2>
              <p className="text-foreground leading-relaxed">
                These terms are governed by the laws of the State of Wyoming, United States.
              </p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
