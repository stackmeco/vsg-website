export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Overview",
    href: "/",
  },
  {
    label: "Ventures",
    href: "/ventures",
    children: [
      { label: "All Ventures", href: "/ventures", description: "Our portfolio of institutional-grade ventures" },
      { label: "Helios", href: "/ventures/helios", description: "Internal capital engine" },
      { label: "Stackme", href: "/ventures/stackme", description: "Consumer leverage experience" },
      { label: "Lumina", href: "/ventures/lumina", description: "Digital authenticity rails" },
      { label: "Axiom", href: "/ventures/axiom", description: "Deterministic AI for institutions" },
    ],
  },
  {
    label: "Approach",
    href: "/approach/pillars",
    children: [
      { label: "Pillars", href: "/approach/pillars", description: "Our foundational principles" },
      { label: "Process", href: "/approach/process", description: "How we build and validate ventures" },
      { label: "Standards", href: "/approach/standards", description: "Enterprise-grade quality benchmarks" },
    ],
  },
  {
    label: "Studio",
    href: "/studio",
    children: [
      { label: "Studio", href: "/studio", description: "The VSG innovation engine" },
      { label: "Purpose", href: "/studio/purpose", description: "Why we exist" },
      { label: "Vision", href: "/studio/vision", description: "Where we're heading" },
      { label: "Mission", href: "/studio/mission", description: "What we do every day" },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
  },
  {
    label: "Connect",
    href: "/connect",
  },
];

export function getNavItemByPath(path: string): NavItem | NavChild | undefined {
  for (const item of NAV_ITEMS) {
    if (item.href === path) return item;
    if (item.children) {
      const child = item.children.find(c => c.href === path);
      if (child) return child;
    }
  }
  return undefined;
}

export function isPathActive(currentPath: string, itemPath: string): boolean {
  if (itemPath === "/") return currentPath === "/";
  return currentPath === itemPath || currentPath.startsWith(itemPath + "/");
}
