'use client'

import { Shield, Coins, Lock, ArrowRight, Check } from 'lucide-react'

const pillars = [
  {
    id: 'verification',
    icon: Shield,
    title: 'Verification',
    tagline: 'Prove it, or it didn\'t happen.',
    color: 'verification',
    description:
      'We build infrastructure that forces AI to show its work. Cryptographic proof that outputs are accurate, sources are real, and agents did what they claimed. No more hallucinations. No more "trust me."',
    principle: 'If it can\'t be proven, it can\'t be trusted. If it can be proven, trust becomes irrelevant.',
    products: [
      { name: 'Axiom', description: 'Deterministic, source-backed AI' },
      { name: 'Agent Attestation', description: 'Accountability infrastructure for autonomous systems' },
    ],
  },
  {
    id: 'capital',
    icon: Coins,
    title: 'Capital',
    tagline: 'Your wealth, working—without leaving your control.',
    color: 'capital',
    description:
      'We build non-custodial infrastructure for capital efficiency. Borrow against your assets without selling them. Earn yield without custodial risk. Execute at HFT speed with DeFi security. And when markets turn, defend your positions across every chain from one interface.',
    principle: 'Access without custody. Leverage without liquidation. Defense without compromise. Speed without sacrifice.',
    products: [
      { name: 'Stackme', description: 'Leverage without liquidation' },
      { name: 'Helios', description: 'Sub-millisecond execution, on-chain security' },
      { name: 'Sentinel', description: 'Cross-chain liquidation defense' },
    ],
  },
  {
    id: 'control',
    icon: Lock,
    title: 'Control',
    tagline: 'Autonomy isn\'t optional.',
    color: 'control',
    description:
      'We build systems that keep you in control—of your identity, your capital, and the agents acting on your behalf. Privacy-preserving verification. Non-custodial architecture. Agent oversight that ensures the machines work for you.',
    principle: 'Your keys. Your data. Your agents. Your rules.',
    products: [
      { name: 'Uniqueness Engine', description: 'Prove personhood without surveillance' },
      { name: 'Agent Control Infrastructure', description: 'Your agents, your rules' },
    ],
  },
]

export default function Pillars() {
  return (
    <section id="pillars" className="section-padding bg-vsg-dark relative">
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative section-container">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            The Three Pillars
          </h2>
          <p className="text-xl text-vsg-gray-300 max-w-2xl mx-auto">
            Everything we build rolls up to three foundational truths.
          </p>
        </div>

        {/* Pillars */}
        <div className="space-y-12 lg:space-y-20">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className={`relative ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`card pillar-${pillar.color} p-8 lg:p-12`}>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                          pillar.color === 'verification'
                            ? 'bg-vsg-verification/20 border border-vsg-verification/30'
                            : pillar.color === 'capital'
                            ? 'bg-vsg-capital/20 border border-vsg-capital/30'
                            : 'bg-vsg-control/20 border border-vsg-control/30'
                        }`}
                      >
                        <pillar.icon
                          size={28}
                          className={
                            pillar.color === 'verification'
                              ? 'text-vsg-verification'
                              : pillar.color === 'capital'
                              ? 'text-vsg-capital'
                              : 'text-vsg-control'
                          }
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">
                          {pillar.title}
                        </h3>
                        <p
                          className={`text-sm font-medium ${
                            pillar.color === 'verification'
                              ? 'text-vsg-verification'
                              : pillar.color === 'capital'
                              ? 'text-vsg-capital'
                              : 'text-vsg-control'
                          }`}
                        >
                          {pillar.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-lg text-vsg-gray-300 mb-6 leading-relaxed">
                      {pillar.description}
                    </p>

                    <div className="p-4 rounded-lg bg-vsg-black/30 border border-vsg-gray-800 mb-6">
                      <p className="text-sm text-vsg-gray-400 mb-1">The Principle</p>
                      <p className="text-vsg-gray-200 font-medium italic">
                        &ldquo;{pillar.principle}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Products */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <p className="text-sm font-medium text-vsg-gray-400 uppercase tracking-wider mb-4">
                      Products
                    </p>
                    <div className="space-y-4">
                      {pillar.products.map((product, productIndex) => (
                        <div
                          key={productIndex}
                          className="p-4 rounded-lg bg-vsg-black/40 border border-vsg-gray-800 hover:border-vsg-gray-700 transition-colors group cursor-pointer"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h4 className="text-lg font-semibold text-white group-hover:text-vsg-accent-light transition-colors">
                                {product.name}
                              </h4>
                              <p className="text-sm text-vsg-gray-400">
                                {product.description}
                              </p>
                            </div>
                            <ArrowRight
                              size={18}
                              className="text-vsg-gray-600 group-hover:text-vsg-accent-light group-hover:translate-x-1 transition-all mt-1"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
