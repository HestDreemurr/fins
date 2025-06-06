import z from "zod"

export const signinSchema = z.object({
  name: z.string()
    .min(1, { message: "O Nome é obrigatório" })
    .min(5, { message: "O nome precisa ter pelo menos 5 caracteres" })
    .max(30, { message: "O nome não pode ser maior que 30 caracteres" })
    .trim(),
  email: z.string()
    .min(1, { message: "O E-mail é obrigatório" })
    .email({ message: "E-mail inválido" })
    .trim(),
  password: z.string()
    .min(1, { message: "A Senha é obrigatória" })
    .min(8, { message: "A Senha precisa ter 8 caracteres ou mais" })
    .regex(/[a-z]/, { message: "A Senha precisa ter ao menos uma letra minúscula" })
    .regex(/[1-9]/, { message: "A Senha precisa ter ao menos um número" })
    .regex(/[A-Z]/, { message: "A Senha precisa ter ao menos uma letra maiuscula" })
    .trim()
})

export const loginSchema = z.object({
  email: z.string()
    .min(1, { message: "O Email é obrigatório" })
    .trim(),
  password: z.string()
    .min(1, { message: "A Senha é obrigatória" })
    .trim()
})

export const customerSchema = z.object({
  name: z.string()
    .min(1, { message: "O nome é obrigatório" })
    .min(3, { message: "O nome deve ter pelo menos 3 caracteres"  })
    .max(30, { message: "O nome não pode ser maior que 30 caracteres" })
    .trim(),
  email: z.string()
    .min(1, { message: "O E-mail é obrigatório" })
    .email({ message: "E-mail inválido" })
    .trim()
})

export const invoiceSchema = z.object({
  customer: z.string()
    .uuid(),
  amount: z.coerce.number({ message: "O valor é obrigatório" })
    .min(1, { message: "O valor é obrigatório." }),
  status: z.string()
    .min(1, { message: "O estado é obrigatório." })
})