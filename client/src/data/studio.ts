export const pillars = [
  {
    id: "truth",
    name: "Truth",
    description: "Decisions rest on evidence, not stories. We anchor key behaviours to provenance and tamper-evident logs.",
    href: "/approach/pillars",
  },
  {
    id: "capital",
    name: "Capital",
    description: "Capital works without leaving governed control. Non-custodial rails with explicit limits and rollback paths.",
    href: "/approach/pillars",
  },
  {
    id: "dignity",
    name: "Dignity",
    description: "People keep control over how they appear in systems. Proof of presence without turning people into products.",
    href: "/approach/pillars",
  },
] as const;

export const pvm = [
  {
    id: "purpose",
    label: "Purpose",
    tldr: "Democratize institutional-grade leverage.",
    href: "/studio/purpose",
  },
  {
    id: "vision",
    label: "Vision",
    tldr: "A future where trust is an engineered feature, not a gamble.",
    href: "/studio/vision",
  },
  {
    id: "mission",
    label: "Mission",
    tldr: "We engineer the infrastructure of verifiable autonomy.",
    href: "/studio/mission",
  },
] as const;

export const values = [
  {
    id: "ia",
    name: "Intelligence-Augmented, Human-Accountable",
    shortName: "Intelligence Augmented (IA)",
    quote: "Let the machine compute. Let people decide.",
    description: "AI amplifies capability. People make decisions. The machine computes; people connect.",
  },
  {
    id: "evidence",
    name: "Anchor to Evidence",
    shortName: "Anchor to Evidence",
    quote: "Ground decisions in verifiable inputs.",
    description: "We engineer clarity through cryptographic proof and transparent systems.",
  },
  {
    id: "ambition",
    name: "Engineered Ambition",
    shortName: "Engineered Ambition",
    quote: "Dream in decades, execute in milliseconds.",
    description: "We build generational technology with extreme precision.",
  },
  {
    id: "engine",
    name: "Own the Engine",
    shortName: "Own the Engine",
    quote: "Master the mechanics to rewrite the rules.",
    description: "We are pilots, not passengers.",
  },
  {
    id: "mirror",
    name: "Value is a Mirror",
    shortName: "Value is a Mirror",
    quote: "Serve first, succeed second.",
    description: "We build non-custodial tools that restore power to the user.",
  },
  {
    id: "multiplier",
    name: "Force Multiplier",
    shortName: "Force Multiplier",
    quote: "Level the playing field.",
    description: "We arm individuals with the tools to bypass gatekeepers.",
  },
] as const;

export const pillarsInPractice = [
  {
    id: "truth",
    name: "Truth",
    project: "Lumina",
    description: "AI-native verification infrastructure that anchors outputs to provenance and evidence.",
    href: "/ventures/lumina",
  },
  {
    id: "capital",
    name: "Capital",
    project: "Helios",
    description: "Non-custodial treasury management with balance-sheet-first positioning for individuals and small operators.",
    href: "/ventures/helios",
  },
  {
    id: "dignity",
    name: "Dignity",
    project: "Uniqueness Engine",
    description: "Sybil-resistant identity verification without surveillance.",
    href: "/ventures/uniqueness",
  },
] as const;

export const executionPrinciples = [
  {
    id: "ai-native",
    name: "AI-Native",
    description: "Every tool we build assumes AI as a core capability, not an add-on. We design for human-AI collaboration from the start.",
  },
  {
    id: "non-custodial",
    name: "Non-Custodial",
    description: "We never hold user funds or control user assets. Our systems are designed so users maintain full sovereignty.",
  },
  {
    id: "six-stage",
    name: "Six-Stage Process",
    description: "Every venture moves through a six-stage runway—Define, Validate, Build, Deploy, Evolve, Learn—with clear gates between each stage so risk is surfaced early, learning compounds, and nothing advances by default.",
  },
] as const;

export const purposeRulesOut = [
  "We don't build custodial products that hold user funds.",
  "We don't chase short-term trends or speculative hype.",
  "We don't take outside capital that misaligns incentives.",
  "We don't ship without stress-testing on our own capital first.",
] as const;

export const purposeHeuristics = [
  "When in doubt, choose the path that increases user autonomy.",
  "When in doubt, default to transparency over opacity.",
  "When in doubt, build for the individual, not the institution.",
  "When in doubt, verify rather than trust.",
] as const;

export const visionBroken = [
  "Trust is assumed, not verified.",
  "Intermediaries extract value at every step.",
  "Identity is fragmented across hundreds of databases you don't control.",
  "Leverage is reserved for the already-wealthy.",
] as const;

export const visionFuture = [
  "Verification replaces blind faith.",
  "Non-custodial rails eliminate the need for intermediaries.",
  "Identity becomes portable, private, and user-controlled.",
  "Institutional-grade tools become accessible to individuals.",
] as const;

export const visionSuccess = [
  "Individuals can verify any claim without trusting the source.",
  "Treasury management works for a solo operator as well as it does for a fund.",
  "One proof of humanity unlocks access everywhere.",
  "The tools we build become invisible infrastructure—just how things work.",
] as const;

export type Pillar = typeof pillars[number];
export type PVM = typeof pvm[number];
export type Value = typeof values[number];
export type PillarInPractice = typeof pillarsInPractice[number];
export type ExecutionPrinciple = typeof executionPrinciples[number];
