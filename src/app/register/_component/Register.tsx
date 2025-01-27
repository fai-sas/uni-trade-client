/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Form } from '@/components/ui/form'

import { CustomFormField } from '@/components/form/FormController'
import {
  useCustomerRegistration,
  useVendorRegistration,
} from '@/hooks/auth.hook'
import toast from 'react-hot-toast'

const defaultFormValues = {
  name: 'John Doe',
  email: 'john@doe.com',
  password: '123456',
  contactNumber: '01712234568',
}

export function Register() {
  const {
    mutate: handleCustomerRegistration,
    isPending: customerIsPending,
    error: isError,
  } = useCustomerRegistration()

  const { mutate: handleVendorRegistration, isPending: vendorIsPending } =
    useVendorRegistration()

  const form = useForm({
    // resolver: zodResolver(),
    defaultValues: defaultFormValues,
  })

  const customerOnSubmit = async (data: any) => {
    try {
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
    } catch (error) {
      toast.error(error?.data?.message || 'An error occurred')
    }
  }

  const vendorOnSubmit = async (data: any) => {
    try {
      const vendorData = {
        password: data.password,
        vendor: {
          name: data.name,
          email: data.email,
          contactNumber: data.contactNumber,
        },
      }
      handleVendorRegistration(vendorData)
    } catch (error) {
      toast.error(error?.data?.message || 'An error occurred')
    }
  }

  const { errors } = form.formState

  const isPending = customerIsPending || vendorIsPending

  if (isPending) {
    return <h1 className='p-8 text-4xl font-bold text-center'>Loading...</h1>
  }

  return (
    <Tabs defaultValue='customer' className='w-[50rem] mx-auto'>
      <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger value='customer'>Register as Customer</TabsTrigger>
        <TabsTrigger value='vendor'>Register as Vendor</TabsTrigger>
      </TabsList>
      <TabsContent value='customer'>
        <Card>
          <CardHeader>
            <CardTitle>Register as Customer</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <Form {...form}>
              <form
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
                </div>
                <CardFooter>
                  <Button
                    type='submit'
                    className='self-end capitalize'
                    disabled={isPending}
                  >
                    {isPending ? 'loading...' : 'register'}
                  </Button>
                  {/* Handle errors */}
                  {/* {isError && (
                    <p className='text-red-500 font-bold py-2'>
                      {error?.data?.message}
                    </p>
                  )} */}
                </CardFooter>
              </form>
            </Form>
          </CardContent>
        </Card>
      </TabsContent>

      {/* VENDOR REGISTRATION  */}
      <TabsContent value='vendor'>
        <Card>
          <CardHeader>
            <CardTitle>Register as Vendor</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(vendorOnSubmit)}
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
              </div>
              <CardFooter>
                <Button
                  type='submit'
                  className='self-end capitalize'
                  disabled={isPending}
                >
                  {isPending ? 'loading...' : 'register'}
                </Button>
                {/* Handle errors */}
                {isError && (
                  <p className='text-red-500 font-bold py-2'>
                    {errors?.data?.message}
                  </p>
                )}
              </CardFooter>
            </form>
          </Form>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
