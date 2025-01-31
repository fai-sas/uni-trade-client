/* eslint-disable react-hooks/exhaustive-deps */
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
import {
  useCreateNestedSubCategory,
  useGetNestedSubCategories,
} from '@/hooks/nestedSub.category.hook'
import { useEffect, useState } from 'react'
import { useCreateProduct } from '@/hooks/product.hook'
import { ImageUploader } from '@/components/ImageUploader'

const CreateProductForm = () => {
  const {
    mutate: handleAddProduct,
    isPending,
    isSuccess,
    error: isError,
  } = useCreateProduct()

  const { data: mainCategories } = useGetMainCategories()

  const { data: subCategories } = useGetSubCategories()

  const { data: nestedSubCategories } = useGetNestedSubCategories()

  const mainCategoryOptions = mainCategories?.data?.map(
    (category: { mainCategoryName: any; mainCategoryId: any }) => ({
      label: category.mainCategoryName,
      value: category.mainCategoryId,
    })
  )

  const defaultFormValues = {
    productName: '',
    mainCategoryId: '',
    subCategoryId: '',
    nestedSubCategoryId: '',
    description: '',
    images: [],
    price: 4567,
    discount: 100,
    inventory: 2,
    // availability: 'in stock',
  }

  const [filteredSubCategories, setFilteredSubCategories] = useState([])
  const [filteredNestedSubCategories, setFilteredNestedSubCategories] =
    useState([])

  const form = useForm({
    // resolver: zodResolver(loginSchema),
    defaultValues: defaultFormValues,
  })

  // Filter subcategories based on the selected main category
  useEffect(() => {
    const mainCategory = form.watch('mainCategoryId')
    if (mainCategory && subCategories) {
      const filteredSubs = subCategories?.data?.filter(
        (subCategory: { mainCategory: { mainCategoryId: string } }) =>
          subCategory?.mainCategory?.mainCategoryId === mainCategory
      )
      setFilteredSubCategories(filteredSubs)
      form.setValue('subCategoryId', '')
    }
  }, [form.watch('mainCategoryId'), subCategories])

  // Filter nested subcategories based on the selected subcategory
  useEffect(() => {
    const subCategory = form.watch('subCategoryId')
    if (subCategory && nestedSubCategories) {
      const filteredNestedSubs = nestedSubCategories?.data?.filter(
        (nestedSubCategory: { subCategoryId: string }) =>
          nestedSubCategory?.subCategoryId === subCategory
      )
      setFilteredNestedSubCategories(filteredNestedSubs)
      form.setValue('nestedSubCategoryId', '')
    }
  }, [form.watch('subCategoryId'), nestedSubCategories])

  const onSubmit = async (data: any) => {
    const productData = {
      productName: data.productName,
      description: data.description,
      images: data.images,
      price: data.price,
      discount: data.discount,
      inventory: data.inventory,
      mainCategoryId: data.mainCategoryId,
      subCategoryId: data.subCategoryId,
      nestedSubCategoryId: data.nestedSubCategoryId,
    }
    console.log(productData)

    handleAddProduct(productData)
  }

  return (
    // <ModalController buttonText='Add Products' title='Add '>
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='p-8 rounded bg-muted'
      >
        <h2 className='mb-6 text-3xl text-center font-semibold capitalize'>
          Add Product
        </h2>
        <div className='grid items-start  mx-auto gap-4 md:grid-cols-2 lg:grid-cols-2'>
          <CustomFormField
            name='productName'
            labelText='Product Name'
            control={form.control}
            type={undefined}
          />
          <CustomFormField
            name='description'
            labelText='Description'
            control={form.control}
            type={undefined}
          />
          <CustomFormField
            name='price'
            labelText='price'
            control={form.control}
            type='number'
          />
          <CustomFormField
            name='discount'
            labelText='discount'
            control={form.control}
            type='number'
          />
          {/* Image Uploader */}
          <div className='flex flex-wrap gap-2 py-2'>
            <div className='flex-1 min-w-fit'>
              <ImageUploader name='images' />
            </div>
          </div>
          <CustomFormField
            name='inventory'
            labelText='inventory'
            control={form.control}
            type='number'
          />
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

          <CustomFormSelect
            name='nestedSubCategoryId'
            labelText='Nested Sub Category'
            control={form.control}
            items={filteredNestedSubCategories?.map((nestedSubCategory) => ({
              label: nestedSubCategory?.nestedSubCategoryName,
              value: nestedSubCategory?.nestedSubCategoryId,
            }))}
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
    // </ModalController>
  )
}

export default CreateProductForm
