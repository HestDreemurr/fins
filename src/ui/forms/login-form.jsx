import { AtSymbolIcon, KeyIcon, ArrowRightIcon } from "@heroicons/react/24/outline"

export default function LoginForm() {
  return (
    <form action="">
      <div>
        <label htmlFor="email">Email</label>
        <span>
          <AtSymbolIcon width={18} height={18} className="icon" />
        </span>
        <input type="text"
        id="email" name="email" placeholder="Insira seu endereço de Email..." />
      </div>
      
      <div>
        <label htmlFor="password">Senha</label>
        <span>
          <KeyIcon width={18} height={18} className="icon" />
        </span>
        <input type="password" id="password" name="password" placeholder="Insira sua Senha..." autoComplete="current-password"/>
      </div>
      
      <button type="submit">
        Entrar <ArrowRightIcon width={16} height={16} />
      </button>
    </form>
  )
}