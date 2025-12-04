import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { projects, getProjectHref } from "@/data/projects";

export default function Ventures() {
  return (
    <Layout>
      <PageMeta 
        title="Ventures" 
        description="Verifiable Systems Group is an AI-native venture studio. We run each venture on our own balance sheet first as a living proof of what our rails can sustain across Truth, Capital, and Dignity."
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
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">
              AI-native venture studio
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6">
              Ventures
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Verifiable Systems Group is an AI-native venture studio. We run each venture on our own balance sheet first as a living proof of what our rails can sustain across Truth, Capital, and Dignity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-ventures-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Active Portfolio
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              Current Ventures
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every venture here runs on our own balance sheet first, so you can see how the rails behave before deciding what to trust.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card 
                key={project.slug} 
                className="bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical h-full"
                data-testid={`card-venture-${project.slug}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="font-heading font-semibold text-lg text-foreground">
                      {project.name}
                    </CardTitle>
                    <Badge variant="secondary" className="text-xs font-mono uppercase tracking-wider">
                      {project.stage}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground" data-testid={`domain-${project.slug}`}>
                      {project.domain}
                    </span>
                    <span className="text-muted-foreground/50">·</span>
                    <span className="text-xs font-medium uppercase tracking-[0.15em] text-primary">
                      {project.tag}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col h-full pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {project.summary}
                  </p>
                  <Link 
                    href={getProjectHref(project)} 
                    className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:text-primary/80 transition-colors"
                    data-testid={`link-venture-${project.slug}`}
                  >
                    Learn more
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-criteria">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Selection Criteria
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6">
              How ventures earn a slot in the portfolio
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              We treat portfolio slots as scarce. New ventures compete with existing work for capital, attention, and risk budget. To earn a place here, a venture has to clear three gates:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <span className="font-medium">Strategic fit</span>
                  <span className="text-muted-foreground"> — Does it reinforce our purpose of building verifiable systems and non-custodial rails?</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <span className="font-medium">Risk surface</span>
                  <span className="text-muted-foreground"> — Can we bound the regulatory, operational, and capital risk in a way we're willing to own?</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <span className="font-medium">Evidence of pull</span>
                  <span className="text-muted-foreground"> — Is there real demand from the institutions or ecosystems we serve, not just internal curiosity?</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-lifecycle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Venture Lifecycle
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6">
              From venture to infrastructure, or clean exit.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              When a venture performs, it doesn't just "live forever." It either becomes shared infrastructure with explicit governance, or we archive it on purpose, with its insights folded back into our standards, patterns, and playbooks.
            </p>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Process"
        description="See the six-stage path every venture follows inside VSG."
        href="/approach/process"
      />
    </Layout>
  );
}
