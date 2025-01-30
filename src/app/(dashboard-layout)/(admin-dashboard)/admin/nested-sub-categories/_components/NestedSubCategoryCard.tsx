const NestedSubCategoryCard = ({ category }) => {
  return (
    <div>
      <article className=' m-4 p-4 rounded-md shadow-md font-bold text-2xl'>
        <h1>{category?.nestedSubCategoryName}</h1>
      </article>
    </div>
  )
}

export default NestedSubCategoryCard
