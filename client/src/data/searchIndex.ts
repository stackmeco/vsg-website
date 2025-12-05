import { 
  Home, 
  Settings, 
  Layers, 
  Shield, 
  BookOpen, 
  Mail,
  Zap,
  CreditCard,
  Sparkles,
  Fingerprint,
  FileText,
  Scale,
  Clock,
  AlertTriangle,
  Lock,
  ScrollText,
  Target,
  Eye,
  Compass,
  Building2,
  type LucideIcon
} from "lucide-react";
import { articles, changelog } from "./articles";
import { projects, getProjectHref } from "./projects";

export interface SearchEntry {
  id: string;
  name: string;
  description: string;
  href: string;
  icon: LucideIcon;
  keywords: string[];
  group: SearchGroup;
}

export type SearchGroup = 
  | "pages" 
  | "projects" 
  | "articles" 
  | "governance" 
  | "changelog";

export interface SearchGroupMeta {
  id: SearchGroup;
  label: string;
  priority: number;
}

export const searchGroups: SearchGroupMeta[] = [
  { id: "pages", label: "Pages", priority: 1 },
  { id: "projects", label: "Ventures", priority: 2 },
  { id: "articles", label: "Insights", priority: 3 },
  { id: "governance", label: "Standards Sections", priority: 4 },
  { id: "changelog", label: "System Records", priority: 5 },
];

const pageEntries: SearchEntry[] = [
  { 
    id: "page-overview", 
    name: "Overview", 
    description: "Home page - who we are and what we build",
    href: "/", 
    icon: Home, 
    keywords: ["home", "main", "start", "dashboard", "metrics", "overview"],
    group: "pages"
  },
  { 
    id: "page-ventures", 
    name: "Ventures", 
    description: "Our projects and development stages",
    href: "/ventures", 
    icon: Layers, 
    keywords: ["projects", "r&d", "research", "development", "stages", "pipeline"],
    group: "pages"
  },
  { 
    id: "page-helios", 
    name: "Helios", 
    description: "Non-custodial treasury engine — Capital",
    href: "/ventures/helios", 
    icon: Zap, 
    keywords: ["treasury", "ai", "management", "automation", "yield"],
    group: "pages"
  },
  { 
    id: "page-lumina", 
    name: "Lumina", 
    description: "Evidence-backed grading signals — Truth",
    href: "/ventures/lumina", 
    icon: Sparkles, 
    keywords: ["grading", "verification", "evidence", "provenance", "truth"],
    group: "pages"
  },
  { 
    id: "page-uniqueness", 
    name: "Uniqueness", 
    description: "Sybil-resistant identity verification",
    href: "/ventures/uniqueness", 
    icon: Fingerprint, 
    keywords: ["identity", "sybil", "verification", "unique"],
    group: "pages"
  },
  { 
    id: "page-pillars", 
    name: "Pillars", 
    description: "Our foundational principles",
    href: "/approach/pillars", 
    icon: Target, 
    keywords: ["principles", "values", "foundation", "approach"],
    group: "pages"
  },
  { 
    id: "page-process", 
    name: "Process", 
    description: "How we build and validate ventures",
    href: "/approach/process", 
    icon: Settings, 
    keywords: ["process", "methodology", "build", "validate", "stages"],
    group: "pages"
  },
  { 
    id: "page-standards", 
    name: "Standards", 
    description: "Enterprise-grade quality benchmarks",
    href: "/approach/standards", 
    icon: Shield, 
    keywords: ["standards", "quality", "enterprise", "compliance"],
    group: "pages"
  },
  { 
    id: "page-studio", 
    name: "Studio", 
    description: "The VSG innovation engine",
    href: "/studio", 
    icon: Building2, 
    keywords: ["studio", "about", "company", "innovation"],
    group: "pages"
  },
  { 
    id: "page-purpose", 
    name: "Purpose", 
    description: "Why VSG exists",
    href: "/studio#purpose", 
    icon: Target, 
    keywords: ["purpose", "why", "reason", "mission"],
    group: "pages"
  },
  { 
    id: "page-vision", 
    name: "Vision", 
    description: "Where we're heading",
    href: "/studio#vision", 
    icon: Eye, 
    keywords: ["vision", "future", "direction", "goals"],
    group: "pages"
  },
  { 
    id: "page-mission", 
    name: "Mission", 
    description: "What we do every day",
    href: "/studio#mission", 
    icon: Compass, 
    keywords: ["mission", "daily", "work", "actions"],
    group: "pages"
  },
  { 
    id: "page-insights", 
    name: "Insights", 
    description: "Our research and analysis",
    href: "/insights", 
    icon: BookOpen, 
    keywords: ["library", "articles", "insights", "manifesto", "blog", "notes", "thesis"],
    group: "pages"
  },
  { 
    id: "page-connect", 
    name: "Connect", 
    description: "Get in touch",
    href: "/connect", 
    icon: Mail, 
    keywords: ["email", "message", "reach", "talk", "connect", "contact"],
    group: "pages"
  },
  { 
    id: "page-privacy", 
    name: "Privacy Policy", 
    description: "Data handling and privacy practices",
    href: "/privacy", 
    icon: Lock, 
    keywords: ["privacy", "data", "gdpr", "ccpa", "cookies", "policy"],
    group: "pages"
  },
  { 
    id: "page-terms", 
    name: "Terms of Service", 
    description: "Legal terms and conditions",
    href: "/terms", 
    icon: ScrollText, 
    keywords: ["terms", "service", "legal", "agreement", "conditions", "tos"],
    group: "pages"
  },
];

