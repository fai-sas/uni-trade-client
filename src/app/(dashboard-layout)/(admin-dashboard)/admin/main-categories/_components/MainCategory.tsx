/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useGetMainCategories } from '@/hooks/main.category.hook'
import MainCategoryCard from './MainCategoryCard'

import CreateMainCategoryForm from '@/components/CreateMainCategoryForm'

const MainCategory = () => {
  const { data } = useGetMainCategories()

  return (
    <article className=''>
      {data?.data?.map((category: any) => (
        <MainCategoryCard key={category?.mainCategoryId} category={category} />
      ))}
      <CreateMainCategoryForm />
    </article>
  )
}

export default MainCategory
