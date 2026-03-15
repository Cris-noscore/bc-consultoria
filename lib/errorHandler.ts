/**
 * lib/errorHandler.ts
 * Tratamento centralizado de erros para o projeto BC Consultoria
 */

export type FormErrors = Record<string, string>;

/** Valida os campos do formulário de contato */
export function validateContactForm(data: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim() || data.name.trim().length < 3) {
    errors.name = "Nome deve ter pelo menos 3 caracteres.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim() || !emailRegex.test(data.email)) {
    errors.email = "Informe um e-mail válido.";
  }

  const phoneClean = data.phone.replace(/\D/g, "");
  if (!phoneClean || phoneClean.length < 10) {
    errors.phone = "Informe um telefone válido com DDD.";
  }

  if (!data.subject.trim()) {
    errors.subject = "Selecione um assunto.";
  }

  if (!data.message.trim() || data.message.trim().length < 10) {
    errors.message = "Mensagem deve ter pelo menos 10 caracteres.";
  }

  return errors;
}

/** Formata número de telefone enquanto o usuário digita */
export function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

/** Registra erros no console em desenvolvimento */
export function logError(context: string, error: unknown): void {
  if (process.env.NODE_ENV === "development") {
    console.error(`[BC Consultoria Error] ${context}:`, error);
  }
}
