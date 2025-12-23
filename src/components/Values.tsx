'use client'

import { DollarSign, Users, Shield, Github } from 'lucide-react'

const stats = [
  {
    icon: DollarSign,
    value: '$2M+',
    label: 'Assets Protected',
    description: 'Total value secured through Stackme and Sentinel',
  },
  {
    icon: Users,
    value: '500+',
    label: 'Active Users',
    description: 'DeFi users relying on VSG tools daily',
  },
  {
    icon: Shield,
    value: '0',
    label: 'Liquidations',
    description: 'Stackme users have never been liquidated',
  },
  {
    icon: Github,
    value: '100%',
    label: 'Open Source',
    description: 'Sentinel and core libraries are fully open source',
  },
]

export default function Values() {
  return (
    <section id="values" className="section-padding bg-vsg-dark relative">
      <div className="absolute inset-0 radial-gradient opacity-50" />

      <div className="relative section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            By the Numbers
          </h2>
          <p className="text-xl text-vsg-gray-300 max-w-2xl mx-auto">
            Real metrics from real users. No promises—just results.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card p-6 text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-vsg-capital/10 border border-vsg-capital/20 flex items-center justify-center mb-4 mx-auto">
                <stat.icon className="text-vsg-capital" size={24} />
              </div>
              <p className="text-4xl font-bold text-white mb-1">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-vsg-capital mb-2">
                {stat.label}
              </p>
              <p className="text-vsg-gray-400 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
