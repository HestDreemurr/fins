import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

import Header from "@/ui/header"
import { lusitanaFont } from "@/ui/fonts"
import styles from "./home.module.css"

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Header className={styles.header} />
      
      <section className={styles.mainSection}>
        <p className={lusitanaFont.className}>
          <strong>Seja bem-vindo ao Fins.</strong> Essa aplicação é baseada no <Link href="https://nextjs.org/learn" target="_blank">Curso de Next.js</Link> da Vercel.
        </p>
        <Link href="/login" className={styles.login}>
          Login <ArrowRightIcon width={20} height={20} />
        </Link>
      </section>
      
      <figure className={styles.figure}>
        <Image
        src="/hero-mobile.png"
        alt="Fins Mobile"
        width={350}
        height={400}
        className={styles.finsMobile}
        />
        
        <Image
        src="/hero-desktop.png"
        alt="Fins Desktop"
        width={600}
        height={460}
        className={styles.finsDesktop}
        />
      </figure>
    </main>
  )
}