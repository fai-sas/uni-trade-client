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
import { useUpdateMyProfile } from '@/hooks/user.hook'
import { ImageUploaderSingle } from '@/components/ImageUploaderSingle'

const UpdateProfileForm = ({ user }) => {
  const {
    mutate: handleUpdateProfile,
    isPending,
    isSuccess,
    error: isError,
  } = useUpdateMyProfile()

  console.log(user)

  const defaultFormValues = {
    name: user?.name,
    contactNumber: user?.contactNumber,
    images: '',
  }

  const form = useForm({
    // resolver: zodResolver(loginSchema),
    defaultValues: defaultFormValues,
  })

  const onSubmit = async (data: any) => {
    const profileData = {
      name: data.name,
      contactNumber: data.contactNumber,
      images: data.images,
    }
    console.log(profileData)

    handleUpdateProfile(profileData)
  }

  return (
    // <ModalController buttonText='Add Products' title='Add '>
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='p-8 rounded bg-muted'
      >
        <h2 className='mb-6 text-3xl text-center font-semibold capitalize'>
          Update Profile
        </h2>
        <div className='grid items-start  mx-auto gap-4 md:grid-cols-2 lg:grid-cols-2'>
          <CustomFormField
            name='name'
            labelText='Name'
            control={form.control}
            type={undefined}
          />
          <CustomFormField
            name='contactNumber'
            labelText='Contact Number'
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
            {isPending ? 'loading...' : '  Update Profile'}
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

export default UpdateProfileForm
