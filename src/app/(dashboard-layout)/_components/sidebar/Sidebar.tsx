/* eslint-disable @typescript-eslint/no-unused-vars */
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { SiteHeader } from './site-header'
import { AppSidebar } from './app-sidebar'

const SidebarComponent = () => {
  return (
    <div className='[--header-height:calc(theme(spacing.14))]'>
      <SidebarProvider className='flex flex-col'>
        <SiteHeader />
        <div className='flex flex-1'>
          <AppSidebar />
          <SidebarInset>
            <h1 className=' p-8 font-bold text-2xl'>Content Inside Sidebar</h1>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}

export default SidebarComponent
