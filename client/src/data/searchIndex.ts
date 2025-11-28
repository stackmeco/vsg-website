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
  { id: "projects", label: "Pipeline Projects", priority: 2 },
  { id: "articles", label: "Thesis Articles", priority: 3 },
  { id: "governance", label: "Governance Sections", priority: 4 },
  { id: "changelog", label: "System Records", priority: 5 },
];

const pageEntries: SearchEntry[] = [
  { 
    id: "page-overview", 
    name: "Overview", 
    description: "Home page - system status and studio metrics",
    href: "/", 
    icon: Home, 
    keywords: ["home", "main", "start", "dashboard", "metrics"],
    group: "pages"
  },
  { 
    id: "page-system", 
    name: "System", 
    description: "How we work - architecture and treasury",
    href: "/system", 
    icon: Settings, 
    keywords: ["architecture", "treasury", "btc", "bitcoin", "how", "work", "functions"],
    group: "pages"
  },
  { 
    id: "page-pipeline", 
    name: "Pipeline", 
    description: "R&D projects and development stages",
    href: "/pipeline", 
    icon: Layers, 
    keywords: ["projects", "r&d", "research", "development", "stages"],
    group: "pages"
  },
  { 
    id: "page-governance", 
    name: "Governance", 
    description: "Risk controls and compliance",
    href: "/governance", 
    icon: Shield, 
    keywords: ["risk", "compliance", "legal", "regulatory", "policy", "treasury"],
    group: "pages"
  },
  { 
    id: "page-thesis", 
    name: "Thesis", 
    description: "Our manifesto and published insights",
    href: "/thesis", 
    icon: BookOpen, 
    keywords: ["library", "articles", "insights", "manifesto", "blog", "notes"],
    group: "pages"
  },
  { 
    id: "page-contact", 
    name: "Contact", 
    description: "Get in touch",
    href: "/contact", 
    icon: Mail, 
    keywords: ["email", "message", "reach", "talk", "connect"],
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
  "Axiom": FileText,
  "Helios": Zap,
  "Stackme": CreditCard,
  "Lumina": Sparkles,
  "Uniqueness Engine": Fingerprint,
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
  href: `/thesis/${article.slug}`,
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
    description: "Delaware LLC, two-founder governance",
    href: "/governance#structure", 
    icon: FileText, 
    keywords: ["llc", "delaware", "founders", "ownership", "legal"],
    group: "governance"
  },
  { 
    id: "gov-treasury", 
    name: "BTC Treasury", 
    description: "Treasury policy and collateral loop",
    href: "/governance#treasury", 
    icon: CreditCard, 
    keywords: ["bitcoin", "btc", "collateral", "leverage", "ltv", "capital"],
    group: "governance"
  },
  { 
    id: "gov-risk", 
    name: "Risk Governance", 
    description: "Stage-gates and risk controls",
    href: "/governance#risk", 
    icon: AlertTriangle, 
    keywords: ["risk", "stage", "gate", "controls", "memo"],
    group: "governance"
  },
  { 
    id: "gov-regulatory", 
    name: "Regulatory Stance", 
    description: "Compliance approach and prohibitions",
    href: "/governance#regulatory", 
    icon: Scale, 
    keywords: ["compliance", "regulation", "fincen", "sec", "mica", "legal"],
    group: "governance"
  },
];

const changelogEntries: SearchEntry[] = changelog.map((entry, index) => ({
  id: `changelog-${index}`,
  name: entry.date,
  description: entry.entry,
  href: "/system#changelog",
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
