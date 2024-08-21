import {
  CircleUserRound,
  Facebook,
  Github,
  Instagram,
  Mail,
  Menu,
  Search,
  ShoppingCart,
  Twitter,
  X,
} from 'lucide-react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Image from 'next/image'
import applepay from '../../public/icons/payment/applepay.svg'
import googlepay from '../../public/icons/payment/googlepay.svg'
import mastercard from '../../public/icons/payment/mastercard.svg'
import paypal from '../../public/icons/payment/paypal.svg'
import visa from '../../public/icons/payment/visa.svg'
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

const integral = localFont({
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
        <header>
          <div className="bg-black py-2 lg:px-24">
            <div className="relative text-center text-xs text-white lg:text-base">
              <p>
                Sign up and get 20% off to your first order.{' '}
                <a href="" className="font-medium underline">
                  Sign Up Now
                </a>
              </p>
              <button className="absolute right-0 top-0 hidden h-fit lg:block">
                <X color="#FFFFFF" size={25} />
              </button>
            </div>
          </div>
          <nav className="mx-4 flex items-end justify-between py-3 pb-5 lg:m-0 lg:items-center lg:px-24">
            <div className="flex items-end gap-4">
              <button className="lg:hidden">
                <Menu strokeWidth={2.5} />
              </button>
              <h2 className={`${integral.className} text-3xl font-bold`}>
                SHOP.CO
              </h2>
            </div>
            <ul className="hidden lg:flex">
              <li>Shop</li>
              <li>On Sale</li>
              <li>New Arrivals</li>
              <li>Brands</li>
            </ul>
            <div className="hidden lg:block">
              <div className="flex h-[42px] items-center gap-3 rounded-[62px] bg-anti-flash-white p-5 text-black/40 lg:h-[50px]">
                <Search />
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>
            <div className="flex gap-3 lg:gap-4">
              <button className="lg:hidden">
                <Search strokeWidth={2.5} />
              </button>
              <button>
                <ShoppingCart strokeWidth={2.5} />
              </button>
              <button>
                <CircleUserRound strokeWidth={2.5} />
              </button>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <div className="custom-gradient lg:px-24">
            <div className="mx-4 rounded-[20px] bg-black p-7 lg:m-0 lg:flex lg:items-center lg:justify-between lg:p-10 lg:px-20">
              <p
                className={`${integral.className} mb-9 text-left text-3xl font-black text-white lg:mb-0 lg:w-5/12 lg:text-5xl`}
              >
                STAY UPTO DATE ABOUT OUR LATEST OFFERS
              </p>
              <div className="flex flex-col items-stretch gap-4 text-black/40 lg:w-1/4 lg:text-lg">
                <div className="flex h-[42px] items-center gap-3 rounded-[62px] bg-white p-5 lg:h-[50px]">
                  <Mail />
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    className="w-full outline-none"
                  />
                </div>
                <button className="h-[42px] rounded-[62px] bg-white font-medium text-black lg:h-[50px]">
                  Subscribe to Newsletter
                </button>
              </div>
            </div>
          </div>
          <div className="bg-anti-flash-white px-4 pt-6 text-black lg:px-24">
            <div className="w-full justify-between lg:flex lg:gap-60">
              <div className="flex flex-col gap-3 lg:w-1/5 lg:gap-6">
                <h2 className={`${integral.className} text-3xl text-black`}>
                  SHOP.CO
                </h2>
                <p className="text-black/60">
                  We have clothes that suits your style and which you’re proud
                  to wear. From women to men.
                </p>
                <ul className="flex gap-3 pb-4">
                  <li className="rounded-full border border-black/20 bg-white p-2">
                    <a href="">
                      <Twitter size={20} />
                    </a>
                  </li>
                  <li className="rounded-full border border-black/20 bg-white p-2">
                    <a href="">
                      <Facebook size={20} />
                    </a>
                  </li>
                  <li className="rounded-full border border-black/20 bg-white p-2">
                    <a href="">
                      <Instagram size={20} />
                    </a>
                  </li>
                  <li className="rounded-full border border-black/20 bg-white p-2">
                    <a href="">
                      <Github size={20} />
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="grid grid-cols-2 gap-y-6 pb-6 lg:flex lg:w-4/5 lg:justify-between lg:pb-12">
                <li>
                  <h3 className="mb-3 font-medium text-black lg:mb-5">
                    COMPANY
                  </h3>
                  <div className="flex flex-col gap-2 text-black/60 lg:gap-4">
                    <a href="">About</a>
                    <a href="">Features</a>
                    <a href="">Works</a>
                    <a href="">Career</a>
                  </div>
                </li>
                <li>
                  <h3 className="mb-3 font-medium text-black lg:mb-5">HELP</h3>
                  <div className="flex flex-col gap-2 text-black/60 lg:gap-4">
                    <a href="">Customer Support</a>
                    <a href="">Delivery Details</a>
                    <a href="">Terms & Conditions</a>
                    <a href="">Privacy Policy</a>
                  </div>
                </li>
                <li>
                  <h3 className="mb-3 font-medium text-black lg:mb-5">FAQ</h3>
                  <div className="flex flex-col gap-2 text-black/60 lg:gap-4">
                    <a href="">Account</a>
                    <a href="">Manage Deliveries</a>
                    <a href="">Orders</a>
                    <a href="">Payments</a>
                  </div>
                </li>
                <li>
                  <h3 className="mb-3 font-medium text-black lg:mb-5">
                    COMPANY
                  </h3>
                  <div className="flex flex-col gap-2 text-black/60 lg:gap-4">
                    <a href="">Free eBooks</a>
                    <a href="">Development Tutorial</a>
                    <a href="">How to - Blog</a>
                    <a href="">Youtube Playlist</a>
                  </div>
                </li>
              </ul>
            </div>
            <hr className="bg-black/10" />
            <div className="flex flex-col items-center gap-4 py-4 pb-24 lg:flex-row lg:justify-between">
              <p className="text-black/60">
                Shop.co © 2000-2023, All Rights Reserved
              </p>
              <div className="flex w-fit gap-4">
                <Image
                  src={visa}
                  alt="Visa"
                  className="w-[40px] rounded lg:w-[45px]"
                />
                <Image
                  src={mastercard}
                  alt="MasterCard"
                  className="w-[40px] rounded lg:w-[45px]"
                />
                <Image
                  src={paypal}
                  alt="PayPal"
                  className="w-[40px] rounded lg:w-[45px]"
                />
                <Image
                  src={applepay}
                  alt="ApplePay"
                  className="w-[40px] rounded lg:w-[45px]"
                />
                <Image
                  src={googlepay}
                  alt="GooglePay"
                  className="w-[40px] rounded lg:w-[45px]"
                />
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
