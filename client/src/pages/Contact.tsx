import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <Layout>
      <PageMeta 
        title="Connect" 
        description="Start a conversation with the Verifiable Systems team. We welcome inquiries from partners aligned with our mission." 
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
              Let's Connect
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              Every inquiry is reviewed by our founding team. We prioritize conversations with partners who share our commitment to building verified, trustworthy systems.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 pb-20 bg-card" data-testid="section-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-background border border-border rounded-[2px] p-6 sm:p-8 sticky top-24 z-30 hover:border-primary/30 transition-colors duration-150 ease-mechanical">
                <h3 className="font-heading font-semibold text-base text-foreground mb-4">
                  We'd like to hear from
                </h3>
                <ul className="space-y-4 text-xs text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">Builders</strong> creating products in AI, digital assets, or financial infrastructure.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">Investors</strong> who prioritize technical fundamentals and long-term value creation.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">Researchers</strong> exploring the intersection of AI verification and financial systems.
                    </span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="text-xs font-medium text-foreground mb-2">
                    What to expect
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    We respond within 3-5 business days to aligned inquiries. We do not send unsolicited outreach.
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
