/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import { useGetAllProducts, useGetVendorProducts } from '@/hooks/product.hook'
import VendorProductsCard from './VendorProductsCard'
import CreateProductForm from './CreateProductForm'
import { useGetMe } from '@/hooks/user.hook'

const VendorProducts = () => {
  // const { data } = useGetVendorProducts()
  const { data: userData } = useGetMe()

  const user = userData?.data

  const { data } = useGetAllProducts()

  console.log(data?.data)
  console.log(user)

  const vendorProducts = data?.data?.filter(
    (product) => product.vendorEmail === user?.email
  )

  return (
    <article className=''>
      {vendorProducts?.length === 0 ? (
        <h1>No Product Found</h1>
      ) : (
        vendorProducts?.map((product: any) => (
          <VendorProductsCard key={product?.productId} products={product} />
        ))
      )}
      <CreateProductForm />
    </article>
  )
}

export default VendorProducts
