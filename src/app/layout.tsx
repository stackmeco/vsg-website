import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Verifiable Systems Group | Make AI Provable. Make DeFi Safer.',
  description: 'Tools to verify AI outputs with cryptographic proof, borrow against crypto without liquidation risk, and protect DeFi positions automatically. Non-custodial. Open source.',
  keywords: ['AI verification', 'DeFi', 'non-custodial lending', 'liquidation protection', 'crypto borrowing', 'MEV protection'],
  authors: [{ name: 'Verifiable Systems Group' }],
  openGraph: {
    title: 'Verifiable Systems Group',
    description: 'Make AI Provable. Make DeFi Safer.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verifiable Systems Group',
    description: 'Make AI Provable. Make DeFi Safer.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-vsg-black">
        {children}
      </body>
    </html>
  )
}
