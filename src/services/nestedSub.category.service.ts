/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-unused-vars */

'use server'

import { FieldValues } from 'react-hook-form'

import axiosInstance from '@/lib/axiosInstance'
import axios from 'axios'

export const getNestedSubCategories = async () => {
  try {
    const res = await axiosInstance.get('/nested-sub-category')

    return res.data
  } catch (error) {
    console.error('Failed to fetch data:', error)
    throw new Error('Failed to fetch data')
  }
}

export const createNestedSubCategory = async (
  nestedSubCategoryData: FieldValues
): Promise<any> => {
  try {
    const res = await axiosInstance.post(
      '/nested-sub-category/create-nested-sub-category',
      nestedSubCategoryData
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
