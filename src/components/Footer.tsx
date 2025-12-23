'use client'

import Link from 'next/link'
import { Github, Twitter, Mail } from 'lucide-react'

const navigation = {
  products: [
    { name: 'Stackme', href: 'https://app.stackme.xyz', external: true },
    { name: 'Sentinel', href: 'https://github.com/vsg/sentinel', external: true },
    { name: 'Axiom', href: '#products' },
    { name: 'Helios', href: '#products' },
  ],
  resources: [
    { name: 'GitHub', href: 'https://github.com/vsg', external: true },
    { name: 'Contact', href: 'mailto:contact@vsg.io' },
    { name: 'Partnerships', href: 'mailto:partnerships@vsg.io' },
  ],
}

const social = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/vsg' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/vikishan' },
  { name: 'Email', icon: Mail, href: 'mailto:contact@vsg.io' },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-vsg-dark border-t border-vsg-gray-800">
      <div className="section-container py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-vsg-black font-bold text-xl">V</span>
              </div>
              <span className="font-semibold text-white text-lg">Verifiable Systems Group</span>
            </Link>
            <p className="text-sm text-vsg-gray-400 mb-6 max-w-xs">
              Making AI provable. Making DeFi safer. Non-custodial tools for the crypto-native.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-vsg-gray-900 border border-vsg-gray-800 flex items-center justify-center text-vsg-gray-400 hover:text-white hover:border-vsg-gray-700 transition-all"
                  aria-label={item.name}
                >
                  <item.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-3">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="text-sm text-vsg-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="text-sm text-vsg-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
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
          </div>
        </div>
      </div>
    </footer>
  )
}
