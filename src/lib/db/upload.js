import "dotenv/config"

const apiUrl = process.env.HUPER_URL

export async function uploadCustomerAvatar(avatar) {
  if (avatar.name === "undefined") return "/user-default-avatar.jpg"
  
  const formData = new FormData()
  formData.append("avatar", avatar)
  
  const response = await fetch(`${apiUrl}/upload`, {
    method: "POST",
    body: formData
  })
  const { publicUrl } = await response.json()
  
  return publicUrl
}