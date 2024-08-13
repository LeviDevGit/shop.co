import { ProductCard } from '@/components/ProductCard'
import Link from 'next/link'

export default function Product({ params }: { params: { product: string } }) {
  return (
    <div>
      <h1>PRODUCT DETAIL PAGE</h1>
      <ul>
        <li>
          <Link href="/cart">Cart</Link>
        </li>
        <li>
          <Link href="/category/filtro1">Category</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
      <p>Post: {params.product}</p>
      <ProductCard />
    </div>
  )
}
