import Link from 'next/link'

export default function Cart() {
  return (
    <div>
      <h1>CART PAGE</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
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
