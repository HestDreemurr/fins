import "dotenv/config"
import { neon } from "@neondatabase/serverless"

const token = process.env.NEONDB_TOKEN
const sql = neon(token)

export async function saveUser(user) {
  return await sql`
  INSERT INTO users (name, email, password)
  VALUES (${user.name}, ${user.email}, ${user.password})
  `
}