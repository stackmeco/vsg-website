export type ContentType = "All" | "Insight" | "Note" | "Update";

export interface LibraryItem {
  title: string;
  excerpt: string;
  date: string;
  type: Exclude<ContentType, "All">;
  tags: string[];
  slug: string;
}

export const articles: LibraryItem[] = [
  {
    title: "The Insolvency of Fiction: Why Financial AI Cannot Hallucinate",
    excerpt: "In creative writing, hallucination is a feature. In automated treasury management, it is a felony. Why we are building our own inference layer before letting agents touch the balance sheet.",
    date: "Dec 15, 2025",
    type: "Insight",
    tags: ["AI Safety", "Determinism", "Infrastructure"],
    slug: "insolvency-of-fiction",
  },
  {
    title: "The Verification Standard: Charting the Great Reallocation",
    excerpt: "Our thesis on fiscal dominance, Bitcoin as verified scarcity, and the multi-decade capital migration from depreciating fiat to appreciating hard assets.",
    date: "Nov 26, 2025",
    type: "Insight",
    tags: ["Bitcoin", "Macro", "Thesis"],
    slug: "verification-standard",
  },
  {
    title: "Machine-Native Settlement: Why AI Agents Need Bearer Assets",
    excerpt: "AI agents cannot open bank accounts. They cannot sign contracts. They cannot wait three days for ACH to clear. The future of autonomous commerce requires bearer instruments that settle in seconds, not signatures.",
    date: "Oct 18, 2025",
    type: "Insight",
    tags: ["AI Agents", "Bitcoin", "Infrastructure"],
    slug: "machine-native-settlement",
  },
];

export const changelog = [
  { date: "Nov 2025", entry: "Initial site launch with Overview, System, Pipeline, Governance, Library, and Contact pages." },
  { date: "Oct 2025", entry: "v1.0 System Architecture released. Pipeline projects documented." },
];

export const getAvailableCategories = (items: LibraryItem[]): ContentType[] => {
  const typesWithContent = new Set(items.map(item => item.type));
  const categories: ContentType[] = ["All"];
  if (typesWithContent.has("Insight")) categories.push("Insight");
  if (typesWithContent.has("Note")) categories.push("Note");
  if (typesWithContent.has("Update")) categories.push("Update");
  return categories;
};
