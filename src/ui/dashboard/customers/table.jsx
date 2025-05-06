import { lusitanaFont } from "@/ui/fonts"
import Search from "@/ui/dashboard/search"
import Customers from "./customers"

export default function CustomersTable({ customers, styles }) {
  return (
    <main>
      <h2 className={lusitanaFont.className}>Clientes</h2>
      
      <Search.Root>
        <Search.Input name="search-customers" placeholder="Pesquisar clientes..." />
        <Search.Link path="/dashboard/customers/create" />
      </Search.Root>
      
      <Customers customers={customers} styles={styles} />
    </main>
  )
}