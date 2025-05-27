import Image from "next/image"
import { getLatestInvoices } from "@/lib/db/data"

export default async function LatestInvoices() {
  const latestInvoices = await getLatestInvoices()
  
  return (
    <section>
      {latestInvoices.map(invoice => (
        <div key={invoice.id}>
          <Image
          src={invoice.avatar}
          alt={invoice.name}
          width={50}
          height={50}
          />
          <h4>{invoice.name}</h4>
          <span>{invoice.amount}</span>
        </div>
      ))}
    </section>
  )
}