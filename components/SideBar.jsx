'use client'
import productData from '@/data/products'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SideBar = () => {
    const pathName = usePathname()
    const categoryList = [...new Set(productData.products.map(pd => pd.category) )]

    return (
        <>
        <Link href="/category/All">
            <button className={` ${pathName === `/category/All` ? 'text-sky-700 font-semibold' : ''}  hover:border-b border-black block h-6 box-border mt-4`}>All</button>
        </Link>

            {
                categoryList.map((category, i) => (
                    <Link
                    key={i}
                    href={`/category/${category}`}
                    className={`
                      ${pathName === `/category/${category}` ? 'text-sky-700 font-semibold' : ''}
                    `}
                  >
                    <button className='hover:border-b border-black block h-6 box-border mt-4 capitalize  '>{category}</button>
                  </Link>
                ))
            }


        </>
    )
}

export default SideBar