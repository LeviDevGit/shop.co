import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

export const metadata: Metadata = {
  title: 'SHOP.CO',
}

const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/satoshi/Satoshi-Light.ttf',
      weight: '300',
    },
    {
      path: '../../public/fonts/satoshi/Satoshi-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/satoshi/Satoshi-Medium.ttf',
      weight: '500',
    },
    {
      path: '../../public/fonts/satoshi/Satoshi-Bold.ttf',
      weight: '700',
    },
  ],
  variable: '--font-satoshi',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={satoshi.className}>{children}</body>
    </html>
  )
}
