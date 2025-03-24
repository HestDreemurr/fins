"use client"

import Link from "next/link"

import SearchSection from "@/ui/dashboard/search-section"
import Customers from "@/ui/dashboard/customers"

import styles from "./customers.module.css"

export default function DashboardCustomers() {
  return (
    <main>
      <SearchSection.Root>
        <SearchSection.Input onSearch={() => null} name="search-customers" placeholder="Pesquisar clientes..." />
        <SearchSection.Link path="/dashboard/customers/create" />
      </SearchSection.Root>
      
      <Customers styles={styles} />
    </main>
  )
}