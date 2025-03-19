"use client"

import { useActionState } from "react"

import { createCustomer } from "@/actions/create-customer"

export default function CreateCustomerPage() {
  const [result, formAction] = useActionState(createCustomer, null)
  
  console.log(result)
  
  return (
    <main>
      <form action={formAction}>
        <div>
          <input type="file" name="avatar" />
        </div>
        
        <button type="submit">Enviar</button>
      </form>
    </main>
  )
}