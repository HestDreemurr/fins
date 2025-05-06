import "server-only"

import sql from "./sql"
import { uploadCustomerAvatar } from "./upload"
import { decryptSession } from "@/lib/session"

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

export async function getCustomers(query) {
  const { id } = await decryptSession()
  
  const customers = await sql`
  SELECT 
    customers.id,
    customers.name,
    customers.email,
    customers.avatar,
    COUNT(invoices.id) AS invoicesCount,
    SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS paid,
    SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS pending
  FROM customers
  LEFT JOIN invoices ON customers.id = invoices.customerID
  WHERE customers.userID = ${id} AND customers.name ILIKE ${`%${query}%`} OR customers.email ILIKE ${`%${query}%`}
  GROUP BY customers.id, customers.name, customers.email, customers.avatar
  ORDER BY customers.name ASC
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