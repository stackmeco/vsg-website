import { useState } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { ProjectTile } from "@/components/ProjectTile";
import { NextStepBlock } from "@/components/NextStepBlock";
import { StepCard } from "@/components/StepCard";
import { Button } from "@/components/ui/button";
import { StageChip } from "@/components/StageChip";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LayoutGrid, List, ArrowRight } from "lucide-react";
import { projects, getProjectHref } from "@/data/projects";

const stages = [
  { 
    name: "Strategic Definition", 
    focus: "Alignment & ROI",
    description: "We start with the problem, not the code. Before development begins, we verify the 'Why.' We define clear, measurable objectives for every project, ensuring every hour of engineering time translates directly to business value." 
  },
  { 
    name: "Rapid Validation", 
    focus: "Risk Mitigation",
    description: "We prove the concept early. Risk is best managed before the build. We utilize rapid prototyping and user modeling to validate assumptions immediately — saving time and resources for the features that truly matter." 
  },
  { 
    name: "The Verified Build", 
    focus: "Security & Stability",
    description: "Engineering with automated safeguards. We build in iterative cycles with continuous verification. Automated testing suites check system integrity throughout development, so stability and security are foundational." 
  },
  { 
    name: "Controlled Deployment", 
    focus: "Reliability",
    description: "We aim for zero-downtime with staged rollouts. No 'big bang' releases. Features deploy incrementally, validated under real-world loads before full release." 
  },
  { 
    name: "Data-Driven Evolution", 
    focus: "Continuous Improvement",
    description: "Launch is the starting point. Once live, we monitor performance and user interactions, continuously refining based on real data." 
  },
];

export default function Pipeline() {
  const [viewMode, setViewMode] = useState<"cards" | "table">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("pipeline-view-mode");
      if (saved === "cards" || saved === "table") return saved;
    }
    return "cards";
  });

  const handleViewChange = (mode: "cards" | "table") => {
    setViewMode(mode);
    localStorage.setItem("pipeline-view-mode", mode);
  };

  return (
    <Layout>
      <PageMeta 
        title="Pipeline" 
        description="Our R&D projects: Axiom, Helios, Stackme, Lumina, and Uniqueness Engine. All self-funded, none public yet." 
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
              The Pipeline
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              Our R&D projects, tied to our BTC treasury, moving through defined stages. All self-funded. None public yet.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-stages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Our R&D process
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              How we verify value at every step
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              We treat software development as a rigorous discipline. Our process is designed to surface risk early and build systems designed for stability and security.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stages.map((stage, index) => (
              <StepCard
                key={stage.name}
                number={index + 1}
                title={stage.name}
                description={stage.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative" data-testid="section-projects">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground">
              Current Pipeline projects
            </h2>
            <div className="flex items-center gap-1 p-1 bg-secondary rounded-sm">
              <Button
                variant={viewMode === "cards" ? "default" : "ghost"}
                size="sm"
                onClick={() => handleViewChange("cards")}
                data-testid="button-view-cards"
                aria-label="Card view"
              >
                <LayoutGrid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "table" ? "default" : "ghost"}
                size="sm"
                onClick={() => handleViewChange("table")}
                data-testid="button-view-table"
                aria-label="Table view"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {viewMode === "cards" ? (
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectTile key={project.name} {...project} />
              ))}
            </div>
          ) : (
            <div className="border border-card-border rounded-sm overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-card hover:bg-card">
                    <TableHead className="font-mono text-xs uppercase tracking-wider">Project</TableHead>
                    <TableHead className="font-mono text-xs uppercase tracking-wider">Status</TableHead>
                    <TableHead className="font-mono text-xs uppercase tracking-wider hidden md:table-cell">Description</TableHead>
                    <TableHead className="font-mono text-xs uppercase tracking-wider text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects.map((project) => (
                    <TableRow key={project.name} className="hover:bg-card/50">
                      <TableCell className="font-heading font-semibold">
                        {project.name}
                      </TableCell>
                      <TableCell>
                        <StageChip stage={project.stage} variant={project.stageVariant} />
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground hidden md:table-cell max-w-md">
                        {project.description}
                      </TableCell>
                      <TableCell className="text-right">
                        <Link href={getProjectHref(project)}>
                          <Button variant="ghost" size="sm" className="gap-1">
                            View
                            <ArrowRight className="w-3 h-3" />
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </section>

      <NextStepBlock
        nextPage="Governance"
        description="See how we manage risk, treasury, and compliance."
        href="/governance"
      />
    </Layout>
  );
}
