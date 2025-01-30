/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'

import {
  useCreateMainCategory,
  useGetMainCategories,
} from '@/hooks/main.category.hook'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { Form } from '@/components/ui/form'
import { useCreateSubCategory } from '@/hooks/sub.category.hook'
import { ModalController } from '@/components/modals/ModalController'
import {
  CustomFormField,
  CustomFormSelect,
} from '@/components/form/FormController'
import { Button } from '@/components/ui/button'

const CreateSubCategoryForm = () => {
  const {
    mutate: handleCreateSubCategory,
    isPending,
    isSuccess,
    error: isError,
  } = useCreateSubCategory()

  const { data: mainCategories } = useGetMainCategories()

  const mainCategoryOptions = mainCategories?.data?.map((category) => ({
    label: category.mainCategoryName,
    value: category.mainCategoryId,
  }))

  const defaultFormValues = {
    mainCategoryId: '',
    subCategoryName: '',
  }

  const form = useForm({
    // resolver: zodResolver(loginSchema),
    defaultValues: defaultFormValues,
  })

  const onSubmit = async (data: any) => {
    const subCategoryData = {
      mainCategoryId: data.mainCategoryId,
      subCategoryName: data.subCategoryName,
    }
    console.log(subCategoryData)

    handleCreateSubCategory(subCategoryData)
  }

  return (
    <ModalController buttonText='Add Sub Category' title='Add '>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='p-8 rounded bg-muted'
        >
          <h2 className='mb-6 text-3xl text-center font-semibold capitalize'>
            Add Sub Category
          </h2>
          <div className='grid items-start  mx-auto gap-4 md:grid-cols-2 lg:grid-cols-2'>
            <CustomFormSelect
              name='mainCategoryId'
              labelText='Main Category'
              control={form.control}
              items={mainCategoryOptions}
            />

            <CustomFormField
              name='subCategoryName'
              labelText='Sub Category'
              control={form.control}
              type={undefined}
            />

            <Button
              type='submit'
              className='self-end capitalize'
              disabled={isPending}
            >
              {isPending ? 'loading...' : '  Add'}
            </Button>
            {/* Handle errors */}
            {/* {isError && (
            <p className='text-red-500 font-bold py-2'>
              {error?.data?.message}
            </p>
          )} */}
          </div>
        </form>
      </Form>
    </ModalController>
  )
}

export default CreateSubCategoryForm
