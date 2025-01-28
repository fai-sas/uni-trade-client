import SidebarComponent from './_components/sidebar/Sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <SidebarComponent />
      {children}
    </section>
  )
}
