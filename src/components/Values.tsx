'use client'

import {
  Search,
  Brain,
  Cog,
  TrendingUp,
  Scale,
  Heart,
  Cpu
} from 'lucide-react'

const values = [
  {
    icon: Cpu,
    title: 'Intelligence Augmented',
    tagline: 'Let the machine compute. Let the human connect.',
    description:
      'We use AI to amplify human capability—not replace it. We automate the high-velocity, high-volume work so humans can focus on judgment, strategy, and the things machines can\'t do.',
  },
  {
    icon: Search,
    title: 'Seek the Signal',
    tagline: 'Verify, then trust.',
    description:
      'We don\'t accept narratives until they\'re proven. In an age of noise, provenance is everything. We build systems that make verification automatic—not optional.',
  },
  {
    icon: TrendingUp,
    title: 'Engineered Ambition',
    tagline: 'Dream in decades. Execute in milliseconds.',
    description:
      'We\'re building generational infrastructure—but we ship fast and manage risk with automated safety rails. Big vision, precise execution.',
  },
  {
    icon: Cog,
    title: 'Own the Engine',
    tagline: 'Master the mechanics to rewrite the rules.',
    description:
      'We don\'t trust black boxes. We open them, understand them, and optimize them. Deep technical fluency isn\'t optional here—it\'s how we build things that actually work.',
  },
  {
    icon: Scale,
    title: 'Force Multiplier',
    tagline: 'Level the playing field.',
    description:
      'The infrastructure of finance was built to favor incumbents. We\'re inverting that. We build tools that give individuals and emerging institutions the same leverage as the giants.',
  },
  {
    icon: Heart,
    title: 'Value is a Mirror',
    tagline: 'Serve first, succeed second.',
    description:
      'We win when our users win. We build tools that empower—not extract. Aligned incentives, non-custodial defaults, and escape hatches built in.',
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
            How We Work
          </h2>
          <p className="text-xl text-vsg-gray-300 max-w-2xl mx-auto">
            The operating principles that guide everything we build.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="card card-hover p-6 group"
            >
              <div className="w-12 h-12 rounded-lg bg-vsg-accent/10 border border-vsg-accent/20 flex items-center justify-center mb-4 group-hover:bg-vsg-accent/20 transition-colors">
                <value.icon className="text-vsg-accent-light" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">
                {value.title}
              </h3>
              <p className="text-sm text-vsg-accent-light font-medium mb-3">
                {value.tagline}
              </p>
              <p className="text-vsg-gray-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
