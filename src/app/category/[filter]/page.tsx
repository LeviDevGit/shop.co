import Link from 'next/link'

export default function Filter({ params }: { params: { filter: string } }) {
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
      <p>Post: {params.filter}</p>
    </div>
  )
}
