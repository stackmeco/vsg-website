import { useState } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { ProjectTile } from "@/components/ProjectTile";
import { NextStepBlock } from "@/components/NextStepBlock";
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

export default function Ventures() {
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
        title="Ventures" 
        description="Our venture portfolio: Helios, Axiom, Stackme, Lumina, and Uniqueness. Five projects moving through our development process, self-funded and stress-tested." 
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
              Venture Portfolio.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              Five projects moving through our development process. Each venture is self-funded and stress-tested with our own capital.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 relative" data-testid="section-projects">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-2xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Active portfolio
            </p>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground">
                Current Ventures
              </h2>
              <div className="flex items-center gap-1 p-1 bg-secondary rounded-[2px]">
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
          </div>

          {viewMode === "cards" ? (
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectTile key={project.name} {...project} />
              ))}
            </div>
          ) : (
            <div className="border border-card-border rounded-[2px] overflow-hidden">
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
        nextPage="Standards"
        description="Learn about our governance, risk management, and compliance framework."
        href="/standards"
      />
    </Layout>
  );
}
