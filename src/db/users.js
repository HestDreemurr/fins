import "server-only"

import sql from "@/lib/neon"

export async function saveUser(user) {
  await sql`
  INSERT INTO users (id, name, email, password)
  VALUES (${user.id}, ${user.name}, ${user.email}, ${user.password})
  `
}

export async function getUser(email) {
  const user = await sql`
  SELECT * FROM users
  WHERE email = ${email}
  `
  return user[0]
}