/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import { useGetSubCategories } from '@/hooks/sub.category.hook'
import SubCategoryCard from './SubCategoryCard'
import CreateSubCategoryForm from '@/components/CreateSubCategoryForm'

const SubCategory = () => {
  const { data } = useGetSubCategories()

  return (
    <article className=''>
      {data?.data?.map((category: any) => (
        <SubCategoryCard key={category?.subCategoryId} category={category} />
      ))}
      <CreateSubCategoryForm />
    </article>
  )
}

export default SubCategory
