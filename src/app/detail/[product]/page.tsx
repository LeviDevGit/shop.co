/* eslint-disable @next/next/no-img-element */

import { integral } from '@/app/layout'
import { StarRating } from '@/components/ProductCard'
import { Check, Minus, Plus } from 'lucide-react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Product({ params }: { params: { product: string } }) {
  return (
    <div className="flex justify-center">
      <div className="mx-4 py-10 lg:m-0 lg:w-[1240px]">
        <div className="flex flex-col gap-3 lg:flex-row">
          <div className="flex gap-5 lg:order-4 lg:mr-7">
            <div className="flex h-[290px] w-full items-center justify-center rounded-[20px] bg-isabelline lg:h-full lg:w-[444px]">
              <img
                src="https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png"
                alt=""
                className="w-11/12"
              />
            </div>
          </div>
          <div className="flex flex-row gap-4 lg:flex-col">
            <div className="aspect-square w-1/3 overflow-hidden rounded-[20px] bg-isabelline lg:h-[162px] lg:w-[152px]">
              <img
                src="https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png"
                alt=""
              />
            </div>
            <div className="aspect-square w-1/3 overflow-hidden rounded-[20px] bg-isabelline lg:h-[162px] lg:w-[152px]">
              <img
                src="https://static.vecteezy.com/system/resources/previews/008/514/596/original/young-man-in-oversize-t-shirt-mockup-cutout-file-free-png.png"
                alt=""
              />
            </div>
            <div className="aspect-square w-1/3 overflow-hidden rounded-[20px] bg-isabelline lg:h-[162px] lg:w-[152px]">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/008/520/648/small/young-man-in-oversize-t-shirt-mockup-cutout-file-free-png.png "
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col justify-between lg:order-5">
            <h1 className={`${integral.className} text-4xl`}>
              One Life Graphic Tshirt
            </h1>
            <div className="flex gap-2">
              <StarRating rating={3.5} />
              <h6>
                3.5/<span className="text-black/60">5</span>
              </h6>
            </div>
            <div className="flex items-center gap-4 text-3xl font-bold">
              <h4>$145</h4>
              <h4 className="text-black/40 line-through">$242</h4>
              <div className="ml-1 flex h-[34px] w-[72px] items-center justify-center rounded-[62px] bg-red-500/10 px-5">
                <h5 className="text-base font-medium text-red-500">-20%</h5>
              </div>
            </div>
            <p className="text-black/60">
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>
            <hr className="my-4" />
            <fieldset className="flex gap-3">
              <legend className="mb-3 text-black/60">Select Colors</legend>
              <div className="relative h-[37px] w-[37px] rounded-full bg-[#4F4631]">
                <input
                  type="radio"
                  name="color"
                  className="peer h-full w-full cursor-pointer appearance-none"
                />
                <Check
                  className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform peer-checked:block"
                  color="#FFFFFF"
                  width={16}
                />
              </div>
              <div className="relative h-[37px] w-[37px] rounded-full bg-[#314F4A]">
                <input
                  type="radio"
                  name="color"
                  className="peer h-full w-full cursor-pointer appearance-none"
                />
                <Check
                  className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform peer-checked:block"
                  color="#FFFFFF"
                  width={16}
                />
              </div>
              <div className="relative h-[37px] w-[37px] rounded-full bg-[#31344F]">
                <input
                  type="radio"
                  name="color"
                  className="peer h-full w-full cursor-pointer appearance-none"
                />
                <Check
                  className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform peer-checked:block"
                  color="#FFFFFF"
                  width={16}
                />
              </div>
            </fieldset>
            <hr className="my-4" />
            <fieldset className="flex gap-4">
              <legend className="mb-3 text-black/60">Choose Size</legend>
              <div className="relative h-[46px] w-[8ch] rounded-[62px] bg-anti-flash-white text-black/60">
                <input
                  type="radio"
                  name="size"
                  className="peer h-full w-full cursor-pointer appearance-none rounded-[62px] checked:bg-black"
                />
                <label
                  htmlFor=""
                  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform peer-checked:font-medium peer-checked:text-white"
                >
                  Small
                </label>
              </div>
              <div className="relative h-[46px] w-[9ch] rounded-[62px] bg-anti-flash-white text-black/60">
                <input
                  type="radio"
                  name="size"
                  className="peer h-full w-full cursor-pointer appearance-none rounded-[62px] checked:bg-black"
                />
                <label
                  htmlFor=""
                  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform peer-checked:font-medium peer-checked:text-white"
                >
                  Medium
                </label>
              </div>
              <div className="relative h-[46px] w-[8ch] rounded-[62px] bg-anti-flash-white text-black/60">
                <input
                  type="radio"
                  name="size"
                  className="peer h-full w-full cursor-pointer appearance-none rounded-[62px] checked:bg-black"
                />
                <label
                  htmlFor=""
                  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform peer-checked:font-medium peer-checked:text-white"
                >
                  Large
                </label>
              </div>
              <div className="relative h-[46px] w-[10ch] rounded-[62px] bg-anti-flash-white text-black/60">
                <input
                  type="radio"
                  name="size"
                  className="peer h-full w-full cursor-pointer appearance-none rounded-[62px] checked:bg-black"
                />
                <label
                  htmlFor=""
                  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform peer-checked:font-medium peer-checked:text-white"
                >
                  X-Large
                </label>
              </div>
            </fieldset>
            <hr className="my-4" />
            <div className="flex justify-between gap-5 font-medium">
              <div className="flex h-[52px] w-[170px] items-center justify-center gap-8 rounded-[62px] bg-anti-flash-white text-black">
                <button>
                  <Minus strokeWidth={2} />
                </button>
                <p className="pointer-events-none">{1}</p>
                <button>
                  <Plus strokeWidth={2} />
                </button>
              </div>
              <button className="h-[52px] w-[400px] rounded-[62px] bg-black text-white">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
