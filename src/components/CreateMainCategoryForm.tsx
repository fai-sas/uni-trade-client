/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'

import { useCreateMainCategory } from '@/hooks/main.category.hook'
import { useForm } from 'react-hook-form'
import { CustomFormField } from './form/FormController'
import { Button } from './ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { Form } from '@/components/ui/form'
import { ModalController } from './modals/ModalController'

const CreateMainCategoryForm = () => {
  const {
    mutate: handleCreateMainCategory,
    isPending,
    isSuccess,
    error: isError,
  } = useCreateMainCategory()

  const defaultFormValues = {
    mainCategoryName: '',
  }

  const form = useForm({
    // resolver: zodResolver(loginSchema),
    defaultValues: defaultFormValues,
  })

  const onSubmit = async (data: any) => {
    const mainCategoryData = {
      mainCategoryName: data.mainCategoryName,
    }
    console.log(mainCategoryData)

    handleCreateMainCategory(mainCategoryData)
  }

  return (
    <ModalController buttonText='Add Main Category' title='Add '>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='p-8 rounded bg-muted'
        >
          <h2 className='mb-6 text-3xl text-center font-semibold capitalize'>
            Add Main Category
          </h2>
          <div className='grid items-start w-[50%] mx-auto gap-4 md:grid-cols-2 lg:grid-cols-2'>
            <CustomFormField
              name='mainCategoryName'
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

export default CreateMainCategoryForm
