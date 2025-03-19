"use server"

import { uploadImage } from "@/lib/axios"

export async function createCustomer(prevState, formData) {
  const { imageCode } = await uploadImage(formData.get("avatar"))
  return imageCode
}