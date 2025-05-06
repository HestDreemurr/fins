import Customer from "./customer.jsx"

export default function Customers({ customers, styles }) {
  return (
    <main className={styles.customers}>
      {customers.map(customer => (
        <Customer customer={customer} styles={styles} key={customer.id} />
      ))}
    </main>
  )
}