import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kinkan Educational Consult | Building Brighter Beginnings',
  description: 'Kinkan Educational Consult supports children in developing strong foundations in phonics, literacy, reading, mathematics, and early education.',
  icons: {
    icon: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-z9rFMSA50QQkeJynfTwW9iJS7QRa6X.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-z9rFMSA50QQkeJynfTwW9iJS7QRa6X.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-z9rFMSA50QQkeJynfTwW9iJS7QRa6X.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    shortcut: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-z9rFMSA50QQkeJynfTwW9iJS7QRa6X.png',
    apple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-z9rFMSA50QQkeJynfTwW9iJS7QRa6X.png',
  },
  openGraph: {
    title: 'Kinkan Educational Consult | Building Brighter Beginnings',
    description: 'Supporting children through phonics, literacy, mathematics, and educational development.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#16C5C3',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
