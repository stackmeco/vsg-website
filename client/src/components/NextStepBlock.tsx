import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface NextStepBlockProps {
  label?: string;
  nextPage: string;
  description: string;
  href: string;
}

export function NextStepBlock({ label = "Next", nextPage, description, href }: NextStepBlockProps) {
  return (
    <section className="py-20 border-t border-border" data-testid="section-next-step">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
            {label}
          </p>
          <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
            {nextPage}
          </h3>
          <p className="text-sm text-muted-foreground mb-6">{description}</p>
          <Link href={href}>
            <Button data-testid={`button-next-${href.replace(/\//g, "")}`}>
              Proceed
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NextStepBlock;
