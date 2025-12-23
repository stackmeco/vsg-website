export type ContentType = "All" | "Truth" | "Capital" | "Dignity" | "Studio updates";

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
    excerpt: "Creative writing thrives on variance. Treasury management demands precision. Why probabilistic models are structurally unfit for finance without a deterministic governor.",
    date: "Nov 15, 2024",
    type: "Truth",
    tags: ["AI Safety", "Determinism", "Infrastructure"],
    slug: "insolvency-of-fiction",
  },
  {
    title: "The Verification Standard: Charting the Great Reallocation",
    excerpt: "Fiscal dominance is no longer a theory; it is arithmetic. We map the multi-decade migration of capital from depreciating fiat ledgers to verifiable, on-chain bearer assets.",
    date: "Oct 26, 2024",
    type: "Capital",
    tags: ["Bitcoin", "Macro", "Thesis"],
    slug: "verification-standard",
  },
  {
    title: "Machine-Native Settlement: Why AI Agents Reject Legacy Banking",
    excerpt: "AI operates in milliseconds. Banking operates in days. Why the autonomous economy is physically incompatible with legacy rails—and why bearer assets are the only solution.",
    date: "Sep 18, 2024",
    type: "Capital",
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
  if (typesWithContent.has("Truth")) categories.push("Truth");
  if (typesWithContent.has("Capital")) categories.push("Capital");
  if (typesWithContent.has("Dignity")) categories.push("Dignity");
  if (typesWithContent.has("Studio updates")) categories.push("Studio updates");
  return categories;
};
