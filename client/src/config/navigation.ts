export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  key: string;
  label: string;
  href: string;
  children?: NavChild[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    key: "overview",
    label: "Overview",
    href: "/",
  },
  {
    key: "ventures",
    label: "Ventures",
    href: "/ventures",
    children: [
      { label: "All Ventures", href: "/ventures", description: "Our portfolio across Truth, Capital, and Dignity." },
      { label: "Helios", href: "/ventures/helios", description: "Capital venture: non-custodial treasury engine." },
      { label: "Lumina", href: "/ventures/lumina", description: "Truth venture: verifiable grading infrastructure." },
      { label: "Uniqueness Engine", href: "/ventures/uniqueness", description: "Dignity venture: personhood without overexposure." },
    ],
  },
  {
    key: "approach",
    label: "Approach",
    href: "/approach",
    children: [
      { label: "Approach", href: "/approach", description: "How we turn Truth, Capital, and Dignity into systems." },
      { label: "Pillars", href: "/approach/pillars", description: "Our foundational principles." },
      { label: "Process", href: "/approach/process", description: "How ventures move from idea to governed system." },
      { label: "Standards", href: "/approach/standards", description: "Enterprise-grade guardrails and benchmarks." },
    ],
  },
  {
    key: "studio",
    label: "Studio",
    href: "/studio",
    children: [
      { label: "Studio", href: "/studio", description: "The VSG innovation engine." },
      { label: "Purpose", href: "/studio/purpose", description: "Why we exist." },
      { label: "Vision", href: "/studio/vision", description: "Where we're heading." },
      { label: "Mission", href: "/studio/mission", description: "What we do every day." },
    ],
  },
  {
    key: "insights",
    label: "Insights",
    href: "/insights",
  },
  {
    key: "connect",
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
