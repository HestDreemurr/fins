import "server-only"

import { cookies } from "next/headers"
import { generateToken, decryptToken } from "./jwt"
import { signOut } from "@/actions/signout"

const ONE_MONTH = 30 * 24 * 60 * 60 * 1000 // 30 dias

export async function createSession(userCredentials) {
  const cookieStore = await cookies()
  const expiresAt = new Date(Date.now() + ONE_MONTH)
  const userToken = generateToken(userCredentials)
  
  cookieStore.set("token", userToken, {
    httpOnly: true,
    secure: true,
    expires: expiresAt
  })
}

export async function decryptSession() {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")?.value
  
  if (!token) await signOut()
  
  const user = decryptToken(token)
  
  if (!user) await signOut()
  
  return user
}