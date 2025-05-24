"use client"

import { 
  useState,
  useActionState
} from "react"
import Link from "next/link"
import clsx from "clsx"

import { 
  UserCircleIcon, 
  CurrencyDollarIcon, 
  ClockIcon, 
  CheckIcon
} from "@heroicons/react/24/outline"
import { createInvoiceAction } from "@/actions/create-invoice"
import { interFont } from "@/ui/fonts"


export default function CreateInvoiceForm({ customers, styles, defaultInvoice, defaultAction }) {
  const [result, formAction, isPending] = useActionState(defaultAction ?? createInvoiceAction, {})
  
  const [formData, setFormData] = useState({
    customer: defaultInvoice?.customerid ?? "",
    amount: defaultInvoice?.amount ?? "",
    status: defaultInvoice?.status ?? ""
  })
  
  console.log(formData)
  
  return (
    <form action={formAction}>
      <div>
        <label htmlFor="customer">
          Selecione um Cliente
        </label>
        <span>
          <UserCircleIcon width={18} height={18} />
        </span>
        <select
          id="customer"
          name="customer"
          className={interFont.className}
          value={formData.customer}
          onChange={(e) => setFormData({ ...formData, customer: e.target.value })}
        >
          {customers.map(customer => (
            <option key={customer.id} value={customer.id}>
              {customer.name}
            </option>
          ))}
        </select>
      </div>
      
      <div>
        <label htmlFor="amount">
          Valor da dívida
        </label>
        <span>
          <CurrencyDollarIcon width={18} height={18} />
        </span>
        <input
        type="number"
        id="amount"
        name="amount"
        placeholder="Insira o valor da dívida..."
        className={clsx(interFont.className, result?.errors?.amount ? styles.invalid : "")}
        value={formData.amount}
        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        />
        {result?.errors?.amount && <p>{result.errors.amount[0]}</p>}
      </div>
      
      <div className={styles.statusDiv}>
        <label htmlFor="status">Estado da dívida</label>
        <div className={clsx(styles.status, result?.errors?.status ? styles.invalid : "")}>
          <div>
            <input 
            type="radio"
            name="status"
            id="pending"
            value="pending"
            checked={formData.status === "pending"}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            />
            <label htmlFor="pending">
              Pendente <ClockIcon width={16} height={16} />
            </label>
          </div>
          
          <div>
            <input
            type="radio"
            name="status"
            id="paid"
            value="paid"
            checked={formData.status === "paid"}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            />
            <label htmlFor="paid">
              Pago <CheckIcon width={16} height={16} />
            </label>
          </div>
        </div>
        {result?.errors?.status && <p>{result.errors.status[0]}</p>}
      </div>
      
      <div className={styles.buttons}>
        <button type="submit" className={interFont.className}>
          {isPending ? <p className={styles.loading}></p> : "Criar"}
        </button>
        <Link href="/dashboard/invoices">Cancelar</Link>
      </div>
    </form>
  )
}