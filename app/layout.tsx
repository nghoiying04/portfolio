import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Rainie's Portfolio",
  description: 'Know more about me'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
