'use client'

import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

const navigation = {
  infrastructure: [
    { name: 'Verification', href: '#pillars' },
    { name: 'Capital', href: '#pillars' },
    { name: 'Control', href: '#pillars' },
  ],
  products: [
    { name: 'Axiom', href: '#products' },
    { name: 'Stackme', href: '#products' },
    { name: 'Helios', href: '#products' },
    { name: 'Sentinel', href: '#products' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
  ],
  resources: [
    { name: 'Documentation', href: '#' },
    { name: 'GitHub', href: '#' },
    { name: 'Contact', href: '#contact' },
  ],
}

const social = [
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Email', icon: Mail, href: 'mailto:contact@vsg.io' },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-vsg-dark border-t border-vsg-gray-800">
      <div className="section-container py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-vsg-black font-bold text-xl">V</span>
              </div>
              <span className="font-semibold text-white text-lg">VSG</span>
            </Link>
            <p className="text-sm text-vsg-gray-400 mb-6 max-w-xs">
              The Infrastructure of Verifiable Autonomy. Verification. Capital. Control.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-10 h-10 rounded-lg bg-vsg-gray-900 border border-vsg-gray-800 flex items-center justify-center text-vsg-gray-400 hover:text-white hover:border-vsg-gray-700 transition-all"
                  aria-label={item.name}
                >
                  <item.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Infrastructure</h4>
            <ul className="space-y-3">
              {navigation.infrastructure.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-vsg-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-3">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-vsg-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-vsg-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-vsg-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-vsg-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-vsg-gray-500">
              &copy; {new Date().getFullYear()} Verifiable Systems Group. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-sm text-vsg-gray-500 hover:text-vsg-gray-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-vsg-gray-500 hover:text-vsg-gray-300 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Tagline Bar */}
      <div className="bg-vsg-black py-6 border-t border-vsg-gray-900">
        <div className="section-container text-center">
          <p className="text-sm text-vsg-gray-500 font-mono">
            Verifiable Systems Group &mdash; Verification. Capital. Control.
          </p>
        </div>
      </div>
    </footer>
  )
}
