'use client'

import { Input } from '@/components/ui/input'
import { useFormContext } from 'react-hook-form'

interface IProps {
  variant?: 'flat' | 'bordered' | 'faded' | 'underlined'
  size?: 'sm' | 'md' | 'lg'
  required?: boolean
  type?: string
  label: string
  name: string
}

const FormInput = ({
  variant = 'bordered',
  required = false,
  type = 'text',
  label,
  name,
}: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <Input
      {...register(name)}
      errorMessage={errors[name] ? (errors[name]?.message as string) : ''}
      isInvalid={!!errors[name]}
      label={label}
      name={name}
      required={required}
      type={type}
      variant={variant}
    />
  )
}

export default FormInput
