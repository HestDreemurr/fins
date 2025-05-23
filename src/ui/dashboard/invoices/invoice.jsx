import Image from "next/image"
import InvoiceStatus from "./status"
import { 
  EditInvoiceButton,
  DeleteInvoiceButton
} from "./buttons"

export default function Invoice({ invoice, styles }) {
  const formatter = new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "short",
    year: "numeric"
  })
  const date = new Date(invoice.createdon)
  
  return (
    <section className={styles.invoice}>
      <div className={styles.top}>
        <div>
          <div>
            <Image
            src={invoice.customeravatar}
            alt={invoice.customername}
            width={40}
            height={40}
            />
            <h3>{invoice.customername}</h3>
          </div>
          <p>{invoice.customeremail}</p>
        </div>
        <div className={styles.status}>
          <InvoiceStatus status={invoice.status} />
        </div>
      </div>
      
      <div className={styles.bottom}>
        <div>
          <h4>R${invoice.amount.toFixed(2)}</h4>
          <p>{formatter.format(date)}</p>
        </div>
        
        <div>
          <EditInvoiceButton invoiceId={invoice.id} />
          <DeleteInvoiceButton invoiceId={invoice.id} />
        </div>
      </div>
    </section>
  )
}