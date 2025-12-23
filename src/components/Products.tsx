'use client'

import { Shield, Coins, ExternalLink, Github } from 'lucide-react'

const products = [
  {
    name: 'Stackme',
    description: 'Borrow USDC against your crypto with 0% interest. No liquidations, ever. Your collateral stays in your wallet.',
    status: 'Live',
    statusColor: 'capital',
    href: 'https://app.stackme.xyz',
    external: true,
    icon: Coins,
    features: ['0% interest', 'No liquidations', 'Non-custodial'],
  },
  {
    name: 'Sentinel',
    description: 'Open-source bot that monitors your DeFi positions across chains and auto-deleverages before liquidation.',
    status: 'Open Source',
    statusColor: 'accent',
    href: 'https://github.com/vsg/sentinel',
    external: true,
    icon: Shield,
    isOpenSource: true,
    features: ['Cross-chain', 'Auto-deleverage', 'Self-hosted'],
  },
  {
    name: 'Axiom',
    description: 'AI that cites its sources with cryptographic proof. Every claim links to a verifiable source you can check.',
    status: 'Beta',
    statusColor: 'verification',
    href: '#',
    icon: Shield,
    features: ['Source verification', 'Cryptographic proof', 'API access'],
  },
  {
    name: 'Helios',
    description: 'Execute trades in milliseconds with MEV protection. Fast like centralized, secure like DeFi.',
    status: 'Coming Soon',
    statusColor: 'control',
    href: '#',
    icon: Coins,
    features: ['Sub-ms execution', 'MEV protection', 'Non-custodial'],
  },
]

function getStatusColor(status: string) {
  switch (status) {
    case 'Live':
      return 'bg-vsg-capital/20 text-vsg-capital border-vsg-capital/30'
    case 'Open Source':
      return 'bg-vsg-accent/20 text-vsg-accent-light border-vsg-accent/30'
    case 'Beta':
      return 'bg-vsg-verification/20 text-vsg-verification border-vsg-verification/30'
    case 'Coming Soon':
      return 'bg-vsg-control/20 text-vsg-control border-vsg-control/30'
    default:
      return 'bg-vsg-gray-800 text-vsg-gray-400 border-vsg-gray-700'
  }
}

export default function Products() {
  return (
    <section id="products" className="section-padding relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Our Products
          </h2>
          <p className="text-xl text-vsg-gray-300 max-w-2xl mx-auto">
            Tools you can use today. Non-custodial. Open source where possible.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product) => (
            <a
              key={product.name}
              href={product.href}
              target={product.external ? '_blank' : undefined}
              rel={product.external ? 'noopener noreferrer' : undefined}
              className="card card-hover p-6 lg:p-8 group block"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-vsg-gray-800 border border-vsg-gray-700 flex items-center justify-center">
                    <product.icon size={24} className="text-vsg-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-vsg-accent-light transition-colors">
                      {product.name}
                    </h3>
                    <span
                      className={`inline-block px-2 py-0.5 text-xs font-medium rounded border ${getStatusColor(
                        product.status
                      )}`}
                    >
                      {product.status}
                    </span>
                  </div>
                </div>
                {product.isOpenSource ? (
                  <Github size={20} className="text-vsg-gray-500 group-hover:text-vsg-accent-light transition-colors" />
                ) : (
                  <ExternalLink size={20} className="text-vsg-gray-500 group-hover:text-vsg-accent-light transition-colors" />
                )}
              </div>

              <p className="text-vsg-gray-300 mb-4 leading-relaxed">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2 py-1 text-xs rounded bg-vsg-gray-800 text-vsg-gray-400 border border-vsg-gray-700"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
