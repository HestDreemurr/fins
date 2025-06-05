import Link from "next/link"
import { HomeIcon, DocumentDuplicateIcon, UserGroupIcon } from "@heroicons/react/24/outline"

import SignOutButton from "./signout-button.jsx"
import styles from "./menu.module.css"

export default function Menu({ path }) {
  return (
    <nav className={styles.menu}>
      <Link href="/dashboard" className={path === "/dashboard" ? styles.activeLink : undefined}>
        <HomeIcon width={24} height={24} />
        <span>Início</span>
      </Link>
      
      <Link href="/dashboard/invoices" className={path === "/dashboard/invoices" ? styles.activeLink : undefined}>
        <DocumentDuplicateIcon width={24} height={24} />
        <span>Dìvidas</span>
      </Link>
      
      <Link href="/dashboard/customers" className={path === "/dashboard/customers" ? styles.activeLink : undefined}>
        <UserGroupIcon width={24} height={24} />
        <span>Clientes</span>
      </Link>
      
      <SignOutButton />
    </nav>
  )
}