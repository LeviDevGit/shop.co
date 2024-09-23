import { ProductCard } from '@/components/ProductCard'
import Link from 'next/link'
import { integral } from '../layout'

export default function HomeProducts() {
  return (
    <div className="mb-14 flex flex-col lg:mb-24 lg:items-center">
      <h1
        className={`${integral.className} my-8 text-center text-4xl lg:my-16 lg:text-6xl`}
      >
        NEW ARRIVALS
      </h1>
      <ul className="mx-4 flex gap-5 overflow-hidden lg:w-[1240px]">
        <li>
          <ProductCard />
        </li>
        <li>
          <ProductCard />
        </li>
        <li>
          <ProductCard />
        </li>
        <li>
          <ProductCard />
        </li>
      </ul>
      <div className="mx-4 mt-7 font-medium text-black lg:mt-10 lg:w-[218px]">
        <Link
          href="/category/filtro1"
          className="flex w-full items-center justify-center rounded-[62px] border border-black/10 py-2 lg:py-3"
        >
          View All
        </Link>
      </div>
      <div className="mx-4 lg:w-[1240px]">
        <hr className="mb-2 mt-10 h-[1px] bg-black/10 lg:mb-5 lg:mt-16" />
      </div>
      <h1
        className={`${integral.className} my-8 text-center text-4xl lg:my-16 lg:text-6xl`}
      >
        TOP SELLING
      </h1>
      <ul className="mx-4 flex gap-5 overflow-hidden">
        <li>
          <ProductCard />
        </li>
        <li>
          <ProductCard />
        </li>
        <li>
          <ProductCard />
        </li>
        <li>
          <ProductCard />
        </li>
      </ul>
      <div className="mx-4 mt-7 font-medium text-black lg:mt-10 lg:w-[218px]">
        <Link
          href="/category/filtro1"
          className="flex w-full items-center justify-center rounded-[62px] border border-black/10 py-2 lg:py-3"
        >
          View All
        </Link>
      </div>
    </div>
  )
}
