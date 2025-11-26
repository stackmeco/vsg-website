export interface ArticleSection {
  heading: string;
  paragraphs: string[];
}

export interface ArticleContent {
  title: string;
  date: string;
  type: string;
  tags: string[];
  description: string;
  publishedTime: string;
  content: ArticleSection[];
}

export const articleContent: Record<string, ArticleContent> = {
  "insolvency-of-fiction": {
    title: "The Insolvency of Fiction: Why Financial AI Cannot Hallucinate",
    date: "December 15, 2025",
    type: "Insight",
    tags: ["AI Safety", "Determinism", "Infrastructure"],
    description: "In creative writing, hallucination is a feature. In automated treasury management, it is a felony. Why we are building our own inference layer before letting agents touch the balance sheet.",
    publishedTime: "2025-12-15",
    content: [
      {
        heading: "I. The Probabilistic Trap",
        paragraphs: [
          "Current Large Language Models (LLMs) are stochastic parrots. They do not know truth; they know probability. For a poem, an 80% probability of coherence is acceptable. For a clearing engine settling $10M in Bitcoin, a 0.01% error rate is catastrophic.",
          "We realized that we could not build 'Helios' (our treasury engine) on top of standard APIs like OpenAI's GPT-4 without a 'governor'—a mechanical layer that constrains the model's creativity.",
        ],
      },
      {
        heading: "II. Engineering Constraints",
        paragraphs: [
          "We are building 'Axiom' not to compete with ChatGPT, but to restrain it. Axiom treats the LLM as a reasoning engine, not a knowledge base.",
          "It forces the model to query a verified database (our internal ledger or legal docs), retrieve the specific hash of the data, and construct an answer only using those blocks. If the data isn't there, the system is engineered to fail silently rather than invent a plausible lie.",
        ],
      },
      {
        heading: "III. Truth as an Asset Class",
        paragraphs: [
          "In a world flooded with synthetic media, verifiable truth becomes the scarcest asset class. By linking our financial verification (Bitcoin) with our semantic verification (Axiom), we are building a closed loop: systems that can verify what they own, and verify what they know.",
        ],
      },
    ],
  },
  "verification-standard": {
    title: "The Verification Standard: Charting the Great Reallocation",
    date: "November 26, 2025",
    type: "Insight",
    tags: ["Bitcoin", "Macro", "Thesis"],
    description: "Our thesis on fiscal dominance, Bitcoin as verified scarcity, and the multi-decade capital migration from depreciating fiat to appreciating hard assets.",
    publishedTime: "2025-11-26",
    content: [
      {
        heading: "I. The Macro Regime Shift: Entering Fiscal Dominance",
        paragraphs: [
          "For decades, global portfolios anchored on three enduring assumptions: subdued inflation, sovereign debt as the ultimate safe asset, and government bonds as the unassailable foundation of diversification. Yet mounting evidence suggests this framework has reached its limits—not through sudden catastrophe, but through inexorable arithmetic.",
          "We are currently witnessing a structural Monetary Divergence: the widening chasm between fiscal imperatives and monetary discipline. The post-1971 fiat era, defined by elastic currencies, has entered a mature phase of strain. The data is now unequivocal: in Fiscal Year 2024, net interest payments on the US national debt reached $882 billion, officially eclipsing national defense outlays of $874 billion for the first time in history.",
          "This trajectory signals a tipping point into Fiscal Dominance—a state where debt dynamics force monetary expansion regardless of inflation targets. With interest costs now acting as the second-largest line item in the federal budget—exceeding Medicare and rivaling Social Security—the sovereign balance sheet is mathematically constrained. In this environment, the \"risk-free\" rate has morphed into \"return-free risk\": a 4% Treasury yield offers little safety when real purchasing power erodes faster than nominal returns accumulate.",
        ],
      },
      {
        heading: "II. The Antidote: Embracing Verified Scarcity",
        paragraphs: [
          "As systemic distortions mount, capital intuitively seeks resilience. In the digital age, this \"flight to quality\" manifests on-chain. At Verified System Group, we regard Bitcoin not merely as a speculative hedge, but as the structural inverse to fiat's vulnerabilities: where legacy money is infinite and opaque, Bitcoin is finite and transparent.",
          "Bitcoin's hallmark is Absolute Scarcity. Its supply is capped at 21 million coins via an immutable protocol, enforced not by human discretion but by auditable open-source code. While historical assets like gold offered relative scarcity, none matched this verifiable precision. This neutrality sidesteps the counterparty risks plaguing traditional treasuries, echoing gold's historic role during periods of debasement—yet amplified by the velocity of the internet.",
        ],
      },
      {
        heading: "III. The Horizon: A Phase Transition in Capital Flows",
        paragraphs: [
          "Our thesis is that we stand at the cusp of \"The Great Reallocation\"—a multi-decade pivot of trillions from depreciating fiat instruments to appreciating hard assets. Like a phase transition in physics (e.g., water turning to steam), this shift will appear gradual until it becomes sudden.",
          "The market is already voting. Institutional adoption has accelerated, with cumulative spot Bitcoin ETF inflows exceeding $57 billion year-to-date in 2025, signaling a decisive shift in how professional allocators view the asset. Corporate treasuries and sovereign nations are beginning to utilize \"speculative attacks\" on fiat currency—issuing debt in depreciating dollars to acquire appreciating bitcoin reserves—effectively turning the weight of the fiat system against itself.",
        ],
      },
      {
        heading: "IV. The Infrastructure: Stablecoins as Escape Velocity",
        paragraphs: [
          "Catalyzing this shift are stablecoins, which serve as the seamless bridge between legacy banking and the on-chain economy. The scale of this adoption is often underestimated: in 2024, total stablecoin transfer value reached $27.6 trillion, officially surpassing the combined settlement volume of Visa and Mastercard.",
          "These \"digital dollars\" provide a frictionless escape hatch from weak local currencies and lay the groundwork for the next evolution of finance: sovereign bonds denominated in stablecoins and backed by Bitcoin. This infrastructure will allow nations to bypass legacy bottlenecks (such as SWIFT) and tap into trillions in on-chain liquidity to recapitalize their balance sheets.",
        ],
      },
      {
        heading: "V. Conclusion: Pioneering the New Monetary Frontier",
        paragraphs: [
          "The Great Reallocation heralds not collapse, but adaptation. It is the migration of capital from a system of repression to one of resilience; from the entropy of fiat to the order of code.",
          "Verified System Group stands at this inflection point. We deploy digital assets to seed ventures that capture this flux, transforming systemic friction into asymmetric upside. The challenge of re-architecting money via verification is one of the most significant opportunities of our time. We invite our partners to navigate it with us.",
        ],
      },
    ],
  },
};
