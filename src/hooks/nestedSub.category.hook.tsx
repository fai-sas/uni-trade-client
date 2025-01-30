/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  createNestedSubCategory,
  getNestedSubCategories,
} from '@/services/nestedSub.category.service'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { FieldValues } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useCreateNestedSubCategory = () => {
  const queryClient = useQueryClient()

  return useMutation<any, Error, FieldValues>({
    mutationKey: ['CREATE_NESTED_SUB_CATEGORY'],
    mutationFn: async (nestedSubCategoryData) =>
      await createNestedSubCategory(nestedSubCategoryData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['NESTED_SUB_CATEGORIES'] })
      toast.success('Nested Sub Category Created Successfully')
    },
    onError: (error) => {
      toast.error(error?.message)
    },
  })
}

export const useGetNestedSubCategories = () => {
  return useQuery({
    queryKey: ['NESTED_SUB_CATEGORIES'],
    queryFn: async () => await getNestedSubCategories(),
  })
}
