import Link from "next/link"
import clsx from "clsx"

import { lusitanaFont } from "@/ui/fonts"
import styles from "./breadcrumb.module.css"

export default function BreadCrumb({  links }) {
  return (
    <ol className={clsx(styles.links, lusitanaFont.className)}>
      {links.map((link, index) => (
        <li key={index} className={styles.link}>
          <Link href={link.href} className={link.active ? styles.active : ""}>{link.label}</Link>
          {index < links.length - 1 && (<span className={styles.divider}>/</span>)}
        </li>
      ))}
    </ol>
  )
}