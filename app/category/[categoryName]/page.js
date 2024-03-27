import ProductCard from '@/components/ProductCard'
import productData from '@/data/products'
import React from 'react'

const ProductCategory = ({params : {categoryName}}) => {
    const filterCategory = productData.products.filter(pd=> {
        if(categoryName === 'All') return pd
        return  pd.category === categoryName 
    })

  return (
    <>
        {filterCategory.map(pd => (<ProductCard key={pd.id} product={pd} />))}
    </>
  )
}

export default ProductCategory