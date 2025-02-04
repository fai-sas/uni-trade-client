'use client'

import { useGetAllProducts } from '@/hooks/product.hook'
import ProductCard from './_components/ProductCard'

const ProductPage = () => {
  const { data, isLoading, isError } = useGetAllProducts()
  const products = data?.data || []

  console.log(products)

  return (
    <>
      <div>
        <h1 className=' text-4xl font-bold p-8'>Product Page</h1>
      </div>
      <div className=' grid grid-cols-1 md:grid-cols-3 text-4xl font-bold p-8'>
        {products.map((product) => {
          return <ProductCard key={product?.productName} product={product} />
        })}
      </div>
    </>
  )
}

export default ProductPage
