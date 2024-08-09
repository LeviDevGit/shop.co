import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()
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
      <p>Post: {router.query.product}</p>
    </div>
  )
}
