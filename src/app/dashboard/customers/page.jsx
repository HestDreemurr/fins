"use client"

import Link from "next/link"
import { useQuery } from "@tanstack/react-query"

import SearchSection from "@/ui/dashboard/search-section"
import Customers from "@/ui/dashboard/customers"
import Loading from "@/ui/loading"
import { lusitanaFont } from "@/ui/fonts"

import styles from "./customers.module.css"


export default function DashboardCustomers() {
  const { data: customers, isPending } = useQuery({
    queryKey: ["customersData"],
    queryFn: async () => {
      const res = await fetch("/api/customers")
      const data = res.json()
      return data
    }
  })
  
  return (
    <main>
      <h2 className={lusitanaFont.className}>Clientes</h2>
      
      <SearchSection.Root>
        <SearchSection.Input onSearch={() => null} name="search-customers" placeholder="Pesquisar clientes..." />
        <SearchSection.Link path="/dashboard/customers/create" />
      </SearchSection.Root>
      
      {isPending ? <Loading /> : (
        <Customers customers={customers} styles={styles} />
      )}
    </main>
  )
}