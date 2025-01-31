/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import { useGetAllProducts } from '@/hooks/product.hook'
import VendorProductsCard from './VendorProductsCard'
import CreateProductForm from './CreateProductForm'

const VendorProducts = () => {
  const { data } = useGetAllProducts()

  return (
    <article className=''>
      {data?.data?.map((products: any) => (
        <VendorProductsCard key={products?.productId} products={products} />
      ))}
      <CreateProductForm />
    </article>
  )
}

export default VendorProducts
