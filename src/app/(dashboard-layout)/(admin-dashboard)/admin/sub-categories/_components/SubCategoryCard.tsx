const SubCategoryCard = ({ category }) => {
  return (
    <div>
      <article className=' m-4 p-4 rounded-md shadow-md font-bold text-2xl'>
        <h1>{category?.subCategoryName}</h1>
      </article>
    </div>
  )
}

export default SubCategoryCard
