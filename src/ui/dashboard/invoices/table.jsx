import { lusitanaFont } from "@/ui/fonts"
import Search from "@/ui/dashboard/search"

export default function InvoicesTable({ invoices }) {
  return (
    <>
      <h2 className={lusitanaFont.className}>Dívidas</h2>
      
      <Search.Root>
        <Search.Input name="search-invoices" placeholder="Pesquisar dívidas..." />
        <Search.Link path="/dashboard/invoices/create" />
      </Search.Root>
    </>
  )
}