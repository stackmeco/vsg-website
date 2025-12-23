'use client'

import { Target, Telescope, Rocket } from 'lucide-react'

const identityItems = [
  {
    icon: Target,
    label: 'Purpose',
    value: 'Democratize institutional-grade infrastructure',
  },
  {
    icon: Telescope,
    label: 'Vision',
    value: 'A future where trust is engineered, not assumed',
  },
  {
    icon: Rocket,
    label: 'Mission',
    value: 'Build the verification, capital, and control layers for autonomous systems',
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
              Who We Are
            </h2>
            <p className="text-xl text-vsg-gray-300 max-w-3xl mx-auto leading-relaxed">
              <span className="text-white font-semibold">Verifiable Systems Group</span> is an
              infrastructure company at the intersection of
              <span className="text-vsg-accent-light font-medium"> AI</span> and
              <span className="text-vsg-verification font-medium"> cryptography</span>.
            </p>
          </div>

          {/* Key Statement */}
          <div className="text-center mb-16 py-8 border-y border-vsg-gray-800">
            <p className="text-2xl sm:text-3xl text-vsg-gray-200 font-medium">
              We don&apos;t build applications. We build the
              <span className="text-white font-bold"> building blocks</span>&mdash;the
              verification layers, capital rails, and control systems that the autonomous
              economy will run on.
            </p>
          </div>

          {/* Identity Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {identityItems.map((item, index) => (
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
                <p className="text-lg text-white font-medium">
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
