import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Verifiable Systems Group | The Infrastructure of Verifiable Autonomy',
  description: 'Building the verification layer that proves what\'s true, the capital infrastructure that preserves your wealth, and the control systems that ensure autonomy isn\'t just a promise.',
  keywords: ['AI verification', 'DeFi infrastructure', 'autonomous systems', 'blockchain', 'cryptography', 'non-custodial'],
  authors: [{ name: 'Verifiable Systems Group' }],
  openGraph: {
    title: 'Verifiable Systems Group',
    description: 'The Infrastructure of Verifiable Autonomy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verifiable Systems Group',
    description: 'The Infrastructure of Verifiable Autonomy',
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
