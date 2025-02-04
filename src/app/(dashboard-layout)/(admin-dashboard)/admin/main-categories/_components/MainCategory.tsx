/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useGetMainCategories } from '@/hooks/main.category.hook'
import MainCategoryCard from './MainCategoryCard'

import CreateMainCategoryForm from '@/app/(dashboard-layout)/(admin-dashboard)/admin/main-categories/_components/CreateMainCategoryForm'

const MainCategory = () => {
  const { data } = useGetMainCategories()

  return (
    <>
      <article className=' grid p-4 grid-cols-1 gap-4 md:grid-cols-3'>
        {data?.data?.map((category: any) => (
          <MainCategoryCard
            key={category?.mainCategoryId}
            category={category}
          />
        ))}
      </article>
      <CreateMainCategoryForm />
    </>
  )
}

export default MainCategory
