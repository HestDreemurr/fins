import InvoicesTable from "@/ui/dashboard/invoices/table"

const invoices = [
  
]

export default function DashboardInvoices() {
  return (
    <main>
      <InvoicesTable invoices={invoices} />
    </main>
  )
}