'use client'

import { AlertTriangle, Eye, Zap, Ban } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: 'AI Makes Things Up',
    description: 'ChatGPT cited a fake court case. Lawyers got sanctioned. There was no way to verify if the AI\'s sources were real.',
    solution: 'Axiom',
    solutionDesc: 'forces AI to cite real sources you can check',
  },
  {
    icon: Eye,
    title: 'Exchanges Lose Your Money',
    description: 'FTX. Celsius. Mt. Gox. Billions lost because people trusted intermediaries to hold their crypto.',
    solution: 'Non-custodial DeFi',
    solutionDesc: 'your keys, your coins, always',
  },
  {
    icon: Zap,
    title: 'Liquidations Wipe You Out',
    description: 'Market crashes 20%? Your leveraged position gets liquidated at the worst possible moment. You lose everything.',
    solution: 'Stackme + Sentinel',
    solutionDesc: 'borrow without liquidation, defend positions across chains',
  },
  {
    icon: Ban,
    title: 'DeFi is Slow and Expensive',
    description: 'On-chain trades take seconds. Meanwhile, someone front-runs you. Gas fees eat your profits.',
    solution: 'Helios',
    solutionDesc: 'fast execution with MEV protection',
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
              <span className="text-white">The Problems We Solve</span>
            </h2>
            <p className="text-xl sm:text-2xl text-vsg-gray-300 leading-relaxed max-w-3xl mx-auto">
              These aren&apos;t hypotheticals. They&apos;ve cost people billions.
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
                <p className="text-vsg-gray-400 mb-4">{problem.description}</p>
                <div className="pt-4 border-t border-vsg-gray-800">
                  <p className="text-sm">
                    <span className="text-vsg-capital font-medium">{problem.solution}</span>
                    <span className="text-vsg-gray-500"> — {problem.solutionDesc}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Statement */}
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold">
              <span className="text-white">Don&apos;t trust.</span>{' '}
              <span className="gradient-text-accent">Verify.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
