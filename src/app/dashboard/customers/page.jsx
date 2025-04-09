"use client"

import Link from "next/link"

import SearchSection from "@/ui/dashboard/search-section"
import Customers from "@/ui/dashboard/customers"
import { lusitanaFont } from "@/ui/fonts"

import styles from "./customers.module.css"

export default function DashboardCustomers() {
  return (
    <main>
      <h2 className={lusitanaFont.className}>Clientes</h2>
      
      <SearchSection.Root>
        <SearchSection.Input onSearch={() => null} name="search-customers" placeholder="Pesquisar clientes..." />
        <SearchSection.Link path="/dashboard/customers/create" />
      </SearchSection.Root>
      
      <Customers styles={styles} />
    </main>
  )
}