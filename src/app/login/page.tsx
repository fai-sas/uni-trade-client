/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'

import toast from 'react-hot-toast'
import { CustomFormField } from '@/components/form/FormController'
import { useCustomerRegistration, useUserLogin } from '@/hooks/auth.hook'
import { loginSchema } from '@/schema/formSchema'
import CreateMainCategoryForm from '@/components/CreateMainCategoryForm'

const defaultFormValues = {
  name: 'John Doe',
  email: 'john@doe.com',
  password: '123456',
  contactNumber: '01712234568',
}

const LoginPage = () => {
  const {
    mutate: handleLogin,
    isPending: IsPending,
    error: isError,
  } = useUserLogin()

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: defaultFormValues,
  })

  const onSubmit = async (data: any) => {
    const userData = {
      email: data.email,
      password: data.password,
    }
    console.log(userData)

    handleLogin(userData)
  }

  const { errors } = form.formState

  const isPending = IsPending

  if (isPending) {
    return <h1 className='p-8 text-4xl font-bold text-center'>Loading...</h1>
  }

  return (
    <>
      <CreateMainCategoryForm />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='p-8 rounded bg-muted'
        >
          <h2 className='mb-6 text-4xl font-semibold capitalize'>login</h2>
          <div className='grid items-start gap-4 md:grid-cols-2 lg:grid-cols-2'>
            <CustomFormField
              name='email'
              control={form.control}
              type={undefined}
            />
            <CustomFormField
              name='password'
              control={form.control}
              type={undefined}
            />

            <Button
              type='submit'
              className='self-end capitalize'
              disabled={isPending}
            >
              {isPending ? 'loading...' : 'Login'}
            </Button>
            {/* Handle errors */}
            {isError && (
              <p className='text-red-500 font-bold py-2'>
                {error?.data?.message}
              </p>
            )}
          </div>
        </form>
      </Form>
    </>
  )
}

export default LoginPage
