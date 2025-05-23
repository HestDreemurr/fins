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

export async function getSimpleCustomers() {
  const { id } = await decryptSession()
  
  const customers = await sql`
  SELECT id, name FROM customers WHERE userID = ${id}
  `
  
  return customers
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

export async function saveCustomer(customer) {
  const { id: userId } = await decryptSession()
  
  const avatarUrl = await uploadCustomerAvatar(customer.avatar)
  
  await sql`
  INSERT INTO customers (id, userid, name, avatar, email)
  VALUES (${customer.id}, ${userId}, ${customer.name}, ${avatarUrl}, ${customer.email})
  `
}

export async function saveInvoice(invoice) {
  const { id: userId } = await decryptSession()
  
  await sql`
  INSERT INTO invoices (id, userID, customerID, amount, createdOn, status)
  VALUES (${invoice.id}, ${userId}, ${invoice.customer}, ${invoice.amount}, ${invoice.createdOn}, ${invoice.status})
  `
}

export async function getInvoices() {
  const { id: userId } = await decryptSession()
  
  const invoices = await sql`
  SELECT invoices.id, invoices.amount, invoices.createdOn, invoices.status, customers.name AS customerName, customers.email AS customerEmail, customers.avatar AS customerAvatar
  FROM invoices
  INNER JOIN customers ON invoices.customerID = customers.id
  WHERE invoices.userID = ${userId}
  GROUP BY invoices.id, invoices.amount, invoices.createdOn, invoices.status, customers.name, customers.email, customers.avatar
  ORDER BY customers.name ASC
  `
  
  return invoices
}

export async function deleteInvoice(invoiceId) {
  await sql`
  DELETE FROM invoices
  WHERE id = ${invoiceId}
  `
}

export async function updateInvoice(invoice) {
  await sql`
  UPDATE invoices
  SET customerID = ${invoice.customer}, amount = ${invoice.amount}, status = ${invoice.status}
  WHERE id = ${invoice.id}
  `
}

export async function getInvoiceById(invoiceId) {
  const invoice = await sql`
  SELECT * FROM invoices
  WHERE id = ${invoiceId}
  `
  
  return invoice[0]
}