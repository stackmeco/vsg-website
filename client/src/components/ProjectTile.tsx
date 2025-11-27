import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { StageChip } from "@/components/StageChip";
import { ArrowRight } from "lucide-react";
import type { StageVariant } from "@/data/projects";

interface ProjectTileProps {
  name: string;
  stage: string;
  stageVariant: StageVariant;
  description: string;
  exploring?: string[];
  href: string;
}

export function ProjectTile({ name, stage, stageVariant, description, exploring, href }: ProjectTileProps) {
  return (
    <Card className="bg-card border-card-border hover:border-primary/50 hover:bg-card/80 transition-colors duration-150 ease-mechanical">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="font-heading font-semibold text-lg text-foreground">
            {name}
          </h3>
          <StageChip stage={stage} variant={stageVariant} />
        </div>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        {exploring && exploring.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
              Exploring now
            </p>
            <ul className="space-y-1">
              {exploring.map((item, index) => (
                <li key={index} className="text-sm text-foreground flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        <Link 
          href={href} 
          className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
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
