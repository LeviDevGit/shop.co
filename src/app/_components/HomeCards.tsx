import Image from 'next/image'
import Link from 'next/link'
import CasualStyle from '../../../public/images/style/casual.png'
import FormalStyle from '../../../public/images/style/formal.png'
import GymStyle from '../../../public/images/style/gym.png'
import PartyStyle from '../../../public/images/style/party.png'
import { integral } from '../layout'

export default function HomeCards() {
  return (
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
            <h2 className="absolute left-5 top-4 text-2xl font-bold">Casual</h2>
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
            <h2 className="absolute left-5 top-4 text-2xl font-bold">Formal</h2>
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
            <h2 className="absolute left-5 top-4 text-2xl font-bold">Party</h2>
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
  )
}
