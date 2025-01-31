'use client'

import { useGetMe } from '@/hooks/user.hook'
import UpdateProfileForm from './_components/UpdateProfileForm'
import Image from 'next/image'

const VendorProfilePage = () => {
  const { data: userData } = useGetMe()

  const user = userData?.data

  return (
    <>
      <article>
        <h1 className=' text-3xl font-bold p-8'>Welcome {user?.name}</h1>
        <h1 className=' text-3xl font-bold p-8'> {user?.role}</h1>
        <Image
          alt={user?.name}
          width={200}
          height={200}
          className='object-cover rounded-md'
          src={user?.images}
        />
      </article>
      <UpdateProfileForm user={user} />
    </>
  )
}

export default VendorProfilePage
