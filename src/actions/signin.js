"use server"

import z from "zod"
import bcrypt from "bcryptjs"
import { formSchema } from "@/lib/signin-schema.js"
import { saveUser } from "@/lib/database"
import { generateToken } from "@/lib/jwt"

export async function signinAction(prevState, formData) {
  const form = formSchema.safeParse({
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
  
  const user = saveUser(form.data)
  
  
  
  // Redirecionar o usuário para o Dashboard
}