export default function Customer({ customer, styles }) {
  return (
    <section className={styles.customer}>
      <div className={styles.top}>
        <figure>
          <img src={customer.avatar} alt={customer.name} />
        </figure>
        <h3>{customer.name}</h3>
      </div>
      <span className={styles.email}>{customer.email}</span>
      
      <div className={styles.middle}>
        <div>
          <h4>Pendente</h4>
          <p>
            R${customer.info.pending.toFixed(2)}
          </p>
        </div>
        
        <div>
          <h4>Pago</h4>
          <p>
            R${customer.info.paid.toFixed(2)}
          </p>
        </div>
      </div>
      
      <p className={styles.invoices}>{customer.info.invoicesCount} dívidas</p>
    </section>
  )
}