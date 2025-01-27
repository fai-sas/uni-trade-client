'use client'

import * as React from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import UserProvider from '@/context/user.provider'

export interface ProvidersProps {
  children: React.ReactNode
  // themeProps?: ThemeProviderProps
}

const queryClient = new QueryClient()

export function Providers({ children }: ProvidersProps) {
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        {children}
      </QueryClientProvider>
    </UserProvider>
  )
}
