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
      { label: "All Ventures", href: "/ventures", description: "Our portfolio across Truth, Capital, and Dignity" },
      { label: "Helios", href: "/ventures/helios", description: "Capital — Non-custodial treasury engine" },
      { label: "Lumina", href: "/ventures/lumina", description: "Truth — Evidence-backed grading signals" },
      { label: "Uniqueness Engine", href: "/ventures/uniqueness", description: "Dignity — Sybil-resistant identity verification" },
    ],
  },
  {
    label: "Approach",
    href: "/approach",
    children: [
      { label: "Approach", href: "/approach", description: "How we sequence pillars, process, and standards" },
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
