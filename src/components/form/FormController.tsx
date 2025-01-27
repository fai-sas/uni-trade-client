/* eslint-disable @typescript-eslint/no-unused-vars */
import { Control } from 'react-hook-form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '../ui/input'

export function CustomFormField({ name, type, control }) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='capitalize'>{name}</FormLabel>
          <FormControl>
            <Input
              {...field}
              type={type}
              value={field.value || ''}
              onChange={(e) => {
                let value

                if (type === 'number') {
                  value = parseFloat(e.target.value)
                } else if (type === 'date') {
                  const inputDate = new Date(e.target.value)
                  value = isNaN(inputDate)
                    ? ''
                    : inputDate.toISOString().split('T')[0]
                } else {
                  value = e.target.value
                }

                field.onChange(value)
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export function CustomFormSelect({ name, control, items, labelText }) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='capitalize'>{labelText || name}</FormLabel>
          <Select
            onValueChange={(value) => field.onChange(value)}
            value={field.value || ''} // Ensure value is a string or empty
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={'Select'} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {items?.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
