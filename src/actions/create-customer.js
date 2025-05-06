"use server"

import { randomUUID } from "node:crypto"
import { redirect } from "next/navigation"
import { queryClient } from "@/lib/react-query"

import { customerSchema } from "@/lib/schemas"
import { saveCustomer } from "@/lib/db/data"
import { decryptSession } from "@/lib/session"

export async function createCustomerAction(prevState, formData) {
  const form = customerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email")
  })
  
  if (!form.success) {
    return {
      errors: form.error.flatten().fieldErrors
    }
  }
  
  form.data.id = randomUUID()
  form.data.avatar = formData.get("avatar")

  const user = await decryptSession()
  saveCustomer(user.id, form.data)
  
  redirect("/dashboard/customers/")
}