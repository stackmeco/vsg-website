import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { StageChip } from "@/components/StageChip";
import { ArrowRight } from "lucide-react";
import type { StageVariant } from "@/data/projects";

interface ProjectTileProps {
  slug: string;
  name: string;
  stage: string;
  stageVariant: StageVariant;
  description: string;
  exploring?: string[];
}

export function ProjectTile({ slug, name, stage, stageVariant, description, exploring }: ProjectTileProps) {
  const href = `/ventures/${slug}`;
  return (
    <Card className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-heading font-semibold text-base text-foreground">
            {name}
          </h3>
          <StageChip stage={stage} variant={stageVariant} />
        </div>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        {exploring && exploring.length > 0 && (
          <div className="mb-4">
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Exploring now
            </p>
            <ul className="space-y-1">
              {exploring.map((item, index) => (
                <li key={index} className="text-xs text-foreground flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        <Link 
          href={href} 
          className="inline-flex items-center gap-1.5 text-xs text-primary font-medium hover:text-primary/80 transition-colors"
          data-testid={`link-project-${name.toLowerCase().replace(/\s+/g, "-")}`}
        >
          View Specification
          <ArrowRight className="w-3 h-3" />
        </Link>
      </CardContent>
    </Card>
  );
}

export default ProjectTile;
