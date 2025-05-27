import OverviewInfos from "./overview"
import LatestInvoices from "./latest-invoices"
import { lusitanaFont } from "@/ui/fonts"

export default function DashboardTable() {
  return (
    <>
      <OverviewInfos />
      
      <h3 className={lusitanaFont.className}>Dívidas recentes</h3>
      <LatestInvoices />
    </>
  )
}