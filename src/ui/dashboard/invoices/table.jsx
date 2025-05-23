import { lusitanaFont } from "@/ui/fonts"
import Search from "@/ui/dashboard/search"
import Invoices from "./invoices"

export default function InvoicesTable({ invoices, styles }) {
  return (
    <>
      <h2 className={lusitanaFont.className}>Dívidas</h2>
      
      <Search.Root>
        <Search.Input name="search-invoices" placeholder="Pesquisar dívidas..." />
        <Search.Link path="/dashboard/invoices/create" />
      </Search.Root>
      
      <Invoices invoices={invoices} styles={styles} />
    </>
  )
}