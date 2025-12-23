export const pillars = [
  {
    id: "verification",
    name: "Verification",
    tagline: "Prove it, or it didn't happen.",
    description: "If it can't be proven, it can't be trusted. If it can be proven, trust becomes irrelevant. We build infrastructure that forces AI to show its work.",
    href: "/approach/pillars",
  },
  {
    id: "capital",
    name: "Capital",
    tagline: "Your wealth, working—without leaving your control.",
    description: "Access without custody. Leverage without liquidation. Defense without compromise. Speed without sacrifice.",
    href: "/approach/pillars",
  },
  {
    id: "control",
    name: "Control",
    tagline: "Autonomy isn't optional.",
    description: "Your keys. Your data. Your agents. Your rules. We build systems that keep you in control.",
    href: "/approach/pillars",
  },
] as const;

export const pvm = [
  {
    id: "purpose",
    label: "Purpose",
    tldr: "Democratize institutional-grade infrastructure.",
    href: "/studio#purpose",
  },
  {
    id: "vision",
    label: "Vision",
    tldr: "A future where trust is engineered, not assumed.",
    href: "/studio#vision",
  },
  {
    id: "mission",
    label: "Mission",
    tldr: "Build the verification, capital, and control layers for autonomous systems.",
    href: "/studio#mission",
  },
] as const;

export const values = [
  {
    id: "ia",
    name: "Intelligence Augmented",
    shortName: "Intelligence Augmented",
    quote: "Let the machine compute. Let the human connect.",
    description: "We are AI-native, not AI-dependent. Machines handle speed, volume, and patterning; people define mandates, constraints, and ethics. No fully autonomous loops on critical paths.",
  },
  {
    id: "signal",
    name: "Seek the Signal",
    shortName: "Seek the Signal",
    quote: "Verify, then trust.",
    description: "We care about evidence, not vibes. Claims in our systems must trace back to verifiable records—provenance trails, logs, or proofs that can be inspected.",
  },
  {
    id: "ambition",
    name: "Engineered Ambition",
    shortName: "Engineered Ambition",
    quote: "Dream in decades. Execute in milliseconds.",
    description: "We go after structural problems, but we don't gamble. Ambition is paired with guardrails: simulations, phased rollouts, and explicit rollback paths.",
  },
  {
    id: "engine",
    name: "Own the Engine",
    shortName: "Own the Engine",
    quote: "Master the mechanics to rewrite the rules.",
    description: "If we depend on a system, we must understand how it behaves when things break. We avoid black boxes, document failure modes, and treat dependency as responsibility.",
  },
  {
    id: "mirror",
    name: "Value is a Mirror",
    shortName: "Value is a Mirror",
    quote: "Serve first, succeed second.",
    description: "Our upside comes from running better rails, not trapping users. We avoid extractive models that rely on confusion or lock-in.",
  },
  {
    id: "multiplier",
    name: "Force Multiplier",
    shortName: "Force Multiplier",
    quote: "Level the playing field.",
    description: "The world is tilted toward incumbents by default. We build tools so individuals and small teams can access institutional-grade leverage without becoming institutions themselves.",
  },
] as const;

export const pillarsInPractice = [
  {
    id: "verification",
    name: "Verification",
    project: "Axiom",
    description: "Deterministic AI with cryptographic proof of accuracy.",
    href: "/ventures/axiom",
  },
  {
    id: "capital",
    name: "Capital",
    project: "Stackme",
    description: "Non-custodial leverage and borrowing infrastructure.",
    href: "/ventures/stackme",
  },
  {
    id: "control",
    name: "Control",
    project: "Uniqueness Engine",
    description: "Privacy-preserving proof of personhood.",
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
    id: "verifiable",
    name: "Verifiable",
    description: "Every claim traces back to cryptographic proof. No more 'trust me'—only 'verify this.'",
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
  "AI hallucinates and no one can prove otherwise.",
  "Custodians fail and billions disappear.",
  "Agents act blindly without oversight.",
  "Trust is taxed at every interaction.",
] as const;

export const visionFuture = [
  "Verification is ambient—built into every interaction.",
  "Capital is fluid and defended—always under your control.",
  "Control is default—your keys, your agents, your rules.",
] as const;

export const visionSuccess = [
  "AI outputs come with cryptographic proof of accuracy.",
  "Capital works without custody sacrifice.",
  "Identity verification happens without surveillance.",
  "Autonomous systems remain accountable to humans.",
] as const;

export type Pillar = typeof pillars[number];
export type PVM = typeof pvm[number];
export type Value = typeof values[number];
export type PillarInPractice = typeof pillarsInPractice[number];
export type ExecutionPrinciple = typeof executionPrinciples[number];
