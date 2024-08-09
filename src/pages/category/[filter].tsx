import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()
  return (
    <div>
      <h1>CATEGORY PAGE</h1>
      <ul>
        <li>
          <Link href="/cart">Cart</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/detail/produto2">Detail Product</Link>
        </li>
      </ul>
      <p>Post: {router.query.filter}</p>
    </div>
  )
}
