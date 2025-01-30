/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  createSubCategory,
  getSubCategories,
} from '@/services/sub.category.service'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { FieldValues } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useCreateSubCategory = () => {
  const queryClient = useQueryClient()

  return useMutation<any, Error, FieldValues>({
    mutationKey: ['CREATE_SUB_CATEGORY'],
    mutationFn: async (subCategoryData) =>
      await createSubCategory(subCategoryData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['SUB_CATEGORIES'] })
      toast.success('Sub Category Created Successfully')
    },
    onError: (error) => {
      toast.error(error?.message)
    },
  })
}

export const useGetSubCategories = () => {
  return useQuery({
    queryKey: ['SUB_CATEGORIES'],
    queryFn: async () => await getSubCategories(),
  })
}
