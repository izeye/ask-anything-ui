import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Ask Anything',
  description: 'A service that can answer any questions.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={cn(
        'font-sans antialiased',
        GeistSans.variable,
        GeistMono.variable
      )}>{children}</body>
    </html>
  )
}
