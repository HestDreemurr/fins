"use client"

import Link from "next/link"
import {
  PencilIcon,
  TrashIcon
} from "@heroicons/react/24/outline"
import { deleteInvoiceAction } from "@/actions/delete-invoice"

export function EditInvoiceButton({ invoiceId }) {
  return (
    <Link
      href={`/dashboard/invoices/${invoiceId}/edit`}
    >
      <PencilIcon width={20} height={20} />
    </Link>
  )
}

export function DeleteInvoiceButton({ invoiceId }) {
  const handleClick = deleteInvoiceAction.bind(undefined, invoiceId)
  
  return (
    <button onClick={() => handleClick()}>
      <TrashIcon width={20} height={20} />
    </button>
  )
}