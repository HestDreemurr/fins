"use client"

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

import { interFont } from "@/ui/fonts"
import styles from "./section.module.css"

export default function SearchInput({ onSearch, name, placeholder }) {
  return (
    <div className={styles.search}>
      <MagnifyingGlassIcon width={20} height={20} className={styles.icon} />
      <input
      type="text"
      id={name}
      name={name}
      placeholder={placeholder}
      onChange={onSearch}
      className={interFont.className}
      />
    </div>
  )
}