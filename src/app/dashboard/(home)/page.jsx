import { lusitanaFont } from "@/ui/fonts"
import DashboardTable from "@/ui/dashboard/overview/table"

export default function DashboardHome() {
  return (
    <main>
      <h2 className={lusitanaFont.className}>Dashboard</h2>
      
      <DashboardTable />
    </main>
  )
}