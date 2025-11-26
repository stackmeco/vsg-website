import { Layout } from "@/components/Layout";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <Layout>
      <section className="py-20" data-testid="section-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary mb-4 tracking-wide">
              Contact
            </p>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground leading-tight tracking-tight mb-6">
              Talk to the studio.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Use this form to start a conversation about pilots, partnerships,
              or questions that aren't answered elsewhere on the site.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 pb-20" data-testid="section-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <div className="bg-card border border-card-border rounded-xl p-6 sm:p-8 sticky top-24">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                  What to expect
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>
                      We read every message and respond to clear fits for the
                      studio's work.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>
                      For pilots and partnerships, expect an initial response
                      within 3-5 business days.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>
                      We don't do cold outreach or share your information with
                      third parties.
                    </span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="text-sm font-medium text-foreground mb-2">
                    For media inquiries
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Select "Media / Speaking" as your topic and we'll route your
                    message to the right team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
