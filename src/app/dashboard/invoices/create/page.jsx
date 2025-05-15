
import Breadcrumb from "@/ui/dashboard/breadcrumb"
import CreateInvoiceForm from "@/ui/forms/create-invoice-form"
import { getSimpleCustomers } from "@/lib/db/data"

import styles from "./create.module.css"

export default async function CreateInvoicePage() {
  const customers = await getSimpleCustomers()
  
  return (
    <main>
      <Breadcrumb links={[
        { label: "Dívidas", href: "/dashboard/invoices" },
        {
          label: "Criar",
          href: "/dashboard/invoices/create",
          active: true
        }
      ]} />
      
      <section className={styles.form}>
        <CreateInvoiceForm customers={customers} styles={styles}  />
      </section>
    </main>
  )
}