const projectIconMap: Record<string, LucideIcon> = {
  "Helios": Zap,
  "Lumina": Sparkles,
  "Uniqueness": Fingerprint,
};

const projectEntries: SearchEntry[] = projects.map((project) => ({
  id: `project-${project.name.toLowerCase().replace(/\s+/g, "-")}`,
  name: project.name,
  description: project.description,
  href: getProjectHref(project),
  icon: projectIconMap[project.name] || Layers,
  keywords: [
    project.stage.toLowerCase(),
    ...project.exploring.map(e => e.toLowerCase()),
  ],
  group: "projects" as SearchGroup,
}));

const articleEntries: SearchEntry[] = articles.map((article) => ({
  id: `article-${article.slug}`,
  name: article.title,
  description: article.excerpt,
  href: `/insights/${article.slug}`,
  icon: BookOpen,
  keywords: [
    article.type.toLowerCase(),
    ...article.tags.map(t => t.toLowerCase()),
  ],
  group: "articles" as SearchGroup,
}));

const governanceEntries: SearchEntry[] = [
  { 
    id: "gov-structure", 
    name: "Legal Structure", 
    description: "Wyoming LLC, two-founder governance",
    href: "/approach/standards#structure", 
    icon: FileText, 
    keywords: ["llc", "wyoming", "founders", "ownership", "legal"],
    group: "governance"
  },
  { 
    id: "gov-treasury", 
    name: "BTC Treasury", 
    description: "Treasury policy and collateral loop",
    href: "/approach/standards#treasury", 
    icon: CreditCard, 
    keywords: ["bitcoin", "btc", "collateral", "leverage", "ltv", "capital"],
    group: "governance"
  },
  { 
    id: "gov-risk", 
    name: "Risk Governance", 
    description: "Stage-gates and risk controls",
    href: "/approach/standards#risk", 
    icon: AlertTriangle, 
    keywords: ["risk", "stage", "gate", "controls", "memo"],
    group: "governance"
  },
  { 
    id: "gov-regulatory", 
    name: "Regulatory Stance", 
    description: "Compliance approach and prohibitions",
    href: "/approach/standards#regulatory", 
    icon: Scale, 
    keywords: ["compliance", "regulation", "fincen", "sec", "mica", "legal"],
    group: "governance"
  },
];

const changelogEntries: SearchEntry[] = changelog.map((entry, index) => ({
  id: `changelog-${index}`,
  name: entry.date,
  description: entry.entry,
  href: "/approach/process#changelog",
  icon: Clock,
  keywords: ["update", "change", "record", "history"],
  group: "changelog" as SearchGroup,
}));

export const allSearchEntries: SearchEntry[] = [
  ...pageEntries,
  ...projectEntries,
  ...articleEntries,
  ...governanceEntries,
  ...changelogEntries,
];

function normalizeQuery(query: string): string[] {
  return query
    .toLowerCase()
    .split(/\s+/)
    .filter(token => token.length > 0);
}

function scoreEntry(entry: SearchEntry, tokens: string[]): number {
  let score = 0;
  const nameLower = entry.name.toLowerCase();
  const descLower = entry.description.toLowerCase();
  const keywordsLower = entry.keywords.join(" ");

  for (const token of tokens) {
    if (nameLower === token) {
      score += 100;
    } else if (nameLower.startsWith(token)) {
      score += 50;
    } else if (nameLower.includes(token)) {
      score += 25;
    }

    if (keywordsLower.includes(token)) {
      score += 15;
    }

    if (descLower.includes(token)) {
      score += 5;
    }
  }

  return score;
}

export interface SearchResult {
  entry: SearchEntry;
  score: number;
}

export function buildSearchResults(query: string): Map<SearchGroup, SearchResult[]> {
  const tokens = normalizeQuery(query);
  
  if (tokens.length === 0) {
    const grouped = new Map<SearchGroup, SearchResult[]>();
    for (const group of searchGroups) {
      const entries = allSearchEntries
        .filter(e => e.group === group.id)
        .slice(0, 5)
        .map(entry => ({ entry, score: 0 }));
      if (entries.length > 0) {
        grouped.set(group.id, entries);
      }
    }
    return grouped;
  }

  const scored: SearchResult[] = allSearchEntries
    .map(entry => ({ entry, score: scoreEntry(entry, tokens) }))
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score);

  const grouped = new Map<SearchGroup, SearchResult[]>();
  
  for (const result of scored) {
    const group = result.entry.group;
    if (!grouped.has(group)) {
      grouped.set(group, []);
    }
    const groupResults = grouped.get(group)!;
    if (groupResults.length < 5) {
      groupResults.push(result);
    }
  }

  return grouped;
}

export function getGroupLabel(groupId: SearchGroup): string {
  return searchGroups.find(g => g.id === groupId)?.label ?? groupId;
}
