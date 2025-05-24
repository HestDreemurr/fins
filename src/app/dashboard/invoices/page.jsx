import InvoicesTable from "@/ui/dashboard/invoices/table"
import { getInvoices } from "@/lib/db/data"
Promise
import styles from "./invoices.module.css"

export default async function DashboardInvoices(props) {
  const searchParams = await props.searchParams
  const query = searchParams?.query ?? ""
  const invoices = await getInvoices(query)
  
  return (
    <InvoicesTable invoices={invoices} styles={styles} />
  )
}