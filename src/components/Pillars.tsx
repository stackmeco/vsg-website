'use client'

import { Shield, Coins, Lock, ArrowRight, Check } from 'lucide-react'

const pillars = [
  {
    id: 'verification',
    icon: Shield,
    title: 'AI Verification',
    tagline: 'Know when AI is telling the truth',
    color: 'verification',
    description:
      'AI models hallucinate. They make up sources, invent facts, and sound confident while being completely wrong. We build tools that force AI to cite real, verifiable sources—so you can check before you trust.',
    useCase: 'Use case: Before acting on AI-generated research, verify that every cited source actually exists and says what the AI claims.',
    products: [
      { name: 'Axiom', description: 'AI that only cites sources you can verify. Every claim is checkable.', href: '#products' },
    ],
  },
  {
    id: 'capital',
    icon: Coins,
    title: 'DeFi Tools',
    tagline: 'Borrow, trade, and protect your crypto',
    color: 'capital',
    description:
      'Access liquidity without selling your crypto. Get leverage without the risk of sudden liquidations. Trade fast without getting front-run. And when markets crash, automatically protect your positions across every chain.',
    useCase: 'Use case: Borrow USDC against your ETH at 0% interest, with no liquidations ever. Use Sentinel to auto-deleverage if the market drops 30%.',
    products: [
      { name: 'Stackme', description: 'Borrow against crypto with 0% interest and no liquidations. Ever.', href: 'https://app.stackme.xyz', external: true },
      { name: 'Helios', description: 'Execute trades in milliseconds with MEV protection. Coming soon.', href: '#products' },
      { name: 'Sentinel', description: 'Auto-protect DeFi positions across chains. Open source.', href: 'https://github.com/vsg/sentinel', external: true },
    ],
  },
  {
    id: 'control',
    icon: Lock,
    title: 'Self-Custody',
    tagline: 'Never give up your keys',
    color: 'control',
    description:
      'Every VSG product is non-custodial. We never hold your assets, never have access to your keys, and can\'t freeze your funds. You stay in control. Always.',
    useCase: 'Use case: Unlike Celsius or FTX, your assets can\'t be lost to our mismanagement—because we never touch them.',
    products: [
      { name: 'All VSG Products', description: 'Non-custodial by default. Your keys, your crypto.', href: '#products' },
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
            What We Build
          </h2>
          <p className="text-xl text-vsg-gray-300 max-w-2xl mx-auto">
            Tools that solve real problems for crypto users and AI developers.
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
                      <p className="text-sm text-vsg-gray-200 italic">
                        {pillar.useCase}
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
                        <a
                          key={productIndex}
                          href={product.href}
                          target={product.external ? '_blank' : undefined}
                          rel={product.external ? 'noopener noreferrer' : undefined}
                          className="block p-4 rounded-lg bg-vsg-black/40 border border-vsg-gray-800 hover:border-vsg-gray-700 transition-colors group"
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
                        </a>
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
