import Image from 'next/image'

const MainCategoryCard = ({ category }) => {
  return (
    <>
      <div className='rounded-md p-4 shadow-md'>
        <article className=' m-4 p-4  font-bold text-2xl'>
          <h1>{category?.mainCategoryName}</h1>
        </article>
        <Image
          src={category?.images}
          alt={category?.mainCategoryName}
          height={300}
          width={1200}
        />
      </div>

      {/*  */}
    </>
  )
}

export default MainCategoryCard
