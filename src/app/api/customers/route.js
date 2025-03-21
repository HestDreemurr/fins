import { NextResponse } from "next/server"

import { decryptSession } from "@/lib/session"
import { getCustomers } from "@/db/customers"

export async function GET(request) {
  const user = await decryptSession()
  
  const userCustomers = await getCustomers(user.id)
  
  return NextResponse.json(userCustomers)
}