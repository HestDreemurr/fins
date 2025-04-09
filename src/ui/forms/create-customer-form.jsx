"use client"

import { useState, useActionState } from "react"
import Link from "next/link"
import Image from "next/image"
import { UserIcon, AtSymbolIcon, ArrowUpTrayIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"

import { interFont } from "@/ui/fonts"
import { readImage } from "@/lib/reader"
import { createCustomerAction } from "@/actions/create-customer"

export default function CreateCustomerForm({ styles }) {
  const [result, formAction, isPending] = useActionState(createCustomerAction, {})
  
  const [formData, setFormData] = useState({
    avatar: null,
    name: "",
    email: ""
  })
  
  async function handleImageChange(e) {
    const avatar = await readImage(e.target.files[0])
    setFormData({ ...formData, avatar })
  }
  
  return (
    <form action={formAction}>
      <div className={styles.avatarInput}>
        <label htmlFor="avatar">Foto do Cliente</label>
        
        <Image 
        src={formData.avatar ?? "/user-default-avatar.jpg"}
        alt={formData.name ?? "Cliente"} width={50} height={50} 
        />
        
        <input
        type="file"
        id="avatar"
        name="avatar"
        accept="image/*"
        onChange={handleImageChange}
        />
        
        <label htmlFor="avatar" className={styles.avatarButton}>
          <ArrowUpTrayIcon width={22} height={22} />
        </label>
      </div>
      
      <div>
        <label htmlFor="name">Nome do Cliente</label>
        <span>
          <UserIcon width={18} height={18} />
        </span>
        <input
        type="text"
        id="name"
        name="name"
        placeholder="Insira o nome do cliente..."
        className={clsx(interFont.className, result?.errors?.name ? styles.invalid : "")}
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {result?.errors?.name && <p>{result.errors.name[0]}</p>}
      </div>
      
      <div>
        <label htmlFor="email">Email do Cliente</label>
        <span>
          <AtSymbolIcon width={18} height={18} />
        </span>
        <input
        type="text"
        id="email"
        name="email"
        placeholder="Insira o email do cliente..."
        className={clsx(interFont.className, result?.errors?.email ? styles.invalid : "")}
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {result?.errors?.email && <p>{result.errors.email[0]}</p>}
      </div>
      
      <div className={styles.buttons}>
        <button type="submit" className={interFont.className}>
          {isPending ? <span className={styles.loading}></span> : "Criar"}
        </button>
        <Link href="/dashboard/customers">Cancelar</Link>
      </div>
    </form>
  )
}