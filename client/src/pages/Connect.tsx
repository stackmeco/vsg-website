import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <Layout>
      <PageMeta 
        title="Connect" 
        description="Connect with Verifiable Systems Group about verifiable autonomy—where truth, capital, and dignity are at stake. We prioritize conversations where infrastructure, not slogans, is the problem."
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
              Connect · Verifiable Systems Group
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-foreground leading-tight tracking-tight mb-6" data-testid="text-hero-heading">
              Talk to us when verification matters.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-hero-body">
              We're a studio for verifiable autonomy, not a high-volume agency. We take on a limited number of conversations where the core problem is structural: how truth is proven, how capital moves, or how people participate without overexposure.
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed" data-testid="text-hero-secondary">
              If you're facing those questions in a serious way, we're interested. If you just need generic AI or marketing, we're probably not the right fit.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 pb-20 bg-card" data-testid="section-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-background border border-border rounded-[2px] p-6 sm:p-8 sticky top-24 z-30 hover:border-primary/30 transition-colors duration-150 ease-mechanical">
                <h3 className="font-heading font-semibold text-base text-foreground mb-3" data-testid="text-sidebar-heading">
                  Tell us what you're trying to verify, protect, or build.
                </h3>
                <p className="text-sm text-muted-foreground mb-6" data-testid="text-sidebar-body">
                  Be as specific as you can—what's at stake if this system is wrong, brittle, or opaque?
                </p>

                <div className="space-y-4 text-sm text-muted-foreground border-t border-border pt-6">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">Topic examples:</strong> grading infrastructure, treasury rails, personhood in a network.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">Context:</strong> What's the system? Who does it serve? What goes wrong if it fails silently?
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="text-sm font-medium text-foreground mb-2" data-testid="text-expectations-heading">
                    What to expect
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3" data-testid="text-expectations-body">
                    We review incoming messages for clear alignment with our work on Truth, Capital, or Dignity. We can't respond to every inquiry or provide individual investment, legal, or tax advice.
                  </p>
                  <p className="text-xs text-muted-foreground/70" data-testid="text-disclaimer">
                    Nothing on this site or in our replies should be treated as financial, legal, or tax advice.
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
