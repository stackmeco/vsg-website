'use client'

import { ArrowRight, ExternalLink, Github, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const getStartedOptions = [
  {
    title: 'Use Stackme',
    description: 'Borrow against your crypto today. Live on Ethereum mainnet.',
    href: 'https://app.stackme.xyz',
    external: true,
    icon: ExternalLink,
    cta: 'Launch App',
  },
  {
    title: 'Run Sentinel',
    description: 'Self-host our liquidation defense bot. Fully open source.',
    href: 'https://github.com/vsg/sentinel',
    external: true,
    icon: Github,
    cta: 'View on GitHub',
  },
  {
    title: 'Talk to Us',
    description: 'Questions about integration, partnerships, or just want to chat.',
    href: 'mailto:contact@vsg.io',
    external: false,
    icon: MessageCircle,
    cta: 'Send Email',
  },
]

export default function Future() {
  return (
    <section id="future" className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-vsg-verification/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-vsg-capital/5 rounded-full blur-3xl" />

      <div className="relative section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Get Started
            </h2>
            <p className="text-xl text-vsg-gray-300 max-w-2xl mx-auto">
              Our tools are live. Try them today.
            </p>
          </div>

          {/* Get Started Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {getStartedOptions.map((option, index) => (
              <a
                key={index}
                href={option.href}
                target={option.external ? '_blank' : undefined}
                rel={option.external ? 'noopener noreferrer' : undefined}
                className="card card-hover p-6 group block text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-vsg-capital/10 border border-vsg-capital/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-vsg-capital/20 transition-colors">
                  <option.icon className="text-vsg-capital" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-vsg-accent-light transition-colors">
                  {option.title}
                </h3>
                <p className="text-vsg-gray-400 text-sm mb-4">
                  {option.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-vsg-capital">
                  {option.cta}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            ))}
          </div>

          {/* Simple CTA Block */}
          <div className="card p-8 lg:p-12 text-center bg-gradient-to-br from-vsg-gray-900 to-vsg-black border-vsg-gray-700">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Building for Builders
            </h3>
            <p className="text-lg text-vsg-gray-300 mb-8 max-w-2xl mx-auto">
              Want to integrate our tools into your project? We&apos;re looking for partners
              building the next generation of DeFi and AI applications.
            </p>
            <Link href="mailto:partnerships@vsg.io" className="btn-primary">
              Partner With Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
