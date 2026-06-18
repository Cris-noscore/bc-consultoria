"use client";

/**
 * components/ContactForm.tsx
 * Formulário de contato alternativo com validação completa,
 * feedback visual e acessibilidade (WCAG 2.1 AA).
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { validateContactForm, formatPhone, type FormErrors } from "@/lib/errorHandler";
import { EMAIL_CONTACT } from "@/lib/constants";

const SUBJECTS = [
  "Intermediação Financeira",
  "Intermediação de Ativos e Investimentos",
  "Regularização e Compliance",
  "Atendimento com Consultor",
  "Outro assunto",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    const newValue = name === "phone" ? formatPhone(value) : value;
    setForm((prev) => ({ ...prev, [name]: newValue }));
    if (errors[name]) setErrors((prev) => { const n = { ...prev }; delete n[name]; return n; });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validateContactForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstError = Object.keys(validationErrors)[0];
      document.getElementById(`field-${firstError}`)?.focus();
      return;
    }

    setStatus("loading");
    try {
      const subject = encodeURIComponent(`[BC Consultoria] ${form.subject}`);
      const body = encodeURIComponent(
        `Nome: ${form.name}\nEmail: ${form.email}\nTelefone: ${form.phone}\n\nMensagem:\n${form.message}`
      );
      window.location.href = `mailto:${EMAIL_CONTACT}?subject=${subject}&body=${body}`;
      setStatus("success");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
        role="alert"
        aria-live="polite"
      >
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" aria-hidden="true" />
        <h3 className="text-xl font-bold text-green-800 mb-2">Mensagem Enviada!</h3>
        <p className="text-green-700 mb-4">
          Seu cliente de e-mail foi aberto com a mensagem preenchida. Envie para{" "}
          <strong>{EMAIL_CONTACT}</strong>.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-green-700 underline hover:text-green-900 focus-visible:outline-2 focus-visible:outline-green-700 rounded"
        >
          Enviar outra mensagem
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Formulário de contato"
      className="space-y-5"
    >
      {status === "error" && (
        <div
          role="alert"
          aria-live="assertive"
          className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3 text-red-700"
        >
          <AlertCircle size={20} aria-hidden="true" />
          <span className="text-sm">Ocorreu um erro. Tente novamente ou entre em contato pelo WhatsApp.</span>
        </div>
      )}

      <Field id="field-name" label="Nome completo" required error={errors.name}>
        <input
          id="field-name"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Seu nome completo"
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "error-name" : undefined}
          className={inputClass(!!errors.name)}
        />
      </Field>

      <Field id="field-email" label="E-mail" required error={errors.email}>
        <input
          id="field-email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          placeholder="seu@email.com"
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "error-email" : undefined}
          className={inputClass(!!errors.email)}
        />
      </Field>

      <Field id="field-phone" label="Telefone / WhatsApp" required error={errors.phone}>
        <input
          id="field-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="(11) 91234-5678"
          aria-required="true"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "error-phone" : undefined}
          className={inputClass(!!errors.phone)}
        />
      </Field>

      <Field id="field-subject" label="Assunto" required error={errors.subject}>
        <select
          id="field-subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "error-subject" : undefined}
          className={inputClass(!!errors.subject)}
        >
          <option value="">Selecione o assunto</option>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </Field>

      <Field id="field-message" label="Mensagem" required error={errors.message}>
        <textarea
          id="field-message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Descreva sua necessidade..."
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "error-message" : undefined}
          className={`${inputClass(!!errors.message)} resize-none`}
        />
      </Field>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 bg-red-900 hover:bg-red-800 disabled:bg-gray-400 text-white font-bold py-4 rounded-xl transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900"
        aria-busy={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            Enviando...
          </>
        ) : (
          <>
            <Send size={18} aria-hidden="true" />
            Enviar Mensagem
          </>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Ao enviar, seu cliente de e-mail será aberto com a mensagem preenchida.
      </p>
    </form>
  );
}

function inputClass(hasError: boolean) {
  return `w-full px-4 py-3 rounded-xl border text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent ${
    hasError
      ? "border-red-500 bg-red-50 focus:ring-red-500"
      : "border-gray-300 bg-white hover:border-gray-400"
  }`;
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  const errorId = `error-${id.replace("field-", "")}`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-600 ml-1" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p id={errorId} role="alert" className="mt-1 text-xs text-red-600 flex items-center gap-1">
          <AlertCircle size={12} aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}
