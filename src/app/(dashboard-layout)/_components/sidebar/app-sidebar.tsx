/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'

import * as React from 'react'
import { Command } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { NavUser } from './nav-user'
import { NavMain } from './nav-main'
import { NavProjects } from './nav-projects'
import { NavSecondary } from './nav-secondary'
import { sideBarItems } from './nav-links'
import { useGetMe } from '@/hooks/user.hook'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userData } = useGetMe()

  const user = userData?.data

  console.log(user)

  // Select the appropriate nav menu items based on the user's role
  let roleBasedMenuItems: any[] = []

  const sidebar = sideBarItems?.navMain?.vendor
  console.log(sidebar)

  if (user?.role === 'ADMIN') {
    roleBasedMenuItems = [
      ...roleBasedMenuItems,
      ...sideBarItems?.navMain?.admin,
    ]
  } else if (user?.role === 'CUSTOMER') {
    roleBasedMenuItems = [
      // ...roleBasedMenuItems,
      ...sideBarItems?.navMain?.user,
    ]
  } else if (user?.role === 'VENDOR') {
    roleBasedMenuItems = [
      ...roleBasedMenuItems,
      ...sideBarItems?.navMain?.vendor,
    ]
  }

  return (
    <Sidebar
      className='top-[--header-height] !h-[calc(100svh-var(--header-height))]'
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size='lg' asChild>
              <a href='#'>
                <div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground'>
                  <Command className='size-4' />
                </div>
                <div className='grid flex-1 text-left text-sm leading-tight'>
                  <span className='truncate font-semibold'>Acme Inc</span>
                  <span className='truncate text-xs'>Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={roleBasedMenuItems} />
        {/* <NavProjects projects={data.projects} /> */}
        {/* <NavSecondary items={data.navSecondary} className='mt-auto' /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}
