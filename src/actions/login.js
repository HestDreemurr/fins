"use server"

import bcrypt from "bcryptjs"
import { redirect } from "next/navigation"

import { loginSchema } from "@/lib/schemas"
import { getUser } from "@/lib/database"
import { createSession } from "@/lib/session"

export async function loginAction(prevState, formData) {
  const form = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password")
  })
  
  if (!form.success) {
    return {
      errors: form.error.flatten().fieldErrors
    }
  }
  
  const user = await getUser(form.data.email)
  
  if (!user) {
    return {
      errors: { email: "Usuário não encontrado" }
    }
  }
  
  const isValidPassword = await bcrypt.compare(form.data.password, user.password)
  
  if (!isValidPassword) {
    return {
      errors: { password: "Senha inválida" }
    }
  }
  
  createSession({
    id: user.id,
    name: user.name,
    email: user.email
  })
  
  redirect("/dashboard")
}