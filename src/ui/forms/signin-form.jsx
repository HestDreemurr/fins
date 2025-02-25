"use client"

import { UserIcon, AtSymbolIcon, KeyIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import PasswordInput from "./password-input.jsx"
import { interFont } from "@/ui/fonts"
import { signinAction } from "@/actions/signin"
import { useState, useActionState } from "react"

export default function SigninForm() {
  const [result, formAction, isPending] = useActionState(signinAction, null)
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })
  
  const inputErrorStyle = {
    border: "2px solid #ff604f",
    outline: "none"
  }
  
  return (
    <form action={formAction}>
      <div>
        <label htmlFor="name">Nome</label>
        <span>
          <UserIcon width={18} height={18} />
        </span>
        <input
        type="text"
        name="name"
        id="name"
        placeholder="Insira seu nome..."
        style={result?.errors?.name ? inputErrorStyle : {}}
        className={interFont.className}
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {result?.errors?.name && <p>{result.errors.name[0]}</p>}
      </div>
      
      <div>
        <label htmlFor="email">Email</label>
        <span>
          <AtSymbolIcon width={18} height={18} />
        </span>
        <input 
        type="text"
        name="email"
        id="email"
        placeholder="Insira seu email..."
        style={result?.errors?.email ? inputErrorStyle : {}}
        className={interFont.className}
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {result?.errors?.email && <p>{result.errors.email[0]}</p>}
      </div>
      
      <div>
        <label htmlFor="password">Crie uma Senha</label>
        <span>
          <KeyIcon width={18} height={18} />
        </span>
        <PasswordInput 
        placeholder="Crie uma Senha forte..." 
        autoComplete="new-password"
        style={result?.errors?.password ? inputErrorStyle : {}}
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        {result?.errors?.password && <p>{result.errors.password[0]}</p>}
      </div>
      
      <button type="submit" className={interFont.className} disabled={isPending}>
        Criar <ArrowRightIcon width={16} height={16} />
      </button>
    </form>
  )
}