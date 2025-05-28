import {
  BanknotesIcon,
  ClockIcon,
  InboxIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline"
import { getOverviewInfos } from "@/lib/db/data"
import { lusitanaFont } from "@/ui/fonts"

export default async function OverviewInfos({ styles }) {
  const infos = await getOverviewInfos()
  
  return (
    <div className={styles}>
      <section>
        <BanknotesIcon width={20} height={20} /> <h4>Coletado</h4>
        <p className={lusitanaFont.className}>
          R${infos.collected.toFixed(2)}
        </p>
      </section>
      
      <section>
        <ClockIcon width={20} height={20} /> <h4>Pendente</h4>
        <p className={lusitanaFont.className}>
          R${infos.pending.toFixed(2)}
        </p>
      </section>
      
      <section>
        <InboxIcon width={20} height={20} /> <h4>Dívidas</h4>
        <p className={lusitanaFont.className}>
          {infos.totalInvoices}
        </p>
      </section>
      
      <section>
        <UserGroupIcon width={20} height={20} /> <h4>Clientes</h4>
        <p className={lusitanaFont.className}>
          {infos.totalCustomers}
        </p>
      </section>
    </div>
  )
}