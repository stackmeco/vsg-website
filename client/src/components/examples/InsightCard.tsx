import InsightCard from "../InsightCard";

export default function InsightCardExample() {
  return (
    <div className="p-4 bg-background max-w-sm">
      <InsightCard
        title="Sybil resistance without identity mining"
        excerpt="How to achieve one-entity-one-slot guarantees without harvesting identity data."
        date="Nov 15, 2025"
        category="Identity"
        slug="sybil-resistance"
      />
    </div>
  );
}
