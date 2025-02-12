import { Inter, Lusitana } from "next/font/google"

const interFont = Inter({
  subsets: ["latin"]
})

const lusitanaFont = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"]
})

export { interFont, lusitanaFont }