import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Status() {
  return (
    <Layout>
      <section className="py-20 lg:py-28" data-testid="section-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground leading-tight tracking-tight mb-6">
              Status.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Current status of Verified Systems infrastructure and projects.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card" data-testid="section-status">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-background border-border">
            <CardContent className="p-8 text-center">
              <Badge variant="secondary" className="mb-4">
                No public systems yet
              </Badge>
              <h2 className="font-heading font-semibold text-xl text-foreground mb-4">
                Nothing to report.
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                We don't have any public-facing systems running yet. All of our projects are still in the Pipeline, being developed and tested internally.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16" data-testid="section-future">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-heading font-semibold text-xl text-foreground mb-4">
              When we have something running
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Once we graduate a project to a Venture with public-facing systems, we'll provide real status information here. Until then, this page will stay quiet.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
