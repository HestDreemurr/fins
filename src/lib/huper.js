import "dotenv/config"

const apiUrl = process.env.HUPER_URL

export async function uploadCustomerAvatar(avatar) {
  if (avatar.name === "undefined") return `${apiUrl}/image/get/user-default-avatar.jpg`
  
  const formData = new FormData()
  formData.append("image", avatar)
  
  const response = await fetch(`${apiUrl}/image/upload`, {
    method: "POST",
    body: formData
  })
  const { imageCode } = await response.json()
  
  return `${apiUrl}/image/get/${imageCode}`
}