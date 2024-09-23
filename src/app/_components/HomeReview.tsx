import { ArrowLeft, ArrowRight, CircleCheck, Star } from 'lucide-react'
import { integral } from '../layout'

export default function HomeReview() {
  return (
    <div className="my-12 flex flex-col items-center lg:my-20">
      <div className="mx-4 mb-2 flex items-end justify-between lg:mb-6 lg:w-[1240px]">
        <h1 className={`${integral.className} text-start text-4xl lg:text-6xl`}>
          OUR HAPPY CUSTOMERS
        </h1>
        <div className="flex gap-4">
          <button>
            <ArrowLeft />
          </button>
          <button>
            <ArrowRight />
          </button>
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
          &quot;
          {`I'm blown away by the quality and style of the clothes I
            received from Shop.co. From casual wear to elegant dresses, every
            piece I've bought has exceeded my expectations.`}
          &quot;
        </p>
      </div>
    </div>
  )
}
