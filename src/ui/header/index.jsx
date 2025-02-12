import { BanknotesIcon } from "@heroicons/react/24/outline"

import { lusitanaFont } from "@/ui/fonts"
import styles from "./header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <BanknotesIcon width={50} height={50} />
      </div>
      <div className={`${lusitanaFont.className} ${styles.fins}`}>
        Fins
      </div>
    </header>
  )
}