import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <Layout>
      <PageMeta 
        title="Contact" 
        description="Inbound channel for Verifiable Systems Group. All inquiries reviewed by the partners." 
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
            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-foreground leading-tight tracking-tight mb-6">
              Inbound Channel
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All transmissions reviewed by the partners. Response priority given to inquiries aligned on technical architecture.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 pb-20 bg-card" data-testid="section-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-background border border-border rounded-[2px] p-6 sm:p-8 sticky top-24 z-30">
                <h3 className="font-heading font-semibold text-base text-foreground mb-4">
                  Who should reach out
                </h3>
                <ul className="space-y-4 text-xs text-muted-foreground">
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
                  <h4 className="text-xs font-medium text-foreground mb-2">
                    What to expect
                  </h4>
                  <p className="text-xs text-muted-foreground">
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
