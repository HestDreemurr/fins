import {
  BanknotesIcon,
  ClockIcon,
  InboxIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline"
import { getOverviewInfos } from "@/lib/db/data"

export default async function OverviewInfos() {
  const infos = await getOverviewInfos()
  
  return (
    <>
      <section>
        <BanknotesIcon width={20} height={20} /> <h4>Coletado</h4>
        <p>
          R${infos.collected.toFixed(2)}
        </p>
      </section>
      
      <section>
        <ClockIcon width={20} height={20} /> <h4>Pendente</h4>
        <p>
          R${infos.pending.toFixed(2)}
        </p>
      </section>
      
      <section>
        <InboxIcon width={20} height={20} /> <h4>Dívidas</h4>
        <p>
          {infos.totalInvoices}
        </p>
      </section>
      
      <section>
        <InboxIcon width={20} height={20} /> <h4>Clientes</h4>
        <p>
          {infos.totalCustomers}
        </p>
      </section>
    </>
  )
}