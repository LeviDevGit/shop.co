import { Star, StarHalf } from 'lucide-react'

interface StarRatingProps {
  rating: number
}

function StarRating({ rating }: StarRatingProps) {
  const stars = []

  // Loop para criar as estrelas
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(
        <Star fill="#FFC633" color="#FFC633" strokeWidth={1} size={18} />,
      )
    } else if (rating >= i - 0.5) {
      stars.push(
        <StarHalf fill="#FFC633" color="#FFC633" strokeWidth={1} size={18} />,
      )
    }
  }
  return <div className="flex items-center gap-1">{stars}</div>
}

export function ProductCard() {
  return (
    <div className="w-[175px]">
      <div className="bg-isabelline rounded-2xl">
        <img
          src="https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png"
          alt=""
        />
      </div>
      <div>
        <p className="truncate whitespace-nowrap text-lg font-bold">
          Gradient Graphic Tshirt White
        </p>
        <div className="flex gap-2">
          <StarRating rating={3.5} />
          <h6>
            3.5/<span className="text-black/60">5</span>
          </h6>
        </div>
        <div className="flex items-center gap-1 text-xl font-bold">
          <h4>$145</h4>
          <h4 className="text-black/40 line-through">$242</h4>
          <div className="ml-1 flex h-[20px] w-[42px] items-center justify-center rounded-[62px] bg-red-500/10">
            <h5 className="text-xs font-medium text-red-500">-20%</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
