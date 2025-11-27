import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";

export default function Privacy() {
  return (
    <Layout>
      <PageMeta 
        title="Privacy Policy" 
        description="How Verified Systems handles your data. We collect minimal information and never sell it." 
      />
      <section className="py-20 lg:py-28" data-testid="section-privacy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-3xl sm:text-[2.5rem] text-foreground leading-tight tracking-tight mb-8">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            Last updated: November 26, 2025
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
                What we collect
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                When you contact us through our form, we collect:
              </p>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Your name and email address
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Your organization and role (if provided)
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  The content of your message
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
                How we use it
              </h2>
              <p className="text-foreground leading-relaxed">
                We use this information solely to respond to your inquiry. If you opt in to updates, we may occasionally send relevant information about our work. That's it.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
                What we don't do
              </h2>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  We don't sell your information
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  We don't share it with third parties for marketing
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  We don't use tracking pixels or invasive analytics
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
                Cookies
              </h2>
              <p className="text-foreground leading-relaxed">
                This site uses only essential cookies required for basic functionality. We don't use advertising cookies or third-party trackers.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
                Contact
              </h2>
              <p className="text-foreground leading-relaxed">
                Questions about this policy? Reach out via our contact form.
              </p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
