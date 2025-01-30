/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import CreateMainCategoryForm from '../../app/(dashboard-layout)/(admin-dashboard)/admin/main-categories/_components/CreateMainCategoryForm'
import { useMediaQuery } from '@/hooks/use-media-query'

interface IProps {
  buttonText: string
  title: string
  children: React.ReactNode
}

export function ModalController({ children, buttonText, title }: IProps) {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant='outline'>{buttonText}</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>{children}</DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant='outline'>{title}</Button>
      </DrawerTrigger>
      <DrawerContent>
        {children}
        <DrawerFooter className='pt-2'>
          <DrawerClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
