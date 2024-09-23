import { integral } from '@/app/layout'
import { CircleUserRound, Menu, Search, ShoppingCart, X } from 'lucide-react'
import Link from 'next/link'
import { Dropdown } from './Dropdown'

export function Header() {
  return (
    <header>
      <div className="flex justify-center bg-black py-2">
        <div className="relative text-center text-xs text-white lg:w-[1240px] lg:text-base">
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
      <nav className="flex justify-center">
        <div className="flex w-11/12 items-center justify-between py-2 lg:w-[1240px] lg:justify-normal lg:py-5">
          <div className="flex items-center gap-3">
            <button className="lg:hidden">
              <Menu strokeWidth={2.5} />
            </button>
            <Link href="/">
              <h2
                className={`${integral.className} mb-[10px] text-3xl font-bold`}
              >
                SHOP.CO
              </h2>
            </Link>
          </div>
          <div className="hidden gap-5 px-8 lg:flex">
            <Dropdown />
            <Link href="/category/filtro1">On Sale</Link>
            <Link href="/category/filtro1">New Arrivals</Link>
            <button>Brands</button>
          </div>
          <div className="hidden grow lg:block">
            <div className="flex h-[48px] items-center gap-3 rounded-[62px] bg-anti-flash-white px-4 text-black/40">
              <Search />
              <input
                type="text"
                placeholder="Search for products..."
                className="h-full w-full bg-transparent outline-none"
              />
            </div>
          </div>
          <div className="flex gap-3 lg:gap-4 lg:pl-8">
            <button className="lg:hidden">
              <Search strokeWidth={2.5} />
            </button>
            <Link href="/cart">
              <ShoppingCart strokeWidth={2.5} />
            </Link>
            <button>
              <CircleUserRound strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
