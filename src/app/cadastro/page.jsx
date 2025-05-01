import Link from "next/link"
import Header from "@/ui/header"
import SigninForm from "@/ui/forms/signin-form"
import { lusitanaFont } from "@/ui/fonts"
import styles from "./cadastro.module.css"

export default function SigninPage() {
  return (
    <main className={styles.main}>
      <Header />
      
      <section className={styles.form}>
        <h2 className={lusitanaFont.className}>Cadastre-se</h2>
        
        <SigninForm />
        
        <p className={styles.anchor}>
          Já possui uma conta? <Link href="/login">Entre</Link>
        </p>
      </section>
    </main>
  )
}