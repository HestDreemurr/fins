"use client"

import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline"

import { signOut } from "@/actions/signout"

export default function SignOutButton() {
  return (
    <button onClick={signOut}>
      <ArrowLeftStartOnRectangleIcon width={24} height={24} />
      <span>Sair</span>
    </button>
  )
}