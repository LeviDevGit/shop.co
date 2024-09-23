'use client'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function Dropdown() {
  const [dropdown, setDropdown] = useState<boolean>(false)

  return (
    <div className="relative">
      <div className="flex items-center gap-1">
        <button
          onClick={() => {
            setDropdown(!dropdown)
          }}
        >
          Shop
        </button>
        <ChevronDown size={20} />
      </div>
      <ul
        className={`${dropdown ? 'absolute' : 'hidden'} -right-9 flex flex-col justify-between gap-5 rounded-[20px] border border-black/10 bg-white p-10`}
      >
        <li>
          <Link href="/category/filtro1" className="">
            T-shirts
          </Link>
        </li>
        <li>
          <Link href="/category/filtro1" className="">
            Shorts
          </Link>
        </li>
        <li>
          <Link href="/category/filtro1" className="">
            Shirts
          </Link>
        </li>
        <li>
          <Link href="/category/filtro1" className="">
            Hoodie
          </Link>
        </li>
        <li>
          <Link href="/category/filtro1" className="">
            Jeans
          </Link>
        </li>
      </ul>
    </div>
  )
}
