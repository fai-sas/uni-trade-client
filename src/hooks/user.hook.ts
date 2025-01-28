/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { FieldValues } from 'react-hook-form'
import {
  blockUser,
  deleteUser,
  getActivities,
  getAllUsers,
  getMe,
  getSingleUser,
  makeAdmin,
  makePaymentForPremiumUser,
  updateProfile,
} from '@/services/user.service'
import { getCurrentUser } from '@/services/auth.service'

export const useGetAllUsers = () => {
  return useQuery({
    queryKey: ['ALL_USERS'],
    queryFn: async () => await getAllUsers(),
  })
}

export const useGetSingleUser = (userId: string) => {
  return useQuery({
    queryKey: ['SINGLE_USER', userId],
    queryFn: async () => await getSingleUser(userId),
  })
}

export const useGetActivity = () => {
  return useQuery({
    queryKey: ['ACTIVITY'],
    queryFn: async () => await getActivities(),
  })
}

export const useGetMyProfile = () => {
  return useQuery({
    queryKey: ['MY_PROFILE'],
    queryFn: async () => await getCurrentUser(),
    refetchOnWindowFocus: true,
    staleTime: 0,
  })
}

export const useGetMe = () => {
  return useQuery({
    queryKey: ['GET_ME'],
    queryFn: async () => await getMe(),
  })
}

export const useUpdateMyProfile = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['UPDATE_PROFILE'],
    mutationFn: async ({ userId, profileData }) =>
      await updateProfile(userId, profileData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['GET_ME'],
      })
      toast.success('Profile Updated Successfully')
    },
    onError: (error) => {
      toast.error(error?.message)
    },
  })
}

export const useBlockUser = () => {
  const queryClient = useQueryClient()

  return useMutation<any, Error, string>({
    mutationKey: ['BLOCK_USER'],
    mutationFn: async (userId) => await blockUser(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ALL_USERS'] })
      toast.success('User Status Updated Successfully')
    },
    onError: (error) => {
      toast.error(error?.message)
    },
  })
}

export const useMakeAdmin = () => {
  const queryClient = useQueryClient()

  return useMutation<any, Error, string>({
    mutationKey: ['MAKE_ADMIN'],
    mutationFn: async (userId) => await makeAdmin(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ALL_USERS'] })
      toast.success('User Status Updated Successfully')
    },
    onError: (error) => {
      toast.error(error?.message)
    },
  })
}
export const useDeleteUser = () => {
  const queryClient = useQueryClient()

  return useMutation<any, Error, string>({
    mutationKey: ['DELETE_USER'],
    mutationFn: async (userId) => await deleteUser(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ALL_USERS'] })
      toast.success('User Deleted Successfully')
    },
    onError: (error) => {
      toast.error(error?.message)
    },
  })
}

export const UseMakePaymentForPremiumUser = () => {
  const queryClient = useQueryClient()

  return useMutation<any, Error, FieldValues>({
    mutationKey: ['MAKE_PAYMENT'],
    mutationFn: async (paymentData) =>
      await makePaymentForPremiumUser(paymentData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['GET_ME'] })
      // toast.success('Payment Made Successfully')
    },
    // onError: (error) => {
    //   toast.error(error?.message)
    // },
  })
}
