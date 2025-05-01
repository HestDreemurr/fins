import "server-only"

import sql from "./sql"
import { uploadCustomerAvatar } from "./upload.js"

export async function getCustomers(userId) {
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
  WHERE customers.userID = ${userId}
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