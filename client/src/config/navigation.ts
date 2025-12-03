import { lazy, ComponentType } from "react";

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
      { label: "Ventures", href: "/ventures", description: "Our portfolio of institutional-grade ventures" },
      { label: "Helios", href: "/ventures/helios", description: "AI-powered treasury management" },
      { label: "Axiom", href: "/ventures/axiom", description: "Decentralized governance infrastructure" },
      { label: "Stackme", href: "/ventures/stackme", description: "Composable financial primitives" },
      { label: "Lumina", href: "/ventures/lumina", description: "Privacy-preserving analytics" },
      { label: "Uniqueness", href: "/ventures/uniqueness", description: "Sybil-resistant identity verification" },
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

export interface RouteConfig {
  path: string;
  component: ComponentType;
  preload?: () => Promise<{ default: ComponentType }>;
}

const Overview = lazy(() => import("@/pages/Overview"));
const Ventures = lazy(() => import("@/pages/Ventures"));
const VentureDetail = lazy(() => import("@/pages/VentureDetail"));
const Insights = lazy(() => import("@/pages/Insights"));
const InsightDetail = lazy(() => import("@/pages/InsightDetail"));
const Connect = lazy(() => import("@/pages/Connect"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const Terms = lazy(() => import("@/pages/Terms"));
const NotFound = lazy(() => import("@/pages/not-found"));

const HeliosPage = lazy(() => import("@/pages/ventures/Helios"));
const AxiomPage = lazy(() => import("@/pages/ventures/Axiom"));
const StackmePage = lazy(() => import("@/pages/ventures/Stackme"));
const LuminaPage = lazy(() => import("@/pages/ventures/Lumina"));
const UniquenessPage = lazy(() => import("@/pages/ventures/Uniqueness"));

const PillarsPage = lazy(() => import("@/pages/approach/Pillars"));
const ProcessPage = lazy(() => import("@/pages/approach/Process"));
const StandardsPage = lazy(() => import("@/pages/approach/Standards"));

const StudioPage = lazy(() => import("@/pages/studio/Studio"));
const PurposePage = lazy(() => import("@/pages/studio/Purpose"));
const VisionPage = lazy(() => import("@/pages/studio/Vision"));
const MissionPage = lazy(() => import("@/pages/studio/Mission"));

export const ROUTES: RouteConfig[] = [
  { path: "/", component: Overview },
  { path: "/ventures", component: Ventures },
  { path: "/ventures/helios", component: HeliosPage },
  { path: "/ventures/axiom", component: AxiomPage },
  { path: "/ventures/stackme", component: StackmePage },
  { path: "/ventures/lumina", component: LuminaPage },
  { path: "/ventures/uniqueness", component: UniquenessPage },
  { path: "/ventures/:slug", component: VentureDetail },
  { path: "/approach/pillars", component: PillarsPage },
  { path: "/approach/process", component: ProcessPage },
  { path: "/approach/standards", component: StandardsPage },
  { path: "/studio", component: StudioPage },
  { path: "/studio/purpose", component: PurposePage },
  { path: "/studio/vision", component: VisionPage },
  { path: "/studio/mission", component: MissionPage },
  { path: "/insights", component: Insights },
  { path: "/insights/:slug", component: InsightDetail },
  { path: "/connect", component: Connect },
  { path: "/privacy", component: Privacy },
  { path: "/terms", component: Terms },
];

export const PRELOAD_PAGES = [
  () => import("@/pages/Ventures"),
  () => import("@/pages/Insights"),
  () => import("@/pages/Connect"),
  () => import("@/pages/approach/Pillars"),
  () => import("@/pages/studio/Studio"),
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
