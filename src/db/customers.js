import "server-only"

import sql from "@/lib/neon"

export async function getCustomers(userId) {
  const customers = await sql`
  SELECT * FROM customers
  WHERE userid = ${userId}
  `
  return customers
}