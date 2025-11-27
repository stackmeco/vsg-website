import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <Layout>
      <PageMeta 
        title="Contact" 
        description="Get in touch with Verified Systems. We're a two-founder studio and we read every message." 
      />
      <section className="py-20 lg:py-28 relative" data-testid="section-hero">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground leading-tight tracking-tight mb-6">
              Get in touch
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're a two-founder studio. We read every message and respond to inquiries that align with our work.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 pb-20" data-testid="section-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-card border border-card-border rounded-xl p-6 sm:p-8 sticky top-24">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                  Who should reach out
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">Technical founders</strong> building in AI, Digital Assets, or Verifiable Systems.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">Capital partners</strong> focused on technical architecture and first-principles engineering.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">Researchers & analysts</strong> seeking primary-source perspectives on AI and Digital Assets.
                    </span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="text-sm font-medium text-foreground mb-2">
                    What to expect
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Response within 3-5 business days for aligned inquiries. VSG does not initiate unsolicited outbound communication.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
