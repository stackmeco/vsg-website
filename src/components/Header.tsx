'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Infrastructure', href: '#pillars' },
  { name: 'Products', href: '#products' },
  { name: 'Values', href: '#values' },
  { name: 'Vision', href: '#future' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-vsg-black/80 backdrop-blur-lg border-b border-vsg-gray-800'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-vsg-black font-bold text-lg">V</span>
            </div>
            <span className="hidden sm:block font-semibold text-white">
              Verifiable Systems Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-vsg-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link href="#contact" className="btn-primary text-sm py-2 px-4">
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-vsg-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-vsg-gray-800">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-vsg-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="btn-primary mt-4 w-full justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
