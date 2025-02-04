import Image from 'next/image'
import Link from 'next/link'

const ProductCard = ({ product }) => {
  return (
    <div className='group my-10 flex w-full mx-auto max-w-lg flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md'>
      <div className='relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl'>
        {product?.images?.map((image, index) => (
          <Image
            key={index}
            className='absolute top-0 right-0 h-full w-full object-cover'
            src={image}
            alt={product?.productName}
            layout='fill'
          />
        ))}
      </div>
      <div className='mt-4 px-5 pb-5'>
        <Link href='#'>
          <h5 className='text-xl tracking-tight text-slate-900'>
            {product?.productName}
          </h5>
        </Link>
        <div className='mt-2 mb-5 flex items-center justify-between'>
          <p>
            <span className='text-3xl font-bold text-slate-900'>
              ${product?.price}
            </span>
          </p>
        </div>
        <Link
          href='#'
          className='flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='mr-2 h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
            />
          </svg>
          Add to cart
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
