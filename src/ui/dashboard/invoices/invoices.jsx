import Invoice from "./invoice"

export default function Invoices({ invoices, styles }) {
  return (
    <main className={styles.invoices}>
      {invoices.map(invoice => (
        <Invoice key={invoice.id} invoice={invoice} styles={styles} />
      ))}
    </main>
  )
}