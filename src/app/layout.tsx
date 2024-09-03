import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
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

export const integral = localFont({
  src: [
    {
      path: '../../public/fonts/integral/Fontspring-DEMO-integralcf-bold.otf',
      weight: '700',
    },
  ],
  variable: '--font-integral',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.className} w-screen`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
