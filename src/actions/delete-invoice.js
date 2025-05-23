"use server" 

import { revalidatePath } from "next/cache"
import { deleteInvoice } from "@/lib/db/data"

export async function deleteInvoiceAction(invoiceId) {
  await deleteInvoice(invoiceId)
  revalidatePath("/dashboard/invoices")
}