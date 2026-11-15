# Portfólio

Portfólio responsivo de Leonardo Vieira Moreira, construído com Next.js App Router, TypeScript, Tailwind CSS e componentes locais no padrão shadcn-ui. A direção visual está em `DESIGN.md`; as decisões de produto confirmadas estão em `PRODUCT.md`.

## Executar

```bash
pnpm install
pnpm dev
```

## Atualizar o conteúdo

`docs/portifolio-content.md` é a fonte de verdade do conteúdo. `data/portfolio.ts` é sua representação tipada para renderização; mantenha os dois sincronizados. Os tipos estão em `types/portfolio.ts`.

- Weather.io é o projeto principal, seguido de Rocket Notes, 3D Model e Azure ML. Os diagramas no site descrevem arquitetura, rotas ou ferramentas documentadas; não são capturas de tela dos projetos.
- Adicione imagens reais em `public/images/` e URLs de demonstração a `projects` somente após verificá-las.
- A seção de experiência aparece somente quando houver entradas confirmadas em `experience`. Não há histórico profissional fornecido atualmente.
- O e-mail e GitHub são os contatos públicos. O telefone fornecido no documento permanece fora do site até confirmação explícita para publicação.
- Defina `resumePath` somente quando houver um arquivo de currículo em `public/`. Informe `siteUrl` para gerar a URL canônica.

A fotografia da abertura está em `public/images/zen-architecture.jpg`.

## Formulário de contato

O botão **Enviar e-mail** abre um formulário validado com o mesmo esquema Zod no navegador e na rota `/api/contact`, que envia a mensagem usando Resend. Para testar sem domínio próprio, configure `.env` ou `.env.local` na raiz do projeto com a chave da sua conta:

```dotenv
RESEND_API_KEY=sua_chave_da_resend
```

Nesse modo, o endereço **De (`From`)** é `Portfólio <onboarding@resend.dev>`. A Resend só permite que ele envie para o e-mail da própria conta: `contact.email` em `data/portfolio.ts` deve ser o mesmo endereço usado no login da Resend. O e-mail preenchido pelo visitante aparece no assunto e no corpo da mensagem e é definido como **Responder para (`Reply-To`)**, para que a resposta vá diretamente a ele. O modo `resend.dev` é apenas para testes; o plano gratuito permite usar um domínio próprio verificado quando você quiser enviar sem essa restrição.

Se futuramente verificar um domínio, defina também `RESEND_SENDER_MODE=verified` e `RESEND_FROM_EMAIL="Portfólio <contato@seu-dominio-verificado.com>"`. Uma variável `RESEND_FROM_EMAIL` isolada é ignorada no modo de teste. Reinicie o servidor depois de alterar as variáveis. A chave nunca é enviada ao navegador. Sem a chave, o formulário informa que o envio está indisponível e oferece a opção de abrir o aplicativo de e-mail.

## Verificar

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```
