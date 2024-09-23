import Image from 'next/image'
import CalvinKlein from '../../../public/images/brands/calvinklein.svg'
import Gucci from '../../../public/images/brands/gucci.svg'
import Prada from '../../../public/images/brands/prada.svg'
import Versace from '../../../public/images/brands/versace.svg'
import Zara from '../../../public/images/brands/zara.svg'

export default function HomeBrands() {
  return (
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
          <Image src={Zara} alt="Zara logo" className="h-[23px] lg:h-[33px]" />
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
  )
}
