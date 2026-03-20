import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-sans'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'Globehacks 2026 | ACM at ASU x GCN',
  description: 'Arizona\'s first go-to-market hackathon. Join us April 18-19, 2026 for 24 hours of innovation, collaboration, and learning in a global context.',
  keywords: ['hackathon', 'ASU', 'ACM', 'GCN', 'coding', 'innovation', 'Arizona', 'tech'],
  authors: [{ name: 'ACM at ASU' }, { name: 'Global Career Network' }],
  openGraph: {
    title: 'Globehacks 2026 | ACM at ASU x GCN',
    description: 'Arizona\'s first go-to-market hackathon. April 18-19, 2026.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#027DC2',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
          {children}
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  )
}
