import "dotenv/config"
import jwt from "jsonwebtoken"

const secretKey = process.env.JWT_SECRET_KEY

export function generateToken(credentials) {
  const token = jwt.sign(credentials, secretKey, { expiresIn: "30d" })
  return token
}

export function decryptToken(token) {
  try {
    const payload = jwt.verify(token, secretKey)
    return payload
  } catch {
    return null
  }
}