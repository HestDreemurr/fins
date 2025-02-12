import { interFont } from "@/ui/fonts"

import "./globals.css"

export const metadata = {
  author: "Hest",
  title: "Fins",
  description: "Dashboard para gerenciamento de finanças.", 
  keywords: ["Dinheiro", "Dashboard", "Finanças", "Gerenciamento"]
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={interFont.className}>
        {children}
      </body>
    </html>
  )
}
