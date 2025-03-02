"use client"

import { useState, useActionState } from "react"

import { AtSymbolIcon, KeyIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import PasswordInput from "./password-input.jsx"
import { interFont } from "@/ui/fonts"
import { loginAction } from "@/actions/login"

export default function LoginForm() {
  const [result, formAction, isPending] = useActionState(loginAction, null)
  
  const [formData, setFormData] = useState({
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
        <label htmlFor="email">Email</label>
        <span>
          <AtSymbolIcon width={18} height={18} />
        </span>
        <input 
        type="text"
        id="email" 
        name="email"
        style={result?.errors?.email ? inputErrorStyle : {}}
        placeholder="Insira seu endereço de Email..."
        className={interFont.className}
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {result?.errors?.email && <p>{result.errors.email}</p>}
      </div>
      
      <div>
        <label htmlFor="password">Senha</label>
        <span>
          <KeyIcon width={18} height={18} />
        </span>
        <PasswordInput
        style={result?.errors?.password ? inputErrorStyle : {}}
        placeholder="Insira sua Senha..." 
        autoComplete="current-password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        {result?.errors?.password && <p>{result.errors.password}</p>}
      </div>
      
      <button type="submit" className={interFont.className}>
        Entrar {isPending ? (<span className="loading"></span>) : (<ArrowRightIcon width={16} height={16} />)}
      </button>
    </form>
  )
}