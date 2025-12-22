'use client'

import { AlertTriangle, Eye, Zap, Ban } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: 'AI Hallucinates',
    description: 'Models generate confident but false information with no way to verify accuracy.',
  },
  {
    icon: Eye,
    title: 'Custodians Fail',
    description: 'Centralized intermediaries hold your assets hostage to their security and solvency.',
  },
  {
    icon: Zap,
    title: 'Agents Act Blindly',
    description: 'Autonomous systems make decisions without accountability or oversight.',
  },
  {
    icon: Ban,
    title: 'Trust is Taxed',
    description: 'Every interaction requires trusting opaque intermediaries who extract value.',
  },
]

export default function Problem() {
  return (
    <section className="section-padding bg-vsg-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-vsg-black via-transparent to-vsg-black" />

      <div className="relative section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">The Problem</span>
            </h2>
            <p className="text-xl sm:text-2xl text-vsg-gray-300 leading-relaxed max-w-3xl mx-auto">
              AI agents will manage trillions in assets. They&apos;ll verify identities, execute trades,
              and make decisions faster than any human. But here&apos;s the problem:
            </p>
          </div>

          {/* Big Statement */}
          <div className="text-center mb-16">
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              You can&apos;t verify them.
            </p>
          </div>

          {/* Problem Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="card card-hover p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                  <problem.icon className="text-red-400" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{problem.title}</h3>
                <p className="text-vsg-gray-400">{problem.description}</p>
              </div>
            ))}
          </div>

          {/* Call to Action Statement */}
          <div className="text-center">
            <p className="text-xl text-vsg-gray-300 mb-4">
              The current infrastructure asks you to trust&mdash;trust the model, trust the
              intermediary, trust the system.
            </p>
            <p className="text-2xl sm:text-3xl font-bold">
              <span className="text-white">Trust is a tax.</span>{' '}
              <span className="gradient-text-accent">We&apos;re building the alternative.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
