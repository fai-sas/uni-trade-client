/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import { useGetAllProducts } from '@/hooks/product.hook'
import ProductsCard from './ProductsCard'
import CreateProductForm from './CreateProductForm'

const Products = () => {
  const { data } = useGetAllProducts()

  return (
    <article className=''>
      {data?.data?.map((products: any) => (
        <ProductsCard key={products?.productId} products={products} />
      ))}
      <CreateProductForm />
    </article>
  )
}

export default Products
