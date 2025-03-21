"use server"

import { redirect } from "next/navigation"
import bcrypt from "bcryptjs"
import { randomUUID } from "node:crypto"

import { signinSchema } from "@/lib/schemas"
import { saveUser } from "@/db/users"
import { createSession } from "@/lib/session"

export async function signinAction(prevState, formData) {
  const form = signinSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password")
  })
  
  if (!form.success) {
    return {
      errors: form.error.flatten().fieldErrors
    }
  }
  
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(form.data.password, salt)
  form.data.password = hashPassword
  
  form.data.id = randomUUID()
  
  saveUser(form.data)
  
  createSession({
    id: form.data.id,
    name: form.data.name,
    email: form.data.email
  })
  
  redirect("/dashboard")
}