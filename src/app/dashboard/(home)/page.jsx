import { lusitanaFont } from "@/ui/fonts"
import DashboardTable from "@/ui/dashboard/overview/table"

import styles from "./overview.module.css"

export default function DashboardHome() {
  return (
    <main>
      <h2 className={lusitanaFont.className}>Dashboard</h2>
      
      <DashboardTable styles={styles} />
    </main>
  )
}