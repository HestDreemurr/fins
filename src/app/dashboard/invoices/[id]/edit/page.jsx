import Breadcrumb from "@/ui/dashboard/breadcrumb"
import EditInvoiceForm from "@/ui/forms/edit-invoice-form"
import {
  getInvoiceById,
  getSimpleCustomers
} from "@/lib/db/data"

import styles from "@/app/dashboard/invoices/create/create.module.css"

export default async function EditInvoicePage(props) {
  const params = await props.params
  const invoiceId = params.id
  
  const [invoice, customers] = await Promise.all([
    getInvoiceById(invoiceId),
    getSimpleCustomers()
  ])
  
  return (
    <main>
      <Breadcrumb links={[
        { label: "Dívidas", href: "/dashboard/invoices" },
        {
          label: "Editar",
          href: `/dashboard/invoices/${invoice.id}/edit`,
          active: true
        }
      ]} />
      
      <section className={styles.form}>
        <EditInvoiceForm invoice={invoice} customers={customers} styles={styles} />
      </section>
    </main>
  )
}