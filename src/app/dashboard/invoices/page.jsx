import InvoicesTable from "@/ui/dashboard/invoices/table"
import { getInvoices } from "@/lib/db/data"

import styles from "./invoices.module.css"

export default async function DashboardInvoices() {
  const invoices = await getInvoices()
  
  return (
    <InvoicesTable invoices={invoices} styles={styles} />
  )
}