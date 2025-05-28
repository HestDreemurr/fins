import Image from "next/image"
import { getLatestInvoices } from "@/lib/db/data"
import { lusitanaFont } from "@/ui/fonts"

export default async function LatestInvoices({ styles }) {
  const latestInvoices = await getLatestInvoices()
  
  return (
    <section className={styles}>
      {latestInvoices.map(invoice => (
        <div key={invoice.id}>
          <Image
          src={invoice.avatar}
          alt={invoice.name}
          width={45}
          height={45}
          />
          <h4>{invoice.name}</h4>
          <span className={lusitanaFont.className}>R${invoice.amount.toFixed(2)}</span>
        </div>
      ))}
    </section>
  )
}