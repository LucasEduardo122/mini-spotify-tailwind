import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spotify',
  description: 'Listen to music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-800 text-zinc-500">{children}</body>
    </html>
  )
}
