"use client"

import { usePathname } from "next/navigation"

import Header from "@/ui/header"
import Menu from "@/ui/dashboard/menu"
import styles from "./layout.module.css"

export default function DashboardLayout({ children }) {
  const pathname = usePathname()
  
  return (
    <main className={styles.layout}>
      <Header />
      <Menu path={pathname} />
      {children}
    </main>
  )
}