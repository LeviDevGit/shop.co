import { ProductCard } from '@/components/ProductCard'

export default function Product({ params }: { params: { product: string } }) {
  return (
    <div>
      <h1>PRODUCT DETAIL PAGE</h1>
      <p>Post: {params.product}</p>
      <ProductCard />
    </div>
  )
}
