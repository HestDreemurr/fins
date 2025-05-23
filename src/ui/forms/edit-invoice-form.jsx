"use client"

import CreateInvoiceForm from "./create-invoice-form"
import { editInvoiceAction } from "@/actions/edit-invoice"

export default function EditInvoiceForm({ invoice, customers, styles }) {
  const action = editInvoiceAction.bind(null, invoice.id)
  
  return (
    <CreateInvoiceForm 
      customers={customers}
      defaultInvoice={invoice} 
      defaultAction={action} 
      styles={styles} 
    />
  )
}