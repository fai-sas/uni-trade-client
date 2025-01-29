/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { SidebarProvider } from '@/components/ui/sidebar'
import { SiteHeader } from './site-header'
import { AppSidebar } from './app-sidebar'

const SidebarComponent = () => {
  return (
    <div className='[--header-height:calc(theme(spacing.14))]'>
      <SidebarProvider className='flex flex-col'>
        <SiteHeader />
        <div className='flex flex-1'>
          <AppSidebar />
        </div>
      </SidebarProvider>
    </div>
  )
}

export default SidebarComponent
