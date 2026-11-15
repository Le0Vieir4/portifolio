import { NextResponse } from "next/server";
import { Resend } from "resend";
import { portfolio } from "@/data/portfolio";
import { contactSchema } from "@/lib/contact-schema";

function invalidRequest(error: string, status = 400) {
  return NextResponse.json({ error }, { status });
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    const rawBody = await request.text();
    if (rawBody.length > 8_192) return invalidRequest("A mensagem é muito longa.", 413);
    body = JSON.parse(rawBody);
  } catch {
    return invalidRequest("Não foi possível ler sua mensagem. Revise os campos e tente novamente.");
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return invalidRequest(parsed.error.issues[0]?.message ?? "Preencha os campos do formulário e tente novamente.");
  }

  const { name, email, message, website } = parsed.data;
  if (website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_SENDER_MODE === "verified"
    ? process.env.RESEND_FROM_EMAIL
    : "Portfólio <onboarding@resend.dev>";
  const to = portfolio.contact.email;

  if (!apiKey || !from || !to) {
    return invalidRequest("O envio está indisponível no momento. Tente novamente mais tarde.", 503);
  }

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      // The resend.dev sender is limited to the email on this Resend account.
      // Reply-To directs responses to the visitor without spoofing their domain.
      from,
      to,
      replyTo: email,
      subject: `Contato pelo portfólio — ${name} (${email})`,
      text: `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`,
    });

    if (error || !data) {
      console.error("Falha no envio pelo Resend:", error?.name ?? "Resposta vazia");
      return invalidRequest("Não foi possível enviar a mensagem. Tente novamente mais tarde.", 502);
    }

    return NextResponse.json({ ok: true });
  } catch {
    console.error("Falha inesperada no envio pelo Resend.");
    return invalidRequest("Não foi possível enviar a mensagem. Tente novamente mais tarde.", 502);
  }
}
