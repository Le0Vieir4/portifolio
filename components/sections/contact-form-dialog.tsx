"use client";

import { useRef, useState, type SyntheticEvent } from "react";
import { ArrowUpRight, Check, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { contactSchema } from "@/lib/contact-schema";

type SubmissionState = "idle" | "sending" | "success" | "error";
type ContactField = "name" | "email" | "message";
type FieldErrors = Partial<Record<ContactField, string>>;

export function ContactFormDialog({ fallbackEmail }: { fallbackEmail: string }) {
  const [open, setOpen] = useState(false);
  const [submission, setSubmission] = useState<SubmissionState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const requestId = useRef(0);

  function handleOpenChange(nextOpen: boolean) {
    if (!nextOpen) {
      requestId.current += 1;
      setSubmission("idle");
      setErrorMessage("");
      setFieldErrors({});
      formRef.current?.reset();
    }
    setOpen(nextOpen);
  }

  function clearFieldError(field: ContactField) {
    setFieldErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submission === "sending") return;

    const form = event.currentTarget;
    const fields = new FormData(form);
    const parsed = contactSchema.safeParse({
      name: fields.get("name"),
      email: fields.get("email"),
      message: fields.get("message"),
      website: fields.get("website") ?? "",
    });

    if (!parsed.success) {
      const errors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0];
        if ((field === "name" || field === "email" || field === "message") && !errors[field]) {
          errors[field] = issue.message;
        }
      }
      setFieldErrors(errors);
      setSubmission("idle");
      setErrorMessage("");
      const firstField = (["name", "email", "message"] as const).find((field) => errors[field]);
      if (firstField) form.querySelector<HTMLInputElement | HTMLTextAreaElement>(`[name="${firstField}"]`)?.focus();
      return;
    }

    const currentRequest = ++requestId.current;
    setFieldErrors({});
    setSubmission("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const result: unknown = await response.json().catch(() => null);
      if (!response.ok) {
        const message = result && typeof result === "object" && "error" in result && typeof result.error === "string"
          ? result.error
          : "Não foi possível enviar a mensagem. Tente novamente.";
        throw new Error(message);
      }

      if (requestId.current !== currentRequest) return;
      form.reset();
      setSubmission("success");
    } catch (error) {
      if (requestId.current !== currentRequest) return;
      setErrorMessage(error instanceof Error ? error.message : "Não foi possível enviar a mensagem. Tente novamente.");
      setSubmission("error");
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button type="button">Enviar e-mail <ArrowUpRight aria-hidden="true" /></Button>
      </DialogTrigger>
      <DialogContent>
        <div className="contact-dialog-heading">
          <DialogTitle>Envie uma mensagem.</DialogTitle>
          <DialogDescription>Escreva para Leo diretamente pelo formulário. Informe seu e-mail para receber uma resposta.</DialogDescription>
        </div>

        {submission === "success" ? (
          <div className="contact-success" role="status">
            <Check aria-hidden="true" />
            <p>Mensagem enviada com sucesso. Obrigado pelo contato!</p>
            <Button type="button" variant="outline" onClick={() => handleOpenChange(false)}>Fechar</Button>
          </div>
        ) : (
          <form className="contact-form" ref={formRef} onSubmit={handleSubmit} noValidate>
            <div className="contact-field">
              <label htmlFor="contact-name">Nome</label>
              <input id="contact-name" name="name" type="text" autoComplete="name" maxLength={80} required placeholder="Seu nome" aria-invalid={Boolean(fieldErrors.name)} aria-describedby={fieldErrors.name ? "contact-name-error" : undefined} onChange={() => clearFieldError("name")} />
              {fieldErrors.name && <p className="contact-field-error" id="contact-name-error">{fieldErrors.name}</p>}
            </div>
            <div className="contact-field">
              <label htmlFor="contact-email">E-mail</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} required placeholder="voce@exemplo.com" aria-invalid={Boolean(fieldErrors.email)} aria-describedby={fieldErrors.email ? "contact-email-error" : undefined} onChange={() => clearFieldError("email")} />
              {fieldErrors.email && <p className="contact-field-error" id="contact-email-error">{fieldErrors.email}</p>}
            </div>
            <div className="contact-field">
              <label htmlFor="contact-message">Mensagem</label>
              <textarea id="contact-message" name="message" maxLength={3000} required placeholder="Conte um pouco sobre o que você gostaria de conversar." aria-invalid={Boolean(fieldErrors.message)} aria-describedby={fieldErrors.message ? "contact-message-error" : undefined} onChange={() => clearFieldError("message")} />
              {fieldErrors.message && <p className="contact-field-error" id="contact-message-error">{fieldErrors.message}</p>}
            </div>
            <div className="contact-honeypot" aria-hidden="true">
              <label htmlFor="contact-website">Site</label>
              <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            {submission === "error" && (
              <div className="contact-error" role="alert">
                <p>{errorMessage}</p>
                <a href={`mailto:${fallbackEmail}`}>Abrir aplicativo de e-mail</a>
              </div>
            )}
            <Button type="submit" className="contact-submit" disabled={submission === "sending"}>
              {submission === "sending" ? <>Enviando... <LoaderCircle className="contact-spinner" aria-hidden="true" /></> : <>Enviar mensagem <ArrowUpRight aria-hidden="true" /></>}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
