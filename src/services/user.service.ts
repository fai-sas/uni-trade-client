/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use server'

import { FieldValues } from 'react-hook-form'

import { cookies } from 'next/headers'
import axiosInstance from '@/lib/axiosInstance'

export const getAllUsers = async () => {
  try {
    const res = await axiosInstance.get('/users')

    return res.data
  } catch (error) {
    console.error('Failed to fetch data:', error)
    throw new Error('Failed to fetch data')
  }
}

export const getSingleUser = async (userId: string) => {
  try {
    const res = await axiosInstance.get(`/users/${userId}`)

    return res.data
  } catch (error) {
    console.error('Failed to fetch data:', error)
    throw new Error('Failed to fetch data')
  }
}

export const getMe = async () => {
  try {
    const res = await axiosInstance.get(`/users/my-profile`)

    return res.data
  } catch (error) {
    console.error('Failed to fetch data:', error)
    throw new Error('Failed to fetch data')
  }
}

export const getActivities = async () => {
  try {
    const res = await axiosInstance.get(`/activity`)

    return res.data
  } catch (error) {
    console.error('Failed to fetch data:', error)
    throw new Error('Failed to fetch data')
  }
}

export const updateProfile = async (userId: any, profileData: any) => {
  try {
    const res = await axiosInstance.put(
      `/users/profile/update/${userId}`,
      profileData
    )

    return res.data
  } catch (error) {
    console.error('Failed to update profile:', error)
    throw new Error('Failed to update profile')
  }
}

export const blockUser = async (userId: string): Promise<any> => {
  try {
    const res = await axiosInstance.put(`/users/block-user/${userId}`)

    return res.data
  } catch (error: any) {
    throw new Error(error)
  }
}

export const makeAdmin = async (userId: string): Promise<any> => {
  try {
    const res = await axiosInstance.put(`/users/make-admin/${userId}`)

    return res.data
  } catch (error: any) {
    throw new Error(error)
  }
}

export const deleteUser = async (userId: string): Promise<any> => {
  try {
    const res = await axiosInstance.delete(`/users/delete-user/${userId}`)

    return res.data
  } catch (error: any) {
    throw new Error(error)
  }
}

export const makePaymentForPremiumUser = async (
  paymentData: FieldValues
): Promise<any> => {
  try {
    const res = await axiosInstance.post(`/payment/create-payment`, paymentData)

    return res.data
  } catch (error: any) {
    throw new Error(error)
  }
}
