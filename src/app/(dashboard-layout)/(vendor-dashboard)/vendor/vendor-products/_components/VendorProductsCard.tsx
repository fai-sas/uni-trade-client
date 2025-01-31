const VendorProductsCard = ({ products }) => {
  return (
    <div>
      <article className=' m-4 p-4 rounded-md shadow-md font-bold text-2xl'>
        <h1>{products?.productName}</h1>
      </article>
    </div>
  )
}

export default VendorProductsCard
