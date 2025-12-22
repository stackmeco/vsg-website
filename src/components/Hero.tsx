'use client'

import { ArrowRight, Shield, Coins, Lock } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 radial-gradient" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-vsg-verification/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-vsg-capital/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />

      <div className="relative section-container pt-32 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vsg-gray-900/80 border border-vsg-gray-800 mb-8">
            <span className="w-2 h-2 bg-vsg-capital rounded-full animate-pulse" />
            <span className="text-sm text-vsg-gray-300">Building the rails for the autonomous economy</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="gradient-text">The Infrastructure of</span>
            <br />
            <span className="text-white">Verifiable Autonomy</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-vsg-gray-300 max-w-3xl mx-auto mb-10 text-balance leading-relaxed">
            AI agents are rewriting finance, identity, and decision-making. We&apos;re building the rails
            that keep them accountable&mdash;the verification layer that proves what&apos;s true, the capital
            infrastructure that preserves your wealth, and the control systems that ensure autonomy
            isn&apos;t just a promise.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="#pillars" className="btn-primary">
              Explore Our Infrastructure
              <ArrowRight size={18} />
            </Link>
            <Link href="#products" className="btn-secondary">
              View Products
            </Link>
          </div>

          {/* Three Pillars Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-vsg-verification/10 border border-vsg-verification/20">
              <Shield size={18} className="text-vsg-verification" />
              <span className="text-sm font-medium text-vsg-gray-200">Verification</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-vsg-capital/10 border border-vsg-capital/20">
              <Coins size={18} className="text-vsg-capital" />
              <span className="text-sm font-medium text-vsg-gray-200">Capital</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-vsg-control/10 border border-vsg-control/20">
              <Lock size={18} className="text-vsg-control" />
              <span className="text-sm font-medium text-vsg-gray-200">Control</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-vsg-gray-700 flex justify-center pt-2">
          <div className="w-1 h-3 bg-vsg-gray-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
