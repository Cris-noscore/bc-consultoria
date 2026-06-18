"use client";

/**
 * components/WhatsAppButton.tsx
 * Botão de WhatsApp melhorado com:
 * - Variante flutuante: menu simplificado + campo de mensagem personalizada
 * - Variante inline: clique direto com mensagem pré-definida
 * - Acessibilidade: aria-labels, foco visível
 */

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, DollarSign, ShieldCheck, Briefcase, Phone, X, Send } from "lucide-react";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGES } from "@/lib/constants";

export type MessageType = "financeiro" | "regulatorio" | "regularizacao" | "consultor" | "default";

interface WhatsAppButtonProps {
  variant?: "floating" | "inline";
  messageType?: MessageType;
  className?: string;
  showLabel?: boolean;
}

const config: Record<MessageType, { label: string; icon: React.ElementType; color: string }> = {
  financeiro:     { label: "Financeiro",     icon: DollarSign,   color: "bg-green-600 hover:bg-green-700" },
  regulatorio:    { label: "Regulatório",    icon: ShieldCheck,  color: "bg-purple-600 hover:bg-purple-700" },
  regularizacao:  { label: "Regularização",  icon: Briefcase,    color: "bg-red-600 hover:bg-red-700" },
  consultor:      { label: "Consultor",      icon: Phone,        color: "bg-blue-600 hover:bg-blue-700" },
  default:        { label: "WhatsApp",       icon: MessageCircle, color: "bg-green-500 hover:bg-green-600" },
};

/** Abre o WhatsApp com mensagem pré-definida + complemento opcional do usuário */
function openWhatsApp(type: MessageType, extra?: string) {
  const base = WHATSAPP_MESSAGES[type] ?? WHATSAPP_MESSAGES.default;
  const full = extra?.trim() ? `${base}\n\n${extra.trim()}` : base;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(full )}`, "_blank");
}

// ─── VARIANTE FLUTUANTE ────────────────────────────────────────────────────────
function FloatingButton() {
  const [open, setOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<MessageType | null>(null);
  const [customMsg, setCustomMsg] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Fechar ao clicar fora
  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSelectedType(null);
        setCustomMsg("");
      }
    }
    if (open) document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  // Focar textarea ao selecionar tipo
  useEffect(() => {
    if (selectedType && textareaRef.current) {
      setTimeout(() => textareaRef.current?.focus(), 100);
    }
  }, [selectedType]);

  const handleSend = () => {
    if (!selectedType) return;
    openWhatsApp(selectedType, customMsg);
    setOpen(false);
    setSelectedType(null);
    setCustomMsg("");
  };

  return (
    <div ref={panelRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 overflow-hidden"
            role="dialog"
            aria-label="Contato via WhatsApp"
          >
            {/* Cabeçalho */}
            <div className="bg-green-600 text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageCircle size={20} aria-hidden="true" />
                <span className="font-bold text-sm">Fale Conosco</span>
              </div>
              <button
                onClick={() => { setOpen(false); setSelectedType(null); setCustomMsg(""); }}
                aria-label="Fechar menu de contato"
                className="p-1 rounded hover:bg-green-700 transition-colors focus-visible:outline-2 focus-visible:outline-white"
              >
                <X size={16} aria-hidden="true" />
              </button>
            </div>

            <div className="p-4">
              {!selectedType ? (
                <>
                  <p className="text-sm text-gray-600 mb-3 font-medium">Como podemos ajudar?</p>
                  <div className="space-y-2">
                    {(["financeiro", "regulatorio", "regularizacao", "consultor"] as MessageType[]).map((type) => {
                      const { label, icon: Icon, color } = config[type];
                      return (
                        <button
                          key={type}
                          onClick={() => setSelectedType(type)}
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ${color}`}
                        >
                          <Icon size={18} aria-hidden="true" />
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setSelectedType(null)}
                    className="text-xs text-gray-500 hover:text-red-900 mb-3 flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-red-900 rounded"
                    aria-label="Voltar para seleção de setor"
                  >
                    ← Voltar
                  </button>
                  <p className="text-sm font-semibold text-gray-800 mb-1">
                    {config[selectedType].label}
                  </p>
                  <p className="text-xs text-gray-500 mb-3">
                    Adicione uma mensagem personalizada (opcional):
                  </p>
                  <textarea
                    ref={textareaRef}
                    value={customMsg}
                    onChange={(e) => setCustomMsg(e.target.value)}
                    placeholder="Ex: Preciso de crédito para capital de giro..."
                    rows={3}
                    aria-label="Mensagem personalizada"
                    className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <button
                    onClick={handleSend}
                    className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  >
                    <Send size={16} aria-hidden="true" />
                    Enviar via WhatsApp
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão principal flutuante */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fechar contato WhatsApp" : "Abrir contato WhatsApp"}
        aria-expanded={open}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
      >
        {open ? <X size={28} aria-hidden="true" /> : <MessageCircle size={28} aria-hidden="true" />}
      </motion.button>
    </div>
  );
}

// ─── VARIANTE INLINE ───────────────────────────────────────────────────────────
function InlineButton({ messageType = "default", className = "", showLabel = true }: WhatsAppButtonProps) {
  const { label, icon: Icon } = config[messageType];
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => openWhatsApp(messageType)}
      aria-label={`Contato via WhatsApp - ${label}`}
      className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${className || 'bg-green-500 hover:bg-green-600 text-white focus-visible:outline-green-500'}`}
    >
      <Icon size={18} aria-hidden="true" />
      {showLabel && <span>{label}</span>}
    </motion.button>
  );
}

// ─── EXPORT PRINCIPAL ──────────────────────────────────────────────────────────
export default function WhatsAppButton({
  variant = "inline",
  messageType = "default",
  className = "",
  showLabel = true,
}: WhatsAppButtonProps) {
  if (variant === "floating") return <FloatingButton />;
  return <InlineButton messageType={messageType} className={className} showLabel={showLabel} />;
}