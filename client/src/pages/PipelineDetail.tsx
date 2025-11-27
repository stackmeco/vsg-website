import { Link, useRoute } from "wouter";
import { Layout } from "@/components/Layout";
import { SeoHead } from "@/components/SeoHead";
import { StageChip } from "@/components/StageChip";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home, FileText } from "lucide-react";
import { getProjectBySlug, getNextProject } from "@/data/projects";
import gridTexture from "@assets/grid_texture.png";
import axiomTexture from "@assets/axiom_cube.png";
import luminaTexture from "@assets/lumina_lens.png";

const textureMap: Record<string, string> = {
  axiom: axiomTexture,
  lumina: luminaTexture,
};

export default function PipelineDetail() {
  const [, params] = useRoute("/pipeline/:slug");
  const slug = params?.slug || "";
  const project = getProjectBySlug(slug);
  const nextProject = getNextProject(slug);

  if (!project) {
    return (
      <Layout>
        <SeoHead
          title="Project Not Found | Pipeline"
          description="The requested project specification was not found."
          path={`/pipeline/${slug}`}
        />
        <div className="py-20 text-center">
          <h1 className="font-heading font-bold text-2xl text-foreground mb-4">
            Project not found
          </h1>
          <Link href="/pipeline">
            <Button variant="outline" data-testid="button-back-pipeline">Back to Pipeline</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const heroTexture = project.texture === "axiom" ? axiomTexture 
    : project.texture === "lumina" ? luminaTexture 
    : gridTexture;

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Pipeline", path: "/pipeline" },
    { name: project.name, path: `/pipeline/${slug}` }
  ];

  return (
    <Layout>
      <SeoHead
        title={`${project.name} | Pipeline`}
        description={project.description}
        path={`/pipeline/${slug}`}
        breadcrumbs={breadcrumbs}
      />
      <section className="py-16 lg:py-20 relative overflow-hidden border-b border-border" data-testid="section-hero">
        <div className="absolute inset-0 bg-background" />
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: `url(${heroTexture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.22,
            filter: "grayscale(100%) contrast(120%)",
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-background/70 to-background/40 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-background/30 pointer-events-none" aria-hidden="true" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="flex items-center gap-1" data-testid="breadcrumb-home">
                    <Home className="w-3.5 h-3.5" />
                    <span className="sr-only">Home</span>
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/pipeline" data-testid="breadcrumb-pipeline">Pipeline</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{project.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex flex-wrap items-center gap-4 mb-4" data-testid="project-header">
            <h1 className="font-heading font-bold text-3xl sm:text-[2.5rem] text-foreground" data-testid="text-project-name">
              {project.name}
            </h1>
            <StageChip stage={project.stage} variant={project.stageVariant} />
          </div>

          <p className="text-lg text-primary font-medium mb-3">{project.tagline}</p>

          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </div>
      </section>

      <section className="py-12" data-testid="section-spec-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            <div className="lg:col-span-2 flex flex-col gap-6">

              <Card className="bg-card border-card-border" data-testid="card-system-status">
                <CardContent className="p-6">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                    System Status
                  </h3>
                  <ul className="space-y-3" data-testid="list-current-state">
                    {project.currentState.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-foreground" data-testid={`item-current-${index}`}>
                        <span className="w-1.5 h-1.5 rounded-[1px] bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {project.relatedArticle && (
                    <div className="mt-6 pt-4 border-t border-border">
                      <Link href={project.relatedArticle}>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-xs font-mono uppercase tracking-wider text-primary gap-2 px-0 hover:bg-transparent hover:text-primary/80"
                          data-testid="link-related-thesis"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          Read Thesis
                        </Button>
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="bg-card border-card-border" data-testid="card-active-rd">
                <CardContent className="p-6">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-primary mb-4">
                    Active R&D Modules
                  </h3>
                  <ul className="space-y-3" data-testid="list-exploring">
                    {project.exploring.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-foreground" data-testid={`item-exploring-${index}`}>
                        <span className="w-1.5 h-1.5 rounded-[1px] bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="h-full border-destructive/20 bg-destructive/5" data-testid="card-constraints">
                <CardContent className="p-6">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-destructive/80 mb-4">
                    Negative Constraints
                  </h3>
                  <ul className="space-y-3" data-testid="list-not-yet">
                    {project.notYet.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground" data-testid={`item-constraint-${index}`}>
                        <span className="w-1.5 h-1.5 rounded-[1px] bg-destructive/50 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      <div className="mt-12">
        {nextProject ? (
          <NextStepBlock
            nextPage={nextProject.name}
            description={`Continue exploring the Pipeline.`}
            href={nextProject.href}
          />
        ) : (
          <NextStepBlock
            nextPage="Governance"
            description="See how we govern risk, treasury, and compliance."
            href="/governance"
          />
        )}
      </div>
    </Layout>
  );
}
