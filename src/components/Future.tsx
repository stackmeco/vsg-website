'use client'

import { CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const visionPoints = [
  {
    title: 'Verification is ambient.',
    description:
      'Every AI output comes with proof. You don\'t wonder if it\'s true—you verify it.',
  },
  {
    title: 'Capital is fluid and defended.',
    description:
      'Your wealth compounds 24/7 without ever leaving your custody. When markets turn, your positions are protected across every chain—automatically. Access, security, and defense are no longer tradeoffs.',
  },
  {
    title: 'Control is default.',
    description:
      'You hold the keys—to your identity, your assets, and the agents acting on your behalf.',
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
              The Future We&apos;re Building
            </h2>
            <p className="text-xl text-vsg-gray-300 max-w-2xl mx-auto">
              This future is not inevitable. It must be engineered. That&apos;s why we&apos;re here.
            </p>
          </div>

          {/* Vision Points */}
          <div className="space-y-6 mb-16">
            {visionPoints.map((point, index) => (
              <div
                key={index}
                className="card card-hover p-6 lg:p-8"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="text-vsg-capital" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2">
                      {point.title}
                    </h3>
                    <p className="text-vsg-gray-300 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Block */}
          <div className="card p-8 lg:p-12 text-center bg-gradient-to-br from-vsg-gray-900 to-vsg-black border-vsg-gray-700">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Building Blocks for the Autonomous Economy
            </h3>
            <p className="text-lg text-vsg-gray-300 mb-8 max-w-2xl mx-auto">
              We&apos;re not building the next app. We&apos;re building the infrastructure
              the next thousand apps will run on—the verification, capital, and control
              layers that make the autonomous economy trustworthy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="#pillars" className="btn-primary">
                Explore Our Infrastructure
                <ArrowRight size={18} />
              </Link>
              <Link href="#contact" className="btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
