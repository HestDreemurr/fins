import "dotenv/config"
import { neon } from "@neondatabase/serverless"

const token = process.env.NEONDB_TOKEN
const sql = neon(token)

export async function saveUser(user) {
  await sql`
  INSERT INTO users (id, name, email, password)
  VALUES (${user.id}, ${user.name}, ${user.email}, ${user.password})
  `
}