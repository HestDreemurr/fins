import Header from "@/ui/header"
import LoginForm from "@/ui/forms/login-form"
import Link from "next/link"
import { lusitanaFont } from "@/ui/fonts"
import styles from "./login.module.css"

export default function LoginPage() {
  return (
    <main className={styles.main}>
      <Header />
      
      <section className={styles.form}>
        <h2 className={lusitanaFont.className}>Faça Login para Continuar.</h2>
        
        <LoginForm />
        
        <p>
          Não tem uma Conta? <Link href="/cadastro"><strong>Cadastre-se</strong></Link>
        </p>
      </section>
    </main>
  )
}