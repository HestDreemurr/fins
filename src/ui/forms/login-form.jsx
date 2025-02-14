import { AtSymbolIcon, KeyIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import PasswordInput from "./password-input.jsx"
import { interFont } from "@/ui/fonts"

export default function LoginForm() {
  return (
    <form action="">
      <div>
        <label htmlFor="email">Email</label>
        <span>
          <AtSymbolIcon width={18} height={18} />
        </span>
        <input type="text"
        id="email" name="email" placeholder="Insira seu endereço de Email..." className={interFont.className} />
      </div>
      
      <div>
        <label htmlFor="password">Senha</label>
        <span>
          <KeyIcon width={18} height={18} />
        </span>
        <PasswordInput placeholder="Insira sua Senha..." autoComplete="current-password" />
      </div>
      
      <button type="submit" className={interFont.className}>
        Entrar <ArrowRightIcon width={16} height={16} />
      </button>
    </form>
  )
}