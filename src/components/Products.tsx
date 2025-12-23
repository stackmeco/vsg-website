'use client'

import { Shield, Coins, Lock, Github } from 'lucide-react'

const layers = [
  {
    name: 'Verification Layer',
    icon: Shield,
    color: 'verification',
    products: [
      {
        name: 'Axiom',
        description: 'Deterministic AI with cryptographic proof of accuracy',
        status: 'In Development',
      },
      {
        name: 'Agent Attestation',
        description: 'Accountability infrastructure for autonomous systems',
        status: 'Research',
      },
      {
        name: 'Uniqueness Engine',
        description: 'Privacy-preserving proof of personhood',
        status: 'In Development',
      },
    ],
  },
  {
    name: 'Capital Layer',
    icon: Coins,
    color: 'capital',
    products: [
      {
        name: 'Stackme',
        description: 'Non-custodial leverage and borrowing infrastructure',
        status: 'Live',
      },
      {
        name: 'Helios',
        description: 'High-frequency execution with DeFi-grade security',
        status: 'In Development',
      },
      {
        name: 'Sentinel',
        description: 'Cross-chain liquidation defense',
        status: 'Open Source',
        isOpenSource: true,
      },
      {
        name: 'Treasury Infrastructure',
        description: 'On-chain yield generation',
        status: 'Live',
      },
    ],
  },
  {
    name: 'Control Layer',
    icon: Lock,
    color: 'control',
    products: [
      {
        name: 'Agent Oversight',
        description: 'Ensure autonomous systems serve their principals',
        status: 'Research',
      },
      {
        name: 'Identity Infrastructure',
        description: 'Self-sovereign, privacy-preserving, verifiable',
        status: 'In Development',
      },
    ],
  },
]

function getStatusColor(status: string) {
  switch (status) {
    case 'Live':
      return 'bg-vsg-capital/20 text-vsg-capital border-vsg-capital/30'
    case 'Open Source':
      return 'bg-vsg-accent/20 text-vsg-accent-light border-vsg-accent/30'
    case 'In Development':
      return 'bg-vsg-control/20 text-vsg-control border-vsg-control/30'
    case 'Research':
      return 'bg-vsg-verification/20 text-vsg-verification border-vsg-verification/30'
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
            The Stack
          </h2>
          <p className="text-xl text-vsg-gray-300 max-w-2xl mx-auto">
            Infrastructure layers for the autonomous economy.
          </p>
        </div>

        {/* Layers */}
        <div className="space-y-8">
          {layers.map((layer) => (
            <div key={layer.name} className="card p-6 lg:p-8">
              {/* Layer Header */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-vsg-gray-800">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    layer.color === 'verification'
                      ? 'bg-vsg-verification/10 border border-vsg-verification/20'
                      : layer.color === 'capital'
                      ? 'bg-vsg-capital/10 border border-vsg-capital/20'
                      : 'bg-vsg-control/10 border border-vsg-control/20'
                  }`}
                >
                  <layer.icon
                    size={24}
                    className={
                      layer.color === 'verification'
                        ? 'text-vsg-verification'
                        : layer.color === 'capital'
                        ? 'text-vsg-capital'
                        : 'text-vsg-control'
                    }
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">{layer.name}</h3>
              </div>

              {/* Products Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {layer.products.map((product) => (
                  <div
                    key={product.name}
                    className="p-4 rounded-lg bg-vsg-black/30 border border-vsg-gray-800 hover:border-vsg-gray-700 transition-all group"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="font-semibold text-white group-hover:text-vsg-accent-light transition-colors">
                        {product.name}
                      </h4>
                      {product.isOpenSource && (
                        <Github size={16} className="text-vsg-gray-500" />
                      )}
                    </div>
                    <p className="text-sm text-vsg-gray-400 mb-3">
                      {product.description}
                    </p>
                    <span
                      className={`inline-block px-2 py-1 text-xs font-medium rounded border ${getStatusColor(
                        product.status
                      )}`}
                    >
                      {product.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
