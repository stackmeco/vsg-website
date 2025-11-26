import VentureCard from "../VentureCard";
import { Fingerprint } from "lucide-react";

export default function VentureCardExample() {
  return (
    <div className="p-4 bg-background max-w-sm">
      <VentureCard
        name="Uniqueness Engine"
        tagline="Fair access and Sybil resistance"
        description="A primitive for AI-native finance that gives you one-entity-one-slot without identity mining."
        href="/ventures/uniqueness-engine"
        icon={<Fingerprint className="w-5 h-5" />}
      />
    </div>
  );
}
