"use client"

import { useActionState } from "react"
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
          defaultValue={defaultInvoice?.customerid}
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
        defaultValue={defaultInvoice?.amount ?? ""}
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
            defaultChecked={defaultInvoice?.status === "pending"}
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
            defaultChecked={defaultInvoice?.status === "paid"}
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