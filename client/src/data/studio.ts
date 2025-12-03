export const pillars = [
  {
    id: "validate-signal",
    name: "Validate Signal",
    description: "Cut through the noise. We build systems that separate truth from speculation using cryptographic proof.",
    href: "/approach/pillars",
  },
  {
    id: "preserve-value",
    name: "Preserve Value",
    description: "Protect what matters. Non-custodial tools that keep your assets under your control.",
    href: "/approach/pillars",
  },
  {
    id: "protect-identity",
    name: "Protect Identity",
    description: "Own your identity. Verification without surveillance, privacy without anonymity.",
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
    tldr: "A future where trust is engineered, not assumed.",
    href: "/studio/vision",
  },
  {
    id: "mission",
    label: "Mission",
    tldr: "Build governed rails for identity, treasury, and liquidity.",
    href: "/studio/mission",
  },
] as const;

export const values = [
  {
    id: "ia",
    name: "Intelligence-Augmented, Human-Accountable",
    shortName: "Intelligence Augmented (IA)",
    quote: "Let the machine compute. Let the human connect.",
    description: "AI amplifies capability. Humans make decisions. The machine computes; the human connects.",
  },
  {
    id: "signal",
    name: "Seek the Signal",
    shortName: "Seek the Signal",
    quote: "Verify, then trust.",
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
    id: "validate-signal",
    name: "Validate Signal",
    project: "Axiom",
    description: "AI-powered news verification that separates signal from noise in real-time.",
    href: "/ventures/axiom",
  },
  {
    id: "preserve-value",
    name: "Preserve Value",
    project: "Helios",
    description: "Non-custodial treasury management for individuals and small operators.",
    href: "/ventures/helios",
  },
  {
    id: "protect-identity",
    name: "Protect Identity",
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
    id: "five-stage",
    name: "Five-Stage Process",
    description: "Every venture moves through Strategic Definition, Rapid Validation, Verified Build, Controlled Deployment, and Data-Driven Evolution—with clear gates between each stage.",
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
