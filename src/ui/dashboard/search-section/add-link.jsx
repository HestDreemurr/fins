import Link from "next/link"
import { PlusIcon } from "@heroicons/react/24/outline"

import styles from "./section.module.css"

export default function AddLink({ path }) {
  return (
    <Link href={path} className={styles.link}>
      <PlusIcon width={20} height={20} />
    </Link>
  )
}