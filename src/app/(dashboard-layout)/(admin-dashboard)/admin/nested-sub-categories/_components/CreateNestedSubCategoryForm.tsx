/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'

import { useGetMainCategories } from '@/hooks/main.category.hook'
import { useForm } from 'react-hook-form'
import {
  CustomFormField,
  CustomFormSelect,
} from '../../../../../../components/form/FormController'
import { Button } from '../../../../../../components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { Form } from '@/components/ui/form'
import { ModalController } from '../../../../../../components/modals/ModalController'
import { useGetSubCategories } from '@/hooks/sub.category.hook'
import { useCreateNestedSubCategory } from '@/hooks/nestedSub.category.hook'
import { useEffect, useState } from 'react'
import { ImageUploaderSingle } from '@/components/ImageUploaderSingle'

const CreateNestedSubCategoryForm = () => {
  const {
    mutate: handleCreateNestedSubCategory,
    isPending,
    isSuccess,
    error: isError,
  } = useCreateNestedSubCategory()

  const { data: mainCategories } = useGetMainCategories()

  const { data: subCategories } = useGetSubCategories()

  const mainCategoryOptions = mainCategories?.data?.map((category) => ({
    label: category.mainCategoryName,
    value: category.mainCategoryId,
  }))

  const defaultFormValues = {
    mainCategoryId: '',
    subCategoryId: '',
    nestedSubCategoryName: '',
    images: '',
  }

  const [filteredSubCategories, setFilteredSubCategories] = useState([])

  const form = useForm({
    // resolver: zodResolver(loginSchema),
    defaultValues: defaultFormValues,
  })

  // const subCategoryOptions = subCategories?.data?.map((category) => ({
  //   label: category.subCategoryName,
  //   value: category.subCategoryId,
  // }))

  // Filter subcategories based on the selected main category
  useEffect(() => {
    const mainCategory = form.watch('mainCategoryId')
    if (mainCategory && subCategories) {
      const filteredSubs = subCategories?.data?.filter(
        (subCategory) =>
          subCategory?.mainCategory?.mainCategoryId === mainCategory
      )
      setFilteredSubCategories(filteredSubs)
      form.setValue('subCategoryId', '')
    }
  }, [form.watch('mainCategoryId'), subCategories])

  const onSubmit = async (data: any) => {
    const nestedSubCategoryData = {
      mainCategoryId: data.mainCategoryId,
      subCategoryId: data.subCategoryId,
      nestedSubCategoryName: data.nestedSubCategoryName,
      images: data.images,
    }
    console.log(nestedSubCategoryData)

    handleCreateNestedSubCategory(nestedSubCategoryData)
  }

  return (
    // <ModalController buttonText='Add Nested Sub Category' title='Add '>
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
          <CustomFormSelect
            name='subCategoryId'
            labelText='Sub Category'
            control={form.control}
            items={filteredSubCategories?.map((subCategory) => ({
              label: subCategory?.subCategoryName,
              value: subCategory?.subCategoryId,
            }))}
          />

          <CustomFormField
            name='nestedSubCategoryName'
            labelText='Nested Sub Category'
            control={form.control}
            type={undefined}
          />

          {/* Image Uploader */}
          <div className='flex flex-wrap gap-2 py-2'>
            <div className='flex-1 min-w-fit'>
              <ImageUploaderSingle name='images' />
            </div>
          </div>

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
    // </ModalController>
  )
}

export default CreateNestedSubCategoryForm
