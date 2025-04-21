"use client"

import { usePathname } from "next/navigation"

import Header from "@/ui/header"
import Menu from "@/ui/dashboard/menu"
import { QueryProvider } from "@/lib/react-query"

export default function DashboardLayout({ children }) {
  const pathname = usePathname()
  
  return (
    <main>
      <Header />
      <Menu path={pathname} />
      <QueryProvider>
        {children}
      </QueryProvider>
    </main>
  )
}