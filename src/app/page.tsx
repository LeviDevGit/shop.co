import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <ul>
        <li>
          <Link href="/cart">Cart</Link>
        </li>
        <li>
          <Link href="/category/filtro1">Category</Link>
        </li>
        <li>
          <Link href="/detail/produto2">Detail Product</Link>
        </li>
      </ul>
    </div>
  )
}
