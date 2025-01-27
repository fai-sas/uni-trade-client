/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'

import toast from 'react-hot-toast'
import { CustomFormField } from '@/components/form/FormController'
import { useCustomerRegistration } from '@/hooks/auth.hook'
import { Register } from './_component/Register'

const defaultFormValues = {
  name: 'John Doe',
  email: 'john@doe.com',
  password: '123456',
  contactNumber: '01712234568',
}

const RegisterPage = () => {
  const {
    mutate: handleCustomerRegistration,
    isPending: customerIsPending,
    error: isError,
  } = useCustomerRegistration()

  const form = useForm({
    // resolver: zodResolver(),
    defaultValues: defaultFormValues,
  })

  const customerOnSubmit = async (data: any) => {
    const userData = {
      password: data.password,
      customer: {
        name: data.name,
        email: data.email,
        contactNumber: data.contactNumber,
      },
    }
    console.log(userData)

    handleCustomerRegistration(userData)
  }

  const { errors } = form.formState

  const isPending = customerIsPending

  if (isPending) {
    return <h1 className='p-8 text-4xl font-bold text-center'>Loading...</h1>
  }

  return (
    <>
      <h2 className='p-6 text-4xl font-semibold capitalize'>register</h2>
      <Register />
      {/* <Form {...form}> */}
      {/* <form
          onSubmit={form.handleSubmit(customerOnSubmit)}
          className='p-8 rounded bg-muted'
        >
          <div className='grid items-start gap-4 md:grid-cols-2 lg:grid-cols-2'>
            <CustomFormField
              name='name'
              control={form.control}
              type={undefined}
            />
            <CustomFormField
              name='password'
              control={form.control}
              type={undefined}
            />
            <CustomFormField
              name='email'
              control={form.control}
              type={undefined}
            />
            <CustomFormField
              name='contactNumber'
              control={form.control}
              type={undefined}
            />

            <Button
              type='submit'
              className='self-end capitalize'
              disabled={isPending}
            >
              {isPending ? 'loading...' : 'register'}
            </Button> */}
      {/* Handle errors */}
      {/* {isError && (
              <p className='text-red-500 font-bold py-2'>
                {error?.data?.message}
              </p>
            )}
          </div> */}
      {/* </form> */}
      {/* </Form> */}
    </>
  )
}

export default RegisterPage
