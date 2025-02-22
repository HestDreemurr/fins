"use server"

import z from "zod"
import { formSchema } from "@/lib/signin-schema.js"

export async function signinAction(prevState, formData) {
  const data = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password")
  })
  
  if (!data.success) {
    return {
      errors: data.error.flatten().fieldErrors
    }
  }
  
  return {
    success: "Campos válidos!"
  }
}