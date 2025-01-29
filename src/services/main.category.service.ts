/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-unused-vars */
'use server'

import { FieldValues } from 'react-hook-form'

import axiosInstance from '@/lib/axiosInstance'
import axios from 'axios'

export const getMainCategories = async () => {
  try {
    const res = await axiosInstance.get('/main-category')

    return res.data
  } catch (error) {
    console.error('Failed to fetch data:', error)
    throw new Error('Failed to fetch data')
  }
}

export const createMainCategory = async (
  mainCategoryData: FieldValues
): Promise<any> => {
  try {
    const res = await axiosInstance.post(
      '/main-category/create-main-category',
      mainCategoryData
    )

    return res.data
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message)
      throw new Error(
        error.response?.data?.message || 'An unexpected error occurred'
      )
    } else {
      console.error('Unexpected error:', error)
      throw new Error('An unexpected error occurred')
    }
  }
}
