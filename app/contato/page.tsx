"use client";

/**
 * app/contato/page.tsx
 * Página de contato melhorada com formulário alternativo,
 * botões WhatsApp por setor, mapa e Schema.org ContactPage.
 */

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import SchemaOrgDynamic from "@/components/SchemaOrgDynamic";
import { getContactSchema } from "@/lib/seoSchemas";
import { PHONE_DISPLAY, EMAIL_CONTACT } from "@/lib/constants";

const whatsappButtons = [
  {
    title: "Financeiro",
    desc: "Crédito, capital de giro e investimentos",
    type: "financeiro" as const,
    color: "bg-green-600 hover:bg-green-700",
  },
  {
    title: "Regulatório",
    desc: "Licenças e compliance",
    type: "regulatorio" as const,
    color: "bg-purple-600 hover:bg-purple-700",
  },
  {
    title: "Regularização",
    desc: "AVCB e licenças ambientais",
    type: "regularizacao" as const,
    color: "bg-red-600 hover:bg-red-700",
  },
  {
    title: "Consultor",
    desc: "Atendimento especializado",
    type: "consultor" as const,
    color: "bg-blue-600 hover:bg-blue-700",
  },
];

export default function ContatoPage() {
  return (
    <>
      <SchemaOrgDynamic schema={getContactSchema() as Record<string, unknown>} />

      {/* HERO */}
      <div className="relative h-[300px] w-full overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Escritório BC Consultoria em Alphaville, Barueri"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-black/60 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Fale Conosco</h1>
            <p className="text-lg text-gray-200">
              Escolha a melhor forma de entrar em contato
            </p>
          </motion.div>
        </div>
      </div>

      {/* CONTEÚDO */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* ESQUERDA: Informações + WhatsApp */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-red-900 mb-8">
                Informações de Contato
              </h2>

              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 p-2 rounded-full flex-shrink-0">
                    <Mail className="w-5 h-5 text-red-900" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">E-mail</h3>
                    <a
                      href={`mailto:${EMAIL_CONTACT}`}
                      className="text-gray-600 hover:text-red-900 underline transition-colors focus-visible:outline-2 focus-visible:outline-red-900 rounded"
                    >
                      {EMAIL_CONTACT}
                    </a>
                    <p className="text-xs text-gray-500 mt-0.5">Clique para enviar um e-mail</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-red-100 p-2 rounded-full flex-shrink-0">
                    <Phone className="w-5 h-5 text-red-900" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">WhatsApp / Telefone</h3>
                    <p className="text-gray-600">{PHONE_DISPLAY}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-red-100 p-2 rounded-full flex-shrink-0">
                    <MapPin className="w-5 h-5 text-red-900" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Endereço</h3>
                    <p className="text-gray-600">
                      Alameda Mamoré, 503 - Conj. 64, 6º Andar<br />
                      Edifício Icon - Alphaville, Barueri/SP
                    </p>
                  </div>
                </div>
              </div>

              {/* Botões WhatsApp */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-4 text-gray-800">
                  Atendimento via WhatsApp
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {whatsappButtons.map((btn, i) => (
                    <motion.div
                      key={btn.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h4 className="font-semibold text-gray-800 mb-1">{btn.title}</h4>
                      <p className="text-xs text-gray-500 mb-3">{btn.desc}</p>
                      <WhatsAppButton
                        variant="inline"
                        messageType={btn.type}
                        className={`w-full ${btn.color} text-white py-2`}
                        showLabel
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* DIREITA: Formulário + Mapa */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Formulário */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Envie uma Mensagem
                </h3>
                <p className="text-sm text-gray-500 mb-6">
                  Prefere não usar WhatsApp? Preencha o formulário abaixo.
                </p>
                <ContactForm />
              </div>

              {/* Mapa */}
              <div className="bg-gray-50 rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Localização</h3>
                <iframe
                  title="Mapa BC Consultoria - Alameda Mamoré 503, Alphaville, Barueri SP"
                  className="w-full h-56 rounded-xl mb-4"
                  src="https://www.google.com/maps?q=Alameda+Mamoré+503+Alphaville+Barueri+SP&output=embed"
                  loading="lazy"
                  aria-label="Mapa de localização da BC Consultoria"
                />
                <a
                  href="https://maps.google.com/?q=Alameda+Mamoré+503+Alphaville+Barueri+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center border border-red-900 text-red-900 hover:bg-red-50 py-3 rounded-xl font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-red-900 focus-visible:outline-offset-2"
                >
                  Ver rotas no Google Maps
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
