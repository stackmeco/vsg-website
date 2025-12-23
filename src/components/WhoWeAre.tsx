'use client'

import { Code, Zap, Shield } from 'lucide-react'

const differentiators = [
  {
    icon: Code,
    label: 'Open Source First',
    value: 'Our core tools are open source. Audit the code, fork it, verify it yourself.',
  },
  {
    icon: Shield,
    label: 'Non-Custodial Always',
    value: 'We never hold your assets. Every product is built so you keep your keys.',
  },
  {
    icon: Zap,
    label: 'Live in Production',
    value: 'Not a whitepaper. Stackme and Sentinel are running today, protecting real assets.',
  },
]

export default function WhoWeAre() {
  return (
    <section className="section-padding relative">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Built by DeFi Natives
            </h2>
            <p className="text-xl text-vsg-gray-300 max-w-3xl mx-auto leading-relaxed">
              We&apos;ve been building in DeFi since 2020. We&apos;ve seen protocols fail,
              exchanges collapse, and users lose everything. We build the tools we wish existed.
            </p>
          </div>

          {/* Key Statement */}
          <div className="text-center mb-16 py-8 border-y border-vsg-gray-800">
            <p className="text-2xl sm:text-3xl text-vsg-gray-200 font-medium">
              <span className="text-white font-bold">Our thesis:</span> Crypto succeeds when users
              don&apos;t have to trust anyone&mdash;not exchanges, not protocols, not even us.
            </p>
          </div>

          {/* Differentiator Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="card card-hover p-8 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-vsg-accent/10 border border-vsg-accent/20 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="text-vsg-accent-light" size={28} />
                </div>
                <div className="text-sm font-medium text-vsg-accent-light uppercase tracking-wider mb-3">
                  {item.label}
                </div>
                <p className="text-base text-vsg-gray-300">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
