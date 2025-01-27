/* eslint-disable @typescript-eslint/no-unused-vars */
import * as z from 'zod'

export const loginSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  password: z.string().min(6, 'Password is required of minimum six characters'),
})
