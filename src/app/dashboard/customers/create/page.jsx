import BreadCrumb from "@/ui/dashboard/breadcrumb"
import CreateCustomerForm from "@/ui/forms/create-customer-form"

import styles from "./create.module.css"

export default function CreateCustomerPage() {
  return (
    <main>
      <BreadCrumb links={[
        { label: "Clientes", href: "/dashboard/customers" },
        {
          label: "Criar",
          href: "/dashboard/customers/create",
          active: true
        }
      ]} />
      
      <section className={styles.form}>
        <CreateCustomerForm styles={styles} />
      </section>
    </main>
  )
}