/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import { useGetNestedSubCategories } from '@/hooks/nestedSub.category.hook'
import NestedSubCategoryCard from './NestedSubCategoryCard'
import CreateNestedSubCategoryForm from '@/app/(dashboard-layout)/(admin-dashboard)/admin/nested-sub-categories/_components/CreateNestedSubCategoryForm'

const NestedSubCategory = () => {
  const { data } = useGetNestedSubCategories()

  return (
    <article className=''>
      {data?.data?.map((category: any) => (
        <NestedSubCategoryCard
          key={category?.nestedSubCategoryId}
          category={category}
        />
      ))}
      <CreateNestedSubCategoryForm />
    </article>
  )
}

export default NestedSubCategory
