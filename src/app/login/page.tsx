/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'

import toast from 'react-hot-toast'
import { CustomFormField } from '@/components/form/FormController'
import { useUserLogin } from '@/hooks/auth.hook'
import { loginSchema } from '@/schema/formSchema'
import { useRouter, useSearchParams } from 'next/navigation'
import { useUser } from '@/context/user.provider'
import { useEffect } from 'react'
import Link from 'next/link'

const defaultFormValues = {
  name: 'John Doe',
  email: 'admin@admin.com',
  password: '12346',
  contactNumber: '01712234568',
}

const LoginPage = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { setIsLoading: userLoading } = useUser()

  const redirect = searchParams.get('redirect')

  const {
    mutate: handleLogin,
    isPending,
    error: isError,
    isSuccess,
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

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect)
      } else {
        router.push('/')
      }
    }
  }, [isPending, isSuccess])

  const { errors } = form.formState

  if (isPending) {
    return <h1 className='p-8 text-4xl font-bold text-center'>Loading...</h1>
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='p-8 rounded bg-muted'
        >
          <h2 className='mb-6 text-3xl text-center font-semibold capitalize'>
            login
          </h2>
          <div className='grid items-start w-[50%] mx-auto gap-4 md:grid-cols-2 lg:grid-cols-2'>
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
        <div className='text-center'>
          Don&lsquo;t have account ? <Link href={'/register'}>Register</Link>
        </div>
      </Form>
    </>
  )
}

export default LoginPage
