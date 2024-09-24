/* eslint-disable @next/next/no-img-element */

import { integral } from '@/app/layout'
import { ProductCard, StarRating } from '@/components/ProductCard'
import {
  Check,
  ChevronDown,
  CircleCheck,
  Minus,
  Plus,
  SlidersVertical,
  Star,
} from 'lucide-react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Product({ params }: { params: { product: string } }) {
  return (
    <div className="flex flex-col items-center">
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
      <div className="mx-4 lg:mx-0 lg:w-[1240px]">
        <fieldset className="flex w-full">
          <div className="relative w-1/3">
            <input
              type="radio"
              name="details"
              className="peer h-full w-full cursor-pointer appearance-none border-b border-black/10 checked:border-black"
            />
            <label
              htmlFor=""
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-lg text-black/60 peer-checked:font-medium peer-checked:text-black"
            >
              Product Details
            </label>
          </div>
          <div className="relative w-1/3">
            <input
              type="radio"
              name="details"
              className="peer h-full w-full cursor-pointer appearance-none border-b border-black/10 checked:border-black"
              checked
            />
            <label
              htmlFor=""
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-lg text-black/60 peer-checked:font-medium peer-checked:text-black"
            >
              Rating & Reviews
            </label>
          </div>
          <div className="relative h-[60px] w-1/3">
            <input
              type="radio"
              name="details"
              className="peer h-full w-full cursor-pointer appearance-none border-b border-black/10 checked:border-black"
            />
            <label
              htmlFor=""
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-lg text-black/60 peer-checked:font-medium peer-checked:text-black"
            >
              FAQs
            </label>
          </div>
        </fieldset>
        <div>
          <div className="mt-6 flex items-center justify-between font-medium">
            <h3 className="flex items-center gap-2 text-2xl font-bold">
              All Reviews
              <span className="font-regular text-base text-black/60">
                (451)
              </span>
            </h3>
            <div className="flex h-[48px] gap-4">
              <button className="rounded-[62px] bg-anti-flash-white p-3">
                <SlidersVertical width={24} />
              </button>
              <button className="flex items-center gap-4 rounded-[62px] bg-anti-flash-white px-5">
                Latest <ChevronDown />
              </button>
              <button className="rounded-[62px] bg-black px-6 text-white">
                Write a Review
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="mx-4 my-5 rounded-[20px] border border-black/10 p-6 lg:w-[1240px]">
              <div className="flex gap-1 pb-3">
                <Star
                  fill="#FFC633"
                  color="#FFC633"
                  strokeWidth={1}
                  size={18}
                />
                <Star
                  fill="#FFC633"
                  color="#FFC633"
                  strokeWidth={1}
                  size={18}
                />
                <Star
                  fill="#FFC633"
                  color="#FFC633"
                  strokeWidth={1}
                  size={18}
                />
                <Star
                  fill="#FFC633"
                  color="#FFC633"
                  strokeWidth={1}
                  size={18}
                />
                <Star
                  fill="#FFC633"
                  color="#FFC633"
                  strokeWidth={1}
                  size={18}
                />
              </div>
              <div className="flex items-center gap-2 pb-1">
                <p className="font-bold text-black">Sarah M.</p>
                <CircleCheck color="#FFFF" fill="#01AB31" />
              </div>
              <p className="text-black/60">
                &quot;
                {`I'm blown away by the quality and style of the clothes I
            received from Shop.co. From casual wear to elegant dresses, every
            piece I've bought has exceeded my expectations.`}
                &quot;
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="mx-4 my-5 rounded-[20px] border border-black/10 p-6 lg:w-[1240px]">
              <div className="flex gap-1 pb-3">
                <Star
                  fill="#FFC633"
                  color="#FFC633"
                  strokeWidth={1}
                  size={18}
                />
                <Star
                  fill="#FFC633"
                  color="#FFC633"
                  strokeWidth={1}
                  size={18}
                />
                <Star
                  fill="#FFC633"
                  color="#FFC633"
                  strokeWidth={1}
                  size={18}
                />
                <Star
                  fill="#FFC633"
                  color="#FFC633"
                  strokeWidth={1}
                  size={18}
                />
                <Star
                  fill="#FFC633"
                  color="#FFC633"
                  strokeWidth={1}
                  size={18}
                />
              </div>
              <div className="flex items-center gap-2 pb-1">
                <p className="font-bold text-black">Sarah M.</p>
                <CircleCheck color="#FFFF" fill="#01AB31" />
              </div>
              <p className="text-black/60">
                &quot;
                {`I'm blown away by the quality and style of the clothes I
            received from Shop.co. From casual wear to elegant dresses, every
            piece I've bought has exceeded my expectations.`}
                &quot;
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="mx-4 my-5 rounded-[20px] border border-black/10 p-6 lg:w-[1240px]">
              <div className="flex gap-1 pb-3">
                <Star
                  fill="#FFC633"
                  color="#FFC633"
                  strokeWidth={1}
                  size={18}
                />
                <Star
                  fill="#FFC633"
                  color="#FFC633"
                  strokeWidth={1}
                  size={18}
                />
                <Star
                  fill="#FFC633"
                  color="#FFC633"
                  strokeWidth={1}
                  size={18}
                />
                <Star
                  fill="#FFC633"
                  color="#FFC633"
                  strokeWidth={1}
                  size={18}
                />
                <Star
                  fill="#FFC633"
                  color="#FFC633"
                  strokeWidth={1}
                  size={18}
                />
              </div>
              <div className="flex items-center gap-2 pb-1">
                <p className="font-bold text-black">Sarah M.</p>
                <CircleCheck color="#FFFF" fill="#01AB31" />
              </div>
              <p className="text-black/60">
                &quot;
                {`I'm blown away by the quality and style of the clothes I
            received from Shop.co. From casual wear to elegant dresses, every
            piece I've bought has exceeded my expectations.`}
                &quot;
              </p>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <button className="flex w-full items-center justify-center rounded-[62px] border border-black/10 py-2 font-medium text-black lg:mt-10 lg:w-[218px] lg:py-3">
              Load More Reviews
            </button>
          </div>
        </div>
        <div className="mb-14 flex flex-col lg:mb-24 lg:items-center">
          <h1
            className={`${integral.className} my-8 text-center text-4xl lg:my-16 lg:text-6xl`}
          >
            You might also like
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
        </div>
      </div>
    </div>
  )
}
