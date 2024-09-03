import { ProductCard } from '@/components/ProductCard'
import { ArrowLeft, ArrowRight, CircleCheck, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import CalvinKlein from '../../public/images/brands/calvinklein.svg'
import Gucci from '../../public/images/brands/gucci.svg'
import Prada from '../../public/images/brands/prada.svg'
import Versace from '../../public/images/brands/versace.svg'
import Zara from '../../public/images/brands/zara.svg'
import HomeBanner from '../../public/images/home_banner.png'
import HomeBannerMobile from '../../public/images/home_banner_mobile.png'
import CasualStyle from '../../public/images/style/casual.png'
import FormalStyle from '../../public/images/style/formal.png'
import GymStyle from '../../public/images/style/gym.png'
import PartyStyle from '../../public/images/style/party.png'
import { integral } from './layout'

export default function Home() {
  return (
    <div>
      <div className="flex justify-center bg-anti-flash-white">
        <div className="flex flex-col lg:w-[1240px] lg:flex-row">
          <div className="mx-4 flex flex-col justify-center gap-4 pt-6 lg:gap-7">
            <h1 className={`${integral.className} text-4xl lg:text-6xl`}>
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-black/60">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="h-[52px] w-full rounded-[62px] bg-black font-medium text-white lg:w-[210px]">
              Shop Now
            </button>
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
            src={HomeBanner}
            quality={100}
            alt="Model"
            className="hidden lg:block"
          />
          <Image
            src={HomeBannerMobile}
            quality={100}
            alt="Model"
            className="lg:hidden"
          />
        </div>
      </div>
      <div className="flex justify-center bg-black">
        <ul className="mb-3 grid w-full grid-cols-6 justify-between gap-5 px-4 py-8 lg:flex lg:w-[1240px] lg:gap-0 lg:py-9">
          <li className="col-span-2 flex justify-center">
            <Image
              src={Versace}
              alt="Versace logo"
              className="h-[23px] lg:h-[33px]"
            />
          </li>
          <li className="col-span-2 flex justify-center">
            <Image
              src={Zara}
              alt="Zara logo"
              className="h-[23px] lg:h-[33px]"
            />
          </li>
          <li className="col-span-2 flex justify-center">
            <Image
              src={Gucci}
              alt="Gucci logo"
              className="h-[23px] lg:h-[33px]"
            />
          </li>
          <li className="col-span-3 flex justify-center">
            <Image
              src={Prada}
              alt="Prada logo"
              className="h-[23px] lg:h-[33px]"
            />
          </li>
          <li className="col-span-3 flex justify-center">
            <Image
              src={CalvinKlein}
              alt="Calvin Klein logo"
              className="h-[23px] lg:h-[33px]"
            />
          </li>
        </ul>
      </div>
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
          <button className="w-full rounded-[62px] border border-black/10 py-2 lg:py-3">
            View All
          </button>
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
          <button className="w-full rounded-[62px] border border-black/10 py-2 lg:py-3">
            View All
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mx-4 flex w-full flex-col items-center rounded-[20px] bg-anti-flash-white py-6 lg:w-[1240px] lg:py-14">
          <h1
            className={`${integral.className} pb-7 pt-3 text-center text-4xl lg:pb-16 lg:pt-5 lg:text-6xl`}
          >
            BROWSE BY DRESS STYLE
          </h1>

          <div className="flex flex-col items-center gap-5 lg:grid lg:w-[1100px] lg:grid-cols-3">
            <Link
              className="relative flex h-[180px] w-[310px] justify-end overflow-hidden rounded-[20px] bg-white lg:col-span-1 lg:h-[230px] lg:w-full"
              href="/category/filtro1"
            >
              <h2 className="absolute left-5 top-4 text-2xl font-bold">
                Casual
              </h2>
              <Image
                src={CasualStyle}
                alt="Casual model"
                className="h-full w-4/5 object-cover"
              />
            </Link>
            <Link
              className="relative flex h-[180px] w-[310px] justify-end overflow-hidden rounded-[20px] bg-white lg:col-span-2 lg:h-[230px] lg:w-full"
              href="/category/filtro1"
            >
              <h2 className="absolute left-5 top-4 text-2xl font-bold">
                Formal
              </h2>
              <Image
                src={FormalStyle}
                alt="Formal model"
                className="h-full w-4/5 object-cover"
              />
            </Link>
            <Link
              className="relative flex h-[180px] w-[310px] justify-end overflow-hidden rounded-[20px] bg-white lg:col-span-2 lg:h-[230px] lg:w-full"
              href="/category/filtro1"
            >
              <h2 className="absolute left-5 top-4 text-2xl font-bold">
                Party
              </h2>
              <Image
                src={PartyStyle}
                alt="Party model"
                className="h-full w-4/5 object-cover"
              />
            </Link>
            <Link
              className="relative flex h-[180px] w-[310px] justify-end overflow-hidden rounded-[20px] bg-white lg:col-span-1 lg:h-[230px] lg:w-full"
              href="/category/filtro1"
            >
              <h2 className="absolute left-5 top-4 text-2xl font-bold">Gym</h2>
              <Image
                src={GymStyle}
                alt="Gym model"
                className="h-full w-4/5 object-cover"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="my-12 flex flex-col items-center lg:my-20">
        <div className="mx-4 mb-2 flex items-end justify-between lg:mb-6 lg:w-[1240px]">
          <h1
            className={`${integral.className} text-start text-4xl lg:text-6xl`}
          >
            OUR HAPPY CUSTOMERS
          </h1>
          <div className="flex gap-4">
            <ArrowLeft />
            <ArrowRight />
          </div>
        </div>
        <div className="mx-4 my-5 rounded-[20px] border border-black/10 p-6 lg:w-[1240px]">
          <div className="flex gap-1 pb-3">
            <Star fill="#FFC633" color="#FFC633" strokeWidth={1} size={18} />
            <Star fill="#FFC633" color="#FFC633" strokeWidth={1} size={18} />
            <Star fill="#FFC633" color="#FFC633" strokeWidth={1} size={18} />
            <Star fill="#FFC633" color="#FFC633" strokeWidth={1} size={18} />
            <Star fill="#FFC633" color="#FFC633" strokeWidth={1} size={18} />
          </div>
          <div className="flex items-center gap-2 pb-1">
            <p className="font-bold text-black">Sarah M.</p>
            <CircleCheck color="#FFFF" fill="#01AB31" />
          </div>
          <p className="text-black/60">
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </p>
        </div>
      </div>
    </div>
  )
}
