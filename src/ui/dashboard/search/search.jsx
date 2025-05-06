"use client"

import { usePathname, useRouter } from "next/navigation"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

import { interFont } from "@/ui/fonts"
import styles from "./section.module.css"

export default function SearchInput({ name, placeholder }) {
  const pathname = usePathname()
  const router = useRouter()
  
  function handleSearch(query) {
    const params = new URLSearchParams()
    
    if (query) {
      params.set("query", query)
    } else {
      params.delete("query")
    }
    
    router.replace(`${pathname}?${params.toString()}`)
  }
  
  return (
    <div className={styles.search}>
      <MagnifyingGlassIcon width={20} height={20} className={styles.icon} />
      <input
      type="text"
      id={name}
      name={name}
      placeholder={placeholder}
      className={interFont.className}
      onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  )
}