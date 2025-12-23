import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import gridTexture from "@assets/grid_texture.png";

const products = [
  {
    pillar: "Verification",
    pillarTagline: "Prove it, or it didn't happen.",
    items: [
      {
        name: "Axiom",
        tagline: "Deterministic AI with cryptographic proof.",
        status: "In Development",
        href: "/ventures/axiom",
        external: false,
      },
    ],
  },
  {
    pillar: "Capital",
    pillarTagline: "Your wealth, working—without leaving your control.",
    items: [
      {
        name: "Stackme",
        tagline: "Borrow against crypto without liquidation risk.",
        status: "Live",
        href: "https://app.stackme.xyz",
        external: true,
      },
      {
        name: "Helios",
        tagline: "Sub-millisecond execution, on-chain security.",
        status: "In Development",
        href: "/ventures/helios",
        external: false,
      },
    ],
  },
  {
    pillar: "Control",
    pillarTagline: "Your keys. Your data. Your rules.",
    items: [
      {
        name: "Uniqueness Engine",
        tagline: "Prove personhood without surveillance.",
        status: "In Development",
        href: "/ventures/uniqueness",
        external: false,
      },
    ],
  },
];

export default function Overview() {
  return (
    <Layout>
      <PageMeta
        title="Verifiable Systems Group"
        description="The infrastructure of verifiable autonomy. Verification. Capital. Control."
        preloadImage={gridTexture}
      />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `url(${gridTexture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.08,
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/80 to-background pointer-events-none" aria-hidden="true" />

        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.1] tracking-tight mb-6">
            The Infrastructure of<br />Verifiable Autonomy
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            AI agents are rewriting finance and identity. We build the rails that keep them accountable.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <a href="https://app.stackme.xyz" target="_blank" rel="noopener noreferrer">
                Try Stackme
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/connect">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products by Pillar */}
      <section className="py-20 border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {products.map((pillar) => (
              <div key={pillar.pillar}>
                <div className="mb-6">
                  <h2 className="text-sm font-medium uppercase tracking-wider text-primary mb-1">
                    {pillar.pillar}
                  </h2>
                  <p className="text-lg text-foreground">
                    {pillar.pillarTagline}
                  </p>
                </div>
                <div className="space-y-4">
                  {pillar.items.map((product) => (
                    <div
                      key={product.name}
                      className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/30 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-foreground">{product.name}</span>
                            <Badge variant={product.status === "Live" ? "default" : "outline"} className="text-xs">
                              {product.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{product.tagline}</p>
                        </div>
                      </div>
                      {product.external ? (
                        <a
                          href={product.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline flex items-center gap-1"
                        >
                          {product.status === "Live" ? "Try it" : "Learn more"}
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      ) : (
                        <Link
                          href={product.href}
                          className="text-sm text-primary hover:underline flex items-center gap-1"
                        >
                          Learn more
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-6">
            Building in verification, DeFi, or autonomous systems?
          </p>
          <Button asChild size="lg">
            <Link href="/connect">
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
