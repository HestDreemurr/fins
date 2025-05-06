import CustomersTable from "@/ui/dashboard/customers/table"
import { getCustomers } from "@/lib/db/data"

import styles from "./customers.module.css"

export const dynamic = "force-dynamic"

export default async function DashboardCustomers(props) {
  const searchParams = await props.searchParams
  const query = searchParams?.query ?? ""
  
  const customers = await getCustomers(query)
  
  return (
    <main>
      <CustomersTable customers={customers} styles={styles} />
    </main>
  )
}