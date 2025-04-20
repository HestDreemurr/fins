export default function Customer({ customer, styles }) {
  return (
    <section className={styles.customer}>
      <div className={styles.top}>
        <figure>
          <img src="/user-default-avatar.jpg" alt={customer.name} />
        </figure>
        <h3>{customer.name}</h3>
      </div>
      <span className={styles.email}>{customer.email}</span>
      
      <div className={styles.middle}>
        <div>
          <h4>Pendente</h4>
          <p>
            R$100
          </p>
        </div>
        
        <div>
          <h4>Pago</h4>
          <p>
            R$100
          </p>
        </div>
      </div>
      
      <p className={styles.invoices}>2 dívidas</p>
    </section>
  )
}