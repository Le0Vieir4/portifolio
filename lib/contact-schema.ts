import { z } from "zod";

export const contactSchema = z.object({
  name: z.string({ error: "Informe seu nome." })
    .trim()
    .min(2, { error: "Informe um nome com pelo menos 2 caracteres." })
    .max(80, { error: "O nome deve ter no máximo 80 caracteres." })
    .refine((value) => !/[\r\n]/.test(value), { error: "O nome não pode conter quebras de linha." }),
  email: z.string({ error: "Informe seu e-mail." })
    .trim()
    .max(254, { error: "O e-mail deve ter no máximo 254 caracteres." })
    .pipe(z.email({ error: "Informe um endereço de e-mail válido." })),
  message: z.string({ error: "Escreva sua mensagem." })
    .trim()
    .min(10, { error: "A mensagem deve ter pelo menos 10 caracteres." })
    .max(3_000, { error: "A mensagem deve ter no máximo 3.000 caracteres." }),
  website: z.string().optional().default(""),
});
