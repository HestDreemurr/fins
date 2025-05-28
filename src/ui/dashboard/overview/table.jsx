import OverviewInfos from "./overview"
import LatestInvoices from "./latest-invoices"
import { lusitanaFont } from "@/ui/fonts"

export default function DashboardTable({ styles }) {
  return (
    <>
      <OverviewInfos styles={styles.infos} />
      
      <h3 className={lusitanaFont.className}>Dívidas recentes</h3>
      <LatestInvoices styles={styles.invoices} />
    </>
  )
}