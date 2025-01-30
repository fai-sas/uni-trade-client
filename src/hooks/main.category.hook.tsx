/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  createMainCategory,
  getMainCategories,
} from '@/services/main.category.service'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { FieldValues } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useCreateMainCategory = () => {
  const queryClient = useQueryClient()

  return useMutation<any, Error, FieldValues>({
    mutationKey: ['CREATE_MAIN_CATEGORY'],
    mutationFn: async (mainCategoryData) =>
      await createMainCategory(mainCategoryData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['MAIN_CATEGORIES'] })
      toast.success('Main Category Created Successfully')
    },
    onError: (error) => {
      toast.error(error?.message)
    },
  })
}

export const useGetMainCategories = () => {
  return useQuery({
    queryKey: ['MAIN_CATEGORIES'],
    queryFn: async () => await getMainCategories(),
  })
}
