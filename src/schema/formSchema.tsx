/* eslint-disable @typescript-eslint/no-unused-vars */
import * as z from 'zod'

export const loginSchema = z.object({
  email: z.string().min(1, 'Email is required'),
  password: z
    .string()
    .min(5, 'Password is required of minimum five characters'),
})
