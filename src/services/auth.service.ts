/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'

import { FieldValues } from 'react-hook-form'
import { cookies } from 'next/headers'
import { jwtDecode } from 'jwt-decode'
import axiosInstance from '@/lib/axiosInstance'
import toast from 'react-hot-toast'

export const registerCustomer = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post('/auth/create-customer', userData)

    return data
  } catch (error: any) {
    throw new Error(error)
  }
}

export const registerVendor = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post('/auth/create-vendor', userData)

    return data
  } catch (error: any) {
    throw new Error(error)
  }
}

export const loginUser = async (userData: FieldValues) => {
  const cookieStore = await cookies()

  try {
    const { data } = await axiosInstance.post('/auth/login', userData)

    if (data.success) {
      cookieStore.set('accessToken', data?.data?.accessToken)
      cookieStore.set('refreshToken', data?.data?.refreshToken)

      // cookies().set('accessToken', data?.data?.accessToken)
      // cookies().set('refreshToken', data?.data?.refreshToken)
    }

    return data
  } catch (error: any) {
    throw new Error(error)
  }
}

export const logout = async () => {
  ;(await cookies()).delete('accessToken')(await cookies())
  // .delete('refreshToken')

  // cookies().delete('accessToken')
  // cookies().delete('refreshToken')
}

export const getCurrentUser = async () => {
  const cookieStore = await cookies()

  const accessToken = cookieStore.get('accessToken')?.value

  let decodedToken = null

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken)

    return {
      _id: decodedToken.userId,
      name: decodedToken.name,
      email: decodedToken.email,
      mobileNumber: decodedToken.mobileNumber,
      role: decodedToken.role,
      status: decodedToken.status,
      profilePhoto: decodedToken.profilePhoto,
      isDeleted: decodedToken.isDeleted,
    }
  }

  return decodedToken
}

export const getNewAccessToken = async () => {
  const cookieStore = await cookies()

  try {
    const refreshToken = cookieStore.get('refreshToken')?.value

    console.log('REFRESH_TOKEN:', refreshToken)

    if (!refreshToken) {
      throw new Error('Refresh token not found')
    }

    const res = await axiosInstance.post('/auth/refresh-token', {
      refreshToken,
    })

    if (res.data.success) {
      const newAccessToken = res.data.accessToken
      cookieStore.set('accessToken', newAccessToken)

      return newAccessToken
    } else {
      throw new Error('Refresh token failed')
    }
  } catch (error) {
    console.error('Error refreshing token:', error)
    throw new Error('Failed to get new access token')
  }
}
