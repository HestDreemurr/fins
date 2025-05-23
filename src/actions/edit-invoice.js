"use server"

import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

import { updateInvoice } from "@/lib/db/data"
import { invoiceSchema } from "@/lib/schemas"

export async function editInvoiceAction(invoiceId, prevState, formData) {
  const form = invoiceSchema.safeParse({
    customer: formData.get("customer"),
    amount: formData.get("amount"),
    status: formData.get("status")
  })
  
  if (!form.success) {
    return {
      errors: form.error.flatten().fieldErrors
    }
  }
  
  form.data.id = invoiceId
  await updateInvoice(form.data)
  
  redirect("/dashboard/invoices")
  revalidatePath("/dashboard/invoices")
}