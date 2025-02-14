import { UserIcon, AtSymbolIcon, KeyIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import { interFont } from "@/ui/fonts"

export default function SigninForm() {
  return (
    <form action="">
      <div>
        <label htmlFor="name">Nome</label>
        <span>
          <UserIcon width={18} height={18} />
        </span>
        <input
        type="text"
        name="name"
        id="name"
        placeholder="Insira seu nome..."
        className={interFont.className}
        />
      </div>
      
      <div>
        <label htmlFor="email">Email</label>
        <span>
          <AtSymbolIcon width={18} height={18} />
        </span>
        <input 
        type="text"
        name="email"
        id="email"
        placeholder="Insira seu email..."
        className={interFont.className}
        />
      </div>
      
      <div>
        <label htmlFor="password">Crie uma Senha</label>
        <span>
          <KeyIcon width={18} height={18} />
        </span>
        <input
        type="password"
        name="password"
        id="password"
        placeholder="Crie uma Senha Forte..."
        autoComplete="new-password"
        className={interFont.className}
        />
      </div>
      
      <button type="submit" className={interFont.className}>
        Criar <ArrowRightIcon width={16} height={16} />
      </button>
    </form>
  )
}