"use client"

import SearchSection from "@/ui/dashboard/search-section"

import Link from "next/link"

export default function DashboardCustomers() {
  return (
    <main>
      <SearchSection.Root>
        <SearchSection.Input onSearch={() => null} name="search-customers" placeholder="Pesquisar clientes..." />
        <SearchSection.Link path="/dashboard/customers/create" />
      </SearchSection.Root>
    </main>
  )
}