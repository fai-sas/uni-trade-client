'use client'

import { useGetAllProducts } from '@/hooks/product.hook'

const ProductPage = () => {
  const { data, isLoading, isError } = useGetAllProducts()
  const products = data?.data || []

  console.log(products)

  return (
    <>
      <div>
        <h1 className=' text-4xl font-bold p-8'>Product Page</h1>
      </div>
      <div className=' text-4xl font-bold p-8'>
        {products?.map((product) => {
          return (
            <article>
              <h1>{product?.productName}</h1>
              <h1>$ {product?.price}</h1>
            </article>
          )
        })}
      </div>
    </>
  )
}

export default ProductPage
