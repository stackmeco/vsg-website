import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Verifiable Systems Group | The Infrastructure of Verifiable Autonomy',
  description: 'Building the verification, capital, and control layers for autonomous systems. Institutional-grade infrastructure for AI agents, DeFi protocols, and the autonomous economy.',
  keywords: ['verification', 'autonomous systems', 'AI agents', 'DeFi infrastructure', 'non-custodial', 'capital efficiency', 'verifiable AI', 'autonomous economy'],
  authors: [{ name: 'Verifiable Systems Group' }],
  openGraph: {
    title: 'Verifiable Systems Group | The Infrastructure of Verifiable Autonomy',
    description: 'Verification. Capital. Control. Building the infrastructure layers for the autonomous economy.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verifiable Systems Group',
    description: 'The Infrastructure of Verifiable Autonomy. Verification. Capital. Control.',
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
