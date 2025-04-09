import "server-only"

import sql from "@/lib/neon"
import { uploadCustomerAvatar } from "@/lib/huper"

export async function getCustomers(userId) {
  const customers = await sql`
  SELECT * FROM customers
  WHERE userid = ${userId}
  `
  return customers
}

export async function saveCustomer(userId, customer) {
  const avatarUrl = await uploadCustomerAvatar(customer.avatar)
  
  await sql`
  INSERT INTO customers (id, userid, name, avatar, email)
  VALUES (${customer.id}, ${userId}, ${customer.name}, ${avatarUrl}, ${customer.email})
  `
}