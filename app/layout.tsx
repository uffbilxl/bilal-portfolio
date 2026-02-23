import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://bilalarshad.dev'),
  title: {
    default: 'Bilal Arshad — Cyber Security Student & Developer',
    template: '%s | Bilal Arshad',
  },
  description:
    'Portfolio of Bilal Arshad — BSc (Hons) Cyber Security student at Birmingham City University. Specialising in penetration testing, network engineering, Python development, and Linux administration.',
  keywords: [
    'Bilal Arshad',
    'Cyber Security',
    'Birmingham City University',
    'Penetration Testing',
    'Python Developer',
    'Network Engineer',
    'Portfolio',
    'Ethical Hacking',
    'Linux',
  ],
  authors: [{ name: 'Bilal Arshad' }],
  creator: 'Bilal Arshad',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://bilalarshad.dev',
    title: 'Bilal Arshad — Cyber Security Student & Developer',
    description:
      'BSc (Hons) Cyber Security at BCU — Predicted First Class Honours. Building secure systems and exploring the digital frontier.',
    siteName: 'Bilal Arshad Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bilal Arshad — Cyber Security Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bilal Arshad — Cyber Security Student & Developer',
    description: 'BSc Cyber Security @ BCU | Penetration Testing | Python | Linux',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1 },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#050a0e" />
      </head>
      <body className="bg-cyber-black font-body antialiased">
        {/* Scanline overlay */}
        <div className="scan-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
