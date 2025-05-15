"use server"

import { redirect } from "next/navigation"
import { randomUUID } from "node:crypto"

import { invoiceSchema } from "@/lib/schemas"
import { saveInvoice } from "@/lib/db/data"

export async function createInvoiceAction(prevState, formData) {
  const form = invoiceSchema.safeParse({
    customer: formData.get("customer"),
    amount: formData.get("amount"),
    status: formData.get("status") ?? ""
  })
  
  if (!form.success) {
    return {
      errors: form.error.flatten().fieldErrors
    }
  }
  
  form.data.id = randomUUID()
  form.data.createdOn = new Date().toISOString().split("T")[0]
  
  await saveInvoice(form.data)
  
  redirect("/dashboard/invoices")
}