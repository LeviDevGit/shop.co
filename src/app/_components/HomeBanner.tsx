import Image from 'next/image'
import Link from 'next/link'
import Banner from '../../../public/images/home_banner.png'
import BannerMobile from '../../../public/images/home_banner_mobile.png'
import { integral } from '../layout'

export default function HomeBanner() {
  return (
    <div className="flex justify-center bg-anti-flash-white">
      <div className="flex flex-col lg:w-[1240px] lg:flex-row">
        <div className="mx-4 flex flex-col justify-center gap-4 pt-6 lg:gap-7">
          <h1 className={`${integral.className} text-4xl lg:text-6xl`}>
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-black/60">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Link
            href="/category/filtro1"
            className="flex h-[52px] w-full items-center justify-center rounded-[62px] bg-black font-medium text-white lg:w-[210px]"
          >
            Shop Now
          </Link>
          <ul className="grid grid-cols-[1fr_1px_1fr] gap-4 py-1 text-center text-black lg:flex lg:gap-7 lg:py-4">
            <li>
              <h2 className="text-2xl font-bold lg:text-4xl">200+</h2>
              <p className="text-sm text-black/60">International Brands</p>
            </li>
            <li className="h-full w-px bg-black/10" />
            <li>
              <h2 className="text-2xl font-bold lg:text-4xl">2,000+</h2>
              <p className="text-sm text-black/60">High-Quality Products</p>
            </li>
            <li className="hidden h-full w-px bg-black/10 lg:block" />
            <li className="col-span-3">
              <h2 className="text-2xl font-bold lg:text-4xl">30,000+</h2>
              <p className="text-sm text-black/60">Happy Customers</p>
            </li>
          </ul>
        </div>
        <Image
          src={Banner}
          quality={100}
          alt="Model"
          className="hidden lg:block"
        />
        <Image
          src={BannerMobile}
          quality={100}
          alt="Model"
          className="lg:hidden"
        />
      </div>
    </div>
  )
}
