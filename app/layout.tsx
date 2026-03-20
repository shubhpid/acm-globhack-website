import React from "react"
import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'ACM at ASU | Arizona State University ACM Student Chapter',
  description: 'ACM Student Chapter at Arizona State University - Advancing Computing as a Science & Profession. Join us for networking, learning, mentoring and knowledge-sharing.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
         url: '/images/Logo.png',
        media: '(prefers-color-scheme: dark)',}
     
    ],
    apple: '/images/Logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
