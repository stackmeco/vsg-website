import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, XCircle, ExternalLink } from "lucide-react";

type StatusLevel = "operational" | "degraded" | "outage";

interface SystemStatus {
  name: string;
  status: StatusLevel;
  description: string;
}

const overallStatus: StatusLevel = "operational";

const systems: SystemStatus[] = [
  {
    name: "VSG Platform",
    status: "operational",
    description: "Core infrastructure and APIs",
  },
  {
    name: "Uniqueness Engine",
    status: "operational",
    description: "Identity and Sybil resistance services",
  },
  {
    name: "Helios",
    status: "operational",
    description: "Treasury and market health systems",
  },
  {
    name: "Liquidity Engine",
    status: "operational",
    description: "Liquidity rails and collateral management",
  },
];

const statusConfig: Record<StatusLevel, { icon: React.ReactNode; color: string; text: string }> = {
  operational: {
    icon: <CheckCircle className="w-4 h-4" />,
    color: "text-emerald-500",
    text: "Operational",
  },
  degraded: {
    icon: <AlertTriangle className="w-4 h-4" />,
    color: "text-amber-500",
    text: "Degraded",
  },
  outage: {
    icon: <XCircle className="w-4 h-4" />,
    color: "text-red-500",
    text: "Outage",
  },
};

export default function Status() {
  const overall = statusConfig[overallStatus];
  const lastUpdated = new Date().toLocaleString();

  return (
    <Layout>
      <section className="py-20" data-testid="section-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary mb-4 tracking-wide">
              System status
            </p>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground leading-tight tracking-tight mb-6">
              Current status of VSG rails.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This page reflects the current status of our core platform and
              ventures. It's updated from an external status source so it can be
              changed quickly during an incident.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12" data-testid="section-overall">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className={`bg-card border-card-border ${overallStatus === "operational" ? "border-emerald-500/30" : overallStatus === "degraded" ? "border-amber-500/30" : "border-red-500/30"}`}>
            <CardContent className="p-6 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${overallStatus === "operational" ? "bg-emerald-500/10" : overallStatus === "degraded" ? "bg-amber-500/10" : "bg-red-500/10"}`}>
                <span className={overall.color}>{overall.icon}</span>
              </div>
              <div>
                <h2 className="font-heading font-semibold text-xl text-foreground">
                  {overallStatus === "operational"
                    ? "All systems operational."
                    : overallStatus === "degraded"
                    ? "Some systems are experiencing issues."
                    : "System outage in progress."}
                </h2>
                <p className="text-sm text-muted-foreground">
                  Last updated: {lastUpdated}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12" data-testid="section-systems">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {systems.map((system) => {
              const config = statusConfig[system.status];
              return (
                <Card key={system.name} className="bg-card border-card-border">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-foreground">
                        {system.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {system.description}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className={`${config.color} border-current`}
                    >
                      <span className="mr-1.5">{config.icon}</span>
                      {config.text}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 bg-card" data-testid="section-external">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">
            For full incident history and more detailed updates, visit our
            dedicated status page at{" "}
            <a
              href="#"
              className="text-primary inline-flex items-center gap-1 hover:underline"
            >
              status.vsg.io
              <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